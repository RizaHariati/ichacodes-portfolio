import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="block footer-container">
      <div className=" bg-accent w-full h-0.5 rounded-full mb-1"></div>
      <div className="footer-content">
        <p className="footer-item">
          Powered by Gatsby.JS copyright &copy;{new Date().getFullYear()}{" "}
          IchaCoding &nbsp;
        </p>
        <a
          href="https://www.freepik.com/pikisuperstar"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-item"
        >
          * Background by pikisuperstar / Freepik *
        </a>

        <div className="footer-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com/icon/76948/cash"
          >
            &nbsp; Cash
          </a>
          icon by
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
