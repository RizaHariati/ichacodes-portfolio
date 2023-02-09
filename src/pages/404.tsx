import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";

import { navigate } from "gatsby";
import { SEO } from "../components/seo/seo";

type Props = {};

const Error = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }, []);

  return (
    <>
      <Layout>
        <div className="main-container">
          <div className="tagline-container">
            <h3 className="tagline mt-5">404 - Page not found</h3>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Error;
export const Head = ({ location, params, data, pageContext }: any) => {
  console.log({ pageContext });
  return (
    <SEO title="Error" description="404 - Page not found">
      <title>IchaCodes | Error</title>
    </SEO>
  );
};
