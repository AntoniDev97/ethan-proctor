// components/layout/Container.tsx

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full px-5 md:px-12 lg:px-20 xl:px-32 2xl:px-40 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
