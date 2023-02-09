import React from "react";
import { useGlobalContext } from "../context/AppProvider";
import LoadingPage from "../components/LoadingPage";
import Home from "../components/Home";
import Layout from "../components/layout/Layout";
import { SEO } from "../components/seo/seo";

type Props = {};
const index = (props: Props) => {
  const {
    state: { allImages },
  } = useGlobalContext();

  return (
    <Layout>
      {!allImages ||
        (allImages && Object.keys(allImages).length < 1 && <LoadingPage />)}
      {allImages && Object.keys(allImages).length > 0 && <Home />}
    </Layout>
  );
};

export default index;

export const Head = (props: any) => {
  return (
    <SEO
      title="Welcome"
      description="Hello, I'm Riza Hariati (依扎 / Icha). Welcome to IchaCodes' portfolio website showcasing a selected few of the websites I have built since 2020"
    >
      <link id="icon" rel="icon" href="/src/images/icon.png" />
    </SEO>
  );
};
