"use client";
import { useState } from "react";
import Image from "next/image";
import style from "./page.module.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <div className={`${oswald.className} ${style.Navbar}`}>
      <div className={style.Faiq}>Faiq</div>

      {/* Desktop Menu */}
      <div className={style.Ulcomp}>
        <ul>
          {["main", "about", "skill", "projects", "contact"].map((item) => (
            <li key={item} className={style.underlineAnimation}>
              <button onClick={() => handleClick(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger */}
      <button
        className={style.menuBtn}
        onClick={() => setOpen(!open)}
      >
        <Image src="/menu.svg" alt="menu" width={26} height={26} />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className={style.mobileMenu}>
          {["main", "about", "skill", "projects", "contact"].map((item) => (
            <button key={item} onClick={() => handleClick(item)}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
