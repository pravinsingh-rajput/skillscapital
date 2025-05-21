import Image from "next/image";
import CTAButton from "../ui/cta-button";

const HeroSection = () => {
  return (
    <section className="gradient-bg pt-16 pb-24 relative overflow-hidden">
      {/* Background SAP image */}
      <div className="absolute img-gradient-bg  right-0 top-0 w-1/2 h-full opacity-30  pointer-events-none">
        <Image
          src="/assets/sap_hero.png"
          alt="SAP Technology"
          fill
          className="object-contain object-right "
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className=" text-white mb-12 md:mb-0">
            <h1 className="text-4xl md:w-1/2 md:text-5xl lg:text-[53px] font-bold mb-6 leading-[64px]">
              Unleash SAP & Tech Excellence with AI/ML Talent Cloud
            </h1>
            <p className="text-lg md:w-1/2 mb-12 opacity-70 leading-7">
              Find and deploy elite SAP consultants, managed teams, and
              consulting expertise instantly with AI-driven precision.
            </p>

            <div className="flex md:w-4/6 flex-wrap justify-between mb-12">
              <div className="mb-8 md:mb-0">
                <div className="text-2xl font-bold">20,000+</div>
                <div className="text-sm opacity-80  max-w-[125px]">
                  Vetted SAP Tech Consultants
                </div>
              </div>

              <div className="hidden md:block stat-divider"></div>

              <div className="mb-8 md:mb-0">
                <div className="text-2xl font-bold text-center">1000+</div>
                <div className="text-sm opacity-80 text-center max-w-[125px]">
                  Global Clients & SAP Projects
                </div>
              </div>

              <div className="hidden md:block stat-divider"></div>

              <div className="mb-8 md:mb-0">
                <div className="text-2xl font-bold text-center">10+ Years</div>
                <div className="text-sm opacity-80 text-center max-w-[125px]">
                  Average Experience per Consultant
                </div>
              </div>

              <div className="hidden md:block stat-divider"></div>

              <div>
                <div className="text-2xl font-bold text-center">20M+</div>
                <div className="text-sm opacity-80 text-center max-w-[125px]">
                  Man-Hours of SAP Expertise
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <CTAButton text="Find SAP Experts Now" href="#" />
              <CTAButton
                text="Explore Talent Cloud"
                href="#"
                isPrimary={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
