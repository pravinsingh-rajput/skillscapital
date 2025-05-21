import React from "react";
import SectionTitle from "../ui/section-title";
import CTAButton from "../ui/cta-button";

const IndiaSkills = () => {
  return (
    <section>
      <div className="py-20 relative max-w-7xl mx-auto ">
        <SectionTitle
          title="India – SkillsCapital for SAP & Enterprise Talent"
          subtitle="India’s top SAP talent, combined with our AI-powered vetting, ensures unmatched
expertise."
        />

        <div className="bg-[url('/assets/map.png')] bg-no-repeat bg-center rounded-2xl  bg-cover max-w-7xl mx-auto min-h-[500px] h-full ">
          <div className="w-full min-h-[500px] h-full flex flex-col items-start justify-center">
            <div className="text-white md:max-w-lg flex flex-col items-start justify-center p-4 md:px-10 h-full ">
              <h3 className="text-3xl md:text-4xl lg:[53px] font-bold mb-6">
                Work with Elite SAP Consultants who have delivered projects for
                Fortune 5️00 Companies.
              </h3>
              <CTAButton text="Find Top SAP Talent Now" href="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaSkills;
