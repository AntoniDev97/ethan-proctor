// components/ui/CtaLink.tsx

import Link from "next/link";
import React from "react";

interface CtaLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CtaLink: React.FC<CtaLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <Link
      href={href}
      style={{
        backgroundColor: "#8e8879",
        color: "#161616",
      }}
      className={`group inline-flex items-center space-x-3 px-6 py-3 rounded-full font-semibold uppercase text-xs tracking-widest hover:opacity-80 transition-opacity ${className}`}
    >
      <span>&rarr;</span>
      <span>{children}</span>
    </Link>
  );
};

export default CtaLink;
