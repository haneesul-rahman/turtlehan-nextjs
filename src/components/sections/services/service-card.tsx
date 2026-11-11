import type { Service } from "@/data/site";
import { Icon } from "../../ui/icon";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const modalId = `service-${service.slug}`;

  return (
    <article className="service-card">
      <a
        href={`#${modalId}`}
        className="service-image"
        aria-label={`View ${service.title} details`}
      >
        <img src={service.image} alt="" />
        <span>{service.number}</span>
      </a>
      <div className="service-copy">
        <small>{service.eyebrow}</small>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <a href={`#${modalId}`} className="text-link">
          View details <Icon name="arrow" size={18} />
        </a>
      </div>
    </article>
  );
}
