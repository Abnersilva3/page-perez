import Image from "next/image";

interface PerezLogoProps {
  className?: string;
  height?: number;
  markOnly?: boolean;
}

export function PerezLogo({
  className = "",
  height = 56,
  markOnly = false,
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
    <span className={`relative inline-flex items-center ${className}`}>
      <Image
        src={darkSrc}
        alt="PEREZ"
        width={width}
        height={height}
        className="h-auto w-auto dark:hidden"
        priority
      />
      <Image
        src={lightSrc}
        alt="PEREZ"
        width={width}
        height={height}
        className="hidden h-auto w-auto dark:block"
        priority
      />
    </span>
  );
}
