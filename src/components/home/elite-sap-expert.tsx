import React from "react";
import SectionTitle from "../ui/section-title";
import ConsultantCard from "../ui/consultant-card";
import CTAButton from "../ui/cta-button";

const EliteSapExpert = () => {
  const consultants = [
    {
      role: "SAP FICO Consultant",
      imgUrl: "/assets/sap-fico-sonsultant.png",
      matchPercentage: 94,
      persona: "Analytical, structured, risk-aware",
      availabity: "Immediate",
      domainFit: "BFSI, Manufacturing, 6+ years",
      referenceScore: "4.8/5 (based on 3 global clients)",
      readiness: "Ready in 48 hours",
    },
    {
      role: "SAP MM / Ariba Consultant",
      imgUrl: "/assets/sap-ariba-consultant.png",
      matchPercentage: 98,
      persona: "Fast-learner, collaborative",
      availabity: "Immediate",
      domainFit: "Pharma, Retail, 8+ years",
      referenceScore: "4.6/5 (based on 3 global clients)",
      readiness: "Ready in 24 hours",
    },
    {
      role: "SAP SuccessFactors Lead",
      imgUrl: "/assets/sap-success-fector-lead.png",
      matchPercentage: 93,
      persona: "Empathetic, outcome-focused",
      availabity: "Immediate",
      domainFit: "Telecom, Public Sector, 6+ years",
      referenceScore: "5/5 (based on 3 global clients)",
      readiness: "Ready in 48 hours",
    },
  ];

  return (
    <section>
      <section className="bg-[url('/assets/enterprice-bg.png')] bg-cover bg-no-repeat bg-center ">
        <div className="py-20 relative max-w-7xl mx-auto text-white">
          <SectionTitle
            title="Meet Our Elite SAP Experts"
            subtitle="Selected experts with knowledge and a history of successful delivery."
            className="text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8  ">
            {consultants?.map((consultant, index) => (
              <ConsultantCard key={index} {...consultant} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <CTAButton text="View More SAP Consultants" href="/" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default EliteSapExpert;
