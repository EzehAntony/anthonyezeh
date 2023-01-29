import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    var ref = useRef(null);
    const g = gsap.utils.selector(ref);

    useEffect(() => {
        gsap.from(g("img"), 1, {
            opacity: 0,
            y: 100,
            onComplete: () => {
                setTimeout(() => {
                    router.push("/profile");
                }, 1000);
            },
        });
    }, []);

    return (
        <div ref={ref} className={styles.container}>
            <Head>
                <title>Portfolio</title>
                <meta name="theme-color" content="#f6f1eb" />
            </Head>
            <img src="/logo.png" className={styles.logo}></img>
        </div>
    );
}
