import { IoIosArrowForward } from "react-icons/io";
import { Navbar } from "@/src/components";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import React from "react";

export default function HeaderComponent() {
  const [menuBarOpen, setMenuBarOpen] = React.useState(false);

  return (
    <div className="header">
      <div className="headerLogo" />

      <Navbar setOpen={menuBarOpen} />

      <div className="headerRight">
        <ul className="headerRightItems">
          <li>전체보기 로그인</li>
          <li>
            <IoIosArrowForward />
          </li>
        </ul>

        <button className="headerRightBtn">견적문의전화</button>
        {!menuBarOpen ? (
          <FiMenu
            className="md:hidden flex w-7 h-7"
            onClick={() => setMenuBarOpen(true)}
          />
        ) : (
          <IoClose
            className="md:hidden flex w-8 h-8"
            onClick={() => setMenuBarOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
