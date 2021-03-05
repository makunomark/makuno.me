require("dotenv").config({
  path: `.env.development`,
});

module.exports = {
  siteMetadata: {
    title: "makuno.dev",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`, `sans-serif`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["project", "home-page", "technology"],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-posthog-analytics`,
      options: {
        // Specify the API key for your Posthog Project (required)
        apiKey: process.env.POSTHOG_KEY,
        // Specify the app host if self-hosting (optional, default: https://app.posthog.com)
        appHost: process.env.POSTHOG_API_HOST,
        // Puts tracking script in the head instead of the body (optional, default: true)
        head: true,
        // Enable posthog analytics tracking during development (optional, default: false)
        isEnabledDevMode: true,
      },
    },
  ],
};
