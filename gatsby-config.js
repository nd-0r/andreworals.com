module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "andreworals.com",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
