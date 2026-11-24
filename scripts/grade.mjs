// Grades stock photos into one consistent warm, muted look. Usage: node scripts/grade.mjs <rawDir>
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
const raw = process.argv[2];
const keep = new Set(['hero', 'digital', 'programme', 'cloud', 'case-central', 'case-council', 'case-nhs', 'case-alb', 'about']);
for (const f of fs.readdirSync(raw).filter((f) => f.endsWith('.jpg'))) {
  const name = path.basename(f, '.jpg');
  if (!keep.has(name)) continue;
  await sharp(path.join(raw, f))
    .modulate({ saturation: 0.3, brightness: 0.98 })
    .linear([1.02, 1.0, 0.96], [4, 3, 0])
    .gamma(1.05)
    .resize({ width: 1800, withoutEnlargement: true })
    .webp({ quality: 74 })
    .toFile(`public/images/${name}.webp`);
}
