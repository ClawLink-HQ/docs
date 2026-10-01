/**
 * The app grid and heading icons for the public data apps page
 * (content/docs/integrations/public-data.mdx).
 *
 * Prices and action counts mirror the data-tools catalog in the product repo
 * (src/lib/server/data-tools/catalog.ts). Update both together.
 */
import { AppLogo } from '@/components/apps';

interface DataApp {
  name: string;
  anchor: string;
  /** Key in the APPS logo registry (components/apps.tsx). */
  logo: string;
  actions: number;
  price: string;
}

const DATA_APPS: Record<string, DataApp> = {
  'tiktok-data': { name: 'TikTok', anchor: 'tiktok', logo: 'tiktok', actions: 9, price: '$0.002' },
  'instagram-data': { name: 'Instagram', anchor: 'instagram', logo: 'instagram', actions: 8, price: '$0.004' },
  'x-data': { name: 'X', anchor: 'x', logo: 'twitter', actions: 6, price: '$0.002' },
  'youtube-data': { name: 'YouTube', anchor: 'youtube', logo: 'youtube', actions: 7, price: 'from $0.002' },
  'linkedin-data': { name: 'LinkedIn', anchor: 'linkedin', logo: 'linkedin', actions: 7, price: 'from $0.002' },
  'reddit-data': { name: 'Reddit', anchor: 'reddit', logo: 'reddit', actions: 5, price: '$0.00376' },
  'threads-data': { name: 'Threads', anchor: 'threads', logo: 'threads', actions: 5, price: '$0.00376' },
  'facebook-data': { name: 'Facebook', anchor: 'facebook', logo: 'facebook', actions: 9, price: '$0.00376' },
  'spotify-data': { name: 'Spotify', anchor: 'spotify', logo: 'spotify', actions: 7, price: '$0.00376' },
  'pinterest-data': { name: 'Pinterest', anchor: 'pinterest', logo: 'pinterest', actions: 4, price: '$0.00376' },
  'twitch-data': { name: 'Twitch', anchor: 'twitch', logo: 'twitch', actions: 4, price: '$0.00376' },
  'kick-data': { name: 'Kick', anchor: 'kick', logo: 'kick', actions: 1, price: '$0.00376' },
  'snapchat-data': { name: 'Snapchat', anchor: 'snapchat', logo: 'snapchat', actions: 3, price: '$0.00376' },
  'bluesky-data': { name: 'Bluesky', anchor: 'bluesky', logo: 'bluesky', actions: 3, price: '$0.00376' },
  'telegram-data': { name: 'Telegram', anchor: 'telegram', logo: 'telegram', actions: 3, price: '$0.00376' },
  'seo-keyword-data': { name: 'SEO keywords & SERP', anchor: 'seo-keywords', logo: 'seo-keywords', actions: 8, price: 'from $0.004' },
  'seo-domain-data': { name: 'SEO domains & backlinks', anchor: 'seo-domains', logo: 'seo-domains', actions: 9, price: 'from $0.0003' },
  'ai-visibility-data': { name: 'AI visibility', anchor: 'ai-visibility', logo: 'ai-visibility', actions: 6, price: 'from $0.008' },
  'crypto-market-data': { name: 'Crypto market', anchor: 'crypto', logo: 'crypto', actions: 11, price: '$0.00058' },
  'stock-market-data': { name: 'Stock market', anchor: 'stocks', logo: 'stocks', actions: 7, price: '$0.001998' },
};

/** One data app's logo, sized to sit inline in a heading. */
export function DataAppIcon({ app }: { app: string }) {
  const entry = DATA_APPS[app];
  if (!entry) throw new Error(`DataAppIcon: unknown data app "${app}"`);
  return <AppLogo app={entry.logo} size={26} className="mr-2 align-[-5px]" />;
}

/** Every data app as a tile that jumps to its section on the page. */
export function DataAppGrid() {
  return (
    <div className="not-prose my-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      {Object.entries(DATA_APPS).map(([slug, { name, anchor, logo, actions, price }]) => (
        <a
          key={slug}
          href={`#${anchor}`}
          className="flex items-center gap-3 rounded-xl border bg-fd-card p-3 transition-colors hover:bg-fd-accent"
        >
          <AppLogo app={logo} size={32} />
          <span className="min-w-0">
            <span className="block truncate text-sm font-medium">{name}</span>
            <span className="block text-xs text-fd-muted-foreground tabular-nums">
              {actions} {actions === 1 ? 'action' : 'actions'} · {price}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
