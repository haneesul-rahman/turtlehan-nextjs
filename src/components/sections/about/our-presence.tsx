import { SectionHeading } from "@/components/ui/section-heading";

export function OurPresence() {
  return (
    <>
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
              <p>
                Deep local context in one of the world’s most dynamic business
                environments.
              </p>
            </div>
          </article>
          <article>
            <span className="place-code">AE</span>
            <div>
              <small>Middle East</small>
              <h3>United Arab Emirates</h3>
              <p>
                A strategic presence at the centre of global commerce,
                hospitality and travel.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
