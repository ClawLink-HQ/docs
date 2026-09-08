'use client';
import type { ComponentProps } from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/cn';
import { dashboardUrl } from '@/lib/shared';

/**
 * Passed to `DocsLayout` as a component (not an element) so it replaces the
 * default footer container — the default one is `hidden` on desktop and only
 * shows the mobile icon links, which it still renders via `children`.
 */
export function SidebarFooter({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('flex flex-col gap-2 border-t px-4 py-3', className?.replace('hidden', ''))}
    >
      <div className="flex flex-row items-center gap-2 empty:hidden">{children}</div>
      <div className="flex flex-row items-center gap-2">
        <a
          href={dashboardUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="cl-cta flex-1 rounded-lg px-3 py-1.5 text-center text-sm font-medium transition-colors"
        >
          Dashboard
        </a>
        <Link
          href="/llms.txt"
          className="inline-flex flex-row items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <FileText className="size-3.5" />
          llms.txt
        </Link>
      </div>
    </div>
  );
}
