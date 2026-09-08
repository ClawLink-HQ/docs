import type { SocialIcon } from '@/components/sidebar-footer';

export const appName = 'ClawLink';
export const appDescription =
  'Hosted integrations for OpenClaw, Hermes, and other agent workflows.';
export const siteUrl = 'https://docs.claw-link.dev';
// Signed-out visitors are redirected to /sign-in with a redirect_url back to
// the dashboard, so this is the right target for both cases.
export const dashboardUrl = 'https://claw-link.dev/dashboard';

export const docsRoute = '/';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

/**
 * Sidebar footer links. `icon` must be a key of the icon map in
 * components/sidebar-footer.tsx.
 *
 * There is no ClawLink Telegram channel on record — add one here when it
 * exists: { icon: 'telegram', label: 'Telegram', url: 'https://t.me/...' }
 */
export const socialLinks = [
  { icon: 'discord', label: 'Discord', url: 'https://discord.gg/KjN3xcTvw4' },
  { icon: 'x', label: 'X', url: 'https://x.com/clawlinkdev' },
  { icon: 'github', label: 'GitHub', url: 'https://github.com/ClawLink-HQ/docs' },
] as const satisfies readonly { icon: SocialIcon; label: string; url: string }[];

export const gitConfig = {
  user: 'ClawLink-HQ',
  repo: 'docs',
  branch: 'main',
};
