import Image from "next/image";
import { FC } from "react";

const SideBar: FC = () => {
  return (
    <div className=" h-full w-1/5 bg-dark-gray pl-11">
      <div className="py-4">
        <span>Collections</span>
      </div>
    </div>
  );
};

export default SideBar;
