import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ImageCardComponent from "@/src/components/image-card/component";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main>
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
                <div className={'grid grid-cols-3'}>
                    <ImageCardComponent src={'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630'} title={'이미지 제목/설명'}/>
                </div>
            </main>
            <section></section>
        </div>
    );
}
