import Image from "next/image";
import { FC } from "react";

const NavBar: FC = () => {
  return (
    <div className=" max-w-screen flex  items-center justify-between px-56 py-4 text-white max-xl:px-10">
      <div className="flex items-center gap-2">
        <Image src="/check-mark.svg" height={50} width={50} alt="logo" />
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

export default NavBar;
