const UCARECDN_BASE = "https://ucarecdn.com/";

export const withPreview = (url, width, height) => {
  if (!url || !url.startsWith(UCARECDN_BASE)) return url;
  if (url.includes("/-/")) return url;

  const uuidAndFile = url.slice(UCARECDN_BASE.length);
  return `${UCARECDN_BASE}${uuidAndFile.replace(/\/?$/, "")}/-/preview/${width}x${height}/`;
};
