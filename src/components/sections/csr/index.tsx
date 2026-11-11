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
                Business with a<br />
                <em>purpose beyond profit.</em>
              </>
            }
          />
          <p>
            We believe in making a meaningful difference beyond business. We
            dedicate 60–80% of our profits to charitable initiatives, supporting
            community development and people affected by autism and
            polio-related disabilities.
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
