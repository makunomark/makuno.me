module.exports = {
  siteMetadata: {
    title: 'Mark Makuno',
    description: 'Personal Portfolio Site bootstraped by Gatsby',
    author: '@thatmarc_',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-antd',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require('./firebase-primary-key.json'),
        types: [
          {
            type: 'Highlights',
            collection: 'highlights',
            map: doc => ({
              highlight: doc.highlight,
            }),
          },
          {
            type: 'SocialMediaLinks',
            collection: 'socialmedia',
            map: doc => ({
              icon: doc.icon,
              link: doc.link,
              theme: doc.theme,
            }),
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mark Makuno`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        legacy: true,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
