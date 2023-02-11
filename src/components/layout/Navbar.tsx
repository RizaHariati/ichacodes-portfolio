import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Social from "./layoutComponents/Social";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { useGlobalContext } from "../../context/AppProvider";

const Navbar = () => {
  const { pathname } = useLocation();
  const {
    state: { allImages },
  } = useGlobalContext();

  if (!allImages || (allImages && Object.keys(allImages).length < 1))
    return <div></div>;
  else {
    return (
      <div className=" max-w-6xl mx-auto relative ">
        <Link to="/" className="logo-container">
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
            Icha<span className=" text-accent ">Codes</span>
          </h1>
        </Link>
        <div className="navbar-link-container">
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
            href="https://www.linkedin.com/in/riza-hariati-2021/"
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

//  <div className="h-full flex items-center justify-between px-2 max-w-4xl 2xl:max-w-6xl mx-auto">
//

//           <div className="flex items-center justify-center gap-1">
//
<Social />;
//           </div>
//         </div>
//         <div className=" bg-accent w-full h-0.5 rounded-full mb-auto"></div>
