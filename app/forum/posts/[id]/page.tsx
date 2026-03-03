import Link from "next/link";
import { notFound } from "next/navigation";
import { store } from "../../_lib/store";
import { getSession } from "../../_lib/auth";
import { createReplyAction, likePostAction, likeReplyAction } from "../../_actions/actions";

function timeAgo(date: string) {
  const s = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = parseInt(id, 10);
  const post = store.getPostById(postId);
  if (!post) notFound();

  const user = await getSession();
  const author = store.getUserById(post.userId);
  const topic = store.getTopicById(post.topicId);
  const replies = store.getRepliesByPost(postId);
  const userLiked = user ? post.likes.has(user.id) : false;

  return (
    <div className="fade-up max-w-4xl mx-auto px-5 py-12">
      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-6">
        <Link href="/forum/topics" className="hover:text-[var(--fg)] transition-colors">Topics</Link>
        <span>/</span>
        {topic && (
          <>
            <Link href={`/forum/topics/${topic.id}`} className="hover:text-[var(--fg)] transition-colors" style={{ color: topic.color }}>
              {topic.name}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-[var(--fg)] truncate">{post.title}</span>
      </div>

      {/* ── Post ── */}
      <article className="card p-6 mb-6">
        <div className="flex items-start gap-4">
          <div
            className="avatar avatar-lg text-white flex-shrink-0"
            style={{ background: `hsl(${(author?.id ?? 0) * 72}, 60%, 45%)` }}
          >
            {author?.username.slice(0, 2) ?? "?"}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-black text-[var(--fg)] mb-2">{post.title}</h1>
            <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-4">
              <span className="font-semibold text-[var(--fg)]">{author?.username}</span>
              {topic && (
                <span className="tag" style={{ background: topic.color + "20", color: topic.color }}>
                  {topic.name}
                </span>
              )}
              <span title={formatDate(post.createdAt)}>{timeAgo(post.createdAt)}</span>
            </div>
            <div className="text-sm text-[var(--muted)] leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
            <div className="flex items-center gap-4 mt-5 pt-4 border-t border-[var(--border)]">
              <form action={likePostAction}>
                <input type="hidden" name="postId" value={post.id} />
                <input type="hidden" name="returnUrl" value={`/forum/posts/${post.id}`} />
                <button
                  type="submit"
                  className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                    userLiked
                      ? "text-[var(--danger)]"
                      : "text-[var(--muted)] hover:text-[var(--danger)]"
                  }`}
                >
                  {userLiked ? "\u2764" : "\u2661"} {post.likes.size}
                </button>
              </form>
              <span className="text-xs text-[var(--muted)]">&#128172; {replies.length} replies</span>
            </div>
          </div>
        </div>
      </article>

      {/* ── Replies ── */}
      <div className="mb-6">
        <h2 className="text-sm font-bold text-[var(--fg)] mb-4">
          {replies.length} {replies.length === 1 ? "Reply" : "Replies"}
        </h2>

        {replies.length === 0 ? (
          <div className="card p-6 text-center">
            <p className="text-sm text-[var(--muted)]">No replies yet. Be the first to respond!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {replies.map((reply) => {
              const replyAuthor = store.getUserById(reply.userId);
              const replyLiked = user ? reply.likes.has(user.id) : false;
              return (
                <div key={reply.id} className="card p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="avatar avatar-sm text-white"
                      style={{ background: `hsl(${(replyAuthor?.id ?? 0) * 72}, 60%, 45%)` }}
                    >
                      {replyAuthor?.username.slice(0, 2) ?? "?"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[var(--fg)]">{replyAuthor?.username}</span>
                        <span className="text-[10px] text-[var(--muted)]" title={formatDate(reply.createdAt)}>
                          {timeAgo(reply.createdAt)}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--muted)] leading-relaxed whitespace-pre-wrap">
                        {reply.content}
                      </p>
                      <form action={likeReplyAction} className="mt-2">
                        <input type="hidden" name="replyId" value={reply.id} />
                        <input type="hidden" name="postId" value={post.id} />
                        <button
                          type="submit"
                          className={`flex items-center gap-1 text-[10px] font-semibold transition-colors ${
                            replyLiked
                              ? "text-[var(--danger)]"
                              : "text-[var(--muted)] hover:text-[var(--danger)]"
                          }`}
                        >
                          {replyLiked ? "\u2764" : "\u2661"} {reply.likes.size}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Reply Form ── */}
      {user ? (
        <div className="card p-5">
          <h3 className="text-sm font-bold text-[var(--fg)] mb-3">Write a Reply</h3>
          <form action={createReplyAction} className="space-y-3">
            <input type="hidden" name="postId" value={post.id} />
            <textarea name="content" placeholder="Share your thoughts..." required rows={3} />
            <button type="submit" className="btn btn-primary">
              Post Reply
            </button>
          </form>
        </div>
      ) : (
        <div className="card p-4 text-center">
          <p className="text-sm text-[var(--muted)]">
            <Link href="/forum/login" className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold">Sign in</Link> to reply
          </p>
        </div>
      )}
    </div>
  );
}
