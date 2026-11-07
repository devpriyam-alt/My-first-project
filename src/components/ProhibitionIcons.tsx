import React from 'react';

// Icon for Drinking: Alcohol bottle sign
export const AlcoholBottleIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Bottle neck & rim */}
    <path d="M10 2h4" />
    <path d="M10 2v3a2 2 0 0 1-.6 1.4L8 8v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8l-1.4-1.6A2 2 0 0 1 14 5V2" />
    {/* Wine glass or bottle label line */}
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="16" x2="15" y2="16" />
  </svg>
);

// Icon for Smoking: Cigarette with smoke sign
export const CigaretteSmokeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Cigarette cylinder */}
    <rect x="2" y="13" width="16" height="5" rx="1" />
    {/* Filter tip stripe */}
    <line x1="6" y1="13" x2="6" y2="18" />
    {/* Ash tip */}
    <line x1="18" y1="13" x2="18" y2="18" />
    {/* Smoke wisps rising */}
    <path d="M18 9c0-1.5 1-2 1-3.5S18 4 18 2.5" />
    <path d="M21 9c0-1.5 1-2 1-3.5S21 4 21 2.5" />
  </svg>
);

// Icon for Chicken / Non-veg: Chicken drumstick / poultry leg sign
export const ChickenLegIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Chicken drumstick meat bulb */}
    <path d="M15.5 3.5a5.5 5.5 0 0 1 4.5 7.5c-1 2.5-4 5-8 7.5l-2-2c2.5-4 5-7 7.5-8a5.5 5.5 0 0 1-2-5Z" />
    {/* Drumstick bone */}
    <path d="M8 17l-3.5 3.5" />
    {/* Bone joints */}
    <circle cx="4" cy="20" r="1.5" />
    <circle cx="5" cy="17" r="1.5" />
  </svg>
);

// Icon for Egg: Egg sign
export const EggSignIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Egg silhouette: wider bottom, tapered rounded top */}
    <path d="M12 2C8 2 5 7.5 5 13a7 7 0 0 0 14 0c0-5.5-3-11-7-11Z" />
    {/* Subtle egg shine line */}
    <path d="M14 8c1.5 1.5 1.5 4 0 5.5" strokeDasharray="1 3" strokeWidth="1.5" />
  </svg>
);
