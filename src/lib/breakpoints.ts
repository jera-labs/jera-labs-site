/**
 * Responsive breakpoints (aligned with Tailwind defaults).
 *
 * Mobile  : < 640px   (default / base)
 * sm      : ≥ 640px   large phones / small tablets
 * md      : ≥ 768px   tablets
 * lg      : ≥ 1024px  desktop nav + two-column layouts
 * xl      : ≥ 1280px  wide desktop
 *
 * Rules:
 * - Navigation desktop starts at `lg` (Spanish labels need room).
 * - Section grids become multi-column at `lg`.
 * - CTAs stack full-width below `sm`.
 */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;
