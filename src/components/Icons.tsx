/** Inline SVG icons for the contact links. */

const base = { width: "1em", height: "1em", viewBox: "0 0 16 16", "aria-hidden": true } as const;

export const LinkedInIcon = () => (
  <svg {...base} fill="currentColor">
    <circle cx="2.4" cy="2.4" r="1.8" />
    <rect x="0.8" y="5.4" width="3.2" height="10" />
    <path d="M6 5.4h3v1.5c.5-.9 1.7-1.8 3.4-1.8 3.2 0 3.6 2.1 3.6 4.8v5.5h-3.2v-4.9c0-1.2 0-2.6-1.6-2.6s-1.9 1.3-1.9 2.5v5H6z" />
  </svg>
);

export const GitHubIcon = () => (
  <svg {...base} fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

export const EnvelopeIcon = () => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
    <rect x="1" y="3" width="14" height="10" rx="1.5" />
    <path d="M1.5 4l6.5 5 6.5-5" />
  </svg>
);
