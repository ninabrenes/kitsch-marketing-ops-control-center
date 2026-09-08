'use client';

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarCheck2,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  ClipboardCheck,
  FileCheck2,
  Filter,
  Link2,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Tags,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react';
import { PlatformBrandIcon } from './platform-brand-icon';
import './creator-affiliate-dashboard.css';
import './creator-affiliate-workflow.css';

const scorecards = [
  {
    name: 'Active creator roster',
    value: '—',
    question: 'How many contracted creators are active in the selected period?',
    icon: UsersRound,
  },
  {
    name: 'Posting cadence',
    value: '—',
    question: 'Are planned creator posts landing at the right launch moments?',
    icon: CalendarCheck2,
  },
  {
    name: 'Contracted content',
    value: '—',
    question: 'How many approved deliverables were purchased?',
    icon: FileCheck2,
  },
  {
    name: 'Delivered content',
    value: '—',
    question: 'How many deliverables passed brand, claim and link QA?',
    icon: PackageCheck,
  },
  {
    name: 'Fees + product + commission',
    value: '—',
    question: 'What is the fully loaded creator investment?',
    icon: Banknote,
  },
  {
    name: 'Attributed net orders',
    value: '—',
    question:
      'How many mature, non-cancelled orders are attributed under policy?',
    icon: Link2,
  },
  {
    name: 'Attributed net revenue',
    value: '—',
    question:
      'What revenue remains after discounts, refunds and cancellations?',
    icon: TrendingUp,
  },
  {
    name: 'Realized contribution',
    value: '—',
    question:
      'What remains after variable product, fulfillment, platform and creator costs?',
    icon: ShieldCheck,
  },
  {
    name: 'New-to-brand mix',
    value: '—',
    question: 'What share of mature attributed customers are truly new?',
    icon: UserRoundCheck,
  },
  {
    name: 'Refund rate',
    value: '—',
    question:
      'Is creator demand producing acceptable product and expectation fit?',
    icon: RefreshCw,
  },
  {
    name: '30 / 60 / 90-day repeat',
    value: '— / — / —',
    question: 'Do creator-acquired cohorts become durable customers?',
    icon: BadgeCheck,
  },
] as const;

const tierMatrix = [
  {
    tier: 'Community partner',
    role: 'Trust + product education',
    fit: 'Credible routine, audience dialogue, strong product-use context',
    proof: 'Content quality, comment relevance, code hygiene, brand safety',
    decision: 'Seed, learn and graduate only after repeatable delivery.',
  },
  {
    tier: 'Category specialist',
    role: 'Problem/solution authority',
    fit: 'Hair type, sleep beauty, styling or fragrance expertise',
    proof:
      'Mechanism clarity, saves/search value, qualified traffic, cohort fit',
    decision: 'Use for education, launches and reusable evergreen assets.',
  },
  {
    tier: 'Conversion partner',
    role: 'Demand + commerce',
    fit: 'Native demos, live-selling ability, offer discipline, reliable operations',
    proof: 'Net orders, realized contribution, refund rate, new-to-brand mix',
    decision: 'Scale within contribution and inventory guardrails.',
  },
  {
    tier: 'Brand amplifier',
    role: 'Reach + cultural relevance',
    fit: 'Distinctive audience, strategic adjacency, licensing-safe brand fit',
    proof: 'Incremental reach study, search lift, quality traffic, reuse value',
    decision:
      'Fund when the role is reach—not disguised last-click efficiency.',
  },
] as const;

const metricDefinitions = [
  [
    'Active roster',
    'Distinct creators with an active agreement and at least one in-window obligation',
    'Creator CRM + contracts',
    'Influencer / Partnerships',
  ],
  [
    'Delivery rate',
    'Approved deliverables ÷ contracted deliverables due in period',
    'Contract ledger + asset QA',
    'Influencer Ops',
  ],
  [
    'Fully loaded investment',
    'Cash fees + product landed cost + shipping + commission + paid usage/whitelisting fees',
    'AP/PO + inventory + affiliate platform',
    'Marketing Ops + Finance',
  ],
  [
    'Attributed net revenue',
    'Attributed gross sales − discounts − cancellations − refunds; use one approved window',
    'Shopify + TikTok Shop + affiliate platform',
    'Analytics',
  ],
  [
    'Realized contribution',
    'Attributed net revenue − COGS − fulfillment − payment/platform fees − creator investment',
    'Finance contribution model',
    'Finance',
  ],
  [
    'New-to-brand mix',
    'Distinct attributed first-time customers ÷ mature attributed customers',
    'Shopify customer/order history',
    'Analytics + CRM',
  ],
  [
    'Refund rate',
    'Refunded attributed orders ÷ mature attributed orders',
    'Shopify/TikTok Shop returns',
    'E-commerce + CX',
  ],
  [
    '30/60/90 repeat',
    'Mature creator-acquired customers with a subsequent net order by day N ÷ eligible cohort',
    'Commerce cohort model',
    'CRM + Analytics',
  ],
] as const;

