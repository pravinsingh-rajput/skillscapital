import React from "react";
import TechSectionHeader from "../ui/tech-section-header";
import CTAButton from "../ui/cta-button";
import Image from "next/image";
import FeatureCard from "../ui/feature-card";

const CongnitiveSection = () => {
  const features = [
    {
      icon: "/assets/bias-icon.svg",
      title: "Bias-Free Evaluation",
      description:
        "Delivers data-backed insights that reduce hiring bias and enhance fairness.",
    },
    {
      icon: "/assets/expertise-icon.svg",
      title: "Expertise Depth Evaluation",
      description:
        "NLP algorithms extract and score domain knowledge and technical fluency in real time.",
    },
    {
      icon: "/assets/ai-assestd-icon.svg",
      title: "AI-Assisted Behavioral Insights",
      description:
        "Natural Language Processing analyzes video interview responses to assess personality traits.",
    },

    {
      icon: "/assets/behaviour-icon.svg",
      title: "Behavioral Fit Mapping",
      description:
        "Matches candidates to roles based on cognitive, interpersonal, and cultural alignment.",
    },
  ];

  return (
    <section className="bg-[#F4F6FC]">
      <div className="max-w-7xl py-20  mx-auto px-4">
        <TechSectionHeader
          icon="./assets/congnitive-icon.svg"
          title="Cognitive NLP-Processed Talent Persona"
        />

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 min-h-full">
          <div className="lg:col-span-4 rounded-lg overflow-hidden shadow-md h-full">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src="/assets/congnitive.png"
                className="object-center object-cover w-full h-full"
                fill
                alt="Cognitive NLP-Processed Talent Persona"
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
          <CTAButton text="Discover Our Vetting Process" href="/" />
        </div>
      </div>
    </section>
  );
};

export default CongnitiveSection;
