import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as mintlify from '@/components/mintlify';
import { SetupTabs } from '@/components/setup-tabs';
import { Plans } from '@/components/plans';
import { AppGrid, AppLogo, CategoryGrid, Flow, LogoRow, Prompts } from '@/components/apps';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...mintlify,
    SetupTabs,
    AppGrid,
    AppLogo,
    CategoryGrid,
    Flow,
    LogoRow,
    Prompts,
    Plans,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
