import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function NavbarComponent({ setOpen }) {
  return (
    <div className={``}>
      <ul className={`hidden md:flex items-center justify-center gap-4`}>
        <Link href={"/"} className="navbarItem">
          Home
        </Link>
        <Link href={"/company"} className="navbarItem">
          업체소개
        </Link>
        <Link href={"/after-construction"} className="navbarItem">
          시공사례
        </Link>
        <li className="navbarItem">견적신청</li>
        <Link href={"/contact"} className="navbarItem">
          문의하기
        </Link>
      </ul>

      {/*  */}

      <ul
        className={`${
          setOpen ? "flex" : "hidden"
        } md:hidden transition-all items-center justify-center gap-6 absolute right-0 top-[90px] p-[70px] bg-[#212121] flex-col w-[375px] `}
      >
        <Link href={"/"} className="navbarItem">
          Home
        </Link>
        <Link href={"/company"} className="navbarItem">
          업체소개
        </Link>
        <Link href={"/after-construction"} className="navbarItem">
          시공사례
        </Link>
        <li className="navbarItem">견적신청</li>
        <Link href={"/contact"} className="navbarItem">
          문의하기
        </Link>
        <div className="header-right-media flex-row gap-2 text-[16px] items-center">
          <li>전체보기 로그인</li>
          <li>
            <IoIosArrowForward />
          </li>
        </div>
      </ul>
    </div>
  );
}
