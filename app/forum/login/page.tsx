import Link from "next/link";
import { loginAction } from "../_actions/actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="fade-up max-w-md mx-auto px-5 py-16">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-[var(--accent)] flex items-center justify-center text-white text-lg font-black mx-auto mb-4">
          KF
        </div>
        <h1 className="text-2xl font-bold text-[var(--fg)] mb-2">Welcome back</h1>
        <p className="text-sm text-[var(--muted)]">Sign in to your Knowledge Forum account</p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-xl bg-[var(--danger)]/10 border border-[var(--danger)]/30 text-sm text-[var(--danger)]">
          {error}
        </div>
      )}

      <form action={loginAction} className="card p-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--muted)] mb-1.5">Username</label>
          <input type="text" name="username" placeholder="Enter your username" required />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--muted)] mb-1.5">Password</label>
          <input type="password" name="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Sign In
        </button>
      </form>

      <p className="text-center text-sm text-[var(--muted)] mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/forum/register" className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold">
          Sign Up
        </Link>
      </p>

      <div className="mt-6 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--muted)]">
        <p className="font-semibold text-[var(--fg)] mb-1">Demo Accounts</p>
        <p>Username: <span className="text-[var(--accent)]">JohnDoe</span>, <span className="text-[var(--accent)]">JaneSmith</span>, <span className="text-[var(--accent)]">DevMaster</span>, <span className="text-[var(--accent)]">CodeNinja</span>, or <span className="text-[var(--accent)]">TechLead</span></p>
        <p>Password: <span className="text-[var(--accent)]">demo123</span></p>
      </div>
    </div>
  );
}
