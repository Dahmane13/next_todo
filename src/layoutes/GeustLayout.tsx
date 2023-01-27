import { FC, ReactNode } from "react";
import NavBar from "../components/NavBar";
type GeustLayoutProps = {
  children: ReactNode;
};
const GeustLayout = ({ children }: GeustLayoutProps) => {
  return (
    <div className="relative h-screen bg-bg-color">
      <NavBar />
      {children}
    </div>
  );
};

export default GeustLayout;
