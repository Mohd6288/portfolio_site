// Run: node scripts/generate-icons.mjs
// Generates simple PWA icons as SVG-in-PNG placeholders
import { writeFileSync } from "fs";

function createSvgIcon(size) {
  const fontSize = Math.round(size * 0.35);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.15)}" fill="#0a0a0a"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle"
    font-family="system-ui, sans-serif" font-weight="900" font-size="${fontSize}" fill="#d4a373">
    MA
  </text>
</svg>`;
}

for (const size of [192, 512]) {
  const svg = createSvgIcon(size);
  writeFileSync(`public/icons/icon-${size}.svg`, svg);
  console.log(`Created icon-${size}.svg`);
}

console.log("\nNote: For production, convert SVGs to PNGs using an image editor or online tool.");
console.log("For now, update manifest.json to use .svg extension, or convert these to .png");
