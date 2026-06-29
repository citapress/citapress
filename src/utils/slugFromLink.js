// Accepts either a bare slug ("the-awakening") or a full URL
// ("https://citapress.org/books/the-awakening/") and returns just the slug.
const slugFromLink = (link) =>
  (link ?? "")
    .trim()
    .replace(/[?#].*$/, "")
    .replace(/\/+$/, "")
    .split("/")
    .pop();

export default slugFromLink;
