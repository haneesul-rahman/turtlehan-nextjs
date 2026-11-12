import { ArrowUpRight, MapPin } from "lucide-react";

import type { Client } from "@/data/site";

type ClientCardProps = {
  client: Client;
};

function getGoogleMapsUrl(client: Client) {
  const query = `${client.name}, ${client.location}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function ClientCard({ client }: ClientCardProps) {
  const initials = client.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <article className="client-card">
      <div className="client-card-image">
        {client.image ? (
          <img
            src={client.image}
            alt={`${client.name} - ${client.category}`}
            loading="lazy"
          />
        ) : (
          <div className="client-card-image-fallback">{initials}</div>
        )}
      </div>

      <div className="client-card-content">
        <div className="client-card-meta">
          <small>
            {client.category} <span>·</span> {client.location}
          </small>
        </div>

        <h3>{client.name}</h3>

        <div className="client-card-footer">
          <a
            href={getGoogleMapsUrl(client)}
            target="_blank"
            rel="noopener noreferrer"
            className="client-google-link"
            aria-label={`View ${client.name} on Google Maps`}
          >
            <MapPin size={20} />
            View on Google Maps
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}
