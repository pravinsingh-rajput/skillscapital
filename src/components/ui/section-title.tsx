import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = true,
  className,
}) => {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <h2
        className={`section-title ${
          className?.includes("text-white") ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subtitle ${
            className?.includes("text-white")
              ? "text-white opacity-80"
              : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
