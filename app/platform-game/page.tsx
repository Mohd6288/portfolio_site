import "./platform-game.css";
import Link from "next/link";

export const metadata = {
  title: "Platform Adventure | Mohammed Alkhalifa",
  description:
    "Multi-level 2D platformer with dash & wall-jump mechanics, weather system, combo scoring, and enemy AI.",
};

export default function PlatformGamePage() {
  return (
    <div className="platform-game-scope">
      <Link href="/" className="game-back-link">
        &larr; Back to Portfolio
      </Link>
      <iframe
        src="https://game-project-sooty-phi.vercel.app"
        title="Platform Adventure Game"
        allow="accelerometer; gyroscope; autoplay"
        allowFullScreen
      />
    </div>
  );
}
