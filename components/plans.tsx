/**
 * The plan cards shown on /pricing and /billing. One source, so the two pages
 * cannot drift. Numbers mirror the product: tool-call caps in
 * src/lib/server/tool-call-quota.ts, plan data credit in PLAN_CREDIT_MICRO
 * (src/lib/server/pricing-variant.ts), prices in Polar.
 */
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Free trial',
    price: '$0',
    period: 'for 7 days',
    features: ['Your first app included', 'No credit card to start', '1,000 tool calls over the trial', '$0.10 of data credit'],
  },
  {
    name: 'Starter',
    price: '$6',
    period: 'per month',
    features: ['Every integration unlocked', '1,000 tool calls a month', '$1 of data credit a month', 'Cancel anytime'],
  },
  {
    name: 'Ultra Heavy',
    price: '$30',
    period: 'per month',
    features: ['Every integration unlocked', '100,000 tool calls a month', '$5 of data credit a month', 'Cancel anytime'],
  },
];

export function Plans() {
  return (
    <div className="not-prose my-6 grid grid-cols-1 gap-3 md:grid-cols-3">
      {PLANS.map((plan) => (
        <div key={plan.name} className="flex flex-col rounded-xl border bg-fd-card p-5">
          <span className="text-sm font-medium text-fd-muted-foreground">{plan.name}</span>
          <span className="mt-2 flex items-baseline gap-1.5">
            <span className="text-3xl font-semibold tabular-nums">{plan.price}</span>
            <span className="text-sm text-fd-muted-foreground">{plan.period}</span>
          </span>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-fd-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
