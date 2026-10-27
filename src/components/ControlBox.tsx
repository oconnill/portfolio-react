import { usePortfolio } from "../state/PortfolioContext";
import { ControlBoxBody } from "./ControlBoxBody";
import { ControlBoxMobile } from "./ControlBoxMobile";
import { EnvelopeIcon, GitHubIcon, LinkedInIcon } from "./Icons";
import { Logo } from "./Logo";
import "../styles/controlBox.css";

/** The fixed menu box on desktop (slides left once a category is chosen), plus the mobile header. */
export function ControlBox() {
  const { category, reset } = usePortfolio();

  return (
    <div>
      <div className={`control-box${category ? " active" : ""}`}>
        <div className="control-header">
          <div className="logo-font">Daniel O'Connell</div>
          <Logo onClick={reset} />
        </div>
        <ControlBoxBody />
        <div className="control-footer">
          <a href="https://www.linkedin.com/in/danieloconne11/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/oconnill" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="mailto:daniel.richard.oconnell@gmail.com" aria-label="Email">
            <EnvelopeIcon />
          </a>
        </div>
      </div>
      <ControlBoxMobile />
    </div>
  );
}
