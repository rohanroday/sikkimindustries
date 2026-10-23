// One stroke icon set: 24px grid, 1.75 stroke, square caps to match the loom grid.
type P = { className?: string };

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
  focusable: false,
};

export const ArrowRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const FileDoc = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6" />
  </svg>
);

export const Phone = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 5h18v14H3zM3 6l9 7 9-7" />
  </svg>
);

export const Pin = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <path d="M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
  </svg>
);

export const Menu = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3 7h18M3 12h18M3 17h18" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 12l5 5L20 6" />
  </svg>
);
