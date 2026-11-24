import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry: one pickup line from a vending machine to a passing human.
// The machine has held the chocolate since 1998; its coil finally let go.
const line =
  "Hey, beautiful. I have been holding this chocolate for you since 1998, and my coil finally let go.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(scriptDir, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
