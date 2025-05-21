import React from "react";
import SectionTitle from "../ui/section-title";
import TechSectionHeader from "../ui/tech-section-header";
import CTAButton from "../ui/cta-button";
import Image from "next/image";
import FeatureCard from "../ui/feature-card";

const AiPoweredSection = () => {
  const features = [
    {
      icon: "/assets/learning-model-icon.svg",
      title: "Continuously Learning Models",
      description:
        "Matching algorithms evolve with every project, improving accuracy over time.",
    },
    {
      icon: "/assets/real-world-icon.svg",
      title: "Trained on Real-World Data",
      description:
        "Models are trained on 20,000+ consultant profiles and 1,000+ client project outcomes.",
    },

    {
      icon: "/assets/ai-powered-icon.svg",
      title: "AI-Powered Precision",
      description:
        "Instantly identifies best-fit SAP consultants using advanced AI/ML algorithms.",
    },

    {
      icon: "/assets/enterprice-need-icon.svg",
      title: "Optimized for Enterprise Needs",
      description:
        "Ensures high-relevance matches tailored to complex SAP delivery environments.",
    },
  ];

  return (
    <section className="  bg-[#F4F6FC] ">
      <div className="max-w-7xl py-20 mx-auto px-4 border-b border-gray-300">
        <SectionTitle
          title="AI-Powered Deep Vet 360"
          subtitle="Precision Hiring at Scale."
        />

        <TechSectionHeader
          icon="./assets/advance-ml-icon.svg"
          title="Advanced ML-Powered Precision MatchTM"
        />

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 min-h-full">
          <div className="lg:col-span-4 rounded-lg overflow-hidden shadow-md h-full">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src="/assets/advance-ml.png"
                className="w-full h-full object-cover"
                fill
                alt="Advanced ML-Powered Precision Match"
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
          <CTAButton text="Explore Our Vetting Process" href="/" />
        </div>
      </div>
    </section>
  );
};

export default AiPoweredSection;
