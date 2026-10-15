export const themeColors = {
  light: {
    canvas: '#f8f6f0',
    primary: '#14725b',
    secondary: '#d4a373',
    alert: '#e05a47',
    surface: '#ffffff',
    surfaceElevated: '#ffffff',
    text: '#2b2d2f',
    muted: '#6c757d',
    footer: '#2b2d2f',
  },
  dark: {
    canvas: '#181614',
    primary: '#2b7a67',
    secondary: '#cf9f6e',
    alert: '#cf5d4c',
    surface: '#24211d',
    surfaceElevated: '#2a2622',
    text: '#f3eee6',
    muted: '#a69e94',
    footer: '#12100f',
  },
} as const;

export type ThemeMode = keyof typeof themeColors;
export type ColorToken = keyof typeof themeColors.light;

export const ctaGaussColors = {
  accent: '#6ee7b7',
  accentSoft: '#a7f3d0',
} as const;

export const ctaGaussOpacity = {
  fill: 0.18,
  fillEnd: 0,
  line: 0.35,
  lineSoft: 0.15,
} as const;

export function hexToRgba(hex: string, alpha: number): string {
  const value = hex.replace('#', '');
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
