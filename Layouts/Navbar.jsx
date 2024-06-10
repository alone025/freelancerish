import Link from "next/link";

const Navbar = () => {
    return (
        <ul className="navbar">
            <Link href={"/"} className="navbarItem">
                Home
            </Link>
            <li className="navbarItem">
                업체소개
            </li>
            <Link href={"/after-construction"} className="navbarItem">
                시공사례
            </Link>
            <li className="navbarItem">견적신청</li>
            <Link href={"/contact"} className="navbarItem">
                문의하기
            </Link>
        </ul>
    );
};

export default Navbar;
