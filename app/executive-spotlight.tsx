import {
  ArrowRight,
  CalendarClock,
  CircleAlert,
  Database,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { DashboardTab } from './dashboard-guide';
import './executive-overview.css';

const healthAreas = [
  {
    icon: TrendingUp,
    name: 'Profitable growth',
    question: 'Are sales growing without weakening contribution?',
    metrics: 'Net sales vs. plan · contribution margin · MER',
    source: 'Shopify + finance + paid media',
  },
  {
    icon: Users,
    name: 'Customer quality',
    question: 'Are new customers returning and expanding their routine?',
    metrics: 'New-customer CAC · 90-day repeat · LTV:CAC',
    source: 'Shopify + Klaviyo + cohort model',
  },
  {
    icon: CalendarClock,
    name: 'Launch delivery',
    question: 'Are launch risks visible early enough to fix?',
    metrics: 'T−14 readiness · on-time dependencies · D+30 review',
    source: 'Asana launch portfolio',
  },
  {
    icon: Database,
    name: 'Operating control',
    question: 'Are money, decisions and commitments under control?',
    metrics: 'Budget variance · overdue decisions · PO coverage',
    source: 'Finance + Asana + decision log',
  },
] as const;

const priorityBriefs: Array<{
  number: string;
  eyebrow: string;
  title: string;
  observed: string;
  meaning: string;
  missing: string;
  decision: string;
  owner: string;
  tab: DashboardTab;
  action: string;
}> = [
  {
    number: '01',
    eyebrow: 'GROWTH OPPORTUNITY',
    title: 'Prove whether fragrance creates a valuable second purchase',
    observed:
      'Hair perfume appears across current merchandising, TikTok Shop and 2026 editorial coverage.',
    meaning:
      'Fragrance may be an acquisition wedge, but public visibility cannot show customer quality.',
    missing:
      'First SKU, net contribution and 30/60/90-day second-category behavior.',
    decision:
      'Choose the fragrance cohort test and the threshold required before increasing investment.',
    owner: 'Growth + CRM + Finance',
    tab: 'commerce',
    action: 'Open Commerce control',
  },
  {
    number: '02',
    eyebrow: 'MEASUREMENT RISK',
    title: 'Create one cross-channel definition of profitable demand',
    observed:
      'DTC, TikTok Shop and retailers expose different public demand signals.',
    meaning:
      'Each channel can look successful while using a different denominator, price and time window.',
    missing:
      'Reconciled net sales, fees, returns, COGS, media and customer identity by channel.',
    decision:
      'Approve the metric owner, source hierarchy and weekly reconciliation rule.',
    owner: 'Marketing Ops + Finance',
    tab: 'performance',
    action: 'Open KPI definitions',
  },
  {
    number: '03',
    eyebrow: 'DELIVERY RISK',
    title: 'Protect launch capacity before adding more activity',
    observed:
      'The public calendar shows frequent product, offer and channel storytelling.',
    meaning:
      'More launches can create message collisions and hidden dependency pressure.',
    missing:
      'Active launch count, shared-resource load, readiness risk and operational hours.',
    decision:
      'Set a launch-priority rule and the conditions that trigger escalation or sequencing.',
    owner: 'Marketing Leader + Ops',
    tab: 'launches',
    action: 'Open Launch control',
  },
];

const readingOrder = [
  ['01', 'Health', 'Are the business, customer, launches and operating system on plan?'],
  ['02', 'Change', 'What materially moved since the last review?'],
  ['03', 'Exception', 'Where are we off track or missing trustworthy data?'],
  ['04', 'Decision', 'Who must decide what—and by when?'],
] as const;

export function ExecutiveSpotlight({
  onNavigate,
}: {
  onNavigate: (tab: DashboardTab) => void;
}) {
  return (
    <section className="executive-control" aria-label="Executive control view">
      <header className="executive-control__intro">
        <div>
          <span>WHAT BELONGS ON THE OVERVIEW</span>
          <h2>A leadership page should drive a decision—not showcase every analysis.</h2>
        </div>
        <p>
          Read from health to action. Detailed social, commerce, launch and SEO
          evidence stays in its specialist view.
        </p>
      </header>

      <div className="executive-reading-order" aria-label="Executive reading order">
        {readingOrder.map(([number, title, copy]) => (
          <article key={number}>
            <span>{number}</span>
            <div>
              <strong>{title}</strong>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="executive-health" aria-labelledby="health-title">
        <div className="executive-section-heading">
          <div>
            <span>1 · BUSINESS HEALTH</span>
            <h3 id="health-title">Are we on plan?</h3>
          </div>
          <p>
            Because this prototype has no authorized internal data, the honest
            state is “not connected”—not a blank actual and not a fake target.
          </p>
        </div>
        <div className="executive-health__grid">
          {healthAreas.map(({ icon: Icon, ...area }) => (
            <article key={area.name}>
              <header>
                <Icon aria-hidden="true" />
                <span>NOT CONNECTED</span>
              </header>
              <h4>{area.name}</h4>
              <p>{area.question}</p>
              <dl>
                <div>
                  <dt>Show</dt>
                  <dd>{area.metrics}</dd>
                </div>
                <div>
                  <dt>Connect</dt>
                  <dd>{area.source}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="executive-priorities" aria-labelledby="priority-title">
        <div className="executive-section-heading">
          <div>
            <span>2 · CHANGE, EXCEPTION + DECISION</span>
            <h3 id="priority-title">Three briefs for leadership</h3>
          </div>
          <p>
            Each brief shows what is observed, what it may mean, what is missing
            and the exact decision required.
          </p>
        </div>
        <div className="executive-priorities__grid">
          {priorityBriefs.map((brief) => (
            <article key={brief.number}>
              <header>
                <span>{brief.number}</span>
                <small>{brief.eyebrow}</small>
              </header>
              <h4>{brief.title}</h4>
              <dl>
                <div>
                  <dt>What we can see</dt>
                  <dd>{brief.observed}</dd>
                </div>
                <div>
                  <dt>What it may mean</dt>
                  <dd>{brief.meaning}</dd>
                </div>
                <div>
                  <dt>What would prove it</dt>
                  <dd>{brief.missing}</dd>
                </div>
              </dl>
              <footer>
                <Target aria-hidden="true" />
                <div>
                  <span>DECISION REQUIRED</span>
                  <strong>{brief.decision}</strong>
                  <small>Proposed owner · {brief.owner}</small>
                </div>
              </footer>
              <button type="button" onClick={() => onNavigate(brief.tab)}>
                {brief.action} <ArrowRight aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <aside className="executive-data-alert">
        <CircleAlert aria-hidden="true" />
        <div>
          <span>DATA GOVERNANCE FOLLOW-UP</span>
          <strong>Confirm one current company-footprint statement.</strong>
          <p>
            The role brief says 32,000+ retailers across 92 countries; an older
            site page says 20,000 across 27. Leadership communications need one
            approved source and “last verified” date.
          </p>
        </div>
      </aside>
    </section>
  );
}
