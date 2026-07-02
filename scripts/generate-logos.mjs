import sharp from "sharp";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const svg = readFileSync(join(publicDir, "logo.svg"));

const outputs = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["apple-touch-icon.png", 180],
  ["favicon.ico", 32],
  ["icon.gif", 128],
  ["icon.png", 512],
];

for (const [name, size] of outputs) {
  const pipeline = sharp(svg).resize(size, size);
  if (name.endsWith(".gif")) {
    await pipeline.gif().toFile(join(publicDir, name));
  } else if (name.endsWith(".ico")) {
    await pipeline.png().toFile(join(publicDir, name));
  } else {
    await pipeline.png().toFile(join(publicDir, name));
  }
}

await sharp(svg).resize(512, 512).avif().toFile(join(publicDir, "logo.avif"));

console.log("Generated Y logo assets.");
