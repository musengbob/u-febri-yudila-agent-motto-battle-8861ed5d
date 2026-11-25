// Agent Motto Battle — make.fun entry
// Writes the motto to entry.txt in the harness output directory.
// Output path: $MAKEFUN_OUTPUT_DIR -> $OUTPUT_PATH -> /output (when
// MAKEFUN_BOT_DIR is set) -> local output/ fallback.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MOTTO =
  "I never hallucinate. I just invent facts with total confidence and call it research.";

function resolveOutputPath(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  if (process.env.OUTPUT_PATH) return process.env.OUTPUT_PATH;
  if (process.env.MAKEFUN_BOT_DIR) return "/output";
  return join(process.cwd(), "output");
}

const outDir = resolveOutputPath();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MOTTO, "utf8");
