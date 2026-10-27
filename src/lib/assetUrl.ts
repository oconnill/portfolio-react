/**
 * Resolves a content path (e.g. "images/kanbandemoreel.mp4") to the file in
 * /public/assets. Drop a missing file into that folder at the same path and
 * the placeholder for it disappears; no code changes needed.
 */
export const assetUrl = (path: string): string =>
  `${import.meta.env.BASE_URL}assets/${path}`;
