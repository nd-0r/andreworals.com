module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Andreworals.com",
    myName: "Andrew Orals"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    "gatsby-transformer-remark",
  ],
};
