import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { useGlobalContext } from "../../context/AppProvider";

const Navbar = () => {
  const { pathname } = useLocation();
  const {
    state: { allImages, scrollPosition, scrollingUp },
  } = useGlobalContext();

  if (!allImages || (allImages && Object.keys(allImages).length < 1))
    return <div></div>;
  else {
    return (
      <div className=" max-w-6xl mx-auto relative z-20 ">
        <Link to="/" className="logo-container animate-mainImageX">
          <div className="logo-img">
            <GatsbyImage
              image={allImages?.iconLink!}
              className="h-9 md:h-10"
              objectFit="cover"
              objectPosition="center"
              alt="IchaIcon"
            />
          </div>
          <h1 className=" text-textDrk md:text-2xl lg:text-3xl ">
            Icha<span className=" text-accentHover ">Codes</span>
          </h1>
        </Link>
        <div className="navbar-link-container animate-projectEnter">
          <a href="https://github.com/RizaHariati" className="icon-img">
            <div className="icon-btn">
              <StaticImage
                src="../../images/icons/Github.svg"
                alt="Github"
                objectFit="cover"
                objectPosition="center"
                placeholder="dominantColor"
              />
            </div>
          </a>
          <a
            href="https://id.linkedin.com/in/riza-hariati-2021"
            className="icon-img"
          >
            <div className="icon-btn">
              <StaticImage
                src="../../images/icons/LinkedIn.svg"
                alt="LinkedIn"
                objectFit="cover"
                objectPosition="center"
                placeholder="dominantColor"
              />
            </div>
          </a>
          <Link to={pathname === "/" ? "/about/" : "/"} className="icon-img">
            <div className="icon-btn">
              <GatsbyImage
                image={allImages?.iconImage!}
                className="w-full h-full "
                objectFit="cover"
                objectPosition="center"
                alt="riza hariati"
              />
            </div>
          </Link>
        </div>
      </div>
    );
  }
};

export default Navbar;
