import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { SidebarFooter } from '@/components/sidebar-footer';
import { SidebarHeader } from '@/components/sidebar-header';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/'>) {
  const { nav, ...base } = baseOptions();

  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...base}
      nav={{ ...nav, mode: 'top' }}
      tabMode="navbar"
      // Search lives at the top of the sidebar (see SidebarHeader), so the
      // navbar's own search trigger is turned off to avoid two of them.
      searchToggle={{ enabled: false }}
      sidebar={{ banner: SidebarHeader, footer: SidebarFooter }}
    >
      {children}
    </DocsLayout>
  );
}
