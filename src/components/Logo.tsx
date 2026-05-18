import logoHeader from "@/assets/logos/logo-header.png";
import logoFooter from "@/assets/logos/logo-footer.png";
import logoSymbol from "@/assets/logos/logo-symbol.png";

export function Logo({ light = false, large = false }: { light?: boolean; large?: boolean }) {
  return (
    <img
      src={light ? logoFooter : logoHeader}
      alt="DJ Rent"
      className={`w-auto object-contain ${large ? "h-36 md:h-44" : "h-14 md:h-16"}`}
    />
  );
}

export function LogoSymbol({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoSymbol}
      alt=""
      aria-hidden
      className={`object-contain ${className}`}
    />
  );
}
