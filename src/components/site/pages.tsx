/* eslint-disable @next/next/no-img-element -- Remote source URLs are intentionally preserved for static export. */
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactForm } from "@/components/contact/contact-form";
import { ClientSlider } from "@/components/home/client-slider";

import { images, services, type Service } from "@/data/site";

const Icon = ({ name, size = 20 }: { name: string; size?: number }) => {
  const paths: Record<string, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.5-1.5-6.5-4.5-8-8l2-2-2-4Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    linkedin: (
      <>
        <rect x="4" y="9" width="4" height="11" />
        <path d="M6 4v.1M12 20v-6c0-3 6-4 6 0v6M12 9v11" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    quote: (
      <path d="M7 17H4c0-6 2-9 6-10v3c-2 1-3 2-3 4h3v3H7Zm10 0h-3c0-6 2-9 6-10v3c-2 1-3 2-3 4h3v3h-3Z" />
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`logo ${light ? "logo-light" : ""}`} aria-label="Turtlehan home">
      <span className="logo-mark">
        <span>T</span>
      </span>
      <span className="logo-word">
        <b>TURTLEHAN</b>
        <small>INDIA · UAE</small>
      </span>
    </Link>
  );
}

function SectionHeading({
  label,
  title,
  text,
  align = "left",
}: {
  label: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <span className="eyebrow">
        <i />
        {label}
      </span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
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

function ServiceModals() {
  return (
    <>
      {services.map((service) => (
        <section
          className="service-modal"
          id={`service-${service.slug}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`service-title-${service.slug}`}
          key={service.slug}
        >
          <a
            className="service-modal-backdrop"
            href="#services"
            aria-label="Close service details"
          />
          <div className="service-modal-panel">
            <a className="service-modal-close" href="#services" aria-label="Close service details">
              <Icon name="close" size={22} />
            </a>
            <div className="service-modal-image">
              <img src={service.image} alt="" />
              <span>{service.number}</span>
            </div>
            <div className="service-modal-content">
              <small>{service.eyebrow}</small>
              <h2 id={`service-title-${service.slug}`}>{service.title}</h2>
              <p className="service-modal-overview">{service.overview}</p>

              <div className="service-modal-columns">
                <div>
                  <h3>What we offer</h3>
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
                  <h3>How it helps</h3>
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

              <a href="#contact" className="button button-gold">
                Enquire about this service <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function CtaBanner({
  title = "Let's build something together.",
  text = "Tell us where you want to go. We’ll bring the right perspective, people and commitment to the conversation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-banner">
      <div>
        <span className="eyebrow light">
          <i />
          Start a conversation
        </span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <a href="#contact" className="button button-gold">
        Get in touch <Icon name="arrow" size={18} />
      </a>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <section className="hero" id="home">
        <img src={images.hero} alt="Professionals collaborating in a modern office" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-kicker">A multi-service organisation · India & UAE</span>
          <h1>
            Empowering Business.
            <br />
            <em>Enriching Lives.</em>
          </h1>
          <p>
            Integrated business solutions, delivered with clarity, care and a long-term view across
            two dynamic markets.
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

      <section className="section about-intro container">
        <div className="about-image-wrap">
          <img src={images.meeting} alt="A collaborative business meeting" />
        </div>
        <div className="about-copy">
          <SectionHeading
            label="About TURTLEHAN"
            title={
              <>
                Progress with <em>purpose.</em>
              </>
            }
          />
          <p className="lead">
            TURTLEHAN is a multi-service business organisation bringing focused expertise to
            organisations and communities across India and the UAE.
          </p>
          <p>
            From business advisory and workforce solutions to hospitality, property, travel and
            social initiatives, our divisions share one belief: lasting value comes from
            understanding people, acting with integrity and doing the details well.
          </p>
        </div>
      </section>

      <section className="why-section">
        <div className="why-image">
          <img src={images.people} alt="Business professionals reviewing a project" />
        </div>
        <div className="why-copy">
          <SectionHeading
            label="Why TURTLEHAN"
            title={
              <>
                Business is personal.
                <br />
                <em>So is our approach.</em>
              </>
            }
          />
          <p>
            We value enduring relationships over short-term transactions, bringing commercial
            discipline and genuine attentiveness to every engagement.
          </p>
          <div className="principles">
            {[
              [
                "01",
                "Professional expertise",
                "Focused thinking grounded in each division’s practical demands.",
              ],
              [
                "02",
                "Trusted partnerships",
                "Open, respectful relationships designed for the long term.",
              ],
              ["03", "Customer focus", "Solutions shaped around real goals, not fixed templates."],
              ["04", "Quality & transparency", "Clear communication and care at every step."],
            ].map(([n, title, text]) => (
              <div className="principle" key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section presence container">
        <SectionHeading
          label="Our Presence"
          title={
            <>
              Local understanding.
              <br />
              <em>International outlook.</em>
            </>
          }
          text="TURTLEHAN operates across India and the UAE, connecting market awareness with a consistent standard of service."
          align="center"
        />
        <div className="presence-map">
          <article>
            <span className="place-code">IN</span>
            <div>
              <small>South Asia</small>
              <h3>India</h3>
              <p>Deep local context in one of the world’s most dynamic business environments.</p>
            </div>
          </article>
          <article>
            <span className="place-code">AE</span>
            <div>
              <small>Middle East</small>
              <h3>United Arab Emirates</h3>
              <p>A strategic presence at the centre of global commerce, hospitality and travel.</p>
            </div>
          </article>
        </div>
      </section>

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
              Six focused divisions, united by a commitment to dependable delivery and thoughtful
              partnership.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
        </div>
      </section>

      <ServiceModals />

      <ClientSlider />

      <LeadershipPreview />

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
            Our social responsibility work focuses on community development and meaningful support
            for people affected by autism and polio-related disabilities.
          </p>
        </div>
        <div className="csr-images">
          <img src={images.csr} alt="Children together in a community setting" />
          <img src={images.csrAlt} alt="Women smiling together" />
        </div>
      </section>
      <ContactForm />
    </>
  );
}

function PageHero({
  label,
  title,
  text,
  image,
}: {
  label: string;
  title: ReactNode;
  text: string;
  image?: string;
}) {
  return (
    <section className={`page-hero ${image ? "has-image" : ""}`}>
      {image && (
        <>
          <img src={image} alt="" />
          <div className="page-hero-overlay" />
        </>
      )}
      <div className="container page-hero-content">
        <span className="eyebrow light">
          <i />
          {label}
        </span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero
        label="Our company"
        title={
          <>
            Built for progress.
            <br />
            <em>Grounded in purpose.</em>
          </>
        }
        text="A diverse business organisation with a shared standard of clarity, responsibility and care."
        image={images.meeting}
      />
      <section className="section container editorial">
        <div>
          <span className="editorial-number">01</span>
          <SectionHeading
            label="Our Story"
            title={
              <>
                One organisation.
                <br />
                <em>Many ways to create value.</em>
              </>
            }
          />
        </div>
        <div className="editorial-body">
          <p className="lead">
            TURTLEHAN brings together complementary capabilities across consulting, people,
            property, hospitality, travel and social responsibility.
          </p>
          <p>
            Our structure reflects the real world: businesses, places and communities are connected.
            By looking across disciplines, we aim to understand challenges fully and respond with
            practical, considered solutions.
          </p>
          <p>
            Operating across India and the UAE gives us insight into two ambitious, fast-moving
            markets while keeping our attention firmly on the people and organisations we serve.
          </p>
        </div>
      </section>
      <section className="mission-grid container">
        <article>
          <small>Our Mission</small>
          <h2>
            To create enduring value through dependable expertise, thoughtful service and
            responsible action.
          </h2>
        </article>
        <article>
          <small>Our Vision</small>
          <h2>
            To be a trusted multi-service partner, recognised for enriching businesses and the
            communities around them.
          </h2>
        </article>
      </section>
      <section className="section values-section">
        <div className="container">
          <SectionHeading
            label="What guides us"
            title={
              <>
                Our values are how
                <br />
                <em>we show up.</em>
              </>
            }
          />
          <div className="values-grid">
            {["Integrity", "Respect", "Responsibility", "Excellence", "Partnership"].map((v, i) => (
              <article key={v}>
                <span>0{i + 1}</span>
                <h3>{v}</h3>
                <p>
                  {
                    [
                      "We communicate honestly and act with sound judgement.",
                      "We listen carefully and value every relationship.",
                      "We take ownership of our choices and their wider impact.",
                      "We pursue quality through care, discipline and improvement.",
                      "We believe shared progress starts with genuine collaboration.",
                    ][i]
                  }
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <LeadershipPreview />
      <CtaBanner title="Let’s move forward, together." />
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title={
          <>
            Six divisions.
            <br />
            <em>One commitment.</em>
          </>
        }
        text="Specialist capabilities, connected by a common approach: understand deeply, respond thoughtfully and deliver dependably."
      />
      <section className="section container">
        <div className="service-grid listing">
          {services.map((service) => (
            <ServiceCard service={service} key={service.slug} />
          ))}
        </div>
      </section>
      <CtaBanner
        title="Not sure where to begin?"
        text="Share your priorities with our team and we’ll help direct your enquiry to the right division."
      />
    </>
  );
}

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <>
      <section className="detail-hero">
        <img src={service.image} alt="" />
        <div className="detail-overlay" />
        <div className="container detail-content">
          <span>
            {service.number} · {service.eyebrow}
          </span>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <Link href="/contact" className="button button-gold">
            Enquire about this service <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
      <section className="section container detail-intro">
        <SectionHeading
          label="Service Overview"
          title={
            <>
              Clarity first.
              <br />
              <em>Value always.</em>
            </>
          }
        />
        <div>
          <p className="lead">{service.overview}</p>
          <p>
            Every engagement begins with listening. We take time to understand the context,
            expectations and practical realities before shaping an approach around your
            organisation’s needs.
          </p>
        </div>
      </section>
      <section className="detail-offerings">
        <div className="container split-list">
          <div>
            <SectionHeading
              label="What we offer"
              title={
                <>
                  Focused support,
                  <br />
                  <em>thoughtfully delivered.</em>
                </>
              }
            />
          </div>
          <div className="number-list">
            {service.offerings.map((item, i) => (
              <div key={item}>
                <span>0{i + 1}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container benefits">
        <div className="benefit-image">
          <img src={service.image} alt="" />
        </div>
        <div>
          <SectionHeading
            label="The value"
            title={
              <>
                Designed around
                <br />
                <em>your priorities.</em>
              </>
            }
          />
          {service.benefits.map((item) => (
            <div className="benefit" key={item}>
              <span>
                <Icon name="check" size={18} />
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>
      <CtaBanner
        title={`Explore ${service.title} with us.`}
        text="Tell us about your requirements and our team will connect you with the right division."
      />
    </>
  );
}

const team = [
  { role: "Leadership", focus: "Corporate Direction" },
  { role: "Division Leadership", focus: "Business Operations" },
  { role: "Division Leadership", focus: "People & Partnerships" },
];

function LeadershipPreview() {
  return (
    <section className="section leadership" id="team">
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            label="Our Leadership"
            title={
              <>
                People with perspective.
                <br />
                <em>Leadership with purpose.</em>
              </>
            }
          />
        </div>
        <div className="team-preview">
          {team.map((person, i) => (
            <article key={i}>
              <div className="portrait-placeholder">
                <span>
                  Profile image
                  <br />
                  to be added
                </span>
              </div>
              <small>{person.focus}</small>
              <h3>Name to be announced</h3>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamPage() {
  return (
    <>
      <PageHero
        label="Our Team"
        title={
          <>
            Experienced minds.
            <br />
            <em>Shared ambition.</em>
          </>
        }
        text="Meet the people guiding TURTLEHAN’s direction and the teams delivering across our divisions."
      />
      <section className="section container team-page">
        <div className="team-note">
          <Icon name="quote" size={34} />
          <p>
            Official leadership profiles, biographies and approved photography will be published
            here when provided by TURTLEHAN.
          </p>
        </div>
        <div className="team-full">
          {team
            .concat([
              { role: "Division Leadership", focus: "Property & Hospitality" },
              { role: "Division Leadership", focus: "Travel & Tourism" },
              { role: "Programme Leadership", focus: "Community & CSR" },
            ])
            .map((person, i) => (
              <article key={i}>
                <div className="portrait-placeholder">
                  <span>
                    Professional portrait
                    <br />
                    placeholder
                  </span>
                </div>
                <div>
                  <small>{person.focus}</small>
                  <h3>Name to be announced</h3>
                  <p>{person.role}</p>
                  <a href="#" aria-label="LinkedIn profile placeholder">
                    <Icon name="linkedin" size={18} />
                  </a>
                </div>
              </article>
            ))}
        </div>
      </section>
      <CtaBanner title="Great work begins with good conversation." />
    </>
  );
}

export function CSRPage() {
  return (
    <>
      <PageHero
        label="CSR Initiatives"
        title={
          <>
            Purpose that reaches
            <br />
            <em>beyond business.</em>
          </>
        }
        text="Supporting stronger communities and a more inclusive future through thoughtful, partnership-led action."
        image={images.csr}
      />
      <section className="section container editorial">
        <div>
          <span className="editorial-number">01</span>
          <SectionHeading
            label="Our philosophy"
            title={
              <>
                Empathy into action.
                <br />
                <em>Intention into impact.</em>
              </>
            }
          />
        </div>
        <div className="editorial-body">
          <p className="lead">
            We believe social responsibility begins with listening to communities, respecting lived
            experience and supporting work that protects dignity.
          </p>
          <p>
            Our intended areas of focus include community development and support for people
            affected by autism and polio-related disabilities. Specific verified programmes and
            impact stories will be added as initiatives are formally established and documented.
          </p>
        </div>
      </section>
      <section className="csr-programmes">
        <div className="container">
          <SectionHeading
            label="Areas of focus"
            title={
              <>
                Where we aim to
                <br />
                <em>make a difference.</em>
              </>
            }
          />
          <div className="programme-grid">
            <article>
              <span>01</span>
              <h3>Community development</h3>
              <p>
                Supporting locally informed initiatives that contribute to stronger, more resilient
                communities.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Autism support</h3>
              <p>
                Seeking meaningful ways to support people affected by autism and the networks around
                them.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Disability inclusion</h3>
              <p>
                Promoting dignity and practical support for people with polio-related disabilities.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section container csr-story">
        <img src={images.csrAlt} alt="Community members smiling together" />
        <div>
          <SectionHeading
            label="Impact stories"
            title={
              <>
                Stories, verified
                <br />
                <em>with care.</em>
              </>
            }
          />
          <p>
            We will only publish impact stories once outcomes, permissions and supporting
            information have been verified. This space is reserved for future approved stories from
            TURTLEHAN’s programmes and partners.
          </p>
          <div className="placeholder-chip">Verified stories coming soon</div>
        </div>
      </section>
      <CtaBanner
        title="Partner with purpose."
        text="If your organisation shares our commitment to inclusive community development, we would welcome a conversation."
      />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title={
          <>
            Let’s start a<br />
            <em>good conversation.</em>
          </>
        }
        text="Whether you have a clear brief or the beginning of an idea, we’re ready to listen."
      />
      <ContactForm />
      <section className="map-placeholder">
        <Icon name="pin" size={30} />
        <h3>India & UAE office locations</h3>
        <p>Google Maps embeds will be added when official addresses are provided.</p>
      </section>
    </>
  );
}

export function NotFoundPage() {
  return (
    <section className="not-found">
      <span>404</span>
      <div>
        <small>Page not found</small>
        <h1>
          Looks like this path
          <br />
          <em>needs a new direction.</em>
        </h1>
        <p>The page you’re looking for may have moved or no longer exists.</p>
        <Link href="/" className="button button-gold">
          Return home <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>
            Integrated business solutions with a human point of view, serving organisations and
            communities across India and the UAE.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
            <a href="#" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
          </div>
        </div>
        <div>
          <h4>Navigate</h4>
          {[
            ["#home", "Home"],
            ["#services", "Our Services"],
            ["#clients", "Our Clients"],
            ["#team", "Our Team"],
          ].map(([p, l]) => (
            <a href={p} key={p}>
              {l}
            </a>
          ))}
        </div>
        <div>
          <h4>Divisions</h4>
          {services.map((s) => (
            <a href="#services" key={s.slug}>
              {s.title}
            </a>
          ))}
        </div>
        <div>
          <h4>Presence</h4>
          <p>India</p>
          <p>United Arab Emirates</p>
          <h4 className="footer-contact-title">Enquiries</h4>
          <a href="#contact">
            Contact our team <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} TURTLEHAN. All rights reserved.</span>
        <span>India · UAE</span>
      </div>
    </footer>
  );
}
