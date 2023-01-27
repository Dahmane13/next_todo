import Image from "next/image";
import { FC } from "react";
import Bell from "../icons/Bell";
import Folder from "../icons/Folder";
import Menu from "../icons/Menu";
import Plus from "../icons/Plus";
import Search from "../icons/Search";

const UserNav: FC = () => {
  return (
    <div className=" max-w-screen flex  items-center justify-between border-b border-black bg-dark-gray py-2 px-10 text-white">
      <div className="flex items-center gap-6">
        <Menu className="h-6 w-6" />
        <span className=" text-xl">Task</span>
        <div className="flex items-center gap-2">
          <Folder className="h-6 w-6" />
          <span>Collections</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="primaryGrad rounded-md p-1">
          <Plus className="h-5 w-5" />
        </div>
        <div>
          <Search className="h-6 w-6" />
        </div>
        <div>
          <Bell className="h-6 w-6" />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAfX2hnzJ4eEYXi1wqS1kOcvNmErOFOdS8w&usqp=CAU"
            height={50}
            width={50}
            alt="user avatar"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UserNav;
