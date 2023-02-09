import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allImageSharp(
      filter: {
        original: {
          src: {
            in: [
              "/static/snippet-663500e40beb6a4bd8bfe69c1191db2d.png"
              "/static/samplebackground-ca20738802656f3be326bc78d18b88a4.png"
            ]
          }
        }
      }
    ) {
      nodes {
        original {
          src
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        owner
        image
        description
      }
    }
  }
`;

type Props = {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[];
};

export const SEO = ({ title, description, children }: Props) => {
  const result = useStaticQuery(query);
  const metaData = result.site.siteMetadata;
  const imageStatic = result.allImageSharp;
  const twitterImage = imageStatic.nodes[0].original.src;
  const siteImage = imageStatic.nodes[1].original.src;

  const seo = {
    title: title || "Project",
    description: description || `${metaData.description}`,
    image: `${metaData.siteUrl}${siteImage}`,
    twitterimage: `${metaData.siteUrl}${twitterImage}`,
    url: `${metaData.siteUrl}`,
    owner: `${metaData.owner}`,
  };

  return (
    <>
      <title>{`IchaCodes | ${seo.title}`}</title>
      <meta property="og:description" content={seo.description} />
      <meta name="keywords" content="rizahariati, riza hariati, icha hariati" />
      <meta property="og:image" content={`${seo.image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:creator" content={seo.owner} />
      <link rel="canonical" href={seo.url} />
      {children}
    </>
  );
};
