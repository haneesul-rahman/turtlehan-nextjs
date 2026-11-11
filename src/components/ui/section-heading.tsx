import { ReactNode } from "react";

export function SectionHeading({
  label,
  title,
  text,
  align = "left",
}: {
  label: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <span className="eyebrow">
        <i />
        {label}
      </span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
