import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { SidebarFooter } from '@/components/sidebar-footer';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/'>) {
  const { nav, ...base } = baseOptions();

  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...base}
      nav={{ ...nav, mode: 'top' }}
      tabMode="navbar"
      sidebar={{ footer: SidebarFooter }}
    >
      {children}
    </DocsLayout>
  );
}
