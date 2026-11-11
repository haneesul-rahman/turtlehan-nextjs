import { ChevronRight, Quote } from "lucide-react";

import type { Client } from "@/data/site";

type ClientCardProps = {
  client: Client;
};

function getGoogleMapsUrl(client: Client) {
  const query = `${client.name}, ${client.location}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function ClientCard({ client }: ClientCardProps) {
  return (
    <article className="client-card">
      <div className="client-monogram" aria-hidden="true">
        {client.name
          .split(" ")
          .slice(0, 2)
          .map((word) => word[0])
          .join("")}
      </div>

      <small>
        {client.category} · {client.location}
      </small>

      <h3>{client.name}</h3>
      <div className="testimonial-placeholder">
        <Quote size={18} aria-hidden="true" />
        <p>Approved client testimonial to be added.</p>
      </div>
      <a
        href={getGoogleMapsUrl(client)}
        target="_blank"
        rel="noopener noreferrer"
        className="client-google-link"
        aria-label={`View ${client.name} in ${client.location} on Google Maps`}
      >
        View on Google Maps
        <ChevronRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}
