'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Compass,
  Lightbulb,
  MousePointerClick,
  ShieldCheck,
} from 'lucide-react';

export type DashboardTab =
  | 'overview'
  | 'intelligence'
  | 'commerce'
  | 'creators'
  | 'funnel'
  | 'website'
  | 'performance'
  | 'launches'
  | 'social'
  | 'search'
  | 'brand'
  | 'competitors'
  | 'operations'
  | 'sources';

type TabHelp = {
  label: string;
  purpose: string;
  inspect: string;
  decision: string;
  apply: string;
  next: DashboardTab;
};

export const tabHelp: Record<DashboardTab, TabHelp> = {
  overview: {
    label: 'Overview',
    purpose:
      'A fast leadership read of the most important public signals and unresolved questions.',
    inspect: 'Start with the four executive signals and the P1 decision queue.',
    decision: 'Choose which question deserves internal validation first.',
    apply:
      'Use it to open a weekly marketing leadership meeting—not to approve spend on its own.',
    next: 'intelligence',
  },
  intelligence: {
    label: 'Growth intelligence',
    purpose:
      'Turns public search, ad and market signals into testable growth opportunities.',
    inspect:
      'Look for several independent signals pointing in the same direction.',
    decision:
      'Select the category, message or creative hypothesis worth testing.',
    apply:
      'Write one experiment with an owner, audience, metric and stop/scale rule.',
    next: 'performance',
  },
  commerce: {
    label: 'Commerce',
    purpose:
      'Shows the product, channel and data system behind profitable repeat.',
    inspect:
      'Compare product doorways, channel availability and the confidence label beside every proxy.',
    decision:
      'Decide which franchise needs deeper margin and repeat-purchase analysis.',
    apply:
      'Join SKU sales to COGS, discounts, returns and 30/60/90-day repeat before scaling.',
    next: 'creators',
  },
  creators: {
    label: 'Creator + affiliate',
    purpose:
      'Connects creator contracts and content delivery to fully loaded economics and customer quality.',
    inspect:
      'Start with data readiness, then review the creator role, delivery evidence and metric contract.',
    decision:
      'Choose whether to renew, revise, graduate or stop a creator relationship.',
    apply:
      'Join creator and content IDs to mature net orders, finance costs, refunds and 30/60/90-day cohorts.',
    next: 'funnel',
  },
  funnel: {
    label: 'Customer journey',
    purpose:
      'Connects media activity to the customer question and business outcome at each stage.',
    inspect:
      'Find the stage with the weakest handoff, then review the matching customer archetype.',
    decision: 'Choose which customer question or journey break to solve first.',
    apply:
      'Build one stage-specific test; do not ask every channel to do every job.',
    next: 'website',
  },
  website: {
    label: 'Website systems',
    purpose:
      'Maps the storefront journey and marketing technology into one operating system.',
    inspect:
      'Focus on journey handoffs, measurement conflicts and ownership gaps—not the number of tools.',
    decision: 'Choose one conversion leak or governance risk to audit.',
    apply:
      'Confirm active vendors and data flows internally, then assign an owner and review cadence.',
    next: 'launches',
  },
  performance: {
    label: 'KPI lab',
    purpose:
      'Defines the scorecard leadership can trust once first-party data is connected.',
    inspect:
      'Read the business question above each KPI before looking at the formula.',
    decision:
      'Agree on the metric definition, source, owner and decision threshold.',
    apply:
      'Replace placeholders with reconciled finance, commerce, CRM and media data.',
    next: 'launches',
  },
  launches: {
    label: 'Launch control',
    purpose:
      'Replaces status chasing with one cross-functional record of owners, deadlines, blockers and decisions.',
    inspect:
      'Start with the ten required owners. Open the illustrative records only to see how the tracker behaves.',
    decision:
      'Assign the missing owner, resolve or accept the risk, change scope, or move the date.',
    apply:
      'Update the record twice weekly before launch, use the meeting for exceptions, and run a 30-day learning review.',
    next: 'operations',
  },
  social: {
    label: 'Social channels',
    purpose:
      'Gives each platform a distinct job and connects creative output to customer movement.',
    inspect:
      'Choose a platform inside the tab, then compare observed evidence, insight and next action.',
    decision: 'Decide which creative concept to scale, revise or stop.',
    apply:
      'Tag every asset by hook, product, proof, creator, format and landing page.',
    next: 'search',
  },
  search: {
    label: 'Search + content',
    purpose:
      'Shows where customer demand and unanswered questions can guide durable content.',
    inspect:
      'Separate relative search direction from actual volume, sales or attribution.',
    decision: 'Choose a topic to create, consolidate or improve.',
    apply:
      'Pair one intent cluster with a canonical page, proof source and conversion path.',
    next: 'brand',
  },
  brand: {
    label: 'Messaging playbook',
    purpose:
      'Keeps launches, creators, CRM, retail and product pages anchored to one customer promise.',
    inspect:
      'Start with the channel message patterns; open visual and technical detail only when needed.',
    decision:
      'Decide whether an asset names a real customer friction, makes a clear promise and supports it with approved proof.',
    apply:
      'Use it as a pre-production brief and creative QA checklist—not as a substitute for the official internal brand book.',
    next: 'competitors',
  },
  competitors: {
    label: 'Market map',
    purpose:
      'Frames Kitsch’s position against adjacent beauty, hair and accessory brands.',
    inspect:
      'Compare the strategic territory and customer promise, not only prices or follower counts.',
    decision: 'Choose where Kitsch should differentiate, defend or learn.',
    apply:
      'Translate the comparison into a sharper brief; do not copy a competitor tactic without customer evidence.',
    next: 'operations',
  },
  operations: {
    label: 'Operating system',
    purpose:
      'Maps the role into the meetings, metrics and workflows that create rhythm.',
    inspect:
      'Start with the eight operating artifacts and the 30/60/90-day sequence.',
    decision: 'Choose the first cadence or source-of-truth problem to fix.',
    apply:
      'Pilot the system on one real launch, then document it only after the workflow is stable.',
    next: 'sources',
  },
  sources: {
    label: 'Evidence',
    purpose:
      'Shows where each public claim came from and what remains unknown.',
    inspect: 'Check the source, access date, confidence and evidence boundary.',
    decision:
      'Decide whether the evidence is strong enough for a hypothesis, discussion or action.',
    apply:
      'Open the source and validate time-sensitive claims before presenting the report.',
    next: 'overview',
  },
};

