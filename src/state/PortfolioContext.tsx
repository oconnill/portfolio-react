import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
import {
  CATEGORIES,
  MENU_OPTIONS,
  isProject,
  type Category,
  type MenuOption,
  type Project,
} from "../data/projects";

/**
 * Replaces the Vuex store. The original kept ~10 overlapping flags
 * (welcome, beenClicked, isActive, singlePageView, ...); here they are all
 * derived from three pieces of state.
 */
interface State {
  category: Category | null;
  openProjectName: string | null;
  /** Bumped on every project open so the typewriter restarts, even on re-clicks. */
  openCount: number;
  outlined: Record<string, boolean>;
}

type Action =
  | { type: "selectCategory"; category: Category }
  | { type: "openProject"; name: string }
  | { type: "setOutlined"; name: string; outlined: boolean }
  | { type: "reset" };

const initialOutlined = (): Record<string, boolean> => {
  const map: Record<string, boolean> = {};
  for (const option of Object.values(MENU_OPTIONS).flat()) {
    if (isProject(option)) map[option.name] = option.outlined;
  }
  return map;
};

const initialState: State = {
  category: null,
  openProjectName: null,
  openCount: 0,
  outlined: initialOutlined(),
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "selectCategory":
      return { ...state, category: action.category, openProjectName: null };
    case "openProject":
      return { ...state, openProjectName: action.name, openCount: state.openCount + 1 };
    case "setOutlined":
      return { ...state, outlined: { ...state.outlined, [action.name]: action.outlined } };
    case "reset":
      return { ...state, category: null, openProjectName: null };
  }
}

interface PortfolioValue {
  category: Category | null;
  /** Category titles still visible in the menu (only the chosen one once picked). */
  visibleCategories: Category[];
  menuOptions: MenuOption[];
  projects: Project[];
  openProject: Project | null;
  openCount: number;
  /** True for design and photography, which show a gallery under the hero. */
  showGallery: boolean;
  isOutlined: (option: MenuOption) => boolean;
  selectCategory: (category: Category) => void;
  open: (name: string) => void;
  setOutlined: (name: string, outlined: boolean) => void;
  reset: () => void;
}

const PortfolioContext = createContext<PortfolioValue | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo<PortfolioValue>(() => {
    const menuOptions = state.category ? MENU_OPTIONS[state.category] : [];
    const projects = menuOptions.filter(isProject);
    return {
      category: state.category,
      visibleCategories: state.category ? [state.category] : CATEGORIES,
      menuOptions,
      projects,
      openProject: projects.find((p) => p.name === state.openProjectName) ?? null,
      openCount: state.openCount,
      showGallery: state.category !== null && state.category !== "development",
      isOutlined: (option) => isProject(option) && !!state.outlined[option.name],
      selectCategory: (category) => dispatch({ type: "selectCategory", category }),
      open: (name) => dispatch({ type: "openProject", name }),
      setOutlined: (name, outlined) => dispatch({ type: "setOutlined", name, outlined }),
      reset: () => dispatch({ type: "reset" }),
    };
  }, [state]);

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio(): PortfolioValue {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used inside <PortfolioProvider>");
  return ctx;
}
