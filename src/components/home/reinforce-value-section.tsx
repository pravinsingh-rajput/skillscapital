import Image from "next/image";
import SectionTitle from "../ui/section-title";
import CTAButton from "../ui/cta-button";

const ReinforceValue = () => {
  return (
    <section className="relative w-full bg-[#1A1F36] overflow-hidden">
      <div className="absolute inset-0 flex">
        <div className="w-1/3 h-full relative">
          <Image
            src="/assets/reinforce-bg-left.png"
            alt="Background silhouettes"
            fill
            className="object-contain opacity-50"
            priority
          />
        </div>
        <div className="w-1/3 h-full relative"></div>
        <div className="w-1/3 h-full relative">
          <Image
            src="/assets/reinforce-bg-right.png"
            alt="Background silhouettes"
            fill
            className="object-contain opacity-50"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto space-y-10 px-4 py-20 text-center text-white">
        <SectionTitle
          title="Reinforce Value Proposition"
          subtitle="AI-Powered SAP Talent Cloud – Instant, Pre-Vetted, Guaranteed"
          className="text-white"
        />
        <div className="flex item-center justify-center flex-wrap w-full gap-4  ">
          <CTAButton text="Find SAP Experts Now" href="#" />
          <CTAButton text="Explore Talent Cloud" href="#" isPrimary={false} />
        </div>
      </div>
    </section>
  );
};

export default ReinforceValue;