const workflows = [
  [
    '01',
    'Diagnose the business',
    ['overview', 'intelligence', 'performance'] as DashboardTab[],
    'Move from signal → question → KPI.',
  ],
  [
    '02',
    'Understand the customer',
    ['funnel', 'social', 'search'] as DashboardTab[],
    'Move from need → message → channel.',
  ],
  [
    '03',
    'Improve commerce',
    ['commerce', 'creators', 'website'] as DashboardTab[],
    'Move from product and partner → journey → profitable repeat.',
  ],
  [
    '04',
    'Run the organization',
    ['launches', 'operations'] as DashboardTab[],
    'Move from plan → owner → decision → follow-through.',
  ],
  [
    '05',
    'Protect the strategy',
    ['brand', 'competitors', 'sources'] as DashboardTab[],
    'Move from context → differentiation → evidence.',
  ],
] as const;

export function DashboardGuide({
  active,
  onNavigate,
}: {
  active: DashboardTab;
  onNavigate: (tab: DashboardTab) => void;
}) {
  const [open, setOpen] = useState(false);
  const help = tabHelp[active];
  const next = tabHelp[help.next];
  return (
    <section
      className={`dashboard-guide ${open ? 'is-open' : ''}`}
      aria-label="Dashboard interpretation guide"
    >
      <div className="guide-summary">
        <div className="guide-marker">
          <Compass />
          <span>YOU ARE VIEWING</span>
          <strong>{help.label}</strong>
        </div>
        <div className="guide-purpose">
          <span>WHAT THIS TAB MEANS</span>
          <p>{help.purpose}</p>
        </div>
        <div className="guide-actions">
          <button
            type="button"
            className="guide-next"
            onClick={() => onNavigate(help.next)}
          >
            Next: {next.label}
            <ArrowRight />
          </button>
          <button
            type="button"
            className="guide-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? 'Hide guide' : 'How to use this tab'}
            {open ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>
      {open && (
        <div className="guide-expanded">
          <div className="guide-three">
            <article>
              <MousePointerClick />
              <span>1 · LOOK FOR</span>
              <p>{help.inspect}</p>
            </article>
            <article>
              <Lightbulb />
              <span>2 · DECIDE</span>
              <p>{help.decision}</p>
            </article>
            <article>
              <ArrowRight />
              <span>3 · APPLY TO KITSCH</span>
              <p>{help.apply}</p>
            </article>
          </div>
          <div className="guide-rules">
            <div>
              <BookOpen />
              <div>
                <strong>How to read any number</strong>
                <p>
                  Read the label and time period first. Then ask what it
                  compares with, what it excludes and which decision would
                  change because of it.
                </p>
              </div>
            </div>
            <div>
              <ShieldCheck />
              <div>
                <strong>Evidence boundary</strong>
                <p>
                  <b>Public signal</b> = observed. <b>Estimate</b> = calculated
                  proxy. <b>Hypothesis</b> = idea to test.{' '}
                  <b>Internal data required</b> = do not treat as a result yet.
                </p>
              </div>
            </div>
          </div>
          <div className="guide-workflows">
            <div>
              <span>CHOOSE A READING PATH</span>
              <p>
                You do not need to read every tab in order. Pick the decision
                you are trying to make.
              </p>
            </div>
            {workflows.map((w) => (
              <article key={w[0]}>
                <span>{w[0]}</span>
                <div>
                  <strong>{w[1]}</strong>
                  <p>{w[3]}</p>
                  <nav aria-label={`${w[1]} tabs`}>
                    {w[2].map((tab, i) => (
                      <span key={tab}>
                        {i > 0 && ' → '}
                        <button type="button" onClick={() => onNavigate(tab)}>
                          {tabHelp[tab].label}
                        </button>
                      </span>
                    ))}
                  </nav>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
