import { Carousel } from "@/components/ui/carousel";
import { ClientCard } from "@/components/sections/client/client-card";
import { clients } from "@/data/site";

export function ClientSection() {
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

        <Carousel
          items={clients}
          size={3}
          variant="desktop"
          renderItem={(client) => <ClientCard client={client} />}
          getItemKey={(client) => client.name}
        />
        <Carousel
          items={clients}
          size={2}
          variant="tablet"
          renderItem={(client) => <ClientCard client={client} />}
          getItemKey={(client) => client.name}
        />
        <Carousel
          items={clients}
          size={1}
          variant="mobile"
          renderItem={(client) => <ClientCard client={client} />}
          getItemKey={(client) => client.name}
        />
      </div>
    </section>
  );
}
