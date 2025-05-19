import Link from "next/link";
import React from "react";

interface CTAButtonProps {
  text: string;
  href: string;
  isPrimary?: boolean;
  hasArrow?: boolean;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  href,
  isPrimary = true,
  hasArrow = true,
  className,
}) => {
  return (
    <Link
      href={href}
      className={`  ${
        isPrimary ? "##FCD980" : "#1A1F36"
      }flex items-center justify-center space-x-2 ${className}`}
    >
      {text} {hasArrow && <span className="ml-2">→</span>}
    </Link>
  );
};

export default CTAButton;
