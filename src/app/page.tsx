import Header from "@/components/header";
import HeroSection from "@/components/home/hero-section";
import SourceDeploySection from "@/components/home/source-deploy-section";
import React from "react";

const Home = () => {
  return (
    <div className="h-full">
      <Header />
      <HeroSection />
      <SourceDeploySection />
    </div>
  );
};

export default Home;
