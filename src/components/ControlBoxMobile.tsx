import { usePortfolio } from "../state/PortfolioContext";
import { Logo } from "./Logo";

/** Sticky header menu shown under 768px in place of the floating control box. */
export function ControlBoxMobile() {
  const { category, visibleCategories, projects, selectCategory, open, reset } = usePortfolio();

  return (
    <div className="control-box-mobile sticky-top">
      <div className="control-header">
        <div className="logo-font">Daniel O'Connell</div>
        <Logo onClick={reset} />
      </div>

      <div className="mobile-menu-option-title">
        {visibleCategories.map((title) => (
          <h3 key={title} className="menu-option-title" onClick={() => selectCategory(title)}>
            {title}
          </h3>
        ))}
      </div>

      {category && (
        <div className="control-box-body">
          <ul>
            {projects.map((project) => (
              <li key={project.name} onClick={() => open(project.name)}>
                <h3>{project.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
