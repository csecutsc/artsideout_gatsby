module.exports = {
  siteMetadata: {
    title: `ARTSIDEOUT`,
    description: `ARTSIDEOUT 2021 ENDURANCE: UTSC's largest one-day multidisciplinary arts festival`,
    author: `Computer Science Enrichment Club`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        failOnError: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true // defaults to false
      }
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        // Your GraphCMS API endpoint. Available from your project settings.
        endpoint:
          'https://api-us-east-1.graphcms.com/v2/ckjv3ugbcod9j01z1hvndcrdh/master',
        downloadLocalImages: false,
        buildMarkdownNodes: true
      }
    },
    '@chakra-ui/gatsby-plugin',
    `gatsby-plugin-mdx`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
