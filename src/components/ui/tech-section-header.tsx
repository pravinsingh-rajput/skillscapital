import React from "react";
import Image from "next/image";

interface TechSectionHeaderProps {
  icon: string;
  title: string;
}

const TechSectionHeader: React.FC<TechSectionHeaderProps> = ({
  icon,
  title,
}) => {
  return (
    <div className="bg-[#1A1F36] rounded-lg p-4 flex items-center justify-between mb-8">
      <div className="flex items-center ">
        <Image
          src={icon}
          alt={title}
          height={50}
          width={50}
          className="mr-2 "
        />
        <div className="text-white font-medium text-2xl">{title}</div>
      </div>

      <button className="bg-white text-primary cursor-pointer p-4 py-2 flex items-center justify-center space-x-2 border rounded-full">
        <span className="font-bold">Find Talent</span>

        <span className="bg-[#FCD980] rounded-full w-8 h-8  items-center justify-center flex">
          <Image
            src="/assets/black-arrow-right.svg"
            alt="arrow"
            height={21}
            width={20}
            className=""
          />
        </span>
      </button>
    </div>
  );
};

export default TechSectionHeader;
