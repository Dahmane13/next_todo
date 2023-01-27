import { FC, ReactNode } from "react";
import UserNav from "../components/UserNav";
type UserLayoutProps = {
  children: ReactNode;
};
const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <div className="relative h-screen bg-bg-color">
      <UserNav />
      {children}
    </div>
  );
};

export default UserLayout;
