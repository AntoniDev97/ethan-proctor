// components/layout/Container.tsx

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-[1800px] mx-auto px-4 md:px-6 xl:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
