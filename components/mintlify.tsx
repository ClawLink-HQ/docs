/**
 * Compatibility layer for the components the docs used on Mintlify.
 *
 * Keeping these names lets the MDX stay as-authored while rendering through
 * Fumadocs primitives. New pages should prefer the Fumadocs components
 * directly (Callout, Cards, Tabs, ...).
 */
import { Children, isValidElement, type ComponentProps, type ReactNode } from 'react';
import { Callout } from 'fumadocs-ui/components/callout';
import { Card as FdCard, Cards as FdCards } from 'fumadocs-ui/components/card';
import { Accordion as FdAccordion, Accordions as FdAccordions } from 'fumadocs-ui/components/accordion';
import { Tab as FdTab, Tabs as FdTabs } from 'fumadocs-ui/components/tabs';
import { resolveIconProp } from '@/lib/icons';
import { cn } from '@/lib/cn';

/* -------------------------------------------------------------- callouts */

export const Note = (props: ComponentProps<typeof Callout>) => (
  <Callout type="info" {...props} />
);
export const Info = (props: ComponentProps<typeof Callout>) => (
  <Callout type="info" {...props} />
);
export const Tip = (props: ComponentProps<typeof Callout>) => (
  <Callout type="idea" {...props} />
);
export const Warning = (props: ComponentProps<typeof Callout>) => (
  <Callout type="warn" {...props} />
);
export const Check = (props: ComponentProps<typeof Callout>) => (
  <Callout type="success" {...props} />
);
export const Danger = (props: ComponentProps<typeof Callout>) => (
  <Callout type="error" {...props} />
);

/* ----------------------------------------------------------------- cards */

export function Card({
  icon,
  ...props
}: Omit<ComponentProps<typeof FdCard>, 'icon'> & { icon?: ReactNode }) {
  return <FdCard icon={resolveIconProp(icon)} {...props} />;
}

export function CardGroup({
  cols = 2,
  className,
  ...props
}: ComponentProps<'div'> & { cols?: number }) {
  return (
    <FdCards
      className={cn(
        cols === 1 && 'grid-cols-1',
        cols === 3 && '@container-[or_(min-width:32rem)]:grid-cols-3',
        cols >= 4 && '@container-[or_(min-width:32rem)]:grid-cols-4',
        className,
      )}
      {...props}
    />
  );
}

/* ----------------------------------------------------------------- steps */

export function Steps({ children }: { children: ReactNode }) {
  return <div className="cl-steps">{children}</div>;
}

/**
 * Mintlify's `<Step title="...">`. The title renders as a heading-styled
 * element rather than a real heading so 190+ step titles stay out of the
 * table of contents.
 */
