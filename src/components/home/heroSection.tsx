import Image from "next/image";
import CTAButton from "../ui/CTAButton";

const HeroSection = () => {
  return (
    <div className="h-full ">
      <section>
        <div>
          <Image
            src="/assets/sap_hero.png"
            alt="SAP Technology"
            fill
            className="object-right  object-contain"
          />
        </div>
        <div className="max-w-container mx-auto px-4 relative z-10">
          <div className="flex flex-col ">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-[53px] font-black mb-6">
                Unleash SAP & Tech Excellence with AI/ML Talent Cloud
              </h1>
              <p className="text-lg mb-10 opacity-90">
                Find and deploy elite SAP consultants, managed teams, and
                consulting expertise instantly with AI-driven precision.
              </p>
            </div>

            <div className="flex flex-wrap justify-between mb-12">
              <div className="mb-8 md:mb-0">
                <div className="text-3xl font-bold">20,000+</div>
                <div className="text-sm backdrop-opacity-80">
                  Vetted SAP Tech Consultants
                </div>
              </div>
              <div className="mb-8 md:mb-0">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm backdrop-opacity-80">
                  Global Clients & SAP Projects
                </div>
              </div>
              <div className="mb-8 md:mb-0">
                <div className="text-3xl font-bold">10+ Years</div>
                <div className="text-sm backdrop-opacity-80">
                  Average Experience per Consultant
                </div>
              </div>
              <div className="mb-8 md:mb-0">
                <div className="text-3xl font-bold">20M+</div>
                <div className="text-sm backdrop-opacity-80">
                  Man-Hours of SAP Expertise
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <CTAButton
                text="Find SAP Experts Now"
                href="/"
                hasArrow={false}
              />
              <CTAButton
                text="Explore Talent Cloud"
                href="/"
                isPrimary={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
