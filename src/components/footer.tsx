import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="text-2xl font-bold mb-6 md:mb-0">SkillsCapital.</div>

          <div className="flex items-center">
            <span className="mr-6">Follow our socials</span>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full"
              >
                <span className="text-xs relative">
                  <Image
                    src="/assets/facebook.svg"
                    alt="call"
                    height={30}
                    width={30}
                  />
                </span>
              </a>

              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full"
              >
                <span className="text-xs relative">
                  <Image
                    src="/assets/x.svg"
                    alt="call"
                    height={30}
                    width={30}
                  />
                </span>
              </a>

              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full"
              >
                <span className="text-xs relative">
                  <Image
                    src="/assets/instagram.svg"
                    alt="call"
                    height={30}
                    width={30}
                  />
                </span>
              </a>

              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full"
              >
                <span className="text-xs relative">
                  <Image
                    src="/assets/location.svg"
                    alt="call"
                    height={30}
                    width={30}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  SAP Talent Cloud
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Enterprise Talent Cloud
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  AI-Powered Vetting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Tech Talent Solution
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  About US
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Condition
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-8 h-8   flex items-center justify-center mr-3">
                  <span className="text-xs relative">
                    <Image
                      src="/assets/call.svg"
                      alt="call"
                      height={30}
                      width={30}
                    />
                  </span>
                </div>
                <span>+91 123 465 789</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8  flex items-center justify-center mr-3">
                  <span className="text-xs relative">
                    <Image
                      src="/assets/mail.svg"
                      alt="call"
                      height={30}
                      width={30}
                    />
                  </span>
                </div>
                <span>info@skillscapital.io</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8  flex items-center justify-center mr-3">
                  <span className="text-xs relative">
                    <Image
                      src="/assets/location.svg"
                      alt="call"
                      height={30}
                      width={30}
                    />
                  </span>
                </div>
                <span>Pune, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm">
          Copyright © 2025 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