const workflow = [
  [
    '01',
    'Source + vet',
    'Audience fit, brand safety, content quality and conflict check',
    'Approved roster record',
  ],
  [
    '02',
    'Contract + PO',
    'Deliverables, usage, exclusivity, disclosure, claims, fees and commission',
    'Signed agreement + funded PO',
  ],
  [
    '03',
    'Brief + track',
    'One objective, product, hook, proof, CTA, code/link and due date',
    'Creator/content IDs assigned',
  ],
  [
    '04',
    'QA + publish',
    'Claims, FTC disclosure, link, code, rights and asset archive',
    'Approved live URL + timestamp',
  ],
  [
    '05',
    'Reconcile',
    'Orders, refunds, commission, fees, COGS and attribution maturity',
    'Finance-aligned performance row',
  ],
  [
    '06',
    'Cohort + decide',
    'New-to-brand, contribution and 30/60/90-day repeat',
    'Renew, revise, graduate or stop',
  ],
] as const;

const ledgerRows = [
  [
    'CR-001',
    'Creator name',
    'Campaign / launch',
    'Platform',
    'Content type',
    'Due date',
    '—',
    '—',
  ],
  [
    'CR-002',
    'Creator name',
    'Campaign / launch',
    'Platform',
    'Content type',
    'Due date',
    '—',
    '—',
  ],
  [
    'CR-003',
    'Creator name',
    'Campaign / launch',
    'Platform',
    'Content type',
    'Due date',
    '—',
    '—',
  ],
] as const;

