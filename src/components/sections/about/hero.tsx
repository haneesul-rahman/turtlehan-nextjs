import { Icon } from "@/components/ui/icon";
import { images } from "@/data/site";

export function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <img
          src={images.hero}
          alt="Professionals collaborating in a modern office"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-kicker">
            A multi-service organisation · India & UAE
          </span>
          <h1>
            Empowering Business.
            <br />
            <em>Enriching Lives.</em>
          </h1>
          <p>
            Integrated business solutions, delivered with clarity, care and a
            long-term view across two dynamic markets.
          </p>
          <div className="hero-actions">
            <a href="#services" className="button button-gold">
              Explore our services <Icon name="arrow" size={18} />
            </a>
            <a href="#contact" className="button button-outline-light">
              Get in touch
            </a>
          </div>
        </div>
        <div className="scroll-note">
          <i /> Scroll to discover
        </div>
      </section>
    </>
  );
}
