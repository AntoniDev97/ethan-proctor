// components/ui/CustomCursor.tsx

"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

const CURSOR_SIZE = 50;

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label";

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-CURSOR_SIZE);
  const y = useMotionValue(-CURSOR_SIZE);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - CURSOR_SIZE / 2);
      y.set(e.clientY - CURSOR_SIZE / 2);
      setVisible(true);
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      setHovered(!!target?.closest(INTERACTIVE_SELECTOR));
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-9999 rounded-full bg-white mix-blend-difference"
      style={{ x, y, width: CURSOR_SIZE, height: CURSOR_SIZE }}
      animate={{ scale: hovered ? 1 : 0.5, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    />
  );
};

export default CustomCursor;
