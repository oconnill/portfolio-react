import { useEffect, useState } from "react";

/**
 * Types `text` out one character at a time, restarting whenever `text` or
 * `restartKey` changes.
 */
export function useTypewriter(text: string, restartKey: unknown, speedMs = 50): string {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    if (!text) return;
    const id = window.setInterval(() => {
      setCount((n) => {
        if (n + 1 >= text.length) window.clearInterval(id);
        return Math.min(n + 1, text.length);
      });
    }, speedMs);
    return () => window.clearInterval(id);
  }, [text, restartKey, speedMs]);

  return text.slice(0, count);
}
