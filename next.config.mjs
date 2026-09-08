import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  // Don't let `next dev` rewrite this repo's hand-written AGENTS.md
  agentRules: false,
  images: {
    // next/image optimization is unavailable in a static export
    unoptimized: true,
  },
};

export default withMDX(config);
