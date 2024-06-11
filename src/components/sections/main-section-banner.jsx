import React from "react";
import {HeaderSection} from "@/src/components";

const MainSectionBanner = ({ title, text, desc, img }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="mainSectionBanner"
    >
      <HeaderSection />

      <h2 className="mainBannerTitle">{title}</h2>
      <p className="mainBannerText">{text}</p>
      <p className="mainBannerDesc">{desc}</p>
    </div>
  );
};

export default MainSectionBanner;
