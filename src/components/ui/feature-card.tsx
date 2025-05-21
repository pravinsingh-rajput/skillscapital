import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className=" card bg-[#FFFFFF]  rounded-2xl p-6 flex flex-col h-full shad">
      <div className=" w-12 h-12  flex  items-center justify-center relative">
        <Image src={icon} fill alt={title} />
      </div>
      <h3 className="text-xl font-semibold mb-2 leading-9">{title}</h3>
      <p className="text-gray-600 flex-grow leading-7">{description}</p>
    </div>
  );
};

export default FeatureCard;
