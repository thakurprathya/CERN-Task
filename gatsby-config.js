/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gsoc_task`,
    siteUrl: `https://gsocqualificationtaskmain.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `./src/data/`,
      },
    },
  ],
}
