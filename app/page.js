"use client";
import Image from "next/image";
// import LiquidLight from "@/components/Hover/page";
import styles from "./page.module.css";
import GradualBlur from "@/components/BottBlur/page";
// import SciFiDashboard from "@/components/Background/page";
// import SciFiDashboard from "@/components/Background/page";
import Mousehov from "@/components/MOuseH/page";
import Dashboard from "@/components/Backgr/page";
import Navbar from "@/components/Navbar/page";
// import Card from "@/components/Scrol/page";
import Skills from "@/components/Skill/page";
import { ContactF } from "@/components/Contact/page";
import ScrollReveal from "@/components/ScrolRevel/page";
// import { ReactTyped } from "react-typed";
import Projectss from "@/components/Projets/page";
import TypedComponent from "@/components/Typecom/page";
import Link from "next/link";

// import dynamic from "next/dynamic";

// const Dashboard = dynamic(() => import("@/components/Backgr/page"), { ssr: false });
// const GradualBlur = dynamic(() => import("@/components/BottBlur/page"), { ssr: false });
// const Mousehov = dynamic(() => import("@/components/MOuseH/page"), { ssr: false });
// const Card = dynamic(() => import("@/components/Scrol/page"), { ssr: false });
// const Skills = dynamic(() => import("@/components/Skill/page"), { ssr: false });
// const Projectss = dynamic(() => import("@/components/Projets/page"), { ssr: false });
// const ContactF = dynamic(() => import("@/components/Contact/page"), { ssr: false });
// const ScrollReveal = dynamic(() => import("@/components/ScrolRevel/page"), { ssr: false });
// const TypedComponent = dynamic(() => import("@/components/Typecom/page"), { ssr: false });

export default function Home() {
  return (
    <>
      {/*  */}
      <Navbar />
      <section id="main" className={styles.Main}>
        <div className={styles.HomeAB}>
          <ScrollReveal>
            <div className={styles.IntroMain}>
              <div className={styles.IntroText}>
                <div className="warepped">
                  <div className="">
                    {" "}
                    <h2>
                      Hi,
                      <br />
                      I&apos;m <span className={styles.AbFaiq}>Abdul Faiq</span>
                    </h2>
                  </div>
                  <div className="tes"></div>
                  <div className="tes"></div>
                  <div className="tes"></div>
                  <div className="tes"></div>
                  <TypedComponent />
                </div>
              </div>
              <div className="gh"></div>
              <div className={styles.links}>
                <div className="gtthub">
                  <Link
                    href="https://github.com/abdulfaiq47"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className={styles.github}
                      src="./github.svg"
                      width={24}
                      height={24}
                      alt="GitHub"
                      priority
                    />
                  </Link>
                </div>
                <div className="linkdin">
                  <Link
                    href="www.linkedin.com/in/abdul-faiq47"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className={styles.linkdin}
                      src="./linkdin.svg"
                      width={24}
                      height={24}
                      alt="Linkdin"
                      priority
                    />
                  </Link>
                </div>
              </div>

              <div className={styles.FaiqImg}>
                <Image
                  className={styles.ImgBack}
                  src="/img back.png"
                  width={100}
                  height={100}
                  alt="Faiq"
                  priority
                />
                {/* <Image
                  className={styles.FImg}
                  src="/Faiq.png"
                  width={100}
                  height={100}
                  alt="Faiq"
                  priority
                /> */}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className={styles.background}>
          <Mousehov />
          <Dashboard />
        </div>
      </section>
      <hr className={styles.liquidhr} />
   
      <section id="skill" className={styles.Skill}>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
      </section>
      <hr className={styles.liquidhr} />
      <section id="projects" className={styles.projects}>
        <ScrollReveal>
          <Projectss />
        </ScrollReveal>
      </section>
      <hr className={styles.liquidhr} />
      <section id="contact" className={styles.Contact}>
        <ScrollReveal>
          <ContactF />
        </ScrollReveal>
      </section>
      <div
       className={styles.blurBottom}
      >
        <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </div>
      
    </>
  );
}
