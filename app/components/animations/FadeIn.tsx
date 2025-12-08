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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={priority ? undefined : { opacity: 1, y: 0 }}
      animate={priority ? { opacity: 1, y: 0 } : undefined}
      viewport={priority ? undefined : { once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
