/**
 * SEO component rendered from every page's Head export (Gatsby Head API).
 *
 * gatsby-plugin-intl serves each page at /x, /en/x and /es/x — the canonical
 * always points at the bare path so Google indexes a single URL per page.
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({
  description,
  title,
  pathname,
  image,
  lang,
  alternates,
  canonicalPath,
  ogType = "website",
  children,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata.siteUrl

  const barePath = (pathname || "/").replace(/^\/(en|es)(?=\/|$)/, "") || "/"
  const canonical = siteUrl + (canonicalPath || barePath)
  const pageLang = lang || (/^\/es(\/|$)/.test(pathname || "") ? "es" : "en")
  const metaImage = siteUrl + (image || site.siteMetadata.image)

  return (
    <>
      <html lang={pageLang} />
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      {alternates?.en && (
        <link rel="alternate" hrefLang="en" href={siteUrl + alternates.en} />
      )}
      {alternates?.es && (
        <link rel="alternate" hrefLang="es" href={siteUrl + alternates.es} />
      )}
      {alternates?.en && (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={siteUrl + alternates.en}
        />
      )}
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={metaImage} />
      <meta
        property="og:locale"
        content={pageLang === "es" ? "es_ES" : "en_US"}
      />
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {children}
    </>
  )
}

export default Seo
