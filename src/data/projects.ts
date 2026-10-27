/**
 * Portfolio content.
 * Asset paths are relative to /public/assets (see src/lib/assetUrl.ts).
 */

export type Category = "development" | "design" | "photography";

export const CATEGORIES: Category[] = ["development", "design", "photography"];

export type Skill =
  | "mysql"
  | "vue"
  | "wordpress"
  | "html5"
  | "laravel"
  | "javascript"
  | "nodejs"
  | "react"
  | "sass"
  | "mongo";

/** Icons are displayed in this order. */
export const SKILL_ICONS: Record<Skill, string> = {
  mysql: "software_icons/logo-mysql-170x115.png",
  vue: "software_icons/Vue.js_Logo.svg",
  wordpress: "software_icons/WordPress-logotype-alternative.png",
  html5: "software_icons/HTML5_Logo.svg",
  laravel: "software_icons/laravellogo.svg",
  javascript: "software_icons/JavaScript-logo.png",
  nodejs: "software_icons/nodejs.png",
  react: "software_icons/React-icon.svg",
  sass: "software_icons/sasslogo.png",
  mongo: "software_icons/MongoDB_Gray_Logo_FullColor_RGB-01.jpg",
};

export interface Project {
  kind: "project";
  name: string;
  description: string;
  demoLink?: string;
  gitHubLink?: string;
  /** Renders the project inside the faux browser window with a typed URL. */
  browserMockup?: boolean;
  /** Image used in the staggered grid. */
  thumbnail?: string;
  /** Hero image on the project page. */
  featuredImage?: string;
  /** Hero video on the project page. */
  video?: { src: string; poster?: string };
  /** Extra images shown under the hero for design and photography. */
  gallery?: string[];
  skills?: Skill[];
  /** Initial outline state in the grid (development projects start outlined). */
  outlined: boolean;
}

/** Decorative looping video that only appears in the staggered grid. */
export interface GridFiller {
  kind: "filler";
  id: string;
  thumbnailMovie: string;
}

export type MenuOption = Project | GridFiller;

export const isProject = (option: MenuOption): option is Project =>
  option.kind === "project";

const development: MenuOption[] = [
  {
    kind: "project",
    name: "RvIdaho.org",
    description:
      "Worked with a team of developers on a site redesign of RVIdaho.org. My focus was updating a brochure sign-up form that gave users different options of mailed material to receive. The form also allowed for all the data to be exported by RV Idaho as a .csv using a custom date range. The forms were built with Laravel and Javascript.",
    demoLink: "https://rvidaho.org/free-camping-guide/",
    browserMockup: true,
    thumbnail: "thumbnails/jairph-1185383-unsplash.jpg",
    video: {
      src: "images/rvidahodemoreelcompressed.mp4",
      poster: "placeholder-images/rvidaho_placeholder.jpg",
    },
    skills: ["javascript", "laravel", "mysql", "wordpress", "sass"],
    outlined: true,
  },
  { kind: "filler", id: "vintage-rv", thumbnailMovie: "thumbnails/vintagervdriving.mp4" },
  {
    kind: "project",
    name: "Brundage Mountain",
    description:
      "Updated Brundage’s weather widget and snow report. Using Laravel, Javascript and WordPress to create mobile responsive snow depth graph that displays current weather conditions and snow report. Added additional data to display on a homepage weather widget that can be controlled by the WordPress administrator.",
    demoLink: "https://brundage.com/",
    browserMockup: true,
    thumbnail: "thumbnails/david-marcu-338675-unsplash.jpg",
    video: {
      src: "images/brundagemobile.mp4",
      poster: "placeholder-images/brundage_placeholder.jpg",
    },
    skills: ["react", "laravel", "mysql", "wordpress", "sass"],
    outlined: true,
  },
  { kind: "filler", id: "snowboarding", thumbnailMovie: "thumbnails/snowboarding.mp4" },
  {
    kind: "project",
    name: "Kanban",
    description:
      "Organize work flow with custom boards, lists, tasks, and notes. Whether it’s for work, a side project or even the next family vacation, KANBAN helps your team stay organized.",
    demoLink: "https://kanban-oconnell.herokuapp.com/",
    gitHubLink: "https://github.com/oconnill/vue-kanban",
    browserMockup: true,
    thumbnail: "thumbnails/alex-jones-6800-unsplash.jpg",
    video: {
      src: "images/kanbandemoreel.mp4",
      poster: "placeholder-images/kanban_placeholder.jpg",
    },
    skills: ["vue", "nodejs", "html5", "mongo"],
    outlined: true,
  },
  {
    kind: "project",
    name: "Music Selector",
    description:
      "Using the frontend framework Vue Js with Mongo DB and NodeJs to access the API of Apple I Tunes. Search by artist or song through I Tunes to create a playlist of music samples",
    demoLink: "https://vue-music-oconnell.herokuapp.com/",
    gitHubLink: "https://github.com/oconnill/vue-music-checkpoint",
    browserMockup: true,
    thumbnail: "thumbnails/roman-kraft-57268-unsplash.jpg",
    video: {
      src: "images/musicselectordemoreel.mp4",
      poster: "placeholder-images/musicselector.jpg",
    },
    skills: ["vue", "nodejs", "html5", "mongo"],
    outlined: true,
  },
];

