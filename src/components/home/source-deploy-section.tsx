import Image from "next/image";
import React from "react";
import SectionTitle from "../ui/section-title";

interface ServiceCardProps {
  title: string;
  description: string;
  imgurl: string;
  buttonText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imgurl,
  buttonText,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="h-64 relative">
        <Image
          src={imgurl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 pt-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <button className="w-full rounded-full bg-[#111827] hover:bg-[#202a3f] transition duration-300 cursor-pointer text-white py-3  flex items-center justify-center mt-auto">
          {buttonText}
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

const SourceDeploySection = () => {
  const services = [
    {
      title: "SAP Consultants",
      imgurl: "/assets/Sap-Consultants.png",
      description:
        "Pre-vetted, ready-to-deploy SAP talent for on-demand projects & implementations.",
      buttonText: "Explore SAP Consultants",
    },
    {
      title: "Managed Teams",
      imgurl: "/assets/Managed-Teams.png",
      description:
        "Scalable, fully managed SAP teams for end-to-end project delivery.",
      buttonText: "Browse Managed Teams",
    },
    {
      title: "SAP Consulting",
      imgurl: "/assets/Sap-Consulting.png",
      description:
        "SAP consulting and integration solutions to accelerate transformation.",
      buttonText: "Access Top SAP Consulting",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Source & Deploy SAP Expertise Seamlessly"
          subtitle="Our AI-driven platform powers three key engagement models."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SourceDeploySection;
