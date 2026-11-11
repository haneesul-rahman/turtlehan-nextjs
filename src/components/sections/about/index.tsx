import { images } from "@/data/site";
import { SectionHeading } from "../../ui/section-heading";
import { Hero } from "./hero";
import { Intro } from "./intro";
import { WhyUs } from "./why-us";
import { OurPresence } from "./our-presence";

export function AboutSection() {
  return (
    <>
      <Hero />
      <Intro />

      <WhyUs />
      <OurPresence />
    </>
  );
}
