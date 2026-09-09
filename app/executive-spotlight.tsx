'use client';

/* oxlint-disable next/no-img-element -- Product imagery is served from official public Kitsch CDN assets. */
import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  CircleAlert,
  Clock3,
  Eye,
  ListChecks,
  PackageCheck,
  Target,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import type { DashboardTab } from './dashboard-guide';
import { GlossaryHint, GlossaryText } from './glossary-term';
import {
  PlatformBrandIcon,
  type PlatformBrandName,
} from './platform-brand-icon';
import './executive-overview.css';

type Period = 'Week' | 'Month' | 'Quarter' | 'YoY';
type DataMode = 'Public evidence' | 'Internal connection plan';
type FunnelStage = 'Discover' | 'Consider' | 'Buy' | 'Repeat';

const outcomes = [
  {
    icon: TrendingUp,
    name: 'Profitable growth',
    question: 'Are we acquiring demand without weakening contribution?',
    metric: 'Net sales · contribution · MER · CAC',
    demoValue: '3.2× MER · $28 CAC',
    demoDelta: '+0.3× vs sample prior period',
    source: 'Shopify + finance + paid media',
    tab: 'performance' as DashboardTab,
  },
  {
    icon: UsersRound,
    name: 'Customer quality',
    question: 'Are new customers returning and expanding their routine?',
    metric: 'New-customer CAC · 90-day repeat · LTV:CAC',
    demoValue: '24% repeat · 3.6× LTV:CAC',
    demoDelta: '+2.1 pts sample movement',
    source: 'Shopify + Klaviyo + cohort model',
    tab: 'funnel' as DashboardTab,
  },
  {
    icon: PackageCheck,
    name: 'Launch delivery',
    question: 'Are priority launches ready early enough to fix risk?',
    metric: 'T−14 readiness · dependencies · D+30 review',
    demoValue: '86% ready · 3 blocked',
    demoDelta: '2 risks need owners',
    source: 'Asana launch portfolio',
    tab: 'launches' as DashboardTab,
  },
  {
    icon: ListChecks,
    name: 'Operating control',
    question: 'Are money, decisions and commitments under control?',
    metric: 'Budget variance · decision SLA · PO coverage',
    demoValue: '+4.2% variance · 91% closed',
    demoDelta: '2 sample decisions overdue',
    source: 'Finance + Asana + decision log',
    tab: 'operations' as DashboardTab,
  },
] as const;

const changes = [
  {
    date: 'SEP 08 · 2026',
    confidence: 'HIGH CONFIDENCE',
    title: 'Public channel snapshot refreshed',
    detail:
      'Owned social, retailer and TikTok Shop counters were rechecked for the current evidence window.',
    source: '34-source evidence library',
  },
  {
    date: 'AUG 26 · 2026',
    confidence: 'MEDIUM CONFIDENCE',
    title: 'Creator concentration became measurable',
    detail:
      'Modash surfaced 43.7K sponsored posts in 12 months, with 95.4% of tracked activity on TikTok.',
    source: 'Third-party creator tracking',
  },
  {
    date: 'AUG · 2026',
    confidence: 'HIGH CONFIDENCE',
    title: 'The search evidence window advanced',
    detail:
      'The US Google Trends series now includes August for hair perfume, shampoo bars, heatless curls and adjacent demand.',
    source: 'Google Trends · sampled index',
  },
] as const;

const decisions = [
  {
    priority: 'P1',
    title: 'Approve one profitable-demand measurement plan',
    owner: 'Marketing Ops + Finance',
    due: 'Proposed · Sep 11',
    status: 'DRAFT',
    evidence:
      'Finance-approved contribution, acquisition-spend perimeter and distinct new-customer count.',
    nextStep:
      'Ratify the metric contract, then publish one weekly exception view.',
    tab: 'performance' as DashboardTab,
    action: 'Review definitions',
  },
  {
    priority: 'P2',
    title: 'Set the Q4 launch-priority and escalation rule',
    owner: 'Marketing Leader + Product',
    due: 'Proposed · Sep 15',
    status: 'PROPOSED',
    evidence:
      'One launch calendar with inventory, creative, retail, site, CRM and measurement gates.',
    nextStep:
      'Choose the priority rule and the owner who can change scope or date.',
    tab: 'launches' as DashboardTab,
    action: 'Review launches',
  },
  {
    priority: 'P3',
    title: 'Join creator cost, content, order and cohort IDs',
    owner: 'Partnerships + Finance',
    due: 'Proposed · Sep 18',
    status: 'PROPOSED',
    evidence:
      'Creator contract, content, cost, attributed order and mature cohort identifiers.',
    nextStep:
      'Pilot the join on one creator cohort before changing renewal decisions.',
    tab: 'creators' as DashboardTab,
    action: 'Review creators',
  },
] as const;

