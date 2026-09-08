import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import { appDescription, appName, siteUrl } from '@/lib/shared';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${appName} Documentation`,
    template: `%s — ${appName}`,
  },
  description: appDescription,
  icons: {
    icon: [
      { url: '/images/logo/favicon.ico', sizes: 'any' },
      { url: '/images/logo/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/logo/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/logo/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/images/logo/apple-touch-icon.png',
  },
  openGraph: {
    siteName: appName,
    type: 'website',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
