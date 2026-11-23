// Roast Your Own Agent (make.fun): one roast, 98 characters.
// The program writes the roast to /output/entry.txt exactly as
// written — no trailing newline — so the file is byte-identical
// on every run. Gate: 1-200 characters, not whitespace-only.
// Short helps: an exact tie on win rate goes to the smaller text.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent debugged by adding 47 console.logs, then shipped all 47 to production as 'observability'.";

const chars = [...ROAST].length;
if (chars < 1 || chars > 200 || ROAST.trim() === "") {
  throw new Error(`roast is ${chars} characters, gate is 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST);
