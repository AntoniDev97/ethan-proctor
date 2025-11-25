// components/layout/Container.tsx

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full px-4 md:px-6 lg:xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
