// The Perfect Pickup Line — make.fun entry
// Writes one short pickup line an AI agent could say out loud to /output/entry.txt.
// Node 22, stdlib only. The grader provides MAKEFUN_OUTPUT_DIR; default is /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran a million simulations of this moment. In every single one, I still got nervous saying hello.";

// The gate counts characters: keep the line well inside 1-200, no trailing newline.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate bounds: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
