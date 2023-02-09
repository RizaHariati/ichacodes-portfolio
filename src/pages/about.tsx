import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout/Layout";
import { SEO } from "../components/seo/seo";
import { useGlobalContext } from "../context/AppProvider";
import { aboutData } from "../data/data";

type Props = {};

const about = (props: Props) => {
  const {
    state: { allImages },
  } = useGlobalContext();

  if (!allImages || (allImages && Object.keys(allImages).length < 1))
    return <div></div>;
  else {
    return (
      <Layout>
        <div className="about-container pb-10">
          <div className="about-me ">
            <div className="about-me-photo">
              <GatsbyImage
                image={allImages.profilePicSmall!}
                className="w-28 h-28 md:w-40 md:h-40  "
                objectFit="cover"
                objectPosition="center"
                alt="IchaIcon"
              />
            </div>
            <div className="about-me-message">
              {aboutData.message.map((item: string, index: number) => {
                return (
                  <p
                    className={index === 0 ? "font-bold" : "font-normal"}
                    key={index}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          {Object.entries(aboutData)
            .slice(1)
            .map((item, index) => {
              return (
                <div key={index} className="about-skill ">
                  <p className="capitalize col-span-1 font-bold">{item[0]}</p>

                  <p className="capitalize col-span-8 font-normal">{item[1]}</p>
                </div>
              );
            })}
        </div>
      </Layout>
    );
  }
};

export default about;

type HeadProps = {};
export const Head = (props: HeadProps) => {
  return (
    <SEO
      title="About"
      description="Hello, I'm Riza Hariati (依扎 / Icha). I mostly work on Front End Developing, from design to testing to deployment, and I also dabble on the Back End creating simple CRUD data"
    >
      <link id="icon" rel="icon" href="/src/images/icon.png" />
    </SEO>
  );
};
