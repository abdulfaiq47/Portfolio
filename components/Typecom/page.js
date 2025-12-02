"use client";

import { ReactTyped } from "react-typed";

export default function TypedText() {
  return (
    <ReactTyped
      strings={[
        "Web Developer",
        "Frontend Developer",
        "MERN Stack Developer",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  );
}
