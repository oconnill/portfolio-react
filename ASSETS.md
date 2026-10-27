# Asset status

All site media lives in `public/assets/`, at the path the data in
`src/data/projects.ts` refers to. Anything missing renders as a striped
placeholder labeled with its expected path (hover for the full
`public/assets/...` location). Add the file at that path and the placeholder
is replaced on the next reload, with no code changes.

**12 of 49 referenced files are present. 37 are missing**, most likely because
the original repo's `.gitignore` excluded `assets`, so they never reached
GitHub.

## Missing

### Welcome screen
- `images/earthworld.gif`

### Development: grid thumbnails (Unsplash photos) and looping fillers
- `thumbnails/jairph-1185383-unsplash.jpg` (RvIdaho.org)
- `thumbnails/david-marcu-338675-unsplash.jpg` (Brundage Mountain)
- `thumbnails/alex-jones-6800-unsplash.jpg` (Kanban)
- `thumbnails/roman-kraft-57268-unsplash.jpg` (Music Selector)
- `thumbnails/vintagervdriving.mp4`
- `thumbnails/snowboarding.mp4`

### Development: demo reels and their poster frames
- `images/brundagemobile.mp4`
- `images/musicselectordemoreel.mp4`
- `placeholder-images/rvidaho_placeholder.jpg`
- `placeholder-images/brundage_placeholder.jpg`
- `placeholder-images/kanban_placeholder.jpg`
- `placeholder-images/musicselector.jpg`

### Development: skill logos
- `software_icons/logo-mysql-170x115.png`
- `software_icons/Vue.js_Logo.svg`
- `software_icons/WordPress-logotype-alternative.png`
- `software_icons/HTML5_Logo.svg`
- `software_icons/laravellogo.svg`
- `software_icons/JavaScript-logo.png`
- `software_icons/nodejs.png`
- `software_icons/React-icon.svg`
- `software_icons/sasslogo.png`
- `software_icons/MongoDB_Gray_Logo_FullColor_RGB-01.jpg`

### Design
- `images/livingwatersrecordsleeve.png` (Living Waters Records)
- `images/shiftclickmaintitle.png`, `images/shiftclickalphabet.png` (Shift Click)
- `images/1986-1987.png`, `images/1988-1990.png`, `images/1991-1994.png`,
  `images/1992-wide.png`, `images/postergrid.png` (1986-1994)

### Photography (Brennivín)
- `photography/036.jpg`, `001.jpg`, `006.jpg`, `013.jpg`, `023.jpg`, `029.jpg`

## Present but unused
- `images/1992adjustyourtv.png`
- `images/chicagobeersiconscentered.png`

`postergrid.afdesign` (5.9 MB Affinity Designer source) was left out of the
port; it was never displayed. Export it to `images/postergrid.png` to fill that
slot.

## Strategy questions for later
- Recover from a local backup or the Wayback Machine, or re-export from source files?
- The skill logos could become an icon package or inline SVGs instead of image files.
- Large videos and photos may be better on a CDN or image host than in the repo.
