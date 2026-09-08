import { createElement, isValidElement, type ReactNode } from 'react';
import * as lucide from 'lucide-react';

const icons = lucide as unknown as Record<string, unknown>;

/**
 * Font Awesome names used by the previous Mintlify site, mapped to their
 * closest lucide equivalent. Anything not listed falls through to a
 * PascalCase lookup, so `<Card icon="rocket" />` resolves to `Rocket`.
 */
const aliases: Record<string, string> = {
  message: 'MessageSquare',
  share: 'Share2',
  'diagram-project': 'Workflow',
  'chart-line': 'ChartLine',
  bolt: 'Zap',
  'triangle-exclamation': 'TriangleAlert',
  'magnifying-glass': 'Search',
  gear: 'Settings',
  envelope: 'Mail',
  book: 'BookOpen',
  grid: 'Grid3x3',
  'credit-card': 'CreditCard',
  'circle-check': 'CircleCheck',
};

function toPascalCase(value: string) {
  return value
    .split(/[-_\s]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/**
 * Resolve an `icon` string from meta.json, frontmatter, or an MDX prop to a
 * lucide icon element. Returns undefined when there is no match, so callers
 * can fall back gracefully.
 */
export function resolveIcon(icon: string | undefined): ReactNode | undefined {
  if (!icon) return undefined;

  const name = aliases[icon] ?? toPascalCase(icon);
  const Icon = icons[name];
  if (typeof Icon !== 'function' && typeof Icon !== 'object') return undefined;

  return createElement(Icon as lucide.LucideIcon);
}

/** Accepts either an already-built element or an icon name string. */
export function resolveIconProp(icon: ReactNode): ReactNode | undefined {
  if (typeof icon === 'string') return resolveIcon(icon);
  return isValidElement(icon) ? icon : undefined;
}
