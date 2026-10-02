/**
 * App logos and the small visual blocks built on them, for MDX pages.
 *
 * Logos are the product's own files (clawlink repo `public/icons/`, the
 * light-theme variant), copied to `public/images/apps/`. Names and
 * descriptions come from the product catalog (`src/data/integrations.ts`).
 * List only apps that are live there: a "coming soon" app has no
 * claw-link.dev/integrations page, so its tile would link to a 404.
 */
import type { ComponentType, ReactNode } from 'react';
import { SiBluesky, SiKick, SiThreads, SiTwitch } from '@icons-pack/react-simple-icons';
import { ArrowRight, Bitcoin, ChartCandlestick, Globe, Search, Sparkles } from 'lucide-react';
import { resolveIcon } from '@/lib/icons';
import { cn } from '@/lib/cn';

type IconComponent = ComponentType<{ color?: string; size?: number; className?: string }>;

interface App {
  name: string;
  /** File in public/images/apps/. */
  file?: string;
  /** For apps with no logo file: a simple-icons or lucide component. */
  Icon?: IconComponent;
  color?: string;
  description?: string;
  /** Set false for entries with no claw-link.dev/integrations page (agents, data apps). */
  page?: false;
}

const APPS: Record<string, App> = {
  // Communication
  gmail: { name: 'Gmail', file: 'gmail.svg', description: 'Send, read, and manage emails' },
  slack: { name: 'Slack', file: 'slack.svg', description: 'Post messages and browse Slack channels' },
  outlook: { name: 'Outlook', file: 'outlook.svg', description: 'Read mail, manage calendar, and browse contacts' },
  'microsoft-teams': { name: 'Microsoft Teams', file: 'microsoft-teams.svg', description: 'Chat, meetings, and team collaboration' },
  discord: { name: 'Discord', file: 'discord.svg', description: 'Read your profile, servers, and connections' },
  telegram: { name: 'Telegram Bot', file: 'telegram.svg', description: 'Automate chats and channels through a Telegram bot' },
  whatsapp: { name: 'WhatsApp Business', file: 'whatsapp.svg', description: 'Send messages through the WhatsApp Business API' },
  zoom: { name: 'Zoom', file: 'zoom.svg', description: 'Create and manage meetings, webinars, and recordings' },
  sendgrid: { name: 'SendGrid', file: 'sendgrid.svg', description: 'Deliver transactional and marketing emails' },
  resend: { name: 'Resend', file: 'resend.png', description: 'Send transactional and marketing emails' },
  // Productivity
  notion: { name: 'Notion', file: 'notion.svg', description: 'Manage pages, databases, and blocks' },
  'google-sheets': { name: 'Google Sheets', file: 'google-sheets.svg', description: 'Read and write spreadsheet data' },
  'google-calendar': { name: 'Google Calendar', file: 'google-calendar.svg', description: 'Create and manage calendar events' },
  'google-drive': { name: 'Google Drive', file: 'google-drive.svg', description: 'Upload, search, and manage files' },
  'google-docs': { name: 'Google Docs', file: 'google-docs.svg', description: 'Create and edit documents' },
  airtable: { name: 'Airtable', file: 'airtable.svg', description: 'Manage bases, tables, and records' },
  todoist: { name: 'Todoist', file: 'todoist.svg', description: 'Create and manage tasks and projects' },
  trello: { name: 'Trello', file: 'trello.svg', description: 'Manage boards, lists, and cards' },
  asana: { name: 'Asana', file: 'asana.svg', description: 'Track tasks, projects, and workflows' },
  clickup: { name: 'ClickUp', file: 'clickup.svg', description: 'Manage tasks, docs, goals, and sprints' },
  monday: { name: 'Monday', file: 'monday.svg', description: 'Plan, track, and deliver team projects' },
  calendly: { name: 'Calendly', file: 'calendly.svg', description: 'Schedule meetings and manage bookings' },
  // Developer tools
  github: { name: 'GitHub', file: 'github.webp', description: 'Repositories, issues, pull requests, and workflows' },
  gitlab: { name: 'GitLab', file: 'gitlab.svg', description: 'Repos, merge requests, issues, and CI/CD pipelines' },
  jira: { name: 'Jira', file: 'jira.svg', description: 'Create and manage issues and sprints' },
  linear: { name: 'Linear', file: 'linear.svg', description: 'Create and manage issues, cycles, and projects' },
  vercel: { name: 'Vercel', file: 'vercel.svg', description: 'Projects, deployments, domains, and env variables' },
  sentry: { name: 'Sentry', file: 'sentry.svg', description: 'Monitor errors and application performance' },
  cloudflare: { name: 'Cloudflare', file: 'cloudflare.svg', description: 'DNS, zones, workers, and security settings' },
  supabase: { name: 'Supabase', file: 'supabase.svg', description: 'Query and manage Postgres databases' },
  posthog: { name: 'PostHog', file: 'posthog.webp', description: 'Track user behavior and feature flags' },
  firebase: { name: 'Firebase', file: 'firebase.svg', description: 'Firebase Authentication users and sign-in' },
  // CRM, sales, support
  hubspot: { name: 'HubSpot', file: 'hubspot.svg', description: 'Manage contacts, deals, and pipelines' },
  salesforce: { name: 'Salesforce', file: 'salesforce.svg', description: 'Manage CRM data and workflows' },
  apollo: { name: 'Apollo', file: 'apollo.jpg', description: 'Search leads and manage contacts' },
  attio: { name: 'Attio', file: 'attio.png', description: 'Contacts, companies, and deals in a flexible CRM' },
  zendesk: { name: 'Zendesk', file: 'zendesk.png', description: 'Support tickets, macros, users, and organizations' },
  intercom: { name: 'Intercom', file: 'intercom.svg', description: 'Conversations, contacts, and support articles' },
  // Payments and finance
  stripe: { name: 'Stripe', file: 'stripe.svg', description: 'Manage payments, customers, and invoices' },
  quickbooks: { name: 'QuickBooks', file: 'quickbooks.svg', description: 'Manage invoices and accounting' },
  xero: { name: 'Xero', file: 'xero.svg', description: 'Accounting, invoices, contacts, and expenses' },
  square: { name: 'Square', file: 'square.svg', description: 'Process payments and manage POS' },
  brex: { name: 'Brex', file: 'brex.svg', description: 'Cards, budgets, expenses, and spend limits' },
  // Social media
  youtube: { name: 'YouTube', file: 'youtube.svg', description: 'Upload videos and manage channels' },
  twitter: { name: 'X', file: 'twitter.svg', description: 'Post, search, and analyze engagement' },
  linkedin: { name: 'LinkedIn', file: 'linkedin.svg', description: 'Post updates and manage pages' },
  instagram: { name: 'Instagram', file: 'instagram.svg', description: 'Publish posts and manage media' },
  facebook: { name: 'Facebook', file: 'facebook.svg', description: 'Read Page posts and engagement' },
  reddit: { name: 'Reddit', file: 'reddit.svg', description: 'Post content and browse discussions' },
  pinterest: { name: 'Pinterest', file: 'pinterest.svg', description: 'Post Pins, manage boards, read analytics' },
  // Data, marketing, storage, design, AI
  'google-analytics': { name: 'Google Analytics', file: 'google-analytics.svg', description: 'Reports for your Analytics properties' },
  firecrawl: { name: 'Firecrawl', file: 'firecrawl.svg', description: 'Scrape, crawl, and search the web' },
  mailchimp: { name: 'Mailchimp', file: 'mailchimp.svg', description: 'Email campaigns and audiences' },
  instantly: { name: 'Instantly', file: 'instantly.webp', description: 'Cold email outreach and leads' },
  sharepoint: { name: 'SharePoint', file: 'sharepoint.svg', description: 'Sites, lists, and files' },
  onedrive: { name: 'OneDrive', file: 'onedrive.svg', description: 'Browse, search, and manage files' },
  dropbox: { name: 'Dropbox', file: 'dropbox.svg', description: 'Store, sync, and share files' },
  box: { name: 'Box', file: 'box.svg', description: 'Store, share, and manage files' },
  canva: { name: 'Canva', file: 'canva.svg', description: 'Designs, assets, and brand templates' },
  figma: { name: 'Figma', file: 'figma.svg', description: 'Design files, comments, and dev resources' },
  openai: { name: 'OpenAI', file: 'openai.svg', description: 'Text, images, and embeddings' },
  elevenlabs: { name: 'ElevenLabs', file: 'elevenlabs.svg', description: 'Speech generation and voice cloning' },
  'perplexity-ai': { name: 'Perplexity', file: 'perplexity-ai.svg', description: 'Web search and AI answers' },
  replicate: { name: 'Replicate', file: 'replicate.svg', description: 'Run AI models and predictions' },
  'hugging-face': { name: 'Hugging Face', file: 'hugging-face.svg', description: 'Models, datasets, and inference' },
  // Logos for the public data apps that have no catalog app of their own
  tiktok: { name: 'TikTok', file: 'tiktok.svg', page: false },
  spotify: { name: 'Spotify', file: 'spotify.svg', page: false },
  snapchat: { name: 'Snapchat', file: 'snapchat.svg', page: false },
  twitch: { name: 'Twitch', Icon: SiTwitch, color: '#9146FF', page: false },
  kick: { name: 'Kick', Icon: SiKick, color: '#2BB80E', page: false },
  bluesky: { name: 'Bluesky', Icon: SiBluesky, color: '#1185FE', page: false },
  threads: { name: 'Threads', Icon: SiThreads, color: '#000000', page: false },
  'seo-keywords': { name: 'SEO keywords', Icon: Search, color: '#1D8FE6', page: false },
  'seo-domains': { name: 'SEO domains', Icon: Globe, color: '#0F766E', page: false },
  'ai-visibility': { name: 'AI visibility', Icon: Sparkles, color: '#7C3AED', page: false },
  crypto: { name: 'Crypto', Icon: Bitcoin, color: '#F7931A', page: false },
  stocks: { name: 'Stocks', Icon: ChartCandlestick, color: '#0E7490', page: false },
  clawlink: { name: 'ClawLink', file: 'clawlink.svg', page: false },
  // Agent clients, in the order of the dashboard's Install page
  openclaw: { name: 'OpenClaw', file: 'openclaw.webp', page: false },
  hermes: { name: 'Hermes', file: 'hermes.webp', page: false },
  claude: { name: 'Claude Code', file: 'claude.svg', page: false },
  cursor: { name: 'Cursor', file: 'cursor.svg', page: false },
  codex: { name: 'Codex', file: 'codex.svg', page: false },
  grokbot: { name: 'Grok Bot', file: 'grokbot.png', page: false },
  muse: { name: 'Muse', file: 'muse.svg', page: false },
  'claude-ai': { name: 'Claude.ai', file: 'claude.svg', page: false },
  chatgpt: { name: 'ChatGPT', file: 'openai.svg', page: false },
};

