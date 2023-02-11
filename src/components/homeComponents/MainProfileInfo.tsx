import React from "react";

type Props = {};

const MainProfileInfo = (props: Props) => {
  return (
    <div className="main-page-text animate-mainImageX">
      <h2 className="text-right">Hello, I'm Riza Hariati </h2>{" "}
      <h2 className="text-right text-accent">(依扎 / Icha)</h2>
      <h3 className="leading-6 md:leading-8 pb-0 sm:pb-4 md:pb-5 lg:pb-8">
        Whether it's for personal purpose or for small business, it will be my
        pleasure to create interesting reliable websites and apps that reflect
        your goals and personality.
      </h3>
    </div>
  );
};

export default MainProfileInfo;
