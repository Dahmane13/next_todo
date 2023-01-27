import Image from "next/image";
import { FC } from "react";
import Menu from "../icons/Menu";

const UserNav: FC = () => {
  return (
    <div className=" max-w-screen flex  items-center justify-between bg-dark-gray py-2 px-10 text-white">
      <div className="flex items-center gap-2">
        <Menu />

        <span className=" text-xl">Task</span>
      </div>
      <div className="flex items-center gap-4">
        <span className=" cursor-pointer">Login</span>
        <span className="cursor-pointer rounded-xl border-2 border-gray-600 py-1 px-3">
          Sign up
        </span>
      </div>
    </div>
  );
};

export default UserNav;
