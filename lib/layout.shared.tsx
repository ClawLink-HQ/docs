import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName, dashboardUrl, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/images/logo/rounded-clawlink.png"
            alt=""
            width={24}
            height={24}
            priority
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
