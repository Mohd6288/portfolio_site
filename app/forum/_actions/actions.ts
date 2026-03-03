"use server";

import { redirect } from "next/navigation";
import { store } from "../_lib/store";
import { getSession, setSession } from "../_lib/auth";

// ── Auth actions ──────────────────────

export async function loginAction(formData: FormData) {
  const username = (formData.get("username") as string)?.trim();
  const password = formData.get("password") as string;

  if (!username || !password) {
    return redirect("/forum/login?error=Please fill in all fields");
  }

  const user = store.authenticate(username, password);
  if (!user) {
    return redirect("/forum/login?error=Invalid username or password");
  }

  await setSession(user.id);
  redirect("/forum");
}

export async function registerAction(formData: FormData) {
  const username = (formData.get("username") as string)?.trim();
  const email    = (formData.get("email") as string)?.trim();
  const password = formData.get("password") as string;

  if (!username || !email || !password) {
    return redirect("/forum/register?error=Please fill in all fields");
  }

  if (username.length < 3) {
    return redirect("/forum/register?error=Username must be at least 3 characters");
  }

  if (store.getUserByUsername(username)) {
    return redirect("/forum/register?error=Username already taken");
  }

  const user = store.addUser(username, email, password);
  await setSession(user.id);
  redirect("/forum");
}

// ── Post actions ──────────────────────

export async function createPostAction(formData: FormData) {
  const user = await getSession();
  if (!user) return redirect("/forum/login");

  const title   = (formData.get("title") as string)?.trim();
  const content = (formData.get("content") as string)?.trim();
  const topicId = parseInt(formData.get("topicId") as string, 10);

  if (!title || !content || !topicId) {
    return redirect(`/forum/topics/${topicId}?error=Please fill in all fields`);
  }

  const post = store.addPost(title, content, user.id, topicId);
  redirect(`/forum/posts/${post.id}`);
}

// ── Reply actions ─────────────────────

export async function createReplyAction(formData: FormData) {
  const user = await getSession();
  if (!user) return redirect("/forum/login");

  const content = (formData.get("content") as string)?.trim();
  const postId  = parseInt(formData.get("postId") as string, 10);

  if (!content) {
    return redirect(`/forum/posts/${postId}?error=Reply cannot be empty`);
  }

  store.addReply(content, postId, user.id);
  redirect(`/forum/posts/${postId}`);
}

// ── Like actions ──────────────────────

export async function likePostAction(formData: FormData) {
  const user = await getSession();
  if (!user) return redirect("/forum/login");

  const postId = parseInt(formData.get("postId") as string, 10);
  store.toggleLikePost(postId, user.id);

  const returnUrl = formData.get("returnUrl") as string;
  redirect(returnUrl || `/forum/posts/${postId}`);
}

export async function likeReplyAction(formData: FormData) {
  const user = await getSession();
  if (!user) return redirect("/forum/login");

  const replyId = parseInt(formData.get("replyId") as string, 10);
  const postId  = parseInt(formData.get("postId") as string, 10);
  store.toggleLikeReply(replyId, user.id);
  redirect(`/forum/posts/${postId}`);
}
