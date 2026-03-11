const UCARECDN_BASE = "https://ucarecdn.com/";
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

export const withPreview = (url, width, height) => {
  if (!url || !url.startsWith(UCARECDN_BASE)) return url;
  if (url.includes("/-/")) return url;

  const path = url.slice(UCARECDN_BASE.length);
  const uuidMatch = path.match(UUID_REGEX);
  if (!uuidMatch) return url;

  const uuid = uuidMatch[0];
  return `${UCARECDN_BASE}${uuid}/-/preview/${width}x${height}/`;
};
