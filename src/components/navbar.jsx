import Link from "next/link";

export default function NavbarComponent(){

    return (
        <ul className="hidden md:flex items-center justify-center gap-4">
            <Link href={"/"} className="navbarItem">
                Home
            </Link>
            <Link href={'/company'} className="navbarItem">
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
    );
};
