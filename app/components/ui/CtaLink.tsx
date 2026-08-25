// components/ui/CtaLink.tsx

import Link from "next/link";
import React from "react";
import ArrowIcon from "./ArrowIcon";

interface CtaLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Outlined pill CTA with a leading arrow.
 * Inherits its colour from the parent (currentColor), so it works on
 * both the cream and black sections.
 */
const CtaLink: React.FC<CtaLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`group cta-pill inline-flex items-center gap-2.5 rounded-full border border-current px-5 py-2 text-eyebrow font-extrabold uppercase tracking-[0.12em] ${className}`}
    >
      <ArrowIcon className="w-5 h-auto shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      <span>{children}</span>
    </Link>
  );
};

export default CtaLink;
