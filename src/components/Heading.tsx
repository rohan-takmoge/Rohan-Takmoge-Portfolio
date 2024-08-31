import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
  letterSpacing?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"; // Add letterSpacing prop
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
  letterSpacing = "wide", // Default letterSpacing
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight text-slate-300",
        size === "xl" && "text-7xl md:text-9xl",
        size === "lg" && "text-6xl md:text-8xl",
        size === "md" && "text-5xl md:text-6xl",
        size === "sm" && "text-3xl md:text-4xl",
        className,
        {
          "tracking-tighter": letterSpacing === "tighter",
          "tracking-tight": letterSpacing === "tight",
          "tracking-normal": letterSpacing === "normal",
          "tracking-wide": letterSpacing === "wide",
          "tracking-wider": letterSpacing === "wider",
          "tracking-widest": letterSpacing === "widest",
        }
      )}
    >
      {children}
    </Comp>
  );
}
