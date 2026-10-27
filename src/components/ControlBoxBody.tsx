import type { MouseEvent } from "react";
import { usePortfolio } from "../state/PortfolioContext";
import "../styles/controlBoxBody.css";

const prevent = (fn: () => void) => (e: MouseEvent) => {
  e.preventDefault();
  fn();
};

/** Desktop menu: category titles, then the project list for the chosen category. */
export function ControlBoxBody() {
  const { category, visibleCategories, projects, selectCategory, open, setOutlined } =
    usePortfolio();

  return (
    <div className="control-box-cont">
      <div className="control-box-title">
        {visibleCategories.map((title) => (
          <h3 key={title} className="menu-option-title">
            <a href="#" onClick={prevent(() => selectCategory(title))}>
              {title}
            </a>
          </h3>
        ))}
      </div>
      {category && (
        <div className="control-box-body">
          <ul>
            {projects.map((project) => (
              <li key={project.name}>
                <h3>
                  <a
                    href="#"
                    onClick={prevent(() => open(project.name))}
                    onMouseEnter={() => setOutlined(project.name, true)}
                    onMouseLeave={() => setOutlined(project.name, false)}
                  >
                    {project.name}
                  </a>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
