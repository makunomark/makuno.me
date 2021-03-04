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
  ],
};
