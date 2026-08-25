// components/layout/Container.tsx

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
