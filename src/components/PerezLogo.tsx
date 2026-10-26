import Image from "next/image";

interface PerezLogoProps {
  className?: string;
  height?: number;
  markOnly?: boolean;
  alt?: string;
}

export function PerezLogo({
  className = "",
  height = 56,
  markOnly = false,
  alt = "PEREZ",
}: PerezLogoProps) {
  const ratio = markOnly ? 293 / 193 : 630 / 344;
  const width = Math.round(height * ratio);
  const darkSrc = markOnly
    ? "/img/mark-perez-dark.png"
    : "/img/logo-perez-dark.png";
  const lightSrc = markOnly
    ? "/img/mark-perez-light.png"
    : "/img/logo-perez-light.png";

  return (
    <span className={`relative inline-flex shrink-0 items-center ${className}`}>
      <Image
        src={darkSrc}
        alt={alt}
        width={width}
        height={height}
        className="w-auto dark:hidden"
        style={{ height }}
        priority
      />
      <Image
        src={lightSrc}
        alt={alt}
        width={width}
        height={height}
        className="hidden w-auto dark:block"
        style={{ height }}
        priority
      />
    </span>
  );
}
