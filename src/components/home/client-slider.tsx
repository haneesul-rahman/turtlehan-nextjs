import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Client = {
  name: string;
  location: string;
  category: string;
};

const clients: Client[] = [
  { name: "Green Leaf Hotel", location: "Ooty", category: "Hospitality" },
  {
    name: "Barbeque Grand Restaurant",
    location: "Ooty",
    category: "Restaurant",
  },
  { name: "Fish Palace", location: "Mysore", category: "Food & Beverage" },
  {
    name: "Meat House (Sira Fish)",
    location: "Mysore",
    category: "Food & Beverage",
  },
  { name: "Fresh Fetch", location: "Bangalore", category: "Food & Beverage" },
  { name: "Tawa Fin", location: "Bangalore", category: "Restaurant" },
  { name: "Tamak Restaurant", location: "Bangalore", category: "Restaurant" },
  { name: "Coco Fresh", location: "Bangalore", category: "Food & Beverage" },
  { name: "Beijing Bites", location: "Bangalore", category: "Restaurant" },
];

function getGoogleMapsUrl(client: Client) {
  const query = `${client.name}, ${client.location}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function chunkClients(size: number) {
  return Array.from({ length: Math.ceil(clients.length / size) }, (_, index) =>
    clients.slice(index * size, index * size + size),
  );
}

function Carousel({ size, variant }: { size: number; variant: string }) {
  const pages = chunkClients(size);

  return (
    <div className={`client-carousel clients-${variant}`}>
      {pages.map((clientsPage, pageIndex) => {
        const previous = (pageIndex - 1 + pages.length) % pages.length;
        const next = (pageIndex + 1) % pages.length;

        return (
          <div
            className={`client-slide ${pageIndex === 0 ? "is-first" : ""}`}
            id={`clients-${variant}-${pageIndex + 1}`}
            key={`${variant}-${pageIndex}`}
          >
            <div className="client-page-grid">
              {clientsPage.map((client) => (
                <article className="client-card" key={client.name}>
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
              ))}
            </div>

            <div
              className="slider-controls"
              aria-label="Client slider controls"
            >
              <a
                href={`#clients-${variant}-${previous + 1}`}
                aria-label="Show previous clients"
              >
                <ChevronLeft aria-hidden="true" />
              </a>

              <span>
                <b>{String(pageIndex + 1).padStart(2, "0")}</b> /{" "}
                {String(pages.length).padStart(2, "0")}
              </span>

              <a
                href={`#clients-${variant}-${next + 1}`}
                aria-label="Show next clients"
              >
                <ChevronRight aria-hidden="true" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ClientSlider() {
  return (
    <section className="section clients-section" id="clients">
      <div className="container">
        <div className="clients-heading">
          <div className="section-heading">
            <span className="eyebrow">
              <i />
              Our Clients
            </span>

            <h2>
              Trusted by businesses
              <br />
              <em>built around people.</em>
            </h2>

            <p>
              A selection of hospitality and food businesses TURTLEHAN has
              worked with across Ooty, Mysore and Bangalore.
            </p>
          </div>
        </div>

        <Carousel size={3} variant="desktop" />
        <Carousel size={2} variant="tablet" />
        <Carousel size={1} variant="mobile" />
      </div>
    </section>
  );
}
