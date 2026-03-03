import type { Metadata } from "next";
import "./forum.css";
import Link from "next/link";
import { getSession, clearSession } from "./_lib/auth";
import { redirect } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knowledge Forum",
  description: "A modern community for sharing coding knowledge, tips, and discussions.",
};

/* ── Logout action ── */
async function logoutAction() {
  "use server";
  await clearSession();
  redirect("/forum");
}

export default async function ForumLayout({ children }: { children: React.ReactNode }) {
  const user = await getSession();

  return (
    <div className={`forum-scope ${inter.className}`}>
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--bg)]/90 border-b border-[var(--border)]">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/forum" className="flex items-center gap-2.5 group">
              <span className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white text-xs font-black">
                KF
              </span>
              <span className="font-bold text-sm text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors hidden sm:block">
                Knowledge Forum
              </span>
            </Link>
            <Link href="/" className="text-[10px] font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors border border-[var(--border)] rounded-md px-2 py-1">
              &larr; Portfolio
            </Link>
          </div>

          {/* Links */}
          <div className="flex items-center gap-1">
            <Link href="/forum/topics" className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-all">
              Topics
            </Link>
            <Link href="/forum/search" className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-all">
              Search
            </Link>

            <span className="w-px h-5 bg-[var(--border)] mx-2" />

            {user ? (
              <div className="flex items-center gap-2">
                <div
                  className="avatar avatar-sm text-white"
                  style={{ background: `hsl(${user.id * 72}, 60%, 45%)` }}
                >
                  {user.username.slice(0, 2)}
                </div>
                <span className="text-sm font-medium text-[var(--fg)] hidden sm:block">
                  {user.username}
                </span>
                <form action={logoutAction}>
                  <button type="submit" className="btn btn-ghost text-xs py-1.5 px-3">
                    Logout
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/forum/login" className="btn btn-ghost text-xs py-1.5 px-3">
                  Sign In
                </Link>
                <Link href="/forum/register" className="btn btn-primary text-xs py-1.5 px-3">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* ── Main ── */}
      <main className="flex-1">
        {children}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[var(--border)] mt-auto">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-[var(--accent)] flex items-center justify-center text-white text-[9px] font-black">
              KF
            </span>
            <span className="text-xs text-[var(--muted)]">Knowledge Forum &copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-4 text-xs text-[var(--muted)]">
            <Link href="/forum/topics" className="hover:text-[var(--fg)] transition-colors">Topics</Link>
            <Link href="/forum/search" className="hover:text-[var(--fg)] transition-colors">Search</Link>
            <Link href="/" className="hover:text-[var(--fg)] transition-colors">Back to Portfolio</Link>
            <span>Built with Next.js & Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
