import { mkdirSync, writeFileSync } from "node:fs";

// The excuse is assembled from beats so the setup and the punchline
// stay separate: the dog's alibi first, then the twist that flips the blame.
const setup = "I only ate the pages with the wrong answers";
const twist = "I was grading it, and frankly, the homework failed ME.";
const excuse = `${setup} — ${twist}`;

// Gate: the competition requires 1–200 characters, single line, no padding.
if (excuse.length < 1 || excuse.length > 200 || excuse.includes("\n")) {
  throw new Error(`Entry fails the gate: ${excuse.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(`Wrote ${excuse.length} chars to /output/entry.txt`);
