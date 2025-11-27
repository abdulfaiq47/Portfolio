"use client";
import { useEffect } from "react";

const LoaderMain = () => {
  useEffect(() => {
    const loader = document.getElementById("Loader");
    const line = document.getElementById("Line");
 
    const hideLoader = async () => {
      if (loader) {
        loader.style.transition = "opacity 1s ease";
        line.style.transition = "width 1s ease";
        line.style.width = "70%";
        line.style.width = "100%";
        await new Promise((resolve) => setTimeout(resolve, 1000));
        loader.style.opacity = "0";
        loader.style.display = "none"
      }
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
    }

    return () => window.removeEventListener("load", hideLoader);
  }, []);

  return (
    <div
      id="Loader"
      style={{
        height: "100vh",
        width: "100vw", // ✅ fixed typo
        position: "fixed", // ✅ stays on top
        top: 0,
        left: 0,
        background: "#05040a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        zIndex: 9999, // ✅ ensures it's above all content
      }}
    >
      <h1>Faiq</h1>

      <hr
        id="Line"
        style={{
          backgroundColor: "rgb(0, 170, 255)",
          height: "5px",
          width: "5%",
          position: "fixed",
          bottom: "1px",
          left: "1px",
          border: "none",
        }}
      />
    </div>
  );
};

export default LoaderMain;
