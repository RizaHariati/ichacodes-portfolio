import React from "react";
import Layout from "./layout/Layout";

type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <div className=" main-container " style={{ height: "calc(100vh - 100px)" }}>
      <div className="main-tagline">
        <h2 className="tagline text-center text-base mt-28 md:text-2xl text-accent ">
          Success is a Series of Small Wins
        </h2>
      </div>
    </div>
  );
};

export default LoadingPage;
