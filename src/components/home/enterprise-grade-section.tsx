import React from "react";
import SectionTitle from "../ui/section-title";
import FeatureCard from "../ui/feature-card";

const EnterpriceGrade = () => {
  const fetureList = [
    {
      icon: "/assets/instant-matching-icon.svg",
      title: "Instant Matching",
      description:
        "Smart AI-driven selection of the top 1️% of SAP consultants.",
    },
    {
      icon: "/assets/guarentee-quality-icon.svg",
      title: "Guaranteed Quality",
      description:
        "All consultants undergo a thorough vetting process prior to deployment.",
    },
    {
      icon: "/assets/seamless-replacement-icon.svg",
      title: "Seamless Replacements",
      description: "Get a new consultant within 2️4️ hours if needed.",
    },
  ];

  return (
    <section className="bg-[url('/assets/enterprice-bg.png')] bg-cover bg-no-repeat bg-center ">
      <div className="py-10 relative max-w-7xl mx-auto text-white">
        <SectionTitle
          title="Enterprise-Grade SAP Talent in 48 Hours"
          subtitle="No Compromise on Quality."
          className="text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  text-[#282938]">
          {fetureList?.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriceGrade;
