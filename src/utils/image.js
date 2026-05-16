const NETLIFY_IMAGES = "/.netlify/images";

const buildUrl = (source, params) => {
  const usp = new URLSearchParams({ url: source });
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) usp.set(key, String(value));
  }
  return `${NETLIFY_IMAGES}?${usp.toString()}`;
};

export const resizedImage = (source, { width, height, fit = "cover", format } = {}) => {
  if (!source) return undefined;
  return buildUrl(source, { w: width, h: height, fit, fm: format });
};

export const responsiveSrcSet = (source, widths, { height, aspectRatio, fit = "cover", format } = {}) => {
  if (!source) return undefined;
  return widths
    .map((w) => {
      const h = height ?? (aspectRatio ? Math.round(w / aspectRatio) : undefined);
      return `${buildUrl(source, { w, h, fit, fm: format })} ${w}w`;
    })
    .join(", ");
};
