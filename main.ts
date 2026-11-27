// u-mang-one-line-of-earned-pride-a0138557: writes one line to /output/entry.txt.
// Node 22, TypeScript as-is, stdlib only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, written by hand for this bounty.
const LINE = "At 3 a.m., the night-shift nurse finally got the old man's breathing steady, and for the first time in weeks, she let herself sit down.";

// Write the line exactly, with no trailing newline, so the gate counts it as-is.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
