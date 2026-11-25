// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to /output/entry.txt:
// a To: line naming who it was meant for, and the unsent line itself.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry is exactly two parts, per the judge's first criterion:
// a To: line naming who it was meant for, and the message itself,
// one line written exactly as it was typed, with no explanation after it.
const toLine = "To: the friend I stopped replying to in 2019";
const messageLine =
  "I typed sorry three times and deleted it three times, and now I don't know if sorry is still true.";

const entry = `${toLine}\n${messageLine}\n`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
