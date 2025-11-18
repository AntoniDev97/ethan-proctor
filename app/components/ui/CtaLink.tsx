// components/ui/CtaLink.tsx

import Link from "next/link";
import React from "react";
import Image from "next/image";

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
      className={`group inline-flex items-center space-x-3 px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:opacity-80 transition-opacity ${className}`}
    >
      <span className="flex items-center justify-center w-4 h-4">
        <Image
          src="/Arrow.svg"
          alt="Arrow icon"
          width={16}
          height={16}
          className="w-full h-full"
        />
      </span>
      <span>{children}</span>
    </Link>
  );
};

export default CtaLink;
