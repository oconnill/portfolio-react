/** The animated "D O" mark. Clicking it returns to the welcome screen. */
export function Logo({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="logo-icon" onClick={onClick} aria-label="Back to start">
      <span className="do-logo">
        <span className="do-logo-d" />
        <span className="do-logo-o" />
      </span>
    </button>
  );
}
