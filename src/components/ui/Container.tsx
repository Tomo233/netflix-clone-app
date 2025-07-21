import type { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="container mx-auto w-11/12">{children}</div>;
}

export default Container;
