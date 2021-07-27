module.exports = {
  siteMetadata: {
    siteUrl: `https://www.cold-ones.com`,
    title: `cold-ones`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/
        }
      }
    }
  ],
};
