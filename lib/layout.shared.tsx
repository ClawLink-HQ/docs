import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName, dashboardUrl, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/images/logo/link.png"
            alt=""
            width={22}
            height={22}
            className="rounded-sm"
          />
          <span className="font-semibold text-[15px]">{appName}</span>
        </>
      ),
      url: '/',
    },
    githubUrl: `https://github.com/${gitConfig.user}/clawlink`,
    links: [
      {
        type: 'button',
        text: 'Dashboard',
        url: dashboardUrl,
        external: true,
      },
    ],
  };
}
