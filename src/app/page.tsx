import Header from "@/components/header";
import AiPoweredSection from "@/components/home/ai-powered-section";
import CongnitiveSection from "@/components/home/cognitive-nlp-section";
import DeepTechAiDriven from "@/components/home/deep-tech-ai-driven";
import EnterpriceGrade from "@/components/home/enterprise-grade-section";
import HeroSection from "@/components/home/hero-section";
import SourceDeploySection from "@/components/home/source-deploy-section";
import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      <Header />
      <HeroSection />
      <SourceDeploySection />
      <AiPoweredSection />
      <DeepTechAiDriven />
      <CongnitiveSection />
      <EnterpriceGrade />
    </div>
  );
};

export default Home;
