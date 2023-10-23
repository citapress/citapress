/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// to write dinamiy json files for each page if needed
// const { writeFileSync } = require('fs');
// const jsonFiles = {};

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { create } = require('domain')

const books = path.resolve(`./src/templates/book-post.js`)
const booksread = path.resolve(`./src/templates/book-post-read.js`)
const genreTemplate = path.resolve(`./src/templates/genre-post.js`)
const timePeriodTemplate = path.resolve(`./src/templates/time-period-post.js`)
const themeTemplate = path.resolve(`./src/templates/theme-post.js`)
const newsTemplate = path.resolve(`./src/templates/news.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      booksEnglish: allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}
        filter: {
          frontmatter: {
            lang: {eq: "en"}
            templateKey: { nin: ["news-page"] }
          }
        }
        limit: 1000
      ) {
        nodes {
          id
          frontmatter{
            lang
          }
          fields {
            slug
          }
        }
      }
      news: allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}
        filter: {
          frontmatter: {
            lang: {eq: "en"}
            templateKey: { eq: "news-page" }
          }
        }
        limit: 4
      ) {
        nodes {
          id
          frontmatter{
            title
            lang
            templateKey
          }
          fields {
            slug
          }
        }
      }
      Allbooks: allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}
        filter: {
          frontmatter: {
            templateKey: { nin: ["news-page"] }
          }
        }
        limit: 1000
      ) {
        nodes {
          id
          frontmatter{
            lang
            genre
            time_period
            theme
            description
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const englishPosts = result.data.booksEnglish.nodes;
  const posts = result.data.Allbooks.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/books" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: books,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          lang: post.frontmatter.lang,
        },
      })
      createPage({
        path: post.fields.slug+"read",
        component: booksread,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          lang: post.frontmatter.lang,
        },
      })
    })
  }

  const news = result.data.news.nodes;
  if (news.length > 0) {
    news.forEach((post) => {
      createPage({
        path: post.fields.slug,
        component: newsTemplate,
        context: {
          id: post.id,
          lang: post.frontmatter.lang,
        },
      })
    })
  }

  // const genres = ["fiction", "short-stories", "novella", "poetry", "nonfiction", "essay", "manifesto", "autobiography"];
  // genres.forEach((genre) => {
  //   const genrePosts = posts.filter((post) => post.frontmatter.genre?.includes(genre));
  //   if (genrePosts.length > 0) {
  //     createPage({
  //       path: `/genre/${genre}`,
  //       component: genreTemplate,
  //       context: {
  //         id: genre,
  //         data: genrePosts,
  //         genre,
  //         lang: "en",
  //       },
  //     })
  //   }
  // });
  // const time_periods = ["19th", "20th", "victorian", 'early-modern', 'modernist', 'contemporary'];
  // time_periods.forEach((period) => {
  //   const periodPosts = posts.filter((post) => post.frontmatter.time_period?.includes(period));
  //   if (periodPosts.length > 0) {
  //     createPage({
  //       path: `/time-period/${period}`,
  //       component: timePeriodTemplate,
  //       context: {
  //         id: period,
  //         period,
  //         data: periodPosts,
  //         lang: "en",
  //       },
  //     })
  //   }
  // });
  // const themes = ["motherhood", "LGBTQ+", "politics" ,"religion", "sex-romance", "suspense-gothic", "race", "science-technology", "first-person-narrator", "banned-book", "mental-health"];
  // themes.forEach((theme) => {
  //   const themePosts = posts.filter((post) => post.frontmatter.theme?.includes(theme));
  //   if (themePosts.length > 0) {
  //     createPage({
  //       path: `/theme/${theme}`,
  //       component: themeTemplate,
  //       context: {
  //         id: theme,
  //         theme,
  //         data: themePosts,
  //         lang: "en",
  //       },
  //     })
  //   }
  // });
  

}

// to write dinamiy json files for each page if needed
// exports.onCreatePage = ({ page }) => {
//   if (page.path.includes("genre") || page.path.includes("time-period") || page.path.includes("theme")) {
//     jsonFiles[page.path] = page.context.data;
//   }
// }

// exports.onPostBuild = () => {
//   console.log('is it working?');
//   Object.entries(jsonFiles).map(([filePath, content]) => {
//       const fileFullPath = path.resolve(
//           __dirname,
//           'public',
//           ...filePath.split('/').filter((part) => part)
//       );
//       writeFileSync(`${fileFullPath}/index.json`, JSON.stringify(content));
//   });
// }


/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/books" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      sortingdate: Date @dateformat
      templateKey: String
      published: Boolean
      download_name: String
      releaseformat: String
      publishformat: String
      date: Date @dateformat
      lang: String
    }

    type Fields {
      slug: String
    }
  `)
}