const list = (apps: string) => apps.split(/\s+/).filter(Boolean);

function appHref(slug: string) {
  return APPS[slug]?.page === false ? undefined : `https://claw-link.dev/integrations/${slug}`;
}

/**
 * One app's logo on a small white tile. The tile stays white in dark mode,
 * so dark logos (GitHub, Notion, X) keep their contrast without a second file.
 */
export function AppLogo({ app, size = 24, className }: { app: string; size?: number; className?: string }) {
  const entry = APPS[app];
  if (!entry) throw new Error(`AppLogo: unknown app "${app}". Add it to APPS in components/apps.tsx.`);
  const inner = Math.round(size * 0.68);
  return (
    <span
      className={cn('inline-flex shrink-0 items-center justify-center rounded-md border bg-white', className)}
      style={{ width: size, height: size }}
    >
      {entry.file ? (
        // Plain <img>: the docs are a static export with unoptimized images.
        <img src={`/images/apps/${entry.file}`} alt="" width={inner} height={inner} className="object-contain" />
      ) : entry.Icon ? (
        <entry.Icon color={entry.color} size={inner} />
      ) : null}
    </span>
  );
}

/** A grid of app tiles: logo, name and one-line description, each linking to the app's page. */
export function AppGrid({ apps, cols = 3 }: { apps: string; cols?: 2 | 3 }) {
  return (
    <div className={cn('not-prose my-6 grid grid-cols-1 gap-2 sm:grid-cols-2', cols === 3 && 'lg:grid-cols-3')}>
      {list(apps).map((slug) => {
        const { name, description } = APPS[slug] ?? { name: slug };
        const href = appHref(slug);
        const body = (
          <>
            <AppLogo app={slug} size={36} />
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium">{name}</span>
              {description && (
                <span className="line-clamp-2 text-xs text-fd-muted-foreground">{description}</span>
              )}
            </span>
          </>
        );
        const tile = 'flex items-center gap-3 rounded-xl border bg-fd-card p-3';
        return href ? (
          <a key={slug} href={href} className={cn(tile, 'transition-colors hover:bg-fd-accent')}>
            {body}
          </a>
        ) : (
          <div key={slug} className={tile}>
            {body}
          </div>
        );
      })}
    </div>
  );
}

