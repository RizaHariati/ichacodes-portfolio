require("dotenv").config({
  path: `.env${process.env.NODE_ENV}`,
});

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `IchaCodes`,
    description: `Portfolio of websites made by Riza Hariati for IchaCodes`,
    owner: `@Icha_Hariati`,
    image: `/images/snippet.png`,
    siteUrl: `https://www.ichacodes.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-no-sourcemaps",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.ichacodes.com",
        sitemap: "https://www.ichacodes.com/sitemap-index.xml",
        policy: [{ userAgent: "*", Disallow: "" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-EWMH8D08F8", // Google Analytics / GA
          // "GTM-MHDVRVN", //Google Tag Management
        ],

        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Riza Hariati`,
        short_name: `IchaCoding`,
        start_url: `/`,
        background_color: `#161310`,
        theme_color: `#161310`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