const funnelStages: Array<{
  name: FunnelStage;
  question: string;
  image: string;
  platforms: PlatformBrandName[];
  publicSignal: string;
  internal: string;
  decision: string;
  tab: DashboardTab;
}> = [
  {
    name: 'Discover',
    question: 'Are the right people finding Kitsch?',
    image:
      'https://www.mykitsch.com/cdn/shop/files/4945-StandardSatinPillowcase-Sleep-Ivory-Hero-1280x1280px.jpg?v=1776278489',
    platforms: ['Instagram', 'TikTok', 'YouTube', 'Pinterest'],
    publicSignal:
      'Audience scale, search direction and creator activity are visible.',
    internal: 'Qualified reach · new-customer sessions · blended CAC',
    decision: 'Choose which message and audience deserve a controlled test.',
    tab: 'intelligence',
  },
  {
    name: 'Consider',
    question: 'Does the product story remove uncertainty?',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/69117-HairPerfumeDiscoverySet-Sampler-4pc-Fragrance-1280x1280px.jpg?v=1762182803',
    platforms: ['Website', 'Instagram', 'Pinterest', 'YouTube'],
    publicSignal:
      'PDP claims, reviews, tutorials and retailer proof are visible.',
    internal: 'PDP CVR · add-to-cart · review-assisted conversion',
    decision: 'Fix the highest-friction product question or proof gap.',
    tab: 'website',
  },
  {
    name: 'Buy',
    question: 'Are customers buying the right product profitably?',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/9081-RiceWaterProtein-Shampoo_Conditioner-2pc-Combo-BottleFreeBeauty-hero-opt2-1280x1280px_2.jpg?v=1780523783',
    platforms: ['Shopify', 'TikTok Shop'],
    publicSignal:
      'Prices, assortment and marketplace unit counters are visible.',
    internal: 'Net CVR · contribution · returns · new-to-brand mix',
    decision: 'Scale only the SKU × channel combinations that clear margin.',
    tab: 'commerce',
  },
  {
    name: 'Repeat',
    question: 'Do customers return and enter a second category?',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/60640SatinWrappedJumboFlexiRods4pc-Rosewood-Hero-1280x1280px.jpg?v=1774638694',
    platforms: ['Website', 'Instagram', 'Facebook'],
    publicSignal:
      'Loyalty, email capture and routine merchandising are observable.',
    internal: '30/60/90-day repeat · LTV · second-category rate',
    decision: 'Build the lifecycle journey around the best next product job.',
    tab: 'funnel',
  },
];

const channels: Array<{
  name: PlatformBrandName;
  role: string;
  signal: string;
  meaning: string;
  tab: DashboardTab;
}> = [
  {
    name: 'Instagram',
    role: 'Brand theater + community',
    signal: '1M followers displayed',
    meaning: 'Largest visible owned audience; qualified reach is unknown.',
    tab: 'social',
  },
  {
    name: 'Facebook',
    role: 'Community + retail reach',
    signal: '473K page likes displayed',
    meaning: 'Visible scale; current distribution and traffic are unknown.',
    tab: 'social',
  },
  {
    name: 'TikTok',
    role: 'Discovery + demonstration',
    signal: '342K followers displayed',
    meaning: 'Creator-native activity is concentrated here.',
    tab: 'social',
  },
  {
    name: 'TikTok Shop',
    role: 'Social commerce',
    signal: '2.3M sold displayed',
    meaning: 'Marketplace velocity is visible; net economics are not.',
    tab: 'commerce',
  },
  {
    name: 'YouTube',
    role: 'Education + sponsorship',
    signal: '24.1K subscribers displayed',
    meaning: 'Long-form education and repeat sponsorships are visible.',
    tab: 'creators',
  },
  {
    name: 'Pinterest',
    role: 'Evergreen intent',
    signal: '11.5K followers displayed',
    meaning: 'Searchable routine and seasonal discovery opportunity.',
    tab: 'social',
  },
];

