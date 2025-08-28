import type { ReactNode } from "react";

function Row({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-5">{children}</div>;
}

export default Row;
