import { SKILL_ICONS, type Skill } from "../data/projects";
import { Media } from "./Media";
import "../styles/softwareIcons.css";

/** Row of logos for the tools used on a development project. */
export function SoftwareIcons({ skills }: { skills?: Skill[] }) {
  if (!skills?.length) return null;

  const icons = (Object.keys(SKILL_ICONS) as Skill[]).filter((s) => skills.includes(s));

  return (
    <div className="row icon-box">
      <div className="col-3" />
      <div className="col-12 col-lg-8">
        <div className="software-icon">
          {icons.map((skill) => (
            <div className="outter-icon" key={skill}>
              <div className="inner-icon">
                <Media
                  src={SKILL_ICONS[skill]}
                  alt={skill}
                  placeholderLabel={skill}
                  placeholderRatio="3 / 2"
                  placeholderStyle={{ height: "var(--icon-height)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-1 red" />
    </div>
  );
}