const products = [
  {
    name: 'Shampoo + conditioner',
    role: 'Daily ritual + replenishment',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/9081-RiceWaterProtein-Shampoo_Conditioner-2pc-Combo-BottleFreeBeauty-hero-opt2-1280x1280px_2.jpg?v=1780523783',
    proof: 'Official two-step rice-water bar system · up to 100 washes per bar',
    publicMetric: 'Up to 100 washes / bar',
    internal: 'System attach · 60/90-day reorder · subscription · margin',
    href: 'https://www.mykitsch.com/collections/all-products/products/rice-water-shampoo-conditioner-combo-pack',
  },
  {
    name: 'Heatless curls',
    role: 'Creator-native acquisition',
    image:
      'https://www.mykitsch.com/cdn/shop/products/heatlessCurlingSet-openShape_clawClip-new_1.jpg?v=1762182449',
    proof: 'Official bundle · highly demonstrable before-and-after product',
    publicMetric: '2-piece creator-ready bundle',
    internal: 'Creator CAC · attach · refund · next-category rate',
    href: 'https://www.mykitsch.com/products/satin-heatless-curling-set-bundle',
  },
  {
    name: 'Hair perfume',
    role: 'Discovery + trial',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/69117-HairPerfumeDiscoverySet-Sampler-4pc-Fragrance-1280x1280px.jpg?v=1762182803',
    proof: 'Official four-scent discovery set · current DTC visibility',
    publicMetric: '4 mini scents',
    internal: 'Sample-to-full-size · second category · contribution',
    href: 'https://www.mykitsch.com/products/hair-perfume-discovery-set',
  },
  {
    name: 'Satin sleep',
    role: 'Brand legacy + retention',
    image:
      'https://www.mykitsch.com/cdn/shop/files/4945-StandardSatinPillowcase-Sleep-Ivory-Hero-1280x1280px.jpg?v=1776278489',
    proof: 'Official PDP states 3.6M+ pillowcases sold',
    publicMetric: '3.6M+ publicly stated sold',
    internal: 'Full-price mix · gifting · 90-day repeat · margin',
    href: 'https://www.mykitsch.com/products/satin-pillowcase-ivory',
  },
  {
    name: 'Styling care',
    role: 'Visible result + repeat',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/500904-AirDryCream-Consumables-hero-1280x1280px.jpg?v=1779490582',
    proof: 'Air Dry Cream appears across DTC and creator evidence',
    publicMetric: '24-hour frizz-control claim',
    internal: 'First-order contribution · replenishment · tool attach',
    href: 'https://www.mykitsch.com/products/kitsch-smoothing-air-dry-cream',
  },
] as const;

const okrConnections = [
  ['Profitable demand', 'Net sales · contribution · CAC', 'Finance + Shopify'],
  ['Predictable launches', 'T−14 readiness · dependency closure', 'Asana'],
  [
    'Customer expansion',
    'Repeat · LTV · second-category rate',
    'Shopify + Klaviyo',
  ],
  ['Operating rhythm', 'Decision SLA · follow-through', 'Asana + decision log'],
] as const;

const asanaMetrics = [
  ['Active marketing OKRs', '4'],
  ['Key results at risk', '1'],
  ['Blocked dependencies', '3'],
  ['Overdue decisions', '2'],
  ['On-time follow-through', '91%'],
  ['Workstream capacity', '78%'],
] as const;

const dataConnections = [
  ['Shopify', 'Orders · net sales · products · cohorts', 'READY TO CONNECT'],
  [
    'Klaviyo',
    'Profiles · flows · repeat · attributed revenue',
    'READY TO CONNECT',
  ],
  [
    'GA4 + Looker',
    'Sessions · journeys · conversion · reporting',
    'BLUEPRINT READY',
  ],
  [
    'Paid media',
    'Spend · impressions · clicks · attributed orders',
    'BLUEPRINT READY',
  ],
  [
    'Asana',
    'OKRs · launches · owners · blockers · due dates',
    'READY TO CONNECT',
  ],
] as const;

