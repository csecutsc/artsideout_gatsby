module.exports = {
  siteMetadata: {
    title: `ARTSIDEOUT`,
    description: `ARTSIDEOUT 2021 ENDURANCE: UTSC's largest one-day multidisciplinary arts festival`,
    author: `Computer Science Enrichment Club`
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    PARALLEL_SOURCING: true
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
      defaults: {
        width: 600,
        placeholder: 'BLURRED',
        quality: 40
      },
      options: {
        failOnError: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artsideout`,
        short_name: `Artsideout`,
        start_url: `/`,
        background_color: `#ED64A6`,
        theme_color: `#ED64A6`,
        display: `standalone`,
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
          // 'https://api-us-east-1.graphcms.com/v2/ckrl23npz27ng01xsbqgg6yih/master',
          'https://api-us-east-1.graphcms.com/v2/cktyw4o6o3e9g01yu0geb5hki/master',
        downloadLocalImages: true,
        buildMarkdownNodes: true
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `your-disqus-shortname`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'G-51NP257R94',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // defaults to false
        enableWebVitalsTracking: true
      }
    },
    '@chakra-ui/gatsby-plugin',
    `gatsby-plugin-mdx`,
    `gatsby-plugin-offline`
  ]
};
