import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Deterministic entrypoint: copy the rendered entry.png byte-identically
// to /output/entry.png. No generation, no randomness, no network.
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = "/output";
const out = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, out);
console.log("entry.png -> /output/entry.png");
