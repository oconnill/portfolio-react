import type { MouseEvent } from "react";
import { isProject } from "../data/projects";
import { usePortfolio } from "../state/PortfolioContext";
import { Media } from "./Media";

/**
 * Two-column grid of thumbnails, each pushed down a further 30vh so they
 * stagger. Only appears for categories with more than three entries.
 */
export function StaggeredImageGrid() {
  const { menuOptions, isOutlined, open, setOutlined } = usePortfolio();

  if (menuOptions.length <= 3) return null;

  return (
    <div className="row">
      <div className="col-3" />
      {menuOptions.map((option, i) => {
        const top = i === 0 ? undefined : `${i * 30}vh`;
        const key = isProject(option) ? option.name : option.id;

        return (
          <div key={key} className="backgroundGridImage col-3" style={{ top }}>
            <div className={isOutlined(option) ? "outlined" : undefined}>
              {isProject(option) ? (
                <a
                  href="#"
                  onMouseEnter={() => setOutlined(option.name, true)}
                  onMouseLeave={() => setOutlined(option.name, false)}
                  onClick={(e: MouseEvent) => {
                    e.preventDefault();
                    open(option.name);
                  }}
                >
                  {option.thumbnail && (
                    <Media src={option.thumbnail} className="thumbnail" alt={option.name} placeholderRatio="3 / 4" />
                  )}
                </a>
              ) : (
                <Media src={option.thumbnailMovie} type="video" placeholderRatio="3 / 4" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