/** A row of logos, with the app name under each one when `labels` is set. */
export function LogoRow({ apps, labels = false }: { apps: string; labels?: boolean }) {
  return (
    <div className={cn('not-prose my-6 flex flex-wrap', labels ? 'gap-x-6 gap-y-4' : 'gap-2')}>
      {list(apps).map((slug) => (
        <span key={slug} className="flex flex-col items-center gap-1.5" title={APPS[slug]?.name}>
          <AppLogo app={slug} size={labels ? 44 : 32} />
          {labels && <span className="text-xs text-fd-muted-foreground">{APPS[slug]?.name}</span>}
        </span>
      ))}
    </div>
  );
}

interface Category {
  title: string;
  href: string;
  apps: string;
  text?: string;
}

/** Category cards: a title, a short line and the first few app logos of the category. */
export function CategoryGrid({ items }: { items: Category[] }) {
  return (
    <div className="not-prose my-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map(({ title, href, apps, text }) => (
        <a
          key={href}
          href={href}
          className="group flex flex-col gap-3 rounded-xl border bg-fd-card p-4 transition-colors hover:bg-fd-accent"
        >
          <span className="flex items-center gap-1.5">
            {list(apps).map((slug) => (
              <AppLogo key={slug} app={slug} size={28} />
            ))}
          </span>
          <span>
            <span className="flex items-center gap-1 text-sm font-medium">
              {title}
              <ArrowRight className="size-3.5 text-fd-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </span>
            {text && <span className="mt-1 block text-sm text-fd-muted-foreground text-pretty">{text}</span>}
          </span>
        </a>
      ))}
    </div>
  );
}

