'use client';
import type { ComponentProps } from 'react';
import { FullSearchTrigger } from 'fumadocs-ui/layouts/shared/slots/search-trigger';
import { cn } from '@/lib/cn';

/**
 * Sidebar banner slot. Puts the search box at the top of the sidebar rather
 * than in the navbar; `searchToggle.enabled: false` on the layout removes the
 * navbar copy so there is only one.
 */
export function SidebarHeader({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('flex flex-col gap-3 p-4 pb-2', className)}>
      {children}
      <FullSearchTrigger className="w-full" />
    </div>
  );
}
