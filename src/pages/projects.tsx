import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout/Layout";
import { useGlobalContext } from "../context/AppProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ImageModal from "../components/modal/ImageModal";
import { ShowModalType } from "../context/types.d";
import { SEO } from "../components/seo/seo";

const Projects = ({ pageContext: { project } }: any) => {
  // page context didapat dari gatsby-none

  const {
    state: { portfolioImages },
  } = useGlobalContext();

  const [showModal, setShowModal] = useState<ShowModalType>({
    status: false,
    type: "",
    value: [],
  });

  const showingModal = (type: string, value: IGatsbyImageData[]) => {
    setShowModal({
      status: true,
      type,
      value,
    });
  };

  if (
    !portfolioImages ||
    (portfolioImages && Object.keys(portfolioImages).length < 1)
  ) {
    return <div></div>;
  } else {
    const image = portfolioImages[project.slug];
    return (
      <>
        <Layout>
          <div className="project-container">
            {showModal.status && (
              <ImageModal setShowModal={setShowModal} showModal={showModal} />
            )}
            <div className="project-info-container  pb-14">
              <div className="project-phone">
                <button
                  className="project-phone-image"
                  // onClick={() =>
                  //   showingModal("phone", [image.mainphone!, image.subphone!])
                  // }
                >
                  <GatsbyImage
                    image={image.mainphone!}
                    objectFit="fill"
                    className=" w-32 h-52 2xl:h-80"
                    objectPosition="center"
                    alt={project.title}
                  />
                </button>
              </div>
              <div className="project-info">
                <h2 className="font-bold">{project.title}</h2>
                <div className="project-description">
                  {project.description.map(
                    (projectItem: string, projectIndex: number) => {
                      return <p key={projectIndex}>{projectItem}</p>;
                    }
                  )}
                </div>
                <p>
                  <span className="border border-accent rounded-sm px-1 w-48 mr-2">
                    Main Program{" "}
                  </span>
                  : {project.mainProgram}
                </p>
                <p>
                  {" "}
                  <span className="border border-accent rounded-sm px-1 w-48 mr-2">
                    Dependencies{" "}
                  </span>{" "}
                  : {project.dependencies.toString()}
                </p>
                <a
                  href={project.url}
                  className="standard-btn p-1 absolute right-4 bottom-4"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Visit website
                </a>
              </div>
            </div>
            <div className="project-image-container">
              <button
                className="project-image "
                onClick={() =>
                  showingModal("website", [image.short!, image.mainphone!])
                }
              >
                <GatsbyImage
                  image={image.short!}
                  objectFit="fill"
                  className="h-44 sm:h-52 2xl:h-80"
                  objectPosition="center"
                  alt="image short"
                  loading="eager"
                />
              </button>
              <button
                className="project-image"
                onClick={() =>
                  showingModal("website", [image.subpage!, image.subphone!])
                }
              >
                <GatsbyImage
                  image={image.subpage!}
                  objectFit="fill"
                  className="h-44 sm:h-52 2xl:h-80"
                  objectPosition="center"
                  alt="image subphone"
                  loading="eager"
                />
              </button>
            </div>
          </div>
        </Layout>
      </>
    );
  }
};

export default Projects;

export const Head = ({ pageContext: { project } }: any) => {
  return (
    <SEO title={project?.title} description={project?.description[0]}>
      <link id="icon" rel="icon" href="/src/images/icon.png" />
    </SEO>
  );
};
