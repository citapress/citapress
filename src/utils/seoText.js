// Turns frontmatter HTML (book descriptions contain <p>, <i>, entities)
// into plain text safe for <meta> descriptions, trimmed on a word boundary.
export const stripHtml = (html, max = 160) => {
  if (!html) return ""
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;|&ldquo;|&rdquo;|&#822[01];/g, '"')
    .replace(/&rsquo;|&lsquo;|&#821[67];/g, "'")
    .replace(/&[#\w]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  if (text.length <= max) return text
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…"
}

export default stripHtml
