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
    label: 'Executive overview',
    purpose:
      'Shows business health, material changes, exceptions and decisions in the order leadership needs them.',
    inspect:
      'Start with the four health areas, then open the priority brief that needs leadership attention.',
    decision:
      'Choose the decision to close, confirm its owner and name the internal evidence required.',
    apply:
      'Use it as the weekly leadership agenda; move detailed investigation into the linked specialist view.',
    next: 'intelligence',
  },
  intelligence: {
    label: 'Growth signals',
    purpose:
      'Turns public search, ad and market evidence into a prioritized test queue.',
    inspect:
      'Look for converging evidence, then check confidence and the missing internal metric.',
    decision:
      'Choose one category, message or creative hypothesis to validate.',
    apply:
      'Create one test with an owner, audience, budget guardrail, metric and stop/scale date.',
    next: 'performance',
  },
  commerce: {
    label: 'Commerce control',
    purpose:
      'Connects products and channels to the data required for profitable repeat.',
    inspect:
      'Inspect product roles, channel availability, proxy limitations and data readiness.',
    decision:
      'Choose the franchise or SKU that needs margin and cohort analysis next.',
    apply:
      'Join SKU sales to COGS, discounts, returns and 30/60/90-day repeat before scaling.',
    next: 'creators',
  },
  creators: {
    label: 'Creator operations',
    purpose:
      'Connects creator contracts and delivery to fully loaded economics and customer quality.',
    inspect:
      'Check data readiness, creator role, delivery evidence and the metric contract.',
    decision: 'Renew, revise, graduate or stop a creator relationship.',
    apply:
      'Join creator and content IDs to net orders, costs, refunds and mature 30/60/90-day cohorts.',
    next: 'funnel',
  },
  funnel: {
    label: 'Customer journey',
    purpose:
      'Shows the customer question, channel job, owner and measure at each handoff.',
    inspect:
      'Select the weakest handoff, then inspect its customer question and owner.',
    decision: 'Choose the journey break to solve first.',
    apply:
      'Assign one stage-specific fix, measure and owner; do not ask every channel to do every job.',
    next: 'website',
  },
  website: {
    label: 'Storefront + stack',
    purpose:
      'Maps the storefront journey, martech stack and measurement ownership.',
    inspect:
      'Inspect journey breaks, conflicting numbers and missing owners—not tool count.',
    decision: 'Choose one conversion leak or governance risk to resolve.',
    apply:
      'Confirm the active vendor and data flow, then assign an owner, SLA and review cadence.',
    next: 'launches',
  },
  performance: {
    label: 'KPI definitions',
    purpose:
      'Defines the metrics leadership can trust once internal data is reconciled.',
    inspect:
      'Start with the business question, then check formula, source, owner and limitation.',
    decision:
      'Approve the definition, source, owner, refresh rule and decision threshold.',
    apply:
      'Replace blanks only with reconciled finance, commerce, CRM and media data.',
    next: 'launches',
  },
  launches: {
    label: 'Launch control',
    purpose:
      'Replaces status chasing with one record of owners, deadlines, blockers and decisions.',
    inspect:
      'Check the ten readiness gates; use the illustrative records only to understand the workflow.',
    decision:
      'Assign the owner, resolve or accept the risk, change scope or move the date.',
    apply:
      'Update twice weekly, use meetings for exceptions and run the 30-day learning review.',
    next: 'operations',
  },
  social: {
    label: 'Social system',
    purpose:
      'Gives each platform a job and connects creative output to customer movement.',
    inspect:
      'Select a platform; compare its public evidence, operating role and next action.',
    decision: 'Choose which concept to test, revise or stop.',
    apply:
      'Tag each asset by concept, hook, product, proof, creator, format and destination.',
    next: 'search',
  },
  search: {
    label: 'Search + answers',
    purpose:
      'Turns customer demand and unanswered questions into a durable content backlog.',
    inspect:
      'Separate relative demand direction from volume, ranking, traffic and sales.',
    decision: 'Choose one page to create, consolidate or improve.',
    apply:
      'Assign one intent cluster, canonical page, proof owner and conversion path.',
    next: 'brand',
  },
  brand: {
    label: 'Messaging playbook',
    purpose:
      'Keeps launches, creators, CRM, retail and PDPs anchored to one message spine.',
    inspect:
      'Check customer friction, promise, proof and next step before reviewing visual detail.',
    decision:
      'Approve, revise or stop the asset based on clarity, brand fit and proof.',
    apply:
      'Use it before production as a brief and QA checklist; validate against the internal brand book.',
    next: 'competitors',
  },
  competitors: {
    label: 'Competitor map',
    purpose: 'Compares Kitsch with adjacent beauty, hair and accessory brands.',
    inspect:
      'Compare territory, promise, proof and channel pressure—not follower counts alone.',
    decision: 'Choose where Kitsch should defend, differentiate or test.',
    apply:
      'Turn one gap into a Kitsch-specific brief with customer evidence and a success rule.',
    next: 'operations',
  },
  operations: {
    label: 'Marketing operations',
    purpose:
      'Maps the role into cadence, OKRs, launches, budget, decisions, people and playbooks.',
    inspect:
      'Start with role coverage and the 30/60/90-day rollout, then inspect the live-work templates.',
    decision:
      'Choose the first source-of-truth or follow-through problem to fix.',
    apply:
      'Pilot on one live launch, measure the operating result and document the stable workflow.',
    next: 'sources',
  },
  sources: {
    label: 'Sources + methods',
    purpose:
      'Shows the source, capture date, confidence and limitation behind each public claim.',
    inspect: 'Check the source, date, confidence and evidence boundary.',
    decision:
      'Decide whether the evidence supports a question, hypothesis or action.',
    apply:
      'Open the source and refresh time-sensitive claims before using the report.',
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
          <span>IN PLAIN ENGLISH</span>
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
            {open ? 'Hide walkthrough' : 'Show walkthrough'}
            {open ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>
      {open && (
        <div className="guide-expanded">
          <div className="guide-three">
            <article>
              <MousePointerClick />
              <span>1 · LOOK AT</span>
              <p>{help.inspect}</p>
            </article>
            <article>
              <Lightbulb />
              <span>2 · ASK</span>
              <p>{help.decision}</p>
            </article>
            <article>
              <ArrowRight />
              <span>3 · DO NEXT</span>
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
