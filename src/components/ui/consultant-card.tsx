import React from "react";
import Image from "next/image";

interface ConsultantCardProps {
  role: string;
  imgUrl: string;
  matchPercentage: number;
  persona: string;
  availabity: string;
  domainFit: string;
  referenceScore: string;
  readiness: string;
}

const ConsultantCard: React.FC<ConsultantCardProps> = ({
  role,
  imgUrl,
  matchPercentage,
  persona,
  availabity,
  domainFit,
  referenceScore,
  readiness,
}) => {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200">
      <div className="h-[350px] relative">
        <Image
          src={imgUrl}
          alt={role}
          layout="fill"
          objectFit="cover"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-4 flex flex-col bg-white text-[#282938]">
        <div className="font-bold  pb-2  border-[#464646] border-b">
          Role: {role}
        </div>

        <div className=" border-[#464646] border-b  py-2">
          <div className="text-sm font-medium mb-2">
            JD Match: {matchPercentage}%{" "}
          </div>
          <div className="w-full bg-gray-200 rounded-md h-6 mb-2">
            <div
              className="bg-green-500 h-6 rounded-md"
              style={{ width: `${matchPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="my-4 ">
          <div className=" w-full flex gap-1 mb-1.5 ">
            <p className="text-sm font-medium w-2/6 text-[#282938]">Persona:</p>
            <p className="text-sm ">{persona}</p>
          </div>
          <div className=" w-full flex   gap-1 mb-1.5 ">
            <p className="text-sm font-medium w-2/6 text-[#282938]">
              Availability:
            </p>
            <p className="text-sm ">{availabity}</p>
          </div>
          <div className=" w-full flex  gap-1 mb-1.5 ">
            <p className="text-sm font-medium w-2/6 text-[#282938]">
              Domain Fit:
            </p>
            <p className="text-sm ">{domainFit}</p>
          </div>
          <div className=" w-full flex   gap-1 mb-1.5">
            <p className="text-sm font-medium w-2/6 text-[#282938]">
              Reference Score:
            </p>
            <p className="text-sm ">{referenceScore}</p>
          </div>
          <div className=" w-full flex   gap-1 mb-1.5 ">
            <p className="text-sm font-medium w-2/6 text-[#282938]">
              Readiness:
            </p>
            <p className="text-sm ">{readiness}</p>
          </div>
        </div>
        <div className="flex justify-center  w-full">
          <button className="bg-[#111827] hover:bg-[#202a3f] w-full font-semibold py-4  text-white px-4 rounded-full cursor-pointer  transition duration-300">
            View Full Persona Report <span className="ml-2  font-bold">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;
