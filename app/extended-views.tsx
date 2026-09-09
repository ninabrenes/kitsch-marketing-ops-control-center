'use client';

import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  CircleAlert,
  Database,
  Gift,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  MessageCircleQuestion,
  PackageCheck,
  Repeat2,
  Search,
  ShoppingBag,
  Store,
  Target,
  Users,
  Wind,
  Workflow,
} from 'lucide-react';
import {
  Funnel as RechartsFunnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import './funnel-editorial.css';
import { EvidenceToAction } from './evidence-to-action';

const links = {
  site: 'https://www.mykitsch.com/',
  robots: 'https://www.mykitsch.com/robots.txt',
  sitemap: 'https://www.mykitsch.com/sitemap.xml',
};

const stackGroups = [
  [
    'COMMERCE',
    'Shopify · Shop Pay · Afterpay',
    'Storefront, checkout and accelerated payment signals.',
    'E-commerce',
  ],
  [
    'LIFECYCLE',
    'Klaviyo · Rivo · Kitsch mobile app',
    'Email/SMS capture, loyalty, referral and app retention surfaces.',
    'CRM + Retention',
  ],
  [
    'PROOF + CX',
    'Okendo · Gladly · Loop',
    'Reviews/quizzes, customer support and returns journey.',
    'CX + E-commerce',
  ],
  [
    'MEASUREMENT',
    'Triple Whale · Northbeam · Microsoft Clarity',
    'Attribution and behavior-tool signals visible in the public page source.',
    'Growth + Analytics',
  ],
  [
    'EXPERIMENTATION',
    'Visually.io · Black Crow AI',
    'Public personalization/experimentation script signals; configuration and activity are unknown.',
    'CRO + Growth',
  ],
  [
    'CREATOR',
    'LoudCrowd',
    'Ambassador and creator-program storefront integration.',
    'Social + Partnerships',
  ],
  [
    'GLOBAL + CONSENT',
    'Langify · Consentmo',
    'Localization and consent-management surfaces across a large international footprint.',
    'E-commerce + Legal',
  ],
] as const;

const storefrontStages = [
  {
    name: 'Discover',
    surface: 'Homepage · collections · creator landings',
    handoff: 'Traffic quality → product discovery',
    question: 'Did the right shopper reach a relevant product doorway?',
    measure: 'Qualified landing sessions · collection-to-PDP rate',
    owner: 'Brand + Growth',
    action: 'Route each high-reach concept to one need-state landing page.',
    Icon: Megaphone,
  },
  {
    name: 'Understand',
    surface: 'PDP · reviews · quiz · blog',
    handoff: 'Need state → proof interaction',
    question: 'Can the shopper quickly judge fit, use and proof?',
    measure: 'PDP engagement · review/quiz use · add-to-cart rate',
    owner: 'E-commerce + Content',
    action: 'Put use case, mechanism and credible proof above the fold.',
    Icon: Search,
  },
  {
    name: 'Buy',
    surface: 'Offer · cart · checkout · payment',
    handoff: 'Intent → healthy order',
    question: 'Did the purchase complete at an acceptable margin?',
    measure: 'Checkout completion · AOV · realized contribution',
    owner: 'E-commerce + Finance',
    action: 'Review device friction and promotion economics together.',
    Icon: ShoppingBag,
  },
  {
    name: 'Return',
    surface: 'Klaviyo · app · loyalty · support',
    handoff: 'First product → next useful routine',
    question: 'Did the first purchase create a relevant next step?',
    measure: '30/60/90-day second order · time to second order',
    owner: 'Lifecycle + CX',
    action: 'Trigger education and next-product logic from the first SKU.',
    Icon: Repeat2,
  },
  {
    name: 'Advocate',
    surface: 'Review · referral · ambassador',
    handoff: 'Outcome → trusted demand',
    question: 'Did a verified outcome become reusable proof?',
    measure: 'Review rate · referral orders · approved UGC reuse',
    owner: 'Community + Partnerships',
    action: 'Ask for proof at the moment the product outcome is clearest.',
    Icon: HeartHandshake,
  },
] as const;

const storefrontDemoMetrics = [
  ['Qualified visit → PDP', '28%', 'GA4 + Shopify', 'Growth'],
  ['PDP → add to cart', '9%', 'Shopify', 'E-commerce'],
  ['Checkout completion', '55%', 'Shopify', 'E-commerce'],
  ['90-day second order', '25%', 'Shopify + Klaviyo', 'Lifecycle'],
] as const;

const funnelStages = [
  {
    id: 'awareness',
    number: '01',
    name: 'Awareness',
    value: 100,
    fill: '#ca9a8e',
    job: 'Create useful category demand',
    channels: 'TikTok · Instagram · creators · PR · retail discovery',
    question: 'Is this made for my hair, routine or everyday need?',
    metric: 'Qualified reach · video hold · branded search lift',
    owner: 'Brand + Creative',
    handoff: 'Winning concept → relevant product or routine',
    Icon: Megaphone,
  },
  {
    id: 'consideration',
    number: '02',
    name: 'Consideration',
    value: 84,
    fill: '#dfb9af',
    job: 'Make product fit easy to judge',
    channels: 'YouTube · Pinterest · blog · reviews · quiz · PDP',
    question: 'How does it work, and what proof helps me choose?',
    metric: 'Engaged visits · product-view rate · proof interaction',
    owner: 'E-commerce + Content',
    handoff: 'Need state → credible proof → matched landing page',
    Icon: Search,
  },
  {
    id: 'conversion',
    number: '03',
    name: 'Conversion',
    value: 68,
    fill: '#f0d6c2',
    job: 'Turn intent into a healthy order',
    channels: 'DTC · TikTok Shop · Amazon · Target · Ulta',
    question: 'Where should I buy, and is the offer worth it?',
    metric: 'CVR · approved CAC · AOV · realized contribution',
    owner: 'Growth + E-commerce',
    handoff: 'Offer → checkout → finance-reconciled order',
    Icon: ShoppingBag,
  },
  {
    id: 'retention',
    number: '04',
    name: 'Retention',
    value: 52,
    fill: '#c9ded8',
    job: 'Build the next useful routine',
    channels: 'Klaviyo · app · loyalty · replenishment · support',
    question: 'What should I try next, and when will it help me?',
    metric: '30/60/90-day second-order rate · LTV · time to second order',
    owner: 'Lifecycle + CX',
    handoff: 'First SKU → next-best category or franchise',
    Icon: Repeat2,
  },
  {
    id: 'advocacy',
    number: '05',
    name: 'Advocacy',
    value: 38,
    fill: '#d9d9d6',
    job: 'Turn outcomes into trusted proof',
    channels: 'Reviews · referrals · UGC · affiliates · community',
    question: 'Was this good enough to share or recommend?',
    metric: 'Review rate · referral sales · verified creator contribution',
    owner: 'Community + Partnerships',
    handoff: 'Customer experience → reusable proof → new demand',
    Icon: HeartHandshake,
  },
] as const;

const customerArchetypes = [
  [
    'The Heatless Optimizer',
    '“I want polished hair without more heat or time.”',
    'Heatless sets · Air Dry Cream · satin pillowcase',
    'TikTok demo → YouTube technique → DTC or retail',
    'Hair type, visible result, ease, credible reviews',
    'Styling or overnight-protection follow-up',
  ],
  [
    'The Bottle-Free Problem Solver',
    '“Will a bar work as well as the liquid products I know?”',
    'Rice water · rosemary/biotin · bar accessories',
    'Google/Pinterest → educational article → comparison/PDP',
    'Performance proof, transition guidance, longevity',
    'Replenishment plus adjacent treatment',
  ],
  [
    'The Scent Explorer',
    '“Which scent feels like me—and will it last in my hair?”',
    'Discovery set · hair/body perfume · seasonal scents',
    'Creator reaction → scent finder → discovery set',
    'Notes, odor-neutralizing explanation, sampling',
    'Full-size scent and layering behavior',
  ],
  [
    'The Everyday Accessorizer',
    '“Can one affordable product fix this daily annoyance?”',
    'Elastics · clips · shower caps · dermaplaners',
    'Retail shelf/search → reviews → quick purchase',
    'Availability, durability, price, problem/solution clarity',
    'Basket building across utility essentials',
  ],
  [
    'The Gifter + Collector',
    '“Is this special enough to gift or buy before it disappears?”',
    'Licensed drops · seasonal sets · bundles',
    'Instagram/email → collection page → bundle',
    'Distinctiveness, urgency, gifting ease',
    'Referral, next drop and cross-category discovery',
  ],
] as const;

function Head({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-head">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <span>{copy}</span>}
    </div>
  );
}
function Label({ children }: { children: string }) {
  return (
    <span
      className={`signal ${children === 'HYPOTHESIS' ? 'hypothesis' : 'internal'}`}
    >
      {children}
    </span>
  );
}
function External({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="source-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={13} />
    </a>
  );
}

export function Website() {
  const [activeStorefrontStage, setActiveStorefrontStage] = useState(0);
  const storefrontStage = storefrontStages[activeStorefrontStage];
  const StorefrontIcon = storefrontStage.Icon;

  return (
    <div className="page-grid">
      <Head
        eyebrow="Storefront + martech"
        title="Storefront control"
        copy="Use public implementation signals to identify what to verify internally: active vendors, data flows, owners and decision use. Detection does not prove configuration or impact."
      />
      <section className="stack-hero">
        <div>
          <Globe2 />
          <p>OBSERVABLE DIGITAL FOUNDATION</p>
          <h2>
            Shopify commerce connected to lifecycle, loyalty, proof,
            attribution, experimentation and global operations.
          </h2>
        </div>
        <div>
          <article>
            <strong>80%</strong>
            <span>mobile traffic + revenue</span>
            <small>Shopify-published Kitsch case</small>
          </article>
          <article>
            <strong>7</strong>
            <span>integration capability groups</span>
            <small>public-source detection</small>
          </article>
          <article>
            <strong>1</strong>
            <span>agentic-discovery sitemap</span>
            <small>observable XML index</small>
          </article>
        </div>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Observable stack"
          title="Verify the active stack"
          copy="These are public implementation signals, not a verified internal systems inventory."
        />
        <div className="stack-grid">
          {stackGroups.map((s, i) => (
            <article key={s[0]}>
              <span>
                0{i + 1} · {s[0]}
              </span>
              <h3>{s[1]}</h3>
              <p>{s[2]}</p>
              <small>Likely business owner · {s[3]}</small>
            </article>
          ))}
        </div>
        <div className="method-note">
          <CircleAlert />
          <p>
            Vendor scripts can remain after a tool is paused or replaced.
            Confirm contracts, data flows, owners, privacy settings and decision
            use internally before consolidating anything.
          </p>
          <External href={links.site}>Open storefront</External>
        </div>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Customer journey architecture"
          title="Make every handoff measurable"
          copy="Select a stage to see its customer question, accountable owner and next action."
        />
        <div className="site-journey site-journey--interactive">
          {storefrontStages.map((stage, i) => (
            <button
              type="button"
              key={stage.name}
              className={activeStorefrontStage === i ? 'active' : ''}
              onClick={() => setActiveStorefrontStage(i)}
              aria-pressed={activeStorefrontStage === i}
            >
              <span>0{i + 1}</span>
              <stage.Icon aria-hidden="true" />
              <strong>{stage.name}</strong>
              <p>{stage.surface}</p>
              <small>{stage.handoff}</small>
            </button>
          ))}
        </div>
        <article className="storefront-stage-detail" aria-live="polite">
          <span className="storefront-stage-detail__icon">
            <StorefrontIcon aria-hidden="true" />
          </span>
          <div>
            <small>HOW TO READ · {storefrontStage.name}</small>
            <h3>{storefrontStage.question}</h3>
            <p>{storefrontStage.measure}</p>
          </div>
          <dl>
            <div>
              <dt>Owner</dt>
              <dd>{storefrontStage.owner}</dd>
            </div>
            <div>
              <dt>Next action</dt>
              <dd>{storefrontStage.action}</dd>
            </div>
          </dl>
        </article>
      </section>
      <section className="wide-card storefront-demo-scorecard">
        <Head
          eyebrow="Demo OKR illustration"
          title="What a connected storefront review could show"
          copy="Illustrative targets for demonstrating the operating model—not Kitsch actuals, approved goals or industry benchmarks. Replace them after baseline validation."
        />
        <div className="storefront-demo-scorecard__grid">
          {storefrontDemoMetrics.map(([metric, target, source, owner]) => (
            <article key={metric}>
              <span>EXAMPLE TARGET</span>
              <strong>{target}</strong>
              <h3>{metric}</h3>
              <p>{source}</p>
              <small>Owner · {owner}</small>
            </article>
          ))}
        </div>
        <div className="method-note">
          <Database />
          <p>
            Connect Shopify, GA4 and Klaviyo by customer, order, product, device
            and acquisition source before treating the targets as a management
            scorecard.
          </p>
          <Label>INTERNAL DATA REQUIRED</Label>
        </div>
      </section>
      <section className="two-col">
        <article className="wide-card">
          <Head
            eyebrow="Search + AI readiness"
            title="Strengthen technical discovery"
          />
          <ul className="commerce-list">
            <li>
              <CheckCircle2 />
              The sitemap separates products, collections, pages, blogs and
              metaobject pages.
            </li>
            <li>
              <CheckCircle2 />
              Localized sitemap sets and extensive hreflang signals support
              international discovery.
            </li>
            <li>
              <CheckCircle2 />
              Product pages expose canonical URLs and specific meta
              descriptions.
            </li>
            <li>
              <CheckCircle2 />
              An agentic-discovery sitemap is explicitly listed in the root
              sitemap index.
            </li>
          </ul>
          <div className="source-pair">
            <External href={links.sitemap}>Sitemap</External>
            <External href={links.robots}>Robots rules</External>
          </div>
        </article>
        <article className="wide-card">
          <Head
            eyebrow="Operating risk"
            title="Reconcile before adding tools"
          />
          <ul className="commerce-list risk">
            <li>
              <CircleAlert />
              Attribution tools need one agreed spend, revenue and new-customer
              perimeter.
            </li>
            <li>
              <CircleAlert />
              Experiments need an ID, hypothesis, audience, dates and
              outcome—not only a winning variant.
            </li>
            <li>
              <CircleAlert />
              Lifecycle, loyalty, app and referral audiences can overlap without
              a contact policy.
            </li>
            <li>
              <CircleAlert />
              Localization multiplies merchandising, claim, price and
              content-governance work.
            </li>
            <li>
              <CircleAlert />
              Page speed, consent and tag ownership need a release checklist.
            </li>
          </ul>
          <Label>INTERNAL DATA REQUIRED</Label>
        </article>
      </section>
      <section className="wide-card">
        <Head eyebrow="Stack governance" title="First 30-day stack audit" />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Question</th>
                <th>Evidence needed</th>
                <th>Decision supported</th>
                <th>Cadence</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'What tools are truly active?',
                  'Contracts · admin access · tag inventory',
                  'Keep · consolidate · retire',
                  'Quarterly',
                ],
                [
                  'Which numbers disagree?',
                  'Shopify · finance · attribution reconciliation',
                  'Leadership source of truth',
                  'Weekly',
                ],
                [
                  'Which journeys are owned?',
                  'Lifecycle map · triggers · exclusions · SLAs',
                  'Contact and handoff governance',
                  'Monthly',
                ],
                [
                  'Are tests creating learning?',
                  'Experiment log · sample · outcome · rollout',
                  'Scale, iterate or stop',
                  'Bi-weekly',
                ],
                [
                  'Where does the site lose customers?',
                  'Device funnel · page speed · errors · returns',
                  'Prioritized CRO backlog',
                  'Weekly',
                ],
                [
                  'Are claims globally consistent?',
                  'Market · page · owner · evidence · refresh date',
                  'Publish, localize or correct',
                  'Monthly',
                ],
              ].map((r) => (
                <tr key={r[0]}>
                  {r.map((v) => (
                    <td key={v}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export function Funnel() {
  const [activeStage, setActiveStage] = useState<(typeof funnelStages)[number]>(
    funnelStages[0],
  );
  const ActiveIcon = activeStage.Icon;

  return (
    <div className="page-grid funnel-editorial">
      <Head
        eyebrow="Customer journey"
        title="Five handoffs. One customer journey."
        copy="Select a stage to assign the customer question, media job, owner and first-party measure. Funnel widths illustrate the operating structure only—not Kitsch traffic or conversion volumes."
      />

      <EvidenceToAction
        evidence="Public channel surfaces, product journeys, creator content and retailer availability show where customers can discover and buy."
        interpretation="The five-stage funnel is an illustrative operating map for assigning channel jobs and handoffs—not observed Kitsch conversion behavior."
        internal="Customer, source, creative, first SKU, margin, device, market and mature second-order events joined at person/order level."
        decision="Name the owner and first-party measure for each handoff, then fix the stage where verified customer movement breaks."
        owner="Growth + E-commerce"
      />

      <section
        className="funnel-demo-okr"
        aria-label="Illustrative funnel OKRs"
      >
        <div>
          <Target aria-hidden="true" />
          <span>DEMO OKR · NOT KITSCH ACTUALS</span>
          <strong>Turn discovery into a valuable second order</strong>
          <p>
            Illustrative targets show how the report becomes actionable once
            internal baselines and approved goals are connected.
          </p>
        </div>
        {[
          ['Discover → Consider', '≥ 28%', 'Qualified landing to PDP'],
          ['Consider → Buy', '≥ 9%', 'PDP to add to cart'],
          ['Buy', '≥ 55%', 'Checkout completion'],
          ['Repeat', '≥ 25%', '90-day second order'],
        ].map(([stage, target, label]) => (
          <article key={stage}>
            <small>{stage}</small>
            <strong>{target}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section
        className="funnel-story"
        aria-label="Interactive customer journey funnel"
      >
        <div className="funnel-story__visual">
          <div className="funnel-story__legend">
            <span>
              <Workflow size={15} /> Select a stage
            </span>
            <span className="funnel-story__disclosure">
              Illustrative structure · no performance data
            </span>
          </div>
          <div className="funnel-chart-shell">
            <ResponsiveContainer width="100%" height="100%">
              <FunnelChart
                margin={{ top: 12, right: 28, bottom: 12, left: 28 }}
              >
                <Tooltip
                  cursor={false}
                  content={({ active, payload }) =>
                    active && payload?.[0] ? (
                      <div className="funnel-tooltip">
                        <strong>{String(payload[0].name)}</strong>
                        <span>Select to open the operating brief</span>
                      </div>
                    ) : null
                  }
                />
                <RechartsFunnel
                  dataKey="value"
                  data={funnelStages}
                  isAnimationActive
                  onClick={(entry) => {
                    const next = funnelStages.find(
                      (stage) => stage.id === entry?.id,
                    );
                    if (next) setActiveStage(next);
                  }}
                  onMouseEnter={(entry) => {
                    const next = funnelStages.find(
                      (stage) => stage.id === entry?.id,
                    );
                    if (next) setActiveStage(next);
                  }}
                >
                  <LabelList
                    dataKey="name"
                    position="center"
                    fill="#231f20"
                    fontSize={12}
                    fontWeight={750}
                  />
                </RechartsFunnel>
              </FunnelChart>
            </ResponsiveContainer>
          </div>
          <nav className="funnel-stage-pills" aria-label="Journey stages">
            {funnelStages.map((stage) => (
              <button
                type="button"
                key={stage.id}
                className={activeStage.id === stage.id ? 'active' : ''}
                onClick={() => setActiveStage(stage)}
                aria-pressed={activeStage.id === stage.id}
              >
                <stage.Icon size={16} />
                {stage.name}
              </button>
            ))}
          </nav>
        </div>

        <article className="funnel-stage-brief" aria-live="polite">
          <div className="funnel-stage-brief__top">
            <span className="funnel-stage-brief__icon">
              <ActiveIcon />
            </span>
            <div>
              <small>
                {activeStage.number} · {activeStage.name}
              </small>
              <h3>{activeStage.job}</h3>
            </div>
          </div>
          <div className="funnel-stage-question">
            <MessageCircleQuestion />
            <div>
              <span>Customer asks</span>
              <p>“{activeStage.question}”</p>
            </div>
          </div>
          <dl className="funnel-stage-details">
            <div>
              <dt>Media + surface</dt>
              <dd>{activeStage.channels}</dd>
            </div>
            <div>
              <dt>First-party measure</dt>
              <dd>{activeStage.metric}</dd>
            </div>
            <div>
              <dt>Accountable owner</dt>
              <dd>{activeStage.owner}</dd>
            </div>
            <div>
              <dt>Required handoff</dt>
              <dd>{activeStage.handoff}</dd>
            </div>
          </dl>
        </article>
      </section>

      <section className="wide-card funnel-media-card">
        <Head
          eyebrow="Media roles"
          title="Assign each channel a job"
          copy="A channel can create demand, explain value, close a sale—or do several jobs. Give it a role before giving it a budget."
        />
        <div className="media-grid editorial-media-grid">
          {[
            [
              Megaphone,
              'Paid',
              'Create + capture demand',
              'Meta · Google · TikTok paid',
              'Incrementality · contribution · creative learning',
            ],
            [
              BadgeCheck,
              'Owned',
              'Educate + retain',
              'Site · blog · email · SMS · app',
              'Qualified sessions · repeat · lifecycle value',
            ],
            [
              Globe2,
              'Earned',
              'Borrow trust',
              'PR · editorial · organic mentions',
              'Share of search · referral quality · assisted demand',
            ],
            [
              Users,
              'Creator',
              'Make it believable',
              'Affiliate · UGC · ambassador · TikTok Shop',
              'New-to-brand · creator contribution · cohort quality',
            ],
            [
              Store,
              'Retail',
              'Win availability',
              'Target · Ulta · Walmart · Amazon',
              'Sell-through · in-stock · retailer incrementality',
            ],
          ].map(([Icon, name, job, surfaces, measure], index) => {
            const MediaIcon = Icon as typeof Megaphone;
            return (
              <article key={String(name)}>
                <div>
                  <span className="media-icon">
                    <MediaIcon />
                  </span>
                  <small>0{index + 1}</small>
                </div>
                <h3>{String(job)}</h3>
                <strong>{String(name)}</strong>
                <p>{String(surfaces)}</p>
                <details>
                  <summary>How to measure</summary>
                  <span>{String(measure)}</span>
                </details>
              </article>
            );
          })}
        </div>
      </section>

      <section className="wide-card funnel-avatar-card">
        <Head
          eyebrow="Possible audiences"
          title="Start with the customer’s job"
          copy="These are hypotheses for research and cohort analysis—not verified Kitsch segments. Open a profile to see its proposed journey and validation plan."
        />
        <div className="avatar-grid editorial-avatar-grid">
          {customerArchetypes.map((archetype, index) => {
            const icons = [Wind, PackageCheck, Search, ShoppingBag, Gift];
            const AvatarIcon = icons[index];
            return (
              <details key={archetype[0]}>
                <summary>
                  <span className="avatar-icon">
                    <AvatarIcon />
                  </span>
                  <span>
                    <small>0{index + 1} · HYPOTHESIS</small>
                    <strong>{archetype[0]}</strong>
                    <em>{archetype[1]}</em>
                  </span>
                  <span className="avatar-open">
                    Read more <ArrowRight />
                  </span>
                </summary>
                <dl>
                  <div>
                    <dt>Product doorway</dt>
                    <dd>{archetype[2]}</dd>
                  </div>
                  <div>
                    <dt>Likely journey</dt>
                    <dd>{archetype[3]}</dd>
                  </div>
                  <div>
                    <dt>Proof needed</dt>
                    <dd>{archetype[4]}</dd>
                  </div>
                  <div>
                    <dt>Retention test</dt>
                    <dd>{archetype[5]}</dd>
                  </div>
                </dl>
              </details>
            );
          })}
        </div>
      </section>

      <section className="wide-card funnel-question-card">
        <Head
          eyebrow="Message opportunities"
          title="Answer three buying questions"
        />
        <div className="question-grid editorial-question-grid">
          {[
            [
              BadgeCheck,
              'Fit',
              '“Will this work for my hair, routine or need?”',
              'Put hair type, use case and expected result beside the first product claim.',
              'Show one hero product across distinct routines.',
              'Route to one specific how-to, quiz or comparison.',
            ],
            [
              Search,
              'Difference',
              '“Why is this better for me than what I use now?”',
              'Pair the emotional promise with one concrete mechanism and proof source.',
              'Compare techniques or formats without unverified superiority claims.',
              'Explain the use case—not a generic feature list.',
            ],
            [
              ShoppingBag,
              'Next step',
              '“Where do I start—and what comes next?”',
              'Give one starting recommendation by need state.',
              'Build routine paths from hero product to adjacent franchise.',
              'Offer one choice plus one optional add-on.',
            ],
          ].map(([Icon, label, question, pagePatch, content, reply], index) => {
            const QuestionIcon = Icon as typeof BadgeCheck;
            return (
              <article key={String(label)}>
                <div>
                  <span>
                    <QuestionIcon />
                  </span>
                  <small>
                    0{index + 1} · {String(label)}
                  </small>
                </div>
                <h3>{String(question)}</h3>
                <details>
                  <summary>See the response plan</summary>
                  <p>
                    <b>On-page:</b> {String(pagePatch)}
                  </p>
                  <p>
                    <b>Content:</b> {String(content)}
                  </p>
                  <p>
                    <b>Reply:</b> {String(reply)}
                  </p>
                </details>
              </article>
            );
          })}
        </div>
        <div className="funnel-insight">
          <Lightbulb />
          <div>
            <span>Recommended action</span>
            <p>
              <b>Fit is the likely leverage point.</b> Portfolio breadth becomes
              an advantage when a customer can identify the right doorway and
              see herself in the proof.
            </p>
          </div>
        </div>
      </section>

      <section className="funnel-data-card">
        <span>
          <Database />
        </span>
        <div>
          <small>Required measurement</small>
          <h3>Connect the journey at customer + creative level</h3>
          <p>
            Customer ID × first-touch source × creative ID × need state × first
            SKU × realized margin × device × market × 30/60/90-day second order
            × next franchise.
          </p>
        </div>
        <Label>INTERNAL DATA REQUIRED</Label>
      </section>
    </div>
  );
}
