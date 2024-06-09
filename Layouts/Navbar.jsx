import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbarItem">Home</li>
      <Link href={'/after-construction'} className="navbarItem">업체소개</Link>
      <li className="navbarItem">시공사례</li>
      <li className="navbarItem">견적신청</li>
      <li className="navbarItem">문의하기</li>
    </ul>
  );
};

export default Navbar;
