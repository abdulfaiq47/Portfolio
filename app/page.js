"use client";
import Image from "next/image";
import styles from "./page.module.css";
import LetterGlitch from "@/components/back/page";
import SciFiDashboard from "@/components/background/page";
import LiquidLight from "@/components/hover/page";

export default function Home() {
  

  return (
    <>
      
        {/* <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        /> */}

      <LiquidLight />
      <SciFiDashboard />
      <hr className={styles.liquidhr} />
    </>

  );
}
