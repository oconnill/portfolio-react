import type { Project } from "../data/projects";
import { useTypewriter } from "../hooks/useTypewriter";
import { usePortfolio } from "../state/PortfolioContext";
import { Media } from "./Media";
import { SoftwareIcons } from "./SoftwareIcons";
import "../styles/singlePageView.css";

/** Project detail: title, hero (in a faux browser for dev work), description, gallery, skills. */
export function SinglePageView({ project }: { project: Project }) {
  const { openCount, showGallery } = usePortfolio();
  const typedUrl = useTypewriter(project.demoLink ?? "", openCount);

  return (
    <div>
      <div className="row">
        <div className="col-3 red" />
        <div className="col-12 col-lg-8">
          <div className="project-title">
            <h2>{project.name}</h2>
          </div>

          <div className={project.browserMockup ? "browser-mockup" : undefined}>
            {project.browserMockup && <div className="browser-input">{typedUrl}</div>}
            <div className="mock-up-frame">
              {project.featuredImage && (
                <Media src={project.featuredImage} alt={project.name} />
              )}
              {project.video && (
                <Media
                  src={project.video.src}
                  poster={project.video.poster}
                  type="video"
                  placeholderRatio="16 / 10"
                />
              )}
            </div>
          </div>

          {project.description && (
            <div className="project-text-block">{project.description}</div>
          )}
        </div>
        <div className="col-1 red" />
      </div>

      {showGallery && project.gallery && (
        <div className="row">
          {project.gallery.map((image, i) => (
            <div key={`${image}-${i}`} className="comp-image-frame col-12">
              <Media src={image} className="complementary-img" />
            </div>
          ))}
        </div>
      )}

      <SoftwareIcons skills={project.skills} />
    </div>
  );
}
