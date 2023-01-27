import { FC, ReactNode } from "react";
import SideBar from "../components/SideBar";
import UserNav from "../components/UserNav";
type UserLayoutProps = {
  children: ReactNode;
};
const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <div className="relative h-screen bg-bg-color">
      <UserNav />
      <div className="flex h-screen text-white">
        <SideBar />
        <main className="w-4/5">{children}</main>
      </div>
    </div>
  );
};

export default UserLayout;