/** Example prompts, each with the logo of the app it uses. Items are [app, prompt]. */
export function Prompts({ items }: { items: [string, string][] }) {
  return (
    <ul className="not-prose my-6 flex flex-col gap-2">
      {items.map(([app, text]) => (
        <li key={text} className="flex items-center gap-3 rounded-xl border bg-fd-card px-3 py-2.5 text-sm">
          <AppLogo app={app} size={28} />
          <span className="min-w-0 flex-1 text-pretty">“{text}”</span>
          <span className="hidden shrink-0 text-xs text-fd-muted-foreground sm:block">{APPS[app]?.name}</span>
        </li>
      ))}
    </ul>
  );
}

interface FlowStep {
  /** An app slug from APPS (shows its logo) or a lucide icon name. */
  icon: string;
  title: string;
  text: ReactNode;
}

/** A left-to-right path of steps with arrows, stacked on phones. */
export function Flow({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="not-prose my-6 flex flex-col gap-2 sm:flex-row">
      {steps.map((step, index) => (
        <div key={step.title} className="contents">
          {index > 0 && (
            <ArrowRight className="size-4 shrink-0 self-center text-fd-muted-foreground max-sm:rotate-90" />
          )}
          <div className="flex-1 rounded-xl border bg-fd-card p-3 text-sm">
            <div className="mb-1 flex items-center gap-2 font-medium">
              {APPS[step.icon] ? (
                <AppLogo app={step.icon} size={22} />
              ) : (
                <span className="text-fd-primary [&_svg]:size-4">{resolveIcon(step.icon)}</span>
              )}
              {step.title}
            </div>
            <p className="text-fd-muted-foreground text-pretty">{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
