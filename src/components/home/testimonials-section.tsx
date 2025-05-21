"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/section-title";
import CTAButton from "@/components/ui/cta-button";
import TestimonialCard from "@/components/ui/testimonial-card";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        '"We skipped 2 rounds of interviews because of the Persona report."',
      author: "~ CTO, AI SaaS",
    },
    {
      quote:
        '"The match accuracy is unreal. Like having our own vetting panel on demand."',
      author: "~ VP Engineering, EU Retail",
    },
    {
      quote: '"They understood our JD better than our own HR team."',
      author: "~ Co-founder, Series B Fintech",
    },
    {
      quote:
        '"The quality of consultants exceeded our expectations. Perfect match for our project."',
      author: "~ CIO, Global Manufacturing",
    },
    {
      quote:
        '"Reduced our hiring time by 70% while improving quality of matches."',
      author: "~ Head of IT, Healthcare",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleTestimonials >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, testimonials.length - visibleTestimonials)
        : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Trusted by Global Enterprises & SAP Leaders"
          subtitle="Genuine outcomes from authentic teams that have experienced the change."
        />

        <div className="relative">
          <button
            className="absolute cursor-pointer left-6 top-1/2 transform -translate-y-1/2 p-3   z-10 transition-colors"
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <Image
              src="/assets/left-arrow-icon.svg"
              alt="Previous"
              width={36}
              height={36}
            />
          </button>

          <div className=" max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 transition-all duration-500 ease-in-out">
            {testimonials
              .slice(currentIndex, currentIndex + visibleTestimonials)
              .map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
          </div>

          <button
            className="absolute  cursor-pointer right-6 top-1/2 transform -translate-y-1/2 p-3  z-10 transition-colors"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <Image
              src="/assets/right-arrow-icon.svg"
              alt="Next"
              width={36}
              height={36}
            />
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <CTAButton text="See More Success Stories" href="/" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
