import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mohammed Alkhalifa — Junior Data Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent circle */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,163,115,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "#d4a373",
            marginBottom: 32,
            fontSize: 28,
            fontWeight: 900,
            color: "#0a0a0a",
          }}
        >
          MA
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#fafafa",
            letterSpacing: "-1px",
            marginBottom: 12,
          }}
        >
          Mohammed Alkhalifa
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#d4a373",
            marginBottom: 24,
          }}
        >
          Junior Data Analyst
        </div>

        {/* Tech badges */}
        <div
          style={{
            display: "flex",
            gap: 12,
          }}
        >
          {["Power BI", "Python", "SQL", "Excel", "Machine Learning"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 18px",
                  borderRadius: 20,
                  border: "1px solid rgba(212,163,115,0.3)",
                  background: "rgba(212,163,115,0.08)",
                  color: "#d4a373",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Bottom bar */}
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
