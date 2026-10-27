import { usePortfolio } from "../state/PortfolioContext";
import { SinglePageView } from "./SinglePageView";
import { StaggeredImageGrid } from "./StaggeredImageGrid";
import { Welcome } from "./Welcome";
import "../styles/backgrid.css";

/** Main content area: welcome globe, the staggered project grid, or a single project. */
export function BackGrid() {
  const { category, openProject } = usePortfolio();

  return (
    <div>
      <div className="container">
        {!category && <Welcome />}
        {!openProject && <StaggeredImageGrid />}
        {openProject && <SinglePageView project={openProject} />}
      </div>
    </div>
  );
}
