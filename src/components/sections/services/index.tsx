import { services } from "@/data/site";
import { ServiceCard } from "./service-card";
import { ServiceModal } from "./service-modal";
import { SectionHeading } from "../../ui/section-heading";

export function ServicesSection() {
  return (
    <>
      <section className="section services-section" id="services">
        <div className="container">
          <div className="heading-row">
            <SectionHeading
              label="Our Business Divisions"
              title={
                <>
                  Connected expertise.
                  <br />
                  <em>Distinct capabilities.</em>
                </>
              }
            />
            <p>
              Six focused divisions, united by a commitment to dependable
              delivery and thoughtful partnership.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
        </div>
        {services.map((service) => (
          <ServiceModal service={service} key={service.slug} />
        ))}
      </section>
    </>
  );
}
