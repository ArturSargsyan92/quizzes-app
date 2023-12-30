import React, { ReactNode } from "react";

interface ContainerProps {
  className: string | null;
  children: ReactNode;
}

function Container({ className, children }: ContainerProps) {
  const classes = className ? `container ${className}` : "container";

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default Container;
