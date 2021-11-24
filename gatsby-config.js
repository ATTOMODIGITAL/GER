require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `El Rincón`,
    description: `Grupo de restauración`,
    author: `I.Palma`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  flags: {
    PARALLEL_QUERY_RUNNING: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "wkmwvhizbvon",
        accessToken: "_YLOZZg3qJlHVqyLW2Z0VuRNz6b1rdt4o5HuASHe94A",
        downloadLocal: true,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-ger-example.jpeg`, // This path is relative to the root of the site.
      },
    },
  ],
}
