import React from "react";
import { LuPhone } from "react-icons/lu";
import { LuFileBarChart2 } from "react-icons/lu";

const ContactSection = () => {
  return (
    <div className="contactSection">
      <div className="contactSectionItem contactSectionItem1">
        <p className="contactSectionItemICon">
          <LuPhone />
        </p>
        <p className="contactSectionItemText">연락처</p>
      </div>
      <div className="contactSectionItem contactSectionItem2">
        <p className="contactSectionItemICon">
          <LuPhone />
        </p>
        <p className="contactSectionItemText">네이버플레이스</p>
      </div>
      <div className="contactSectionItem contactSectionItem3">
        <p className="contactSectionItemICon">
          <LuFileBarChart2 />
        </p>
        <p className="contactSectionItemText">견적문의</p>
      </div>
    </div>
  );
};

export default ContactSection;
