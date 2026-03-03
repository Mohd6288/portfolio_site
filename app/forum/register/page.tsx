import Link from "next/link";
import { registerAction } from "../_actions/actions";

export default async function RegisterPage({
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
        <h1 className="text-2xl font-bold text-[var(--fg)] mb-2">Create your account</h1>
        <p className="text-sm text-[var(--muted)]">Join the Knowledge Forum community</p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-xl bg-[var(--danger)]/10 border border-[var(--danger)]/30 text-sm text-[var(--danger)]">
          {error}
        </div>
      )}

      <form action={registerAction} className="card p-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--muted)] mb-1.5">Username</label>
          <input type="text" name="username" placeholder="Choose a username" required minLength={3} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--muted)] mb-1.5">Email</label>
          <input type="email" name="email" placeholder="you@example.com" required />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--muted)] mb-1.5">Password</label>
          <input type="password" name="password" placeholder="Create a password" required minLength={4} />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Create Account
        </button>
      </form>

      <p className="text-center text-sm text-[var(--muted)] mt-6">
        Already have an account?{" "}
        <Link href="/forum/login" className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold">
          Sign In
        </Link>
      </p>
    </div>
  );
}
