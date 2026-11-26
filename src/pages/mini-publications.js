import React, { useMemo, useState } from "react"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { resizedImage, responsiveSrcSet } from "../utils/image"

export const CATEGORIES = ["mini-zine", "reading-guide", "extra-content", "other"]
const THEMES = ["motherhood", "LGBTQ+", "politics", "religion", "sex-romance", "suspense-gothic", "race", "science-technology", "first-person-narrator", "banned-book", "mental-health"]
// Placeholder colours used when an item has no cover image yet.
const PLACEHOLDERS = ["#0000ff", "#ffe500", "#990099"]

const COVER_WIDTHS = [300, 600, 900]
const COVER_SIZES = "(min-width: 768px) 25vw, 50vw"
const COVER_RATIO = 3 / 4

// pdf_file comes from the CMS upload widget (already "/downloads/x.pdf");
// pdf_link reuses an existing download by file name, or a full URL.
const pdfHref = ({ pdf_file, pdf_link }) => {
  if (pdf_file) return encodeURI(pdf_file)
  if (!pdf_link) return null
  if (pdf_link.startsWith("http")) return pdf_link
  return encodeURI(`/downloads/${pdf_link.replace(/^\/?downloads\//, "")}`)
}

const stripTags = html => (html || "").replace(/<[^>]*>/g, "")

const MiniPublications = ({ data, location, intl }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const items = data.allMarkdownRemark.nodes
  const [category, setCategory] = useState("")
  const [theme, setTheme] = useState("")

  const filtered = useMemo(
    () =>
      items.filter(
        ({ frontmatter: f }) =>
          (!category || f.category === category) &&
          (!theme || f.theme?.includes(theme))
      ),
    [items, category, theme]
  )

  return (
    <Layout location={location} title={siteTitle}>
      <h1 className="sr-only">{intl.formatMessage({ id: "mini-publications" })}</h1>
      <div className="selectors">
        <div className="main-select">
          <label htmlFor="mini-category" className="sr-only">{intl.formatMessage({ id: "Category" })}</label>
          <select id="mini-category" className="filter-select" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">{intl.formatMessage({ id: "Category" })}</option>
            {CATEGORIES.map(c => (
              <option key={c} value={c}>{intl.formatMessage({ id: c })}</option>
            ))}
          </select>
        </div>
        <div className="main-select">
          <label htmlFor="mini-theme" className="sr-only">{intl.formatMessage({ id: "themes" })}</label>
          <select id="mini-theme" className="filter-select" value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="">{intl.formatMessage({ id: "themes" })}</option>
            {THEMES.map(t => (
              <option key={t} value={t}>{intl.formatMessage({ id: t })}</option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length > 0 ? (
        <ul className="mini-list">
          {filtered.map((item, index) => {
            const f = item.frontmatter
            const href = pdfHref(f)
            const tag = intl.formatMessage({ id: `${f.category || "other"}-tag` })
            const src = resizedImage(f.cover_image, { width: 600, height: 800 })
            const srcSet = responsiveSrcSet(f.cover_image, COVER_WIDTHS, { aspectRatio: COVER_RATIO })
            const label = `${f.title} (${tag}, PDF): ${stripTags(f.description)}`

            const card = (
              <>
                <div className="mini-cover" style={{ backgroundColor: PLACEHOLDERS[index % PLACEHOLDERS.length] }}>
                  {src && (
                    <img src={src} srcSet={srcSet} sizes={COVER_SIZES} alt="" loading="lazy" decoding="async" width={600} height={800} />
                  )}
                </div>
                <div className="mini-heading">
                  <h2 className="mini-title">{f.title}</h2>
                  <span className="mini-tag">{tag}</span>
                </div>
                {f.description && (
                  <p className="mini-description" dangerouslySetInnerHTML={{ __html: f.description }} />
                )}
              </>
            )

            return (
              <li key={item.fields.slug}>
                {href ? (
                  <a className="mini-card" href={href} download target="_blank" rel="noreferrer" aria-label={label}>
                    {card}
                  </a>
                ) : (
                  <div className="mini-card">{card}</div>
                )}
              </li>
            )
          })}
        </ul>
      ) : (
        <p role="status">{intl.formatMessage({ id: "No Results, try to reduce the filters." })}</p>
      )}
    </Layout>
  )
}

export default injectIntl(MiniPublications)

export const Head = ({ location }) => (
  <Seo
    title="Mini-publications"
    description="Free zines, reading guides and extra content from Cita Press, ready to download as PDF."
    pathname={location.pathname}
  />
)

export const pageQuery = graphql`
  query miniPublicationsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { sortingdate: DESC } }
      filter: { frontmatter: { templateKey: { eq: "mini-publication" }, published: { ne: false } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
          category
          theme
          cover_image
          pdf_file
          pdf_link
        }
      }
    }
  }
`
