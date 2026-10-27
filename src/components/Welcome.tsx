import { WELCOME_IMAGE } from "../data/projects";
import { Media } from "./Media";
import "../styles/welcome.css";

export function Welcome() {
  return (
    <div className="row">
      <div className="col-6" />
      <div className="col-6">
        <div className="world-box">
          <div className="world-gif">
            <Media src={WELCOME_IMAGE} placeholderRatio="1 / 1" />
          </div>
        </div>
      </div>
    </div>
  );
}
