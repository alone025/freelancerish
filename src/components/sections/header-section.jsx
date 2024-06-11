import { IoIosArrowForward } from "react-icons/io";
import {Navbar} from "@/src/components";

export default function HeaderComponent() {
  return (
    <div className="header">
      <div className="headerLogo" />

      <Navbar />

      <div className="headerRight">
        <ul className="headerRightItems">
          <li>전체보기 로그인</li>
          <li>
            <IoIosArrowForward />
          </li>
        </ul>

        <button className="headerRightBtn">견적문의전화</button>
      </div>
    </div>
  );
};
