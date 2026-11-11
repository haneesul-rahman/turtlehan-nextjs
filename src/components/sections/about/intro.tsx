import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/data/site";

export function Intro() {
  return (
    <>
      <section className="section about-intro container">
        <div className="about-image-wrap">
          <img src={images.meeting} alt="A collaborative business meeting" />
        </div>
        <div className="about-copy">
          <SectionHeading
            label="About TURTLEHAN"
            title={
              <>
                Progress with <em>purpose.</em>
              </>
            }
          />
          <p className="lead">
            TURTLEHAN is a multi-service business organisation bringing focused
            expertise to organisations and communities across India and the UAE.
          </p>
          <p>
            From business advisory and workforce solutions to hospitality,
            property, travel and social initiatives, our divisions share one
            belief: lasting value comes from understanding people, acting with
            integrity and doing the details well.
          </p>
        </div>
      </section>
    </>
  );
}