export function Step({ title, children }: { title?: ReactNode; children: ReactNode }) {
  return (
    <div className="cl-step">
      {title ? <p className="cl-step-title not-prose">{title}</p> : null}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------ accordions */

export function AccordionGroup({ children }: { children: ReactNode }) {
  return <div className="not-prose my-4 flex flex-col gap-2">{children}</div>;
}

/**
 * Standalone-capable accordion. Mintlify allows `<Accordion>` outside a group,
 * which Fumadocs' `Accordions` does not, so each one is its own single-item
 * group.
 */
export function Accordion({
  title,
  children,
  defaultOpen,
}: {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const value = typeof title === 'string' ? title : 'item';

  return (
    <FdAccordions className="my-2" defaultValue={defaultOpen ? [value] : undefined}>
      <FdAccordion title={title} value={value}>
        {children}
      </FdAccordion>
    </FdAccordions>
  );
}

/* ------------------------------------------------------------------ tabs */

/**
 * Find a string `title` prop on an element or any of its descendants.
 * Code blocks nest the title a level or two below the child we are handed.
 */
function findTitle(node: ReactNode, depth = 0): string | undefined {
  if (depth > 4) return undefined;

  for (const child of Children.toArray(node)) {
    if (!isValidElement(child)) continue;

    const props = child.props as { title?: unknown; children?: ReactNode };
    if (typeof props.title === 'string') return props.title;

    const nested = findTitle(props.children, depth + 1);
    if (nested) return nested;
  }

  return undefined;
}

function childTitles(children: ReactNode, fallback: string): string[] {
  return Children.toArray(children)
    .filter(isValidElement)
    .map((child, index) => findTitle(child) ?? `${fallback} ${index + 1}`);
}

/** `<Tabs><Tab title="X">` — titles are lifted onto Fumadocs' `items`. */
export function Tabs({
  children,
  groupId,
  ...props
}: { children: ReactNode; groupId?: string } & Omit<ComponentProps<typeof FdTabs>, 'items'>) {
  return (
    <FdTabs
      items={childTitles(children, 'Tab')}
      groupId={groupId}
      persist={Boolean(groupId)}
      {...props}
    >
      {children}
    </FdTabs>
  );
}

export function Tab({
  title,
  children,
  ...props
}: { title?: string; children: ReactNode } & ComponentProps<typeof FdTab>) {
  return (
    <FdTab value={title} {...props}>
      {children}
    </FdTab>
  );
}

/**
 * `<CodeGroup>` — one tab per child code block, labelled by its `title` meta.
 * Language choice is shared across every code group on the site.
 */
export function CodeGroup({ children }: { children: ReactNode }) {
  const blocks = Children.toArray(children).filter(isValidElement);
  const items = childTitles(children, 'Example');

  return (
    <FdTabs items={items} groupId="code-group" persist className="cl-code-group">
      {blocks.map((child, index) => (
        <FdTab key={items[index]} value={items[index]} className="[&_figure]:my-0">
          {child}
        </FdTab>
      ))}
    </FdTabs>
  );
}

/* ------------------------------------------------------- API param fields */

function FieldShell({
  name,
  type,
  required,
  defaultValue,
  children,
}: {
  name: ReactNode;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  children?: ReactNode;
}) {
  return (
    <div className="my-3 rounded-lg border border-fd-border bg-fd-card px-4 py-3">
      <div className="not-prose flex flex-row flex-wrap items-center gap-x-2 gap-y-1">
        <code className="text-sm font-semibold text-fd-foreground">{name}</code>
        {type ? <span className="text-xs text-fd-muted-foreground">{type}</span> : null}
        {required ? (
          <span className="rounded-md bg-fd-primary/10 px-1.5 py-0.5 text-[11px] font-medium text-fd-primary">
            required
          </span>
        ) : null}
        {defaultValue ? (
          <span className="text-xs text-fd-muted-foreground">
            default: <code>{defaultValue}</code>
          </span>
        ) : null}
      </div>
      {children ? (
        <div className="mt-2 text-sm text-fd-muted-foreground [&>p:last-child]:mb-0 [&>p:first-child]:mt-0">
          {children}
        </div>
      ) : null}
    </div>
  );
}

export function ParamField({
  body,
  query,
  path,
  header,
  type,
  required,
  default: defaultValue,
  children,
}: {
  body?: string;
  query?: string;
  path?: string;
  header?: string;
  type?: string;
  required?: boolean;
  default?: string;
  children?: ReactNode;
}) {
  return (
    <FieldShell
      name={body ?? query ?? path ?? header ?? ''}
      type={type}
      required={required}
      defaultValue={defaultValue}
    >
      {children}
    </FieldShell>
  );
}

export function ResponseField({
  name,
  type,
  required,
  default: defaultValue,
  children,
}: {
  name?: string;
  type?: string;
  required?: boolean;
  default?: string;
  children?: ReactNode;
}) {
  return (
    <FieldShell name={name ?? ''} type={type} required={required} defaultValue={defaultValue}>
      {children}
    </FieldShell>
  );
}

/* ---------------------------------------------------------------- layout */

export function Columns({
  cols = 2,
  className,
  ...props
}: ComponentProps<'div'> & { cols?: number }) {
  return <CardGroup cols={cols} className={className} {...props} />;
}

export function Frame({ children, caption }: { children: ReactNode; caption?: string }) {
  return (
    <figure className="my-4 overflow-hidden rounded-lg border border-fd-border">
      {children}
      {caption ? (
        <figcaption className="border-t border-fd-border px-3 py-2 text-center text-sm text-fd-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