export function ExecutiveSpotlight({
  onNavigate,
}: {
  onNavigate: (tab: DashboardTab) => void;
}) {
  const [period, setPeriod] = useState<Period>('Week');
  const [mode, setMode] = useState<DataMode>('Public evidence');
  const [stage, setStage] = useState<FunnelStage>('Discover');
  const [explained, setExplained] = useState(false);
  const activeStage = funnelStages.find((item) => item.name === stage)!;

  return (
    <section
      className="executive-command"
      aria-label="Executive command center"
    >
      <header className="executive-command-bar">
        <div className="executive-desk-brand">
          <img src="/kitsch-official-logo.png" alt="Kitsch" />
          <span>MARKETING OPERATIONS</span>
          <strong>Decision Flow Desk</strong>
        </div>
        <div
          className="executive-command-period"
          aria-label="Demo reporting-period selector; this does not change the source data"
        >
          <span>DEMO PERIOD</span>
          {(['Week', 'Month', 'Quarter', 'YoY'] as Period[]).map((item) => (
            <button
              type="button"
              key={item}
              className={period === item ? 'is-active' : ''}
              aria-pressed={period === item}
              onClick={() => setPeriod(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="executive-command-mode" aria-label="Evidence mode">
          {(['Public evidence', 'Internal connection plan'] as DataMode[]).map(
            (item) => (
              <button
                type="button"
                key={item}
                className={mode === item ? 'is-active' : ''}
                aria-pressed={mode === item}
                onClick={() => setMode(item)}
              >
                {item}
              </button>
            ),
          )}
        </div>
        <div className="executive-command-refresh">
          <Clock3 aria-hidden="true" />
          <span>
            Last refreshed <b>Sep 08, 2026</b>
          </span>
        </div>
        <details className="executive-data-health">
          <summary>
            <i aria-hidden="true" /> Data health <ChevronDown />
          </summary>
          <div>
            <strong>Public evidence is ready to review.</strong>
            <p>
              34 sources cataloged. Internal business systems are not connected.
            </p>
            <button type="button" onClick={() => onNavigate('sources')}>
              Review sources <ArrowRight />
            </button>
          </div>
        </details>
        <span className="executive-desk-avatar" aria-hidden="true">
          K
        </span>
      </header>

      <div className="executive-command-hero">
        <div>
          <span>
            DEMO VIEW · TUESDAY, SEPTEMBER 8, 2026 · {period.toUpperCase()}
          </span>
          <h1>Weekly marketing review</h1>
          <p>Outcomes, changes, decisions, owners and data status.</p>
        </div>
        <div className="executive-command-hero-note">
          <strong>Effortless hair for a kinder day.</strong>
          <span>{mode} · Public facts + labeled demo values</span>
        </div>
        <button
          type="button"
          className="executive-explain-button"
          onClick={() => setExplained((current) => !current)}
          aria-expanded={explained}
        >
          <Eye /> {explained ? 'Hide explanation' : 'Explain this dashboard'}
        </button>
      </div>

      {explained && (
        <aside className="executive-plain-language" aria-live="polite">
          <div>
            <span>IN PLAIN ENGLISH</span>
            <strong>Start with the four unanswered business questions.</strong>
          </div>
          <p>
            Public evidence can show audience, demand and visible activity. It
            cannot tell leadership whether growth is profitable, customers are
            returning or launches are on plan. Use the decision queue to choose
            which internal connection closes the most important gap first.
          </p>
          <GlossaryHint />
        </aside>
      )}

      <section className="executive-outcomes" aria-labelledby="outcome-title">
        <header className="executive-section-title">
          <div>
            <span>BUSINESS HEALTH AT A GLANCE</span>
            <h2 id="outcome-title">
              Four outcomes. Four unanswered questions.
            </h2>
          </div>
          <p>Honest status: internal performance data is not connected.</p>
        </header>
        <div className="executive-outcome-grid">
          {outcomes.map(({ icon: Icon, ...item }) => (
            <article key={item.name}>
              <header>
                <span className="executive-outcome-icon">
                  <Icon aria-hidden="true" />
                </span>
                <b>DEMO · NOT ACTUAL</b>
              </header>
              <h3>{item.name}</h3>
              <p>{item.question}</p>
              <div className="executive-demo-metric">
                <span>ILLUSTRATIVE VALUE</span>
                <strong>{item.demoValue}</strong>
                <small>{item.demoDelta}</small>
              </div>
              <dl>
                <div>
                  <dt>Leadership should see</dt>
                  <dd>
                    <GlossaryText>{item.metric}</GlossaryText>
                  </dd>
                </div>
                <div>
                  <dt>Connect</dt>
                  <dd>{item.source}</dd>
                </div>
              </dl>
              <button type="button" onClick={() => onNavigate(item.tab)}>
                Open specialist view <ArrowRight />
              </button>
            </article>
          ))}
        </div>
      </section>

      <div className="executive-change-decision-grid">
        <section
          className="executive-decision-queue"
          aria-labelledby="decision-title"
        >
          <header className="executive-section-title compact">
            <div>
              <span>THREE DECISIONS THIS WEEK</span>
              <h2 id="decision-title">Prioritize. Assign. Close.</h2>
            </div>
            <p>Dates and owners are proposed—not current Kitsch commitments.</p>
          </header>
          <div className="executive-decision-rows">
            {decisions.map((item) => (
              <details key={item.priority}>
                <summary>
                  <span>{item.priority}</span>
                  <strong>{item.title}</strong>
                  <b>{item.status} · DEMO</b>
                  <ChevronDown aria-hidden="true" />
                </summary>
                <div className="executive-decision-contract">
                  <dl>
                    <div>
                      <dt>Proposed owner</dt>
                      <dd>{item.owner}</dd>
                    </div>
                    <div>
                      <dt>Proposed due date</dt>
                      <dd>{item.due}</dd>
                    </div>
                    <div>
                      <dt>Evidence required</dt>
                      <dd>{item.evidence}</dd>
                    </div>
                    <div>
                      <dt>Next action</dt>
                      <dd>{item.nextStep}</dd>
                    </div>
                  </dl>
                  <button type="button" onClick={() => onNavigate(item.tab)}>
                    {item.action} <ArrowRight />
                  </button>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          className="executive-change-rail"
          aria-labelledby="change-title"
        >
          <header>
            <span>LATEST EVIDENCE CAPTURED</span>
            <h2 id="change-title">What changed in the evidence set</h2>
          </header>
          <div>
            {changes.map((item) => (
              <article key={item.date}>
                <i aria-hidden="true" />
                <div>
                  <span>{item.date}</span>
                  <b>{item.confidence}</b>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                  <small>{item.source}</small>
                </div>
              </article>
            ))}
          </div>
          <p className="executive-change-limit">
            A true period-over-period change requires persisted snapshots. No
            directional delta is invented here.
          </p>
        </section>
      </div>

      <section className="executive-funnel" aria-labelledby="funnel-title">
        <header className="executive-section-title">
          <div>
            <span>CUSTOMER JOURNEY</span>
            <h2 id="funnel-title">From discovery to the next good hair day.</h2>
          </div>
          <p>
            Select a stage to see the signal, missing metric and decision it
            supports.
          </p>
        </header>
        <div
          className="executive-funnel-track"
          role="tablist"
          aria-label="Customer journey stage"
        >
          {funnelStages.map((item, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={stage === item.name}
              className={stage === item.name ? 'is-active' : ''}
              onClick={() => setStage(item.name)}
              key={item.name}
            >
              <img src={item.image} alt="" aria-hidden="true" />
              <span>0{index + 1}</span>
              <div>
                <strong>{item.name}</strong>
                <small>{item.question}</small>
              </div>
              <ArrowRight aria-hidden="true" />
            </button>
          ))}
        </div>
        <article className="executive-funnel-detail" role="tabpanel">
          <div className="executive-funnel-platforms">
            <span>PUBLIC SURFACES</span>
            <div>
              {activeStage.platforms.map((platform) => (
                <PlatformBrandIcon
                  key={platform}
                  name={platform}
                  size="small"
                  label={false}
                />
              ))}
            </div>
          </div>
          <dl>
            <div>
              <dt>What we can see</dt>
              <dd>{activeStage.publicSignal}</dd>
            </div>
            <div>
              <dt>Internal metric needed</dt>
              <dd>
                <GlossaryText>{activeStage.internal}</GlossaryText>
              </dd>
            </div>
            <div>
              <dt>Decision</dt>
              <dd>{activeStage.decision}</dd>
            </div>
          </dl>
          <button type="button" onClick={() => onNavigate(activeStage.tab)}>
            Explore {activeStage.name.toLowerCase()} <ArrowRight />
          </button>
        </article>
      </section>

      <div className="executive-pulse-row">
        <section
          className="executive-product-pulse"
          aria-labelledby="product-title"
        >
          <header className="executive-section-title compact">
            <div>
              <span>PRODUCT PORTFOLIO · FIVE FRANCHISES</span>
              <h2 id="product-title">
                Show the products that change the decision.
              </h2>
            </div>
            <button type="button" onClick={() => onNavigate('commerce')}>
              Open Commerce control <ArrowRight />
            </button>
          </header>
          <div className="executive-product-grid">
            {products.map((item) => (
              <article key={item.name}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <img
                    src={item.image}
                    alt={`Official Kitsch product: ${item.name}`}
                  />
                </a>
                <div>
                  <span>{item.role}</span>
                  <h3>{item.name}</h3>
                  <strong className="executive-product-metric">
                    {item.publicMetric}
                  </strong>
                  <dl>
                    <div>
                      <dt>Public proof</dt>
                      <dd>{item.proof}</dd>
                    </div>
                    <div>
                      <dt>Internal data required</dt>
                      <dd>
                        <GlossaryText>{item.internal}</GlossaryText>
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="executive-channel-pulse"
          aria-labelledby="channel-title"
        >
          <header className="executive-section-title compact">
            <div>
              <span>CHANNEL PULSE · PUBLIC SIGNALS</span>
              <h2 id="channel-title">Every platform has one job.</h2>
            </div>
            <button type="button" onClick={() => onNavigate('social')}>
              Open Social system <ArrowRight />
            </button>
          </header>
          <div className="executive-channel-table">
            {channels.map((item) => (
              <button
                type="button"
                key={item.name}
                onClick={() => onNavigate(item.tab)}
              >
                <PlatformBrandIcon
                  name={item.name}
                  size="small"
                  label={false}
                />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
                <span>
                  <b>{item.signal}</b>
                  <small>{item.meaning}</small>
                </span>
                <ArrowRight />
              </button>
            ))}
          </div>
        </section>
      </div>

      <section
        className="executive-okr-asana"
        aria-labelledby="okr-asana-title"
      >
        <header className="executive-section-title">
          <div>
            <span>OKRS + ASANA CONNECTION</span>
            <h2 id="okr-asana-title">
              Connect strategy to the work that closes it.
            </h2>
          </div>
          <p>
            Team-level operating health only. No individual employee ranking or
            invented productivity scores.
          </p>
        </header>
        <div className="executive-okr-grid">
          {okrConnections.map(([objective, metrics, source]) => (
            <article key={objective}>
              <header>
                <Target aria-hidden="true" />
                <span>OBJECTIVE</span>
              </header>
              <h3>{objective}</h3>
              <p>
                <GlossaryText>{metrics}</GlossaryText>
              </p>
              <dl>
                <div>
                  <dt>Actual</dt>
                  <dd>—</dd>
                </div>
                <div>
                  <dt>Connect</dt>
                  <dd>{source}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <div className="executive-asana-panel">
          <header>
            <div>
              <ListChecks aria-hidden="true" />
              <span>
                <b>ASANA OPERATING HEALTH</b>
                <small>Illustrative values until Asana is connected.</small>
              </span>
            </div>
            <button type="button" onClick={() => onNavigate('operations')}>
              Open operating system <ArrowRight />
            </button>
          </header>
          <div>
            {asanaMetrics.map(([label, value]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
                <small>ILLUSTRATIVE DEMO</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="executive-connections"
        aria-labelledby="connections-title"
      >
        <header className="executive-section-title compact">
          <div>
            <span>DATA CONNECTION PLAN</span>
            <h2 id="connections-title">From demo values to operating truth.</h2>
          </div>
          <p>
            Each connector replaces the labeled sample metrics with governed
            actuals.
          </p>
        </header>
        <div>
          {dataConnections.map(([name, fields, status]) => (
            <article key={name}>
              <i aria-hidden="true" />
              <span>
                <strong>{name}</strong>
                <small>{fields}</small>
              </span>
              <b>{status}</b>
            </article>
          ))}
        </div>
      </section>

      <aside className="executive-data-boundary">
        <CircleAlert aria-hidden="true" />
        <div>
          <span>DATA BOUNDARY</span>
          <strong>
            Public signals frame the question. Internal systems answer it.
          </strong>
          <p>
            Connect Shopify, Klaviyo, finance, paid media and Asana before using
            this view to judge performance, allocate budget or assess operating
            health.
          </p>
        </div>
        <button type="button" onClick={() => onNavigate('sources')}>
          View source method <ArrowRight />
        </button>
      </aside>
    </section>
  );
}
