import "./style-camera.css";
import Link from "next/link";

export const metadata = {
  title: "AI Style Diffusion Camera | Mohammed Alkhalifa",
  description:
    "AI-powered style transfer — transform your photos into vintage film, comic book, anime, and more using Stable Diffusion.",
};

export default function StyleCameraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="style-camera-scope">
      {/* Header */}
      <header className="sc-header">
        <nav>
          <Link
            href="/style-camera"
            className="flex items-center gap-2.5 group"
          >
            <span className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white text-sm">
              &#127912;
            </span>
            <span className="font-bold text-sm text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors hidden sm:block">
              AI Style Diffusion Camera
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="sc-back-link px-3 py-2 rounded-lg text-sm"
            >
              &larr; Portfolio
            </Link>
            <Link
              href="/style-camera"
              className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-all"
            >
              Home
            </Link>
            <Link
              href="/style-camera/studio"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--accent)] text-white hover:bg-[var(--accent2)] transition-all"
            >
              AI Studio
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="sc-footer">
        <span>
          AI Style Diffusion Camera &copy; {new Date().getFullYear()} &middot;
          Built with Next.js &middot; Powered by Stable Diffusion
        </span>
      </footer>
    </div>
  );
}
