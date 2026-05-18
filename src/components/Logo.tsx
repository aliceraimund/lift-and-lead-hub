import logoHeader from "@/assets/logos/logo-header.png";
import logoFooter from "@/assets/logos/logo-footer.png";
import logoSymbol from "@/assets/logos/logo-symbol.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <img
      src={light ? logoFooter : logoHeader}
      alt="DJ Rent"
      className="h-10 w-auto object-contain"
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
