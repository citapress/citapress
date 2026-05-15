const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.resolve(__dirname, "..", "content");
const TRANSFORM_URL_RE = /https:\/\/ucarecdn\.com\/[0-9a-f-]{36}\/-\/[^\s"'\)\]<>]+/gi;
const BASE_AND_REST_RE = /^(https:\/\/ucarecdn\.com\/[0-9a-f-]{36})\/-\/(.*)$/i;

function stripTransforms(url) {
  const match = url.match(BASE_AND_REST_RE);
  if (!match) return url;
  const [, base, rest] = match;
  const lastSlash = rest.lastIndexOf("/");
  const filename = lastSlash === -1 ? "" : rest.slice(lastSlash + 1);
  return filename ? `${base}/${filename}` : `${base}/`;
}

function rewriteFile(filePath) {
  const before = fs.readFileSync(filePath, "utf8");
  const after = before.replace(TRANSFORM_URL_RE, stripTransforms);
  if (before === after) return false;
  fs.writeFileSync(filePath, after);
  return true;
}

const markdownFiles = fs
  .readdirSync(CONTENT_DIR, { recursive: true })
  .map((entry) => path.join(CONTENT_DIR, entry))
  .filter((p) => p.endsWith(".md") && fs.statSync(p).isFile());

const rewritten = markdownFiles.filter(rewriteFile);
console.log(`scanned ${markdownFiles.length} files, rewrote ${rewritten.length}`);
for (const f of rewritten) console.log(`  ${path.relative(CONTENT_DIR, f)}`);
