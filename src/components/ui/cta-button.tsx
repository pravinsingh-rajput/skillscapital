import Link from "next/link";

interface CTAButtonProps {
  text: string;
  href: string;
  isPrimary?: boolean;
  hasArrow?: boolean;
  className?: string;
}

export default function CTAButton({
  text,
  href,
  isPrimary = true,
  hasArrow = true,
  className = "",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`${isPrimary ? "btn-primary" : "btn-secondary"} ${className}`}
    >
      {text}
      {hasArrow && <span className="ml-2">→</span>}
    </Link>
  );
}
