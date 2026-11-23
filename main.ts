// gta6-meme-x-01 entry: hands POST.json to the grader.
// The post itself is the entry — this program only delivers the file
// that names the X post, so the house can read it and judge it.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  const post = readFileSync(join(botDir, 'POST.json'));
  writeFileSync(join(outDir, 'POST.json'), post);
} catch (err) {
  console.error(`POST.json could not be delivered from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
