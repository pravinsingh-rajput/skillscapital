import React from "react";
import TechSectionHeader from "../ui/tech-section-header";
import CTAButton from "../ui/cta-button";
import Image from "next/image";
import FeatureCard from "../ui/feature-card";

const DeepTechAiDriven = () => {
  const features = [
    {
      icon: "/assets/end-to-end-icon.svg",
      title: "End-to-End Fit Scoring",
      description:
        "Combines all layers into a unified candidate readiness score for decision-making.",
    },
    {
      icon: "/assets/verified-icon.svg",
      title: "Verified by External Assessments",
      description:
        "Third-party evaluations validate core skills across SAP, ERP, and enterprise technologies.",
    },
    {
      icon: "/assets/ai-matching-icon.svg",
      title: "AI-Assisted Behavioral Insights",
      description:
        "Machine learning algorithms analyze SAP resumes and job descriptions to ensure precise skill alignment.",
    },
    {
      icon: "/assets/human-insight-icon.svg",
      title: "Human Insights for Cultural Fit",
      description:
        "Industry experts assess soft skills and team compatibility for enterprise-ready placements.",
    },
  ];

  return (
    <section className="bg-[#F4F6FC]">
      <div className="max-w-7xl py-20 mx-auto px-4 border-b border-gray-300">
        <TechSectionHeader
          icon="./assets/deep-tech-icon.svg"
          title="Deep Tech AI-Driven Deep Vet"
        />

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 min-h-full">
          <div className="lg:col-span-4 rounded-lg overflow-hidden shadow-md h-full">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src="/assets/deep-tech-ai.png"
                alt="Advanced ML-Powered Precision Match"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <CTAButton text="Our Candidate Vetting Process" href="/" />
        </div>
      </div>
    </section>
  );
};

export default DeepTechAiDriven;
