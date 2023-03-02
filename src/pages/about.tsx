import React from "react";
import Layout from "../components/layout/Layout";
import { SEO } from "../components/seo/seo";
import { useGlobalContext } from "../context/AppProvider";
import { aboutData } from "../data/data";
import "../styles/aboutpage.css";
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
        <div className="about-page-container">
          <div className="about-container ">
            <div className="about-info-container ">
              <p className="about-info-text">{aboutData.message}</p>
            </div>
            <div className=" about-skill-container">
              {Object.entries(aboutData)
                .slice(1)
                .map((item, index) => {
                  return (
                    <div key={index} className="about-skill ">
                      <p className="about-category">{item[0]}</p>

                      <p className="about-item">{item[1]}</p>
                    </div>
                  );
                })}
            </div>
          </div>
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
