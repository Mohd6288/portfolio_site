import { cookies } from "next/headers";
import { store } from "./store";

const COOKIE = "forum_uid";

export async function getSession() {
  const jar = await cookies();
  const val = jar.get(COOKIE)?.value;
  if (!val) return null;
  const uid = parseInt(val, 10);
  return store.getUserById(uid) ?? null;
}

export async function setSession(userId: number) {
  const jar = await cookies();
  jar.set(COOKIE, String(userId), {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    sameSite: "lax",
  });
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}