const design: MenuOption[] = [
  {
    kind: "project",
    name: "Living Waters Records",
    description:
      "Living Waters Records is a Brooklyn-based record label. Home to the bands Absolutley Yours and H. Grimace",
    thumbnail: "images/livingwatersrecordsleeve.png",
    featuredImage: "images/livingwatersrecordsleeve.png",
    gallery: ["images/livingwaterscirclelogos.png"],
    outlined: false,
  },
  {
    kind: "project",
    name: "Shift Click",
    description:
      "Etch a Sketch inspired font. Title comes from the Adobe Illustrator shortcut for creating parrallel lines",
    thumbnail: "images/shiftclickmaintitle.png",
    featuredImage: "images/shiftclickmaintitle.png",
    gallery: ["images/shiftclickalphabet.png"],
    outlined: false,
  },
  {
    kind: "project",
    name: "Chicago Beers",
    description: "Identity and Branding for use on cocktail menu. Local 22 Chicago",
    thumbnail: "images/chicagobeersbadgehelmet.png",
    featuredImage: "images/chicagobeersbadgehelmet.png",
    gallery: ["images/chicagobeerslargetitle.png", "images/chicagobeersicons.png"],
    outlined: false,
  },
  {
    kind: "project",
    name: "1986-1994",
    description:
      "An experiment in design and color. Representing years with respective trends and brands. From teva sandals of the 90's to inspiration from championship soccer teams of the late 1980's",
    thumbnail: "images/1986-1987.png",
    featuredImage: "images/1986-1987.png",
    gallery: [
      "images/1988-1990.png",
      "images/1991-1994.png",
      "images/1992-wide.png",
      "images/postergrid.png",
    ],
    outlined: false,
  },
  {
    kind: "project",
    name: "Early Childhood Behavior",
    description:
      "Packaging design for educational entertainment company Learning Seed. Uses a representational film reel to show the path and journey of being a new parent. Emphasizing the winding twisting road of caregiving and discipline in early childhood. Paired with imagery showing range in emotion, age, and temperment",
    thumbnail: "images/earlychildhoodfront.png",
    featuredImage: "images/earlychildhoodfront.png",
    gallery: ["images/earlychildhoodfront.png", "images/earlychildhoodback.png"],
    outlined: false,
  },
  {
    kind: "project",
    name: "Black Line Productions",
    description:
      "A logo mark for Chicago based Black Line Productions. A small film production studio with a focus on documentaries and young filmakers.",
    thumbnail: "images/blacklineproductions_big_logo.png",
    featuredImage: "images/blacklineproductions_big_logo.png",
    outlined: false,
  },
  {
    kind: "project",
    name: "Magnolia Memoir",
    description:
      "Identity and packaging design for Jazz Alternative band Magnolia Memoir. Inspiration from 1940's jazz albums as well as World War II icongraphy",
    thumbnail: "images/2019magnoliamemoirfront.jpg",
    featuredImage: "images/2019magnoliamemoirfront.jpg",
    gallery: ["images/2019magnoliainnerview.jpg", "images/2019magnoliabackfocus.jpg"],
    outlined: false,
  },
];

const photography: MenuOption[] = [
  {
    kind: "project",
    name: "Brennivín",
    description: "",
    featuredImage: "photography/036.jpg",
    gallery: [
      "photography/001.jpg",
      "photography/006.jpg",
      "photography/013.jpg",
      "photography/023.jpg",
      "photography/029.jpg",
    ],
    outlined: false,
  },
];

export const MENU_OPTIONS: Record<Category, MenuOption[]> = {
  development,
  design,
  photography,
};

/** Looping globe shown on the welcome screen. */
export const WELCOME_IMAGE = "images/earthworld.gif";
