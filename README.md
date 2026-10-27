# Daniel O'Connell, portfolio (React)

React 19 + TypeScript + Vite port of
[oconnill/portfoliov2](https://github.com/oconnill/portfoliov2) (Vue 2 + Vuex).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check, then production build to dist/
npm run preview
```

## Layout

```
src/
  data/projects.ts           all content (was the Vuex store state), typed
  state/PortfolioContext.tsx useReducer + context (was the Vuex store logic)
  hooks/useTypewriter.ts     the typed URL in the browser mockup
  components/                one per original .vue file, plus Media, Logo, Icons
  styles/                    original SCSS, flattened to plain CSS
public/assets/               images and video, same paths as before
```

Media that isn't in `public/assets/` yet renders as a labeled placeholder. See
[ASSETS.md](./ASSETS.md) for the list of missing files.

## What changed in the port

**Same:** layout, copy, the staggered grid, the sliding control box, the
mobile header, the typed demo URL, hover outlines shared between the menu and
the grid, the animated logo, and the reset-on-logo-click behavior.

**Dependencies dropped:** Bootstrap (only the grid, container and
`sticky-top` were used; `styles/grid.css` reproduces them with Bootstrap 4's
breakpoints), jQuery and what-input (unused), Font Awesome (three icons, now
inline SVG), Sass (the SCSS was lightly nested and flattens to plain CSS).

**State:** the Vuex store's ten overlapping flags (`welcome`, `beenClicked`,
`isActive`, `singlePageView`, ...) are now derived from three values: the
selected category, the open project, and the outline map.

**Bugs fixed along the way:**
- Picking a new category while a project was open left the project showing (a
  `SinglePageView` vs `singlePageView` typo in the store mutation).
- The logo reset set the project list to `undefined` (it referenced a
  nonexistent `standardMenuOptions`).
- The decorative grid videos showed up as blank rows in the project menu.
- Videos now include `muted` and `playsInline`, without which browsers block autoplay.
- The email link had a space after `mailto:`.

**Small additions:** the logo is a `<button>` for keyboard access, and the
desktop control box and mobile header have a white background so content
doesn't show through them while scrolling.

**Carried over as-is, worth a look:** Black Line Productions' gallery points
at the Early Childhood images, and Early Childhood repeats its featured image
in its gallery.
