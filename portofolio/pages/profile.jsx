import { gsap, Power4 } from "gsap";
import styles from "../styles/profile.module.css";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { TextPlugin } from "gsap/dist/TextPlugin";
import axios from "axios";
import { ClapSpinner } from "react-spinners-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  const ref = useRef(null);
  const t1 = gsap.timeline({});
  const g = gsap.utils.selector(ref);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({
    from: "",
    mail: "",
  });

  const send = async () => {
    console.log(data.from, data.mail);
    setLoading(true);
    setSent(false);
    await axios({
      url: "/api/contact",
      method: "POST",
      data: {
        from: data.from,
        mail: data.mail,
      },
    })
      .then((res) => {
        setSent(true);
        setLoading(false);
        toast.success("Mail sent", {
          autoClose: 3000,
          closeButton: true,
        });
      })
      .catch((err) => {
        setSent(false);
        setLoading(false);
        console.log(err);
      });
  };

  //timeline
  useEffect(() => {
    t1.from(g("#image:nth-of-type(1)"), 1, { y: -200, opacity: 0 })
      .from(g("#image:nth-of-type(1) img"), { scale: 2 }, 0.2)
      .from(
        g("#image:nth-of-type(2)"),
        {
          y: 200,
          opacity: 0,
        },
        0.1
      )
      .from(g("#image:nth-of-type(2) img"), { scale: 2 }, 0.2)
      .from(g("#right p"), 1, {
        opacity: 0,
        y: 50,
        onComplete: () => {
          gsap.to(g("#right p"), {
            text: "Welcome to my world!💖",
            repeat: 1,
            delay: 2,
            yoyo: true,
            repeatDelay: 1,
            ease: "none",
            duration: 1.5,
          });
        },
      })
      .from(g("#right h1"), { opacity: 0, y: -40 }, 0.8)
      .from(g("#right h2"), {
        y: -50,
        opacity: 0,
        ease: "bounce",
        onComplete: () => {},
      });
  }, []);

  useEffect(() => {
    //header text
    gsap.to(g("header p"), 1, {
      text: "Anthony's portfolio ",
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    });

    //hero text animation
    gsap.to(g("#right > p"), 1.5, {
      text: "Welcome to my world",
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    });

    //arrow
    gsap.from(g("#summaryarrow"), {
      y: -20,
      repeat: -1,
      duration: 1.2,
      ease: Power4.easeInOut,
    });
    gsap.from(g("#arrow"), {
      y: -20,
      repeat: -1,
      duration: 1.2,
      ease: Power4.easeInOut,
    });

    //summary

    gsap.from(g("#summary h1"), 1, {
      y: 40,
      opacity: 0,
      scrollTrigger: {
        trigger: "#summary h1",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
      },
    });
    gsap.from(g("#summary p"), 1, {
      x: 40,
      opacity: 0,
      scrollTrigger: {
        trigger: "#summary p",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    //Skills div gsap animation
    gsap.from(g("#skills h1"), 1, {
      y: 40,
      opacity: 0,
      scrollTrigger: {
        trigger: "#skills h1",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
      },
    });

    for (var i = 1; i < 13; i++) {
      gsap.from(g(`#skills li:nth-of-type(${i}) img`), 1, {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: `#skills li:nth-of-type(${i}) img`,
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
        },
      });

      gsap.from(g(`#skills li:nth-of-type(${i})`), 1, {
        x: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: `#skills li:nth-of-type(${i})`,
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
        },
      });

      gsap.from(g(`#skills li:nth-of-type(${i}) p`), 1, {
        x: -40,
        opacity: 0,
        scrollTrigger: {
          trigger: `#skills li:nth-of-type(${i}) p`,
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
        },
      });
    }

    //Project div animation

    //projects gsap animation
    gsap.from(g(`#projects h1`), 1, {
      y: 40,
      opacity: 0,
      scrollTrigger: {
        trigger: `#projects  h1`,
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
      },
    });

    for (var i = 0; i < 7; i++) {
      gsap.from(g(`#projects  div:nth-of-type(${i}) img`), 1, {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: `#projects div:nth-of-type(${i}) img`,
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
        },
      });

      gsap.from(g(`#projects div:nth-of-type(${i})`), 1, {
        x: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: `#projects div:nth-of-type(${i})`,
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
        },
      });

      gsap.from(g(`#projects div:nth-of-type(${i}) p`), 1, {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: `#projects div:nth-of-type(${i}) p`,
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
        },
      });
    }

    //Contact me div animation

    gsap.from(g("#contact img"), {
      x: -60,
      opacity: 0,
      scrollTrigger: {
        trigger: `#contact img`,
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
      },
    });
    gsap.from(g("#contact #phone"), {
      y: -60,
      scale: 1.1,
      opacity: 0,
      scrollTrigger: {
        trigger: `#contact #phone`,
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className={styles.profile} ref={ref}>
      <Head>
        <title>Portfolio</title>
        <meta name="theme-color" content="#f6f1eb" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
        </style>
      </Head>
      <div id="hero" className={styles.hero}>
        <header>
          <p>portfolio💖</p>
        </header>
        <div id="left" className={styles.left}>
          <div id="image" className={styles.image}>
            <img src={"/tony.png"} width="100%" height="100%" />
          </div>
          <div id="image" className={styles.image}>
            <img src={"/anthony.png"} width="100%" height="100%" />
          </div>
        </div>
        <div id="right" className={styles.right}>
          <p>Hey, viewer!</p>
          <h1>Hi, I'm anthony.</h1>
          <h2>A Web developer</h2>
          <h1>
            based in <span>ni</span>ger<span>ia</span>
          </h1>
        </div>
        <img
          id="arrow"
          onClick={() => {
            alert("Clicked arrow");
          }}
          className={styles.arrow}
          src="/down.svg"
          alt=""
        />
      </div>
      <div id="summary" className={styles.summary}>
        <img
          id="summaryarrow"
          className={styles.arrow}
          src="/down.svg"
          alt=""
        />
        <h1 className="summaryh">Summary</h1>
        <p>
          I’m a self taught <span>front-end</span> web developer with a few
          years of experience. I have acquired experience that has improved my
          productivity in the long run, having worked on personal projects with
          a few friends, This has impacted on my skills, problem solving
          ability, communication ability, and ability to carry out research
          pertaining to what is required for a job. It is an art to me, I love
          what I do and I really admire the process to completion; it is
          addictive. When I'm not working, I enjoy and spend time learining
          languages.
        </p>
      </div>

      <div id="skills" className={styles.skills}>
        <h1>Skills</h1>
        <ul id="skillsUl">
          <li>
            <img src="/react.svg" alt="" srcset="" />
            <p>react</p>
          </li>
          <li>
            <img src="/express.svg" alt="" srcset="" />
            <p>Express</p>
          </li>
          <li>
            <img src="/nodejs.svg" alt="" srcset="" />
            <p>node</p>
          </li>
          <li>
            <img src="/javascript.svg" alt="" srcset="" />
            <p>javascript</p>
          </li>
          <li>
            <img src="/vercel.svg" alt="" srcset="" />
            <p>vercel</p>
          </li>
          <li>
            <img src="/github.svg" alt="" srcset="" />
            <p>github</p>
          </li>
          <li>
            <img src="/mongodb.svg" alt="" srcset="" />
            <p>MongoDB</p>
          </li>
          <li>
            <img src="/html5.svg" alt="" srcset="" />
            <p>HTML5</p>
          </li>
          <li>
            <img src="/css.svg" alt="" srcset="" />
            <p>CSS</p>
          </li>
          <li>
            <img src="/gsap.svg" alt="" srcset="" />
            <p>GSAP</p>
          </li>
          <li>
            <img src="/heroku.svg" alt="" srcset="" />
            <p>heroku</p>
          </li>
          <li>
            <img src="/adobe.svg" alt="" srcset="" />
            <p>photoshop</p>
          </li>
        </ul>
      </div>

      <div id="projects" className={styles.projects}>
        <h1>Projects</h1>
        <ul>
          <Link href="https://crayonne-loan.vercel.app/">
            <div>
              <img src="/loan.png" alt="" /> <p>Loan app landing page</p>
            </div>
          </Link>
          <Link href="https://crayonnedict.vercel.app">
            <div>
              <img src="/dictionary.png" alt="" /> <p>Dictionary app</p>
            </div>
          </Link>
          <Link href="https://amana-crayonne.vercel.app">
            <div>
              <img src="/amana.png" alt="" /> <p>Amana landing page</p>
            </div>
          </Link>
          <Link href="https://ezehantony.github.io/">
            <div>
              <img src="/movie.png" alt="" /> <p>Movieverse</p>
            </div>
          </Link>

          <Link href="https://jotter-io.vercel.app/">
            <div>
              <img src="/jotter.png" alt="" /> <p>Jotter</p>
            </div>
          </Link>

          <Link href="https://smooon.vercel.app/">
            <div>
              <img src="/smooon.png" alt="" /> <p>Smooon</p>
            </div>
          </Link>
          <Link href="https://crayonne.vercel.app/">
            <div>
              <img src="/portfolio.png" alt="" /> <p>Portfolio</p>
            </div>
          </Link>
          <Link href="https://airdnd.vercel.app/">
            <div>
              <img src="airdnd.png" alt="" /> <p>Airdnd</p>
            </div>
          </Link>
        </ul>
      </div>

      <div id="contact" className={styles.contact}>
        <img src="/chat.svg" alt="" />
        <div id="phone" className={styles.phone}>
          <div className={styles.screen}>
            <form>
              <main>
                <p>mail:</p>
                <input
                  type="text"
                  value={data.from}
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, from: e.target.value }));
                  }}
                  name="contact"
                  placeholder="example@gmail.com"
                />
              </main>
              <main>
                <p>mail</p>
                <textarea
                  type="text"
                  value={data.mail}
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, mail: e.target.value }));
                  }}
                  name="contact"
                  placeholder="Your mail here"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    send();
                  }}
                >
                  {!loading && "Send"}
                  <ClapSpinner
                    size={18}
                    frontColor={"#f3eade"}
                    loading={loading}
                  />
                </button>
              </main>
            </form>
          </div>
        </div>
      </div>

      <footer>
        <p>my social links</p>
        <div className={styles.link}>
          <Link href={"https://www.facebook.com/anthony.ezeh.37017"}>
            <img src="/facebook.svg" alt="Facebook" />
          </Link>
          <Link href={"https://wa.link/nnxvsf"}>
            <img src="/whatsapp.svg" alt="Whatsapp" />
          </Link>
        </div>
        <h6>©Copyright ©2022 All rights reserve</h6>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default Profile;
