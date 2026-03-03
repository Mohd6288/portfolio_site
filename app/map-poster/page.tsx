import "./map-poster.css";
import PosterApp from "./_components/poster-app";
import Link from "next/link";

export const metadata = {
  title: "MapToPoster | Mohammed Alkhalifa",
  description:
    "Create beautiful, high-resolution map posters of any city in the world.",
};

export default function MapPosterPage() {
  return (
    <div className="map-poster-scope">
      <PosterApp
        backLink={
          <Link href="/" className="back-link">
            &larr; Back to Portfolio
          </Link>
        }
      />
    </div>
  );
}
