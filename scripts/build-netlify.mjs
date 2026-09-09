import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const outputDirectory = resolve(projectRoot, 'netlify-dist');
const clientDirectory = resolve(projectRoot, 'dist/client');
const workerPath = resolve(projectRoot, 'dist/server/index.js');

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

const worker = (await import(workerPath)).default;
const backgroundTasks = [];
const response = await worker.fetch(
  new Request(
    'https://kitsch-marketing-operations-chief-of-staff-demo.netlify.app/',
  ),
  {},
  {
    waitUntil(promise) {
      backgroundTasks.push(promise);
    },
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static render failed with ${response.status}`);
}

await writeFile(resolve(outputDirectory, 'index.html'), await response.text());
await writeFile(resolve(outputDirectory, '_redirects'), '/* /index.html 200\n');
await Promise.allSettled(backgroundTasks);

console.log(`Netlify bundle ready: ${outputDirectory}`);
