import React from "react";
import "../styles/MainSectionBanner.module.css";

const MainSectionBanner = ({ title, text, desc, img }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="mainSectionBanner"
    >
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{desc}</p>
    </div>
  );
};

export default MainSectionBanner;
