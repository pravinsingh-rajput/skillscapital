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
      icon: "/assets/ai-assestd-icon.svg",
      title: "AI-Assisted Behavioral Insights",
      description:
        "Natural Language Processing analyzes video interview responses to assess personality traits.",
    },
    {
      icon: "/assets/expertise-icon.svg",
      title: "Expertise Depth Evaluation",
      description:
        "NLP algorithms extract and score domain knowledge and technical fluency in real time.",
    },
    {
      icon: "/assets/behaviour-icon.svg",
      title: "Behavioral Fit Mapping",
      description:
        "Matches candidates to roles based on cognitive, interpersonal, and cultural alignment.",
    },
  ];

  return (
    <section className="bg-[##F4F6FC] ">
      <div className="max-w-7xl py-10  mx-auto px-4">
        <TechSectionHeader
          icon="./assets/congnitive-icon.svg"
          title="Cognitive NLP-Processed Talent Persona"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-full relative">
              <Image
                src="/assets/congnitive.png"
                className="w-full h-full object-cover"
                fill
                alt="Cognitive NLP-Processed Talent Persona"
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
          <CTAButton text="Discover Our Vetting Process" href="/" />
        </div>
      </div>
    </section>
  );
};

export default CongnitiveSection;
