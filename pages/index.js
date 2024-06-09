import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import MainSectionBanner from "@/components/MainSectionBanner";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <MainSectionBanner
          title={"청주지붕공사"}
          text={"30년 경력의 지붕장인 청주지붕공사 입니다."}
          desc={"지붕개량/칼라강판/기와/슁글/징크 시공전문"}
          img="/images/mainBanner.png"
        />

        <div>
          <h1>Home</h1>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </main>
      <section></section>
    </div>
  );
}
