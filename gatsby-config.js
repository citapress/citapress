/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // Emits .cache/typegen/schema.graphql so the IDE's GraphQL plugin can
  // validate the page queries instead of flagging every field as unknown.
  graphqlTypegen: true,
  siteMetadata: {
    title: `Cita Press`,
    author: {
      name: `Cita Press`,
      summary: `A feminist indie press publishing free books by women.`,
    },
    description: `Cita Press is an intersectional feminist indie press publishing open-access books authored by women, free to read and download in English and Spanish.`,
    siteUrl: `https://citapress.org`,
    image: `/img/cita-book-covers-sample2.jpg`,
    social: {
      twitter: `citapress`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/books`,
        name: `books`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/news`,
        name: `news`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/studio`,
        name: `studio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              tight: true,
              ordered: true,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              const plainText = html =>
                (html || "")
                  .replace(/<[^>]*>/g, " ")
                  .replace(/&[#\w]+;/g, " ")
                  .replace(/\s+/g, " ")
                  .trim()
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: plainText(node.frontmatter.description) || node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                })
              })
            },
            query: `{
              allMarkdownRemark(
                sort: {frontmatter: {date: DESC}}
                filter: {frontmatter: {templateKey: {eq: "book-page"}, published: {eq: true}}}
                limit: 20
              ) {
                nodes {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                    description
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Cita Press — New Books",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Citapress a feminist indie press `,
        short_name: `Citapress`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#3634fb`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-V1J3CFLFXH"],
        pluginConfig: {
          head: true,
        },
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [
          `/en`,
          `/en/`,
          `/en/**`,
          `/es`,
          `/es/`,
          `/es/**`,
          `/404*`,
          `/**/404*`,
          `/offline-plugin-app-shell-fallback/`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/books/*`, `/about`, `/contact`, `/people`],
      },
    },
  ],
}
