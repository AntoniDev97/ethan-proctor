"use client";

import * as motion from "motion/react-client";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  priority?: boolean;
}

const FadeIn = ({ children, className = "", delay = 0, priority = false }: FadeInProps) => {
  // Above-the-fold content (hero images) fades in with CSS so it can start on first
  // paint rather than waiting for JavaScript, which would delay the page's main image.
  if (priority) {
    return (
      <div
        className={`motion-safe:animate-fade-up ${className}`}
        style={delay ? { animationDelay: `${delay}s` } : undefined}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
