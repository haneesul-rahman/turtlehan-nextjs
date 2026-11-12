import { team } from "@/data/site";
import { SectionHeading } from "../../ui/section-heading";

export function LeadershipSection() {
  return (
    <>
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
            {team.map((person) => (
              <article key={person.name}>
                <div className="team-portrait">
                  <img src={person.image} alt={person.name} />
                </div>
                <small>{person.focus}</small>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
