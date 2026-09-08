'use client';
import type { ComponentProps } from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { SiDiscord, SiGithub, SiTelegram, SiX } from '@icons-pack/react-simple-icons';
import { cn } from '@/lib/cn';
import { dashboardUrl, socialLinks } from '@/lib/shared';

const icons = {
  discord: SiDiscord,
  github: SiGithub,
  telegram: SiTelegram,
  x: SiX,
} as const;

export type SocialIcon = keyof typeof icons;

/**
 * Passed to `DocsLayout` as a component (not an element) so it replaces the
 * default footer container — the default is `hidden` on desktop and only
 * renders the mobile icon links, which it still passes through as `children`.
 */
export function SidebarFooter({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      // `cn` is tailwind-merge aware and resolves conflicts last-wins, so these
      // must come after the incoming className to override its `hidden flex-row`.
      className={cn(className, 'flex flex-col items-stretch gap-2 border-t px-4 py-3')}
    >
      <div className="flex flex-row items-center gap-1 empty:hidden">{children}</div>
      <div className="flex flex-row items-center gap-1">
        <a
          href={dashboardUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="cl-cta me-1 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
        >
          Dashboard
        </a>
        {socialLinks.map((social) => {
          const Icon = icons[social.icon];
          return (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.label}
              title={social.label}
              className="inline-flex size-8 items-center justify-center rounded-lg text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
      <Link
        href="/llms.txt"
        className="inline-flex flex-row items-center justify-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
      >
        <FileText className="size-3.5" />
        llms.txt
      </Link>
    </div>
  );
}
