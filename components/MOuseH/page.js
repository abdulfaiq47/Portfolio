"use client";
import { useEffect, useRef } from "react";
import "./LiquidLight.css";

export default function Mousehov() {
  const maskRef = useRef(null);
  const pos = useRef({ x: 50, y: 50 });
  const target = useRef({ x: 50, y: 50 });
  const raf = useRef(null);

  useEffect(() => {
    const mask = maskRef.current;

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;

      mask.style.setProperty("--x", `${pos.current.x}%`);
      mask.style.setProperty("--y", `${pos.current.y}%`);

      raf.current = requestAnimationFrame(animate);
    };

    animate();

    const updatePos = (x, y) => {
      target.current.x = (x / window.innerWidth) * 100;
      target.current.y = (y / window.innerHeight) * 100;
    };

    const onMouseMove = (e) => updatePos(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      const t = e.touches[0];
      updatePos(t.clientX, t.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div className="liquid-container">
      <div className="liquid-content" />
      <div className="liquid-mask" ref={maskRef} />
    </div>
  );
}
