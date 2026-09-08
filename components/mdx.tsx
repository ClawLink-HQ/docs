import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as mintlify from '@/components/mintlify';
import { SetupTabs } from '@/components/setup-tabs';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...mintlify,
    SetupTabs,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
