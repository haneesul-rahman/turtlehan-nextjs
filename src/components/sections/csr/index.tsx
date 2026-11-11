import { images } from "@/data/site";
import { SectionHeading } from "../../ui/section-heading";

export function CSRSection() {
  return (
    <>
      <section className="section csr-preview container">
        <div className="csr-copy">
          <SectionHeading
            label="Responsibility in action"
            title={
              <>
                Doing business with a<br />
                <em>human purpose.</em>
              </>
            }
          />
          <p>
            Our social responsibility work focuses on community development and
            meaningful support for people affected by autism and polio-related
            disabilities.
          </p>
        </div>
        <div className="csr-images">
          <img
            src={images.csr}
            alt="Children together in a community setting"
          />
          <img src={images.csrAlt} alt="Women smiling together" />
        </div>
      </section>
    </>
  );
}
