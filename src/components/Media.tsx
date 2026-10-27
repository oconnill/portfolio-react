import { useState, type CSSProperties } from "react";
import { assetUrl } from "../lib/assetUrl";
import "../styles/placeholder.css";

interface MediaProps {
  /** Path relative to /public/assets. */
  src: string;
  type?: "image" | "video";
  alt?: string;
  className?: string;
  /** Video poster, also relative to /public/assets. */
  poster?: string;
  /** Shape of the placeholder box when the file is missing, e.g. "16 / 9". */
  placeholderRatio?: string;
  placeholderStyle?: CSSProperties;
  /** Short text for the placeholder; defaults to the asset path. */
  placeholderLabel?: string;
}

/**
 * Renders an image or looping video from /public/assets. If the file can't be
 * loaded it swaps in a placeholder labeled with the expected path, so missing
 * assets are visible at a glance and easy to fill in later.
 */
export function Media({
  src,
  type = "image",
  alt = "",
  className,
  poster,
  placeholderRatio = "4 / 3",
  placeholderStyle,
  placeholderLabel,
}: MediaProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (failedSrc === src) {
    return (
      <div
        className={["asset-placeholder", className].filter(Boolean).join(" ")}
        style={{ aspectRatio: placeholderRatio, ...placeholderStyle }}
        role="img"
        aria-label={alt || `Missing asset: ${src}`}
        title={`Missing: public/assets/${src}`}
      >
        <span>{placeholderLabel ?? src}</span>
      </div>
    );
  }

  const onError = () => setFailedSrc(src);

  if (type === "video") {
    return (
      <video
        key={src}
        className={className}
        src={assetUrl(src)}
        poster={poster ? assetUrl(poster) : undefined}
        autoPlay
        loop
        muted
        playsInline
        onError={onError}
      />
    );
  }

  return <img key={src} className={className} src={assetUrl(src)} alt={alt} onError={onError} />;
}
