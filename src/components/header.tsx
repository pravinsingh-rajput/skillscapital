import React from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    title: "SAP Talent Cloud",
    href: "/",
  },
  {
    title: "Enterprise Talent Cloud",
    href: "/",
  },
  {
    title: "AI-Powered Vetting",
    href: "/",
  },
  {
    title: "Tech Talent Solutions",
    href: "/",
  },
  {
    title: "About Us",
    href: "/",
  },
];

const Header = () => {
  return (
    <header className="w-full bg-white z-50 shadow-md ">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between text-[#1C1E53]">
        <div className="text-xl font-bold text-[#1C1E53]">SkillsCapital</div>
        {/* Navbar */}
        <nav className="hidden md:flex space-x-8">
          {navItems?.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item?.href}
                className="flex items-center justify-center space-x-2 text-[#1C1E53] hover:text-[#1C1E53]"
              >
                <span className="text-sm font-semibold">{item?.title}</span>
                <Image
                  src="/assets/dropdown.svg"
                  alt="arrow"
                  height={10}
                  width={10}
                  className=""
                />
              </Link>
            </div>
          ))}
        </nav>

        {/* find Talent CTA */}

        <button className="bg-whitem cursor-pointer px-4 py-1.5 flex items-center justify-center space-x-2 border rounded-full">
          <span className="font-bold">Find Talent</span>

          <span className="bg-[#FCD980] rounded-full w-8 h-8  items-center justify-center flex">
            <Image
              src="/assets/black-arrow-right.svg"
              alt="arrow"
              height={21}
              width={20}
              className=""
            />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
