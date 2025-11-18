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
        className={`group inline-flex items-center space-x-4 px-7 py-3 rounded-full font-semibold uppercase text-2xl tracking-[0.08em] hover:opacity-80 transition-opacity ${className}`}
      style={{
        backgroundColor: "#8e8879",
        color: "#161616",
        fontFamily: '"din-2014", sans-serif',
      }}
    >
      <span className="flex items-center justify-center w-7 h-7">
          <Image
            src="/Arrow.svg"
            alt="Arrow icon"
            width={24}
            height={24}
          className="w-full h-full"
        />
      </span>
      <span>{children}</span>
    </Link>
  );
};

export default CtaLink;
