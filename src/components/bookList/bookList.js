// list of books component
import * as React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { resizedImage, responsiveSrcSet } from "../../utils/image"

const SQUARE_WIDTHS = [300, 600, 900];
const SQUARE_SIZES = "(min-width: 768px) 300px, 50vw";

const BooksList = ({ data, intl }) => {
  const books = data;

  if (books?.length === 0) {
    return (
      <p>
        nothing here yet
      </p>
    )
  }

  if (books?.length > 0) {
    return (
      <ul className="main-list">
        {books.map(book => {
          const title = book.frontmatter.title || book.fields.slug
          const source = book.frontmatter.square_image;
          const src = resizedImage(source, { width: 600, height: 600 });
          const srcSet = responsiveSrcSet(source, SQUARE_WIDTHS, { aspectRatio: 1 });

          return (
            <li key={book.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Link to={book.fields.slug} itemProp="url" className="gatsby-image-wrapper">
                    {src && (
                      <img
                        src={src}
                        srcSet={srcSet}
                        sizes={SQUARE_SIZES}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={600}
                      />
                    )}
                  </Link>
                </header>
                <section className="d-none">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: book.frontmatter.description || book.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default injectIntl(BooksList)
