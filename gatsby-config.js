require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `El Rincón`,
    description: `Grupo de restauración`,
    author: `I.Palma`,
    siteUrl: `https://www.grupoelrincon.es/`,
  },
  flags: {
    PARALLEL_QUERY_RUNNING: true
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-use-query-params",
    'gatsby-plugin-netlify',
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
        icon: `src/images/logo-GER.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-contentful-optional-fields",
      options: {
        optionalFields: {
          ContentfulRestaurantes: {
            cartaGrupo: "Node",
            reservasDeGrupo: "String"
          },
        },
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-217583663-1', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    }
  ],
}
