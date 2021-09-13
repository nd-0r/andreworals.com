module.exports = {
  siteMetadata: {
    siteUrl: "https://www.andreworals.com",
    title: "Andreworals.com",
    myName: "Andrew Orals"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              loading: "lazy"
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-emoji`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-RYESLYQG4N",
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
