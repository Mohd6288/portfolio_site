import { ImageResponse } from "next/og";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

export const alt = "Project — Mohammed Alkhalifa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const title = project?.title ?? "Project";
  const tag = project?.tag ?? "";
  const desc = project?.desc ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Tag */}
        <div
          style={{
            display: "flex",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              border: "1px solid rgba(212,163,115,0.3)",
              background: "rgba(212,163,115,0.08)",
              color: "#d4a373",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            {tag}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: "#fafafa",
            letterSpacing: "-1px",
            marginBottom: 16,
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 18,
            color: "rgba(250,250,250,0.6)",
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          {desc.length > 160 ? desc.slice(0, 160) + "..." : desc}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "#d4a373",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 900,
              color: "#0a0a0a",
            }}
          >
            MA
          </div>
          <div style={{ fontSize: 16, color: "rgba(250,250,250,0.5)", fontWeight: 600 }}>
            Mohammed Alkhalifa
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #d4a373, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
