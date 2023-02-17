import React from "react";
import { TextHeightType } from "./Home";

type Props = {
  textHeight: TextHeightType;
};

const MainProfileInfo = ({ textHeight }: Props) => {
  return (
    <div className="main-page-text animate-mainImageX">
      <h2 className="text-right text-textDrk">Hello, I'm Riza Hariati </h2>{" "}
      <h2 className="text-right text-accent">(依扎 / Icha)</h2>
      <h3 className={textHeight.mainInfo}>
        Whether it's for personal purpose or for small business, it will be my
        pleasure to create interesting reliable websites and apps that reflect
        your goals and personality.
      </h3>
    </div>
  );
};

export default MainProfileInfo;
