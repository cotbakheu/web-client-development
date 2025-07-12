import React from "react";

type Props = {
  children?: React.ReactNode;
};

function layout({ children }: Props) {
  return <div className="min-h-screen">{children}</div>;
}

export default layout;
