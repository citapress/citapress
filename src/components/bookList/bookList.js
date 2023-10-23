// list of books component
import * as React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
          const image = getImage(book.frontmatter.square_image);

          return (
            <li key={book.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Link to={book.fields.slug} itemProp="url">
                    <GatsbyImage image={image} alt={title} />
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