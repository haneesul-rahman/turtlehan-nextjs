import { SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/data/site";

export function WhyUs() {
  return (
    <>
      <section className="why-section">
        <div className="why-image">
          <img
            src={images.people}
            alt="Business professionals reviewing a project"
          />
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
            We value enduring relationships over short-term transactions,
            bringing commercial discipline and genuine attentiveness to every
            engagement.
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
              [
                "03",
                "Customer focus",
                "Solutions shaped around real goals, not fixed templates.",
              ],
              [
                "04",
                "Quality & transparency",
                "Clear communication and care at every step.",
              ],
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
    </>
  );
}
