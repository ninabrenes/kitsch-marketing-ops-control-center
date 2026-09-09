'use client';

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarCheck2,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  CircleHelp,
  ClipboardCheck,
  ExternalLink,
  Eye,
  FileCheck2,
  Filter,
  Link2,
  MapPin,
  PackageCheck,
  Repeat2,
  RefreshCw,
  ShieldCheck,
  Tags,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react';
import { PlatformBrandIcon } from './platform-brand-icon';
import { EvidenceToAction } from './evidence-to-action';
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
    name: 'Fully loaded creator cost',
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

const publicCreatorSignals = [
  {
    value: '43.7K',
    label: 'sponsored posts tracked',
    note: 'Last 12 months in Modash dataset',
    Icon: ChartNoAxesColumnIncreasing,
  },
  {
    value: '95.4%',
    label: 'TikTok share',
    note: 'Of tracked Instagram, TikTok + YouTube posts',
    Icon: Eye,
  },
  {
    value: '16%',
    label: 'repeat collaborators',
    note: 'Posted in 3+ separate calendar months',
    Icon: Repeat2,
  },
  {
    value: '69.1%',
    label: 'U.S. activity',
    note: 'Share of tracked live creator content',
    Icon: MapPin,
  },
] as const;

const publicCreators = [
  {
    name: 'Margie Style',
    handle: '@margiesstyle',
    platform: 'Instagram' as const,
    profile: 'https://www.instagram.com/margiesstyle/',
    date: 'May 30, 2026',
    result: '6.5K tracked post views',
    story: 'Shine Serum inside a beauty routine',
    signal:
      'Product pairing can turn one demonstration into a broader styling ritual.',
    evidence:
      'https://www.modash.io/content-library/brands/kitsch-examples/influencers',
    evidenceLabel: 'View tracked mention',
    source: 'Modash public collaboration tracking',
  },
  {
    name: 'Faith Marie',
    handle: '@faith_marie1003',
    platform: 'TikTok' as const,
    profile: 'https://www.tiktok.com/@faith_marie1003',
    date: 'Jan 7, 2026',
    result: '10.5M tracked post views',
    story: 'Zigzag headband trend demonstration',
    signal:
      'A simple visual transformation gives a low-explanation accessory viral potential.',
    evidence:
      'https://www.modash.io/breakdowns/kitsch-influencer-marketing-strategy',
    evidenceLabel: 'View tracked mention',
    source: 'Modash public collaboration tracking',
  },
  {
    name: 'Literally Bethany',
    handle: '@literally.bethany',
    platform: 'TikTok' as const,
    profile: 'https://www.tiktok.com/@literally.bethany',
    date: 'May 22, 2026',
    result: '1.8M tracked post views',
    story: 'Heatless curls set during a workout',
    signal:
      'The strongest hook makes the product part of an existing routine—not an extra step.',
    evidence:
      'https://www.modash.io/breakdowns/kitsch-influencer-marketing-strategy',
    evidenceLabel: 'View tracked mention',
    source: 'Modash public collaboration tracking',
  },
  {
    name: 'Armin Arshe',
    handle: '@arminarshe',
    platform: 'Instagram' as const,
    profile: 'https://www.instagram.com/arminarshe/',
    date: 'Jun 6, 2026',
    result: '22.5K tracked post views',
    story: 'Curly-hair routine with #kitschpartner',
    signal:
      'Routine-led education can build category authority beyond a single product claim.',
    evidence:
      'https://www.modash.io/content-library/brands/kitsch-examples/influencers',
    evidenceLabel: 'View tracked mention',
    source: 'Modash public collaboration tracking',
  },
  {
    name: 'Jo Placencio',
    handle: '@joplacencio',
    platform: 'Instagram' as const,
    profile: 'https://www.instagram.com/joplacencio/',
    date: 'Jun 16, 2026',
    result: '50.7K tracked post views',
    story: 'Air Dry Cream for 50+ beauty audience',
    signal:
      'Life-stage specificity can widen relevance without flattening the brand voice.',
    evidence:
      'https://www.modash.io/content-library/brands/kitsch-examples/influencers',
    evidenceLabel: 'View tracked mention',
    source: 'Modash public collaboration tracking',
  },
  {
    name: 'that_coupon_chick',
    handle: '@that_coupon_chick',
    platform: 'TikTok Shop' as const,
    profile: 'https://www.tiktok.com/@that_coupon_chick',
    date: 'Jan–Feb 2026',
    result: '3 repeat posts surfaced',
    story: 'Deals, launches and TikTok Shop discovery',
    signal:
      'Repeat commerce creators can become launch infrastructure if contribution stays healthy.',
    evidence:
      'https://www.modash.io/breakdowns/kitsch-influencer-marketing-strategy',
    evidenceLabel: 'View tracked mentions',
    source: 'Modash public collaboration tracking',
  },
  {
    name: 'muchelleb',
    handle: '@muchelleb',
    platform: 'YouTube' as const,
    profile: 'https://www.youtube.com/@muchelleb',
    date: 'Apr–May 2026',
    result: '2 sponsorships · 495K tracked subscribers',
    story: 'Reset and life-admin videos with Kitsch sponsorships',
    signal:
      'A recurring reset format gives Kitsch a natural bridge into self-care and habit-building.',
    evidence: 'https://youtube.com/watch?v=d8qZR5Dgo-8',
    evidenceLabel: 'Watch sponsored video',
    source: 'SponsorRadar public sponsorship tracking',
  },
  {
    name: 'Brooke Makenna',
    handle: '@brookemakenna',
    platform: 'YouTube' as const,
    profile: 'https://www.youtube.com/@brookemakenna',
    date: 'Tracked through 2026',
    result: '6 sponsorships · 383K tracked subscribers',
    story: 'Repeat YouTube sponsorship relationship',
    signal:
      'Repeated sponsorships are a stronger fit signal than one-off reach, but still require cohort economics to justify renewal.',
    evidence: 'https://sponsorradar.com/channels/brookemakenna',
    evidenceLabel: 'View sponsorship record',
    source: 'SponsorRadar public sponsorship tracking',
  },
  {
    name: 'Amanda the Jedi',
    handle: '@AmandaTheJedi',
    platform: 'YouTube' as const,
    profile: 'https://www.youtube.com/@AmandaTheJedi',
    date: 'Tracked through 2026',
    result: '5 sponsorships · 677K tracked subscribers',
    story: 'Repeat sponsorships in entertainment commentary',
    signal:
      'An entertainment-adjacent audience can extend Kitsch beyond beauty tutorials when the integration still feels native.',
    evidence: 'https://sponsorradar.com/channels/amandathejedi',
    evidenceLabel: 'View sponsorship record',
    source: 'SponsorRadar public sponsorship tracking',
  },
  {
    name: 'Linda Vater',
    handle: '@LindaVater',
    platform: 'YouTube' as const,
    profile: 'https://www.youtube.com/@LindaVater',
    date: 'Mar 21, 2026',
    result: 'Public sponsored video surfaced',
    story: 'Kitsch sponsorship inside a lifestyle and gardening video',
    signal:
      'Lifestyle placements can reach high-intent audiences outside beauty, provided the product role is explicit and measurable.',
    evidence: 'https://youtube.com/watch?v=sMBp3JtMPxw',
    evidenceLabel: 'Watch sponsored video',
    source: 'SponsorRadar public sponsorship tracking',
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
          <h1>Run creators as a portfolio.</h1>
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
            Public partners and post-level signals can be discovered. Roster
            status, spend, attribution, profitability and retention still
            require contracts, commerce orders and finance costs.
          </p>
          <b>INTERNAL DATA REQUIRED</b>
        </aside>
      </section>

      <EvidenceToAction
        evidence="Creator-native demos and social-commerce surfaces are publicly visible; program economics and roster health are not."
        interpretation="Creator content can play distinct education, trust, reach and commerce roles, but engagement alone cannot identify a profitable partner."
        internal="Contracts, deliverables, usage rights, fully loaded cost, mature net orders, refunds, contribution and repeat by creator/content ID."
        decision="Renew, revise, graduate or stop each partnership based on its assigned role, delivery quality and mature customer economics."
        owner="Partnerships + Finance"
      />

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
            href="https://www.tiktok.com/@kitsch"
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

      <section
        className="creator-intelligence"
        aria-labelledby="creator-intelligence-title"
      >
        <header className="creator-intelligence-head">
          <div>
            <span>PUBLIC CREATOR INTELLIGENCE · 2025–2026</span>
            <h2 id="creator-intelligence-title">
              Scale is visible. Economics are not.
            </h2>
            <p>
              Third-party collaboration tracking indicates a TikTok-heavy,
              high-volume program with meaningful repeat partnerships. These are
              discovery signals—not Kitsch roster or revenue actuals.
            </p>
          </div>
          <div className="creator-source-actions">
            <a
              href="https://www.modash.io/breakdowns/kitsch-influencer-marketing-strategy"
              target="_blank"
              rel="noreferrer"
            >
              Modash analysis <ExternalLink />
            </a>
            <a
              href="https://sponsorradar.com/brands/kitsch"
              target="_blank"
              rel="noreferrer"
            >
              YouTube tracker <ExternalLink />
            </a>
          </div>
        </header>

        <div className="creator-public-signals">
          {publicCreatorSignals.map(({ value, label, note, Icon }) => (
            <article key={label}>
              <Icon />
              <strong>{value}</strong>
              <h3>{label}</h3>
              <p>{note}</p>
              <span>THIRD-PARTY TRACKED</span>
            </article>
          ))}
        </div>

        <article className="creator-youtube-evidence">
          <div className="creator-youtube-evidence-title">
            <PlatformBrandIcon name="YouTube" size="large" />
            <div>
              <span>YOUTUBE SPONSORSHIP FOOTPRINT</span>
              <h3>Repeat sponsorships, named and source-linked</h3>
              <p>
                SponsorRadar currently surfaces 96 Kitsch sponsorships across 79
                YouTube creators. This is public sponsorship evidence—not Kitsch
                campaign delivery, spend or attributed sales data.
              </p>
            </div>
          </div>
          <dl>
            <div>
              <dt>96</dt>
              <dd>sponsorships tracked</dd>
            </div>
            <div>
              <dt>79</dt>
              <dd>YouTube creators</dd>
            </div>
            <div>
              <dt>1.2</dt>
              <dd>average per creator</dd>
            </div>
          </dl>
          <a
            href="https://sponsorradar.com/brands/kitsch"
            target="_blank"
            rel="noreferrer"
          >
            Review public tracker <ExternalLink />
          </a>
        </article>

        <div className="creator-mix-story">
          <article className="creator-channel-mix">
            <div
              className="creator-donut"
              aria-label="95.4 percent TikTok, 4.4 percent Instagram, 0.2 percent YouTube"
            >
              <strong>95.4%</strong>
              <span>TikTok</span>
            </div>
            <div>
              <span>CHANNEL MIX</span>
              <h3>TikTok is the distribution engine</h3>
              <div className="creator-legend-row">
                <i className="tiktok" /> TikTok <b>41.7K posts</b>
              </div>
              <div className="creator-legend-row">
                <i className="instagram" /> Instagram <b>1.9K posts</b>
              </div>
              <div className="creator-legend-row">
                <i className="youtube" /> YouTube <b>102 posts</b>
              </div>
            </div>
          </article>
          <article className="creator-seasonality">
            <span>SEASONALITY SIGNAL</span>
            <h3>January peaks; summer activity compresses</h3>
            <div
              className="creator-seasonality-bars"
              aria-label="January 6.9 thousand posts; monthly average 3.6 thousand; August 1.7 thousand"
            >
              <div>
                <span style={{ height: '100%' }} />
                <b>JAN</b>
                <small>6.9K</small>
              </div>
              <div>
                <span style={{ height: '52%' }} />
                <b>AVG</b>
                <small>3.6K</small>
              </div>
              <div>
                <span style={{ height: '25%' }} />
                <b>AUG</b>
                <small>1.7K</small>
              </div>
            </div>
            <p>
              Hypothesis: holiday commerce drives a creator surge. Validate
              against launch calendar, spend and inventory before reallocating
              budget.
            </p>
          </article>
        </div>

        <div className="creator-roster-head">
          <div>
            <span>PUBLICLY SURFACED COLLABORATIONS</span>
            <h3>{publicCreators.length} examples to verify</h3>
          </div>
          <p>
            Inclusion means a public collaboration was surfaced—not that the
            creator is currently contracted or recommended for renewal. Views,
            subscriber counts and sponsorship totals are third-party snapshots.
          </p>
        </div>
        <div className="creator-card-grid">
          {publicCreators.map((creator) => (
            <article key={creator.handle}>
              <a
                className="creator-card-platform"
                href={creator.profile}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${creator.name} profile`}
              >
                <PlatformBrandIcon name={creator.platform} size="large" />
                <span>OPEN PUBLIC PROFILE</span>
              </a>
              <div className="creator-card-body">
                <header>
                  <div>
                    <strong>{creator.name}</strong>
                    <span>{creator.handle}</span>
                  </div>
                  <a
                    href={creator.profile}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${creator.name} profile`}
                  >
                    <ExternalLink />
                  </a>
                </header>
                <div className="creator-card-meta">
                  <span>{creator.date}</span>
                  <b>{creator.result}</b>
                </div>
                <h4>{creator.story}</h4>
                <p>{creator.signal}</p>
                <div className="creator-card-links">
                  <a href={creator.profile} target="_blank" rel="noreferrer">
                    Profile <ExternalLink />
                  </a>
                  <a href={creator.evidence} target="_blank" rel="noreferrer">
                    {creator.evidenceLabel} <ExternalLink />
                  </a>
                </div>
                <small>Source · {creator.source}</small>
              </div>
            </article>
          ))}
        </div>

        <aside className="creator-smart-insight">
          <div>
            <Repeat2 />
            <span>RULE-BASED READ · ILLUSTRATIVE</span>
          </div>
          <strong>Evaluate the relationship, not one post.</strong>
          <p>
            With 16% of tracked collaborators posting across three or more
            months, the operating opportunity is a cohort view: first post →
            repeat brief → content reuse → first-order contribution → 90-day
            customer value.
          </p>
          <b>
            INTERNAL NEXT STEP · Join creator ID, content ID, code/link, order
            and customer cohort.
          </b>
          <small>
            This recommendation follows the displayed repeat-partner rule. It is
            not live AI and does not use private Kitsch data.
          </small>
        </aside>
      </section>

      <section className="creator-scorecard-section">
        <header className="creator-section-head">
          <div>
            <span>PROGRAM SCORECARD</span>
            <h2>Activity → customer quality</h2>
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
              <h3>
                {name}
                <button
                  type="button"
                  className="creator-help"
                  aria-label={`Definition: ${question}`}
                  title={question}
                >
                  <CircleHelp aria-hidden="true" />
                </button>
              </h3>
              <p>{question}</p>
            </article>
          ))}
        </div>
        <aside className="creator-demo-okr">
          <header>
            <ClipboardCheck aria-hidden="true" />
            <div>
              <span>DEMO OKR · PROCESS EXAMPLE</span>
              <strong>Make every creator renewal evidence-ready.</strong>
            </div>
          </header>
          <ul>
            <li>100% of live deliverables linked to creator and content IDs</li>
            <li>
              100% of renewal candidates have fully loaded cost reconciled
            </li>
            <li>Renewal decisions wait for the approved maturity window</li>
          </ul>
          <p>
            Illustrative operating thresholds—not Kitsch targets or performance.
          </p>
        </aside>
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
            <strong>Tier creators by portfolio job</strong>
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
            <strong>Give each deliverable a commercial ID</strong>
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
            <strong>Close the creator learning loop</strong>
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
