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
      icon: "/assets/ai-powered-icon.svg",
      title: "AI-Powered Precision",
      description:
        "Instantly identifies best-fit SAP consultants using advanced AI/ML algorithms.",
    },
    {
      icon: "/assets/real-world-icon.svg",
      title: "Trained on Real-World Data",
      description:
        "Models are trained on 20,000+ consultant profiles and 1,000+ client project outcomes.",
    },
    {
      icon: "/assets/enterprice-need-icon.svg",
      title: "Optimized for Enterprise Needs",
      description:
        "Ensures high-relevance matches tailored to complex SAP delivery environments.",
    },
  ];

  return (
    <section className="  bg-[##F4F6FC] ">
      <div className="max-w-7xl py-10 mx-auto px-4 border-b border-gray-200">
        <SectionTitle
          title="AI-Powered Deep Vet 360"
          subtitle="Precision Hiring at Scale."
        />

        <TechSectionHeader
          icon="./assets/advance-ml-icon.svg"
          title="Advanced ML-Powered Precision MatchTM"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-full relative">
              <Image
                src="/assets/advance-ml.png"
                className="w-full h-full object-cover"
                fill
                alt="Advanced ML-Powered Precision Match"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[1]} />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <FeatureCard {...features[2]} />
            <FeatureCard {...features[3]} />
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