export function CreatorAffiliateDashboard() {
  return (
    <div className="page-grid creator-workspace">
      <section className="creator-hero">
        <div>
          <span className="creator-eyebrow">
            CREATOR + AFFILIATE OPERATING SYSTEM
          </span>
          <h1>Manage creator value from contract to cohort.</h1>
          <p>
            A governed workspace for roster health, content delivery, fully
            loaded investment, customer quality and renewal decisions—without
            treating public engagement as profit.
          </p>
          <div
            className="creator-platforms"
            aria-label="Creator program channels"
          >
            <PlatformBrandIcon name="Instagram" size="small" />
            <PlatformBrandIcon name="TikTok" size="small" />
            <PlatformBrandIcon name="TikTok Shop" size="small" />
            <PlatformBrandIcon name="YouTube" size="small" />
          </div>
        </div>
        <aside>
          <CircleAlert />
          <span>DATA BOUNDARY</span>
          <strong>No creator performance actuals are public.</strong>
          <p>
            Every blank below requires contracts, creator/affiliate platform
            exports, commerce orders, returns and finance costs joined by
            creator and content ID.
          </p>
          <b>INTERNAL DATA REQUIRED</b>
        </aside>
      </section>

      <section className="creator-public-read">
        <div>
          <span>PUBLIC OBSERVATION</span>
          <strong>
            Creator-native demonstrations are visible across Kitsch social and
            social commerce.
          </strong>
          <p>
            That supports building a governed creator system; it does not reveal
            roster size, spend, attribution, profitability or retention.
          </p>
        </div>
        <nav aria-label="Open public creator surfaces">
          <a
            href="https://www.instagram.com/mykitsch/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <ArrowRight />
          </a>
          <a
            href="https://www.tiktok.com/@mykitsch"
            target="_blank"
            rel="noreferrer"
          >
            TikTok <ArrowRight />
          </a>
          <a
            href="https://shop.tiktok.com/us/store/kitsch-llc/7495183505163847730"
            target="_blank"
            rel="noreferrer"
          >
            TikTok Shop <ArrowRight />
          </a>
        </nav>
      </section>

      <section className="creator-scorecard-section">
        <header className="creator-section-head">
          <div>
            <span>PROGRAM SCORECARD</span>
            <h2>One view from activity to customer quality</h2>
          </div>
          <p>
            Use the period and campaign filters only after the data model is
            connected and reconciled.
          </p>
        </header>
        <div
          className="creator-filter-shell"
          aria-label="Illustrative filter controls"
        >
          <span>
            <Filter /> Period <b>Connect data</b>
          </span>
          <span>
            <Tags /> Campaign <b>All campaigns</b>
          </span>
          <span>
            <UserRoundCheck /> Creator tier <b>All tiers</b>
          </span>
        </div>
        <div className="creator-scorecards">
          {scorecards.map(({ name, value, question, icon: Icon }) => (
            <article key={name}>
              <header>
                <Icon />
                <span>INTERNAL DATA REQUIRED</span>
              </header>
              <strong>{value}</strong>
              <h3>{name}</h3>
              <p>{question}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="creator-decision-strip">
        <TrendingUp />
        <div>
          <span>PRIMARY DECISION RULE</span>
          <h2>Renew for durable contribution, not attributed revenue alone.</h2>
        </div>
        <p>
          Read delivery reliability, fully loaded cost, new-to-brand quality,
          refunds and mature repeat together.
        </p>
      </section>

      <details className="creator-disclosure" open>
        <summary>
          <div>
            <span>CREATOR PORTFOLIO DESIGN</span>
            <strong>Tier by the job the creator performs</strong>
          </div>
          <ChevronRight />
        </summary>
        <div className="creator-disclosure-body">
          <p className="creator-method-note">
            <CircleAlert /> Illustrative operating tiers. Kitsch should approve
            qualification thresholds after observing its own distribution.
          </p>
          <div className="creator-tier-grid">
            {tierMatrix.map((tier, index) => (
              <article key={tier.tier}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{tier.tier}</h3>
                <dl>
                  <dt>Portfolio job</dt>
                  <dd>{tier.role}</dd>
                  <dt>Best fit</dt>
                  <dd>{tier.fit}</dd>
                  <dt>Required proof</dt>
                  <dd>{tier.proof}</dd>
                </dl>
                <footer>
                  <b>Operating decision</b>
                  <p>{tier.decision}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </details>

      <details className="creator-disclosure">
        <summary>
          <div>
            <span>CAMPAIGN + CONTENT LEDGER</span>
            <strong>
              Every deliverable needs a traceable commercial identity
            </strong>
          </div>
          <ChevronRight />
        </summary>
        <div className="creator-disclosure-body">
          <div className="creator-ledger-note">
            <ClipboardCheck />
            <p>
              <strong>Minimum join keys:</strong> creator ID, agreement ID,
              campaign ID, content ID, live URL, affiliate code/link,
              product/SKU, order ID and customer ID.
            </p>
          </div>
          <div className="creator-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Content ID</th>
                  <th>Creator</th>
                  <th>Campaign</th>
                  <th>Platform</th>
                  <th>Deliverable</th>
                  <th>Due</th>
                  <th>Status</th>
                  <th>Net revenue</th>
                </tr>
              </thead>
              <tbody>
                {ledgerRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td key={index}>
                        {index > 5 ? (
                          <span className="creator-internal">
                            {cell} · INTERNAL
                          </span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="creator-table-foot">
            Template only. Do not create rows until a real contract or approved
            seeding record exists.
          </p>
        </div>
      </details>

      <details className="creator-disclosure">
        <summary>
          <div>
            <span>METRIC CONTRACTS</span>
            <strong>Formula, owner and source of truth</strong>
          </div>
          <ChevronRight />
        </summary>
        <div className="creator-disclosure-body">
          <div className="creator-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Approved definition</th>
                  <th>Source</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {metricDefinitions.map((row) => (
                  <tr key={row[0]}>
                    <td>
                      <strong>{row[0]}</strong>
                    </td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="creator-definition-rules">
            <article>
              <ShieldCheck />
              <div>
                <b>Attribution policy</b>
                <p>
                  Document click/view windows, channel precedence, promo-code
                  rules and marketplace limitations.
                </p>
              </div>
            </article>
            <article>
              <RefreshCw />
              <div>
                <b>Maturity policy</b>
                <p>
                  Do not compare refunds or repeat until each cohort has reached
                  the same observation window.
                </p>
              </div>
            </article>
            <article>
              <Banknote />
              <div>
                <b>Finance perimeter</b>
                <p>
                  Reconcile cash fees, commission, product cost, usage rights
                  and paid amplification before renewal.
                </p>
              </div>
            </article>
          </div>
        </div>
      </details>

      <details className="creator-disclosure">
        <summary>
          <div>
            <span>WORKFLOW + GOVERNANCE</span>
            <strong>
              Move from creator discovery to a closed learning loop
            </strong>
          </div>
          <ChevronRight />
        </summary>
        <div className="creator-disclosure-body">
          <div className="creator-workflow">
            {workflow.map((step, index) => (
              <div className="creator-workflow-step" key={step[0]}>
                <article>
                  <span>{step[0]}</span>
                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                  <footer>
                    <CheckCircle2 /> {step[3]}
                  </footer>
                </article>
                {index < workflow.length - 1 && <ChevronRight />}
              </div>
            ))}
          </div>
          <div className="creator-action-grid">
            <article>
              <span>WEEKLY</span>
              <h3>Delivery + exception review</h3>
              <p>
                Review due content, approvals, missing links/codes, claim risk
                and launch dependencies. Escalate only exceptions.
              </p>
              <b>Owner · Influencer Ops</b>
            </article>
            <article>
              <span>MONTHLY</span>
              <h3>Commercial reconciliation</h3>
              <p>
                Close fees, commission, refunds, attribution maturity and
                finance variance before publishing creator economics.
              </p>
              <b>Owner · Marketing Ops + Finance</b>
            </article>
            <article>
              <span>QUARTERLY</span>
              <h3>Portfolio decisions</h3>
              <p>
                Renew, revise, graduate or stop creators using fit, reliability,
                contribution and customer-quality evidence.
              </p>
              <b>Owner · Partnerships + Marketing Leader</b>
            </article>
          </div>
        </div>
      </details>
    </div>
  );
}
