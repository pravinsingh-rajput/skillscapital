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
    <div className="card flex flex-col h-full">
      <div className=" w-12 h-12 mb-4 flex  items-center justify-center relative">
        <Image src={icon} fill alt={title} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default FeatureCard;
