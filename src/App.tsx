import { BackGrid } from "./components/BackGrid";
import { ControlBox } from "./components/ControlBox";
import { PortfolioProvider } from "./state/PortfolioContext";

export default function App() {
  return (
    <PortfolioProvider>
      <div id="app" className="mobile-reverse">
        <BackGrid />
        <ControlBox />
      </div>
    </PortfolioProvider>
  );
}
