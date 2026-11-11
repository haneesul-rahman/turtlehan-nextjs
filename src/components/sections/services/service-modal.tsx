import type { Service } from "@/data/site";
import { Icon } from "../../ui/icon";

type ServiceModalProps = {
  service: Service;
};

export function ServiceModal({ service }: ServiceModalProps) {
  return (
    <section
      className="service-modal"
      id={`service-${service.slug}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`service-title-${service.slug}`}
    >
      <a
        className="service-modal-backdrop"
        href="#services"
        aria-label="Close service details"
      />
      <div className="service-modal-panel">
        <a
          className="service-modal-close"
          href="#services"
          aria-label="Close service details"
        >
          <Icon name="close" size={22} />
        </a>
        <div className="service-modal-image">
          <img src={service.image} alt="" />
          <span>{service.number}</span>
        </div>
        <div className="service-modal-content">
          <small>{service.eyebrow}</small>
          <h2 id={`service-title-${service.slug}`}>{service.title}</h2>
          <p className="service-modal-lead">{service.description}</p>
          <p className="service-modal-overview">{service.overview}</p>

          <div className="service-modal-columns">
            <div>
              <h3>{service.offeringsLabel ?? "What we offer"}</h3>
              <ul>
                {service.offerings.map((offering) => (
                  <li key={offering}>
                    <Icon name="check" size={16} />
                    {offering}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{service.benefitsLabel ?? "How it helps"}</h3>
              <ul>
                {service.benefits.map((benefit) => (
                  <li key={benefit}>
                    <Icon name="check" size={16} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={`/contact?service=${encodeURIComponent(service.slug)}`}
            className="button button-gold"
          >
            {service.enquiryLabel ?? "Enquire about this service"}{" "}
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
