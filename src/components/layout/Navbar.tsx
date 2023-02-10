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
      <div className=" bg-pink-400 max-w-6xl mx-auto relative ">
        <Link
          to="/"
          className=" absolute top-3 left-3 cursor-pointer hover:opacity-70 transition-all flex flex-row items-center justify-start gap-x-2"
        >
          <div className="w-10 h-10 rounded-full hover:opacity-75 transition-all sm:hidden md:block overflow-hidden">
            <GatsbyImage
              image={allImages?.iconLink!}
              className="h-10"
              objectFit="fill"
              objectPosition="center"
              alt="IchaIcon"
            />
          </div>
          <h1 className=" text-textDrk lg:text-3xl ">
            Icha<span className=" text-accent ">Codes</span>
          </h1>
        </Link>
        <div className="absolute right-0 top-16 w-14 h-44 md:h-52 2xl:h-60 z-40 flex flex-col gap-3 border-l-2 border-accent transition-all ">
          <Link
            to={pathname === "/" ? "/about/" : "/"}
            className="w-10 h-10 ml-auto"
          >
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
          <a
            href="https://github.com/RizaHariati"
            className="w-10 h-10 ml-auto"
          >
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
            className="w-10 h-10 ml-auto"
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
