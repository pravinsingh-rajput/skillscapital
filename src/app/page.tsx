import Footer from "@/components/footer";
import Header from "@/components/header";
import AiPoweredSection from "@/components/home/ai-powered-section";
import CongnitiveSection from "@/components/home/cognitive-nlp-section";
import DeepTechAiDriven from "@/components/home/deep-tech-ai-driven";
import EliteSapExpert from "@/components/home/elite-sap-expert";
import EnterpriceGrade from "@/components/home/enterprise-grade-section";
import HeroSection from "@/components/home/hero-section";
import IndiaSkills from "@/components/home/india-skillscapital-section";
import ReinforceValue from "@/components/home/reinforce-value-section";
import SourceDeploySection from "@/components/home/source-deploy-section";
import TestimonialSection from "@/components/home/testimonials-section";
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
      <IndiaSkills />
      <EliteSapExpert />
      <TestimonialSection />
      <ReinforceValue />
      <Footer />
    </div>
  );
};

export default Home;
