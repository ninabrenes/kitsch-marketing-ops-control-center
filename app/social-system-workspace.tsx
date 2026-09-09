'use client';

import { useMemo, useState, type ReactNode } from 'react';
import {
  ArrowUpRight,
  BookOpenCheck,
  ChevronDown,
  Clapperboard,
  FlaskConical,
  Gauge,
  Layers3,
  MousePointerClick,
  Repeat2,
  ShieldCheck,
  ShoppingBag,
  Target,
  UsersRound,
} from 'lucide-react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import {
  PlatformBrandIcon,
  type PlatformBrandName,
} from './platform-brand-icon';
import './social-system-workspace.css';

type Channel = {
  id: string;
  name: PlatformBrandName;
  publicSignal: string;
  publicLabel: string;
  role: string;
  meaning: string;
  decision: string;
  source: string;
  content: string[];
  proveWith: string;
};

const channels: Channel[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    publicSignal: '1M',
    publicLabel: 'followers · 4,779 posts',
    role: 'Brand theater + launch memory',
    meaning:
      'The largest visible owned audience. Use it to make launches recognizable and routines saveable—not as proof of reach or revenue.',
    decision:
      'Separate hero campaign, creator proof, routine education and community participation into named franchises.',
    source: 'https://www.instagram.com/mykitsch/',
    content: [
      'Campaign worlds',
      'Routine carousels',
      'Creator proof',
      'Community prompts',
    ],
    proveWith:
      'Qualified reach · saves/share rate · profile visits · assisted revenue',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    publicSignal: '473K',
    publicLabel: 'page likes',
    role: 'Community + offer amplification',
    meaning:
      'A large established community counter, but public data cannot show whether current distribution or clicks remain efficient.',
    decision:
      'Test review-led education and retailer availability against promotion-only communication.',
    source: 'https://www.facebook.com/mykitsch/',
    content: [
      'Review proof',
      'Problem/solution',
      'Retail availability',
      'Offer explanation',
    ],
    proveWith: 'Engaged reach · outbound CTR · new-to-brand CVR · contribution',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    publicSignal: '341.9K',
    publicLabel: 'followers · 1.7M likes',
    role: 'Discovery + rapid creative learning',
    meaning:
      'The fastest public surface for demonstrations and creator-native storytelling. Volume alone can hide repeated concepts.',
    decision:
      'Code every video by problem, hook, proof, creator, format and awareness stage before scaling.',
    source: 'https://www.tiktok.com/@kitsch',
    content: [
      'One-problem demos',
      'Scent reactions',
      'Hair-type routines',
      'Creator comparisons',
    ],
    proveWith:
      '2-second hold · 6-second view · completion · share · product click',
  },
  {
    id: 'tiktok-shop',
    name: 'TikTok Shop',
    publicSignal: '2.3M',
    publicLabel: 'units sold displayed · 2,415 videos',
    role: 'Social-commerce conversion',
    meaning:
      'The strongest visible commerce signal. Displayed units do not reveal Kitsch net revenue, margin, new-to-brand mix or repeat.',
    decision:
      'Read profitability and 30/60/90-day customer quality by first product, creator and video.',
    source: 'https://shop.tiktok.com/us/store/kitsch-llc/7495183505163847730',
    content: [
      'Affiliate proof',
      'Live demos',
      'Routine bundles',
      'Objection handling',
    ],
    proveWith:
      'Net GMV · contribution · creator CAC · new-to-brand · repeat cohort',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    publicSignal: '24.1K',
    publicLabel: 'subscribers · 1.8K videos',
    role: 'Evergreen education + search',
    meaning:
      'A deep owned library with an opportunity to become easier to navigate by question, hair type and product need.',
    decision:
      'Build canonical series and reuse the strongest answers on product pages and search landing pages.',
    source: 'https://www.youtube.com/@mykitsch',
    content: [
      'Heatless by hair type',
      'Bar transition',
      'Scent finder',
      'Air-dry technique',
    ],
    proveWith:
      'Search views · watch time · returning viewers · PDP-assisted CVR',
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    publicSignal: '11.5K',
    publicLabel: 'followers',
    role: 'Evergreen intent + planning',
    meaning:
      'Kitsch is a verified merchant with a visible planning footprint. Publishing volume matters only if it earns saves and qualified visits.',
    decision:
      'Tie every board cluster to a search intent, season and canonical landing page.',
    source: 'https://www.pinterest.com/mykitsch/',
    content: [
      'Seasonal routines',
      'Gift guides',
      'Travel systems',
      'Bottle-free care',
    ],
    proveWith:
      'Saves · outbound CTR · qualified sessions · assisted contribution',
  },
  {
    id: 'website',
    name: 'Website',
    publicSignal: '152.6K',
    publicLabel: 'reviews displayed · 4.8 average',
    role: 'Conversion + source of truth',
    meaning:
      'The destination where social promises, proof and merchandising must resolve into a clear purchase decision.',
    decision:
      'Give every material landing-page change an ID, hypothesis, audience, metric and post-period readout.',
    source: 'https://www.mykitsch.com/',
    content: [
      'Need-state pages',
      'Proof modules',
      'Routine builders',
      'Creator landing pages',
    ],
    proveWith:
      'CVR · contribution/session · opt-in · full-price mix · repeat rate',
  },
];

const metricLayers = [
  {
    id: 'business',
    label: '1 · Business outcomes',
    why: 'Use these to move budget.',
    icon: ShoppingBag,
    metrics: [
      [
        'Contribution / order',
        'Did the channel create profitable demand?',
        'Finance + Shopify',
      ],
      [
        'New-to-brand CAC',
        'What did a genuinely new customer cost?',
        'Paid + identity join',
      ],
      ['90-day repeat', 'Did acquired customers return?', 'Shopify + Klaviyo'],
      [
        'Incremental revenue',
        'What happened because of the activity?',
        'Approved experiment',
      ],
    ],
  },
  {
    id: 'journey',
    label: '2 · Journey behavior',
    why: 'Use these to locate the leak.',
    icon: MousePointerClick,
    metrics: [
      [
        'Qualified sessions',
        'Did the click bring the intended audience?',
        'GA4',
      ],
      [
        'Landing-page CVR',
        'Did the destination convert the promise?',
        'GA4 + Shopify',
      ],
      [
        'Product clicks',
        'Did content create shopping intent?',
        'Platform export',
      ],
      [
        'Assisted revenue',
        'Did social help before another channel closed?',
        'Attribution model',
      ],
    ],
  },
  {
    id: 'creative',
    label: '3 · Creative quality',
    why: 'Use these to improve content.',
    icon: Clapperboard,
    metrics: [
      ['2/3-second hold', 'Did the opening earn attention?', 'Video analytics'],
      ['Completion rate', 'Did the story sustain interest?', 'Video analytics'],
      [
        'Save + share rate',
        'Was the idea useful or socially valuable?',
        'Platform export',
      ],
      [
        'Watch/search time',
        'Did education answer the question?',
        'YouTube Studio',
      ],
    ],
  },
  {
    id: 'output',
    label: '4 · Output context',
    why: 'Monitor workload; never call it performance.',
    icon: Layers3,
    metrics: [
      ['Assets published', 'How much did the team ship?', 'Content calendar'],
      [
        'Concept diversity',
        'How many distinct ideas—not edits—ran?',
        'Creative taxonomy',
      ],
      [
        'Cadence adherence',
        'Did each channel receive its intended mix?',
        'Asana',
      ],
      [
        'Public counters',
        'How large is the visible footprint today?',
        'Public profiles',
      ],
    ],
  },
];

const demoBenchmarks = [
  ['3-second hold', '31%', '35–45%', 'Improve opening frame'],
  ['Save + share rate', '2.8%', '3.5–5%', 'Add utility or identity value'],
  ['Social landing CVR', '2.4%', '3–4%', 'Align promise and landing page'],
  ['90-day second order', '21%', '25–30%', 'Strengthen routine cross-sell'],
];

const contentOptions = [
  {
    stage: 'Discover',
    title: 'The one-friction fix',
    format: '9–15s demo',
    platforms: ['TikTok', 'Instagram'] as PlatformBrandName[],
    question: 'Which problem earns the strongest hold and qualified click?',
    metric: 'Hold → product click',
  },
  {
    stage: 'Discover',
    title: 'Creator proof, not a script',
    format: 'Creator reaction',
    platforms: ['TikTok', 'TikTok Shop'] as PlatformBrandName[],
    question: 'Which creator–product fit attracts new-to-brand customers?',
    metric: 'Creator CAC → NTB rate',
  },
  {
    stage: 'Consider',
    title: 'Heatless by hair type',
    format: 'Series + guide',
    platforms: ['YouTube', 'Pinterest'] as PlatformBrandName[],
    question: 'Which answer removes uncertainty before the product page?',
    metric: 'Watch/search → assisted CVR',
  },
  {
    stage: 'Consider',
    title: 'Scent finder',
    format: 'Comparison carousel',
    platforms: ['Instagram', 'Website'] as PlatformBrandName[],
    question: 'Does clearer selection reduce exits and improve full-price mix?',
    metric: 'Saves → PDP progression',
  },
  {
    stage: 'Buy',
    title: 'Build the routine',
    format: 'Bundle demonstration',
    platforms: ['TikTok Shop', 'Website'] as PlatformBrandName[],
    question: 'Which bundle raises contribution without discount dependence?',
    metric: 'AOV → contribution/order',
  },
  {
    stage: 'Buy',
    title: 'Proof at the decision point',
    format: 'Review-led asset',
    platforms: ['Facebook', 'Website'] as PlatformBrandName[],
    question: 'Which proof resolves the last objection?',
    metric: 'CTR → landing CVR',
  },
  {
    stage: 'Repeat',
    title: 'Day 1 to day 30',
    format: 'Routine progression',
    platforms: ['Instagram', 'YouTube'] as PlatformBrandName[],
    question: 'Does post-purchase education improve product success?',
    metric: 'Engagement → 90-day repeat',
  },
  {
    stage: 'Repeat',
    title: 'Your next Kitsch ritual',
    format: 'Cross-sell story',
    platforms: ['Facebook', 'Website'] as PlatformBrandName[],
    question: 'Which adjacent need creates a natural second purchase?',
    metric: 'Second-order rate → LTV',
  },
];

const contentMix = [
  { name: 'Discover', value: 35, fill: '#713f2a' },
  { name: 'Consider', value: 25, fill: '#ca9a8e' },
  { name: 'Buy', value: 25, fill: '#f8b68f' },
  { name: 'Repeat', value: 15, fill: '#00426a' },
];

const stages = ['All', 'Discover', 'Consider', 'Buy', 'Repeat'] as const;

function DataTag({
  children,
  tone = 'public',
}: {
  children: ReactNode;
  tone?: 'public' | 'demo' | 'internal';
}) {
  return <span className={`social-data-tag tone-${tone}`}>{children}</span>;
}

function ChannelBrief({ channel }: { channel: Channel }) {
  return (
    <section className="social-channel-brief" aria-live="polite">
      <header>
        <div className="social-channel-identity">
          <PlatformBrandIcon name={channel.name} size="large" />
          <div>
            <DataTag>PUBLIC SNAPSHOT · SEP 2026</DataTag>
            <strong>{channel.publicSignal}</strong>
            <span>{channel.publicLabel}</span>
          </div>
        </div>
        <a href={channel.source} target="_blank" rel="noreferrer">
          Open profile <ArrowUpRight aria-hidden="true" />
        </a>
      </header>
      <div className="social-channel-story">
        <article>
          <small>CHANNEL JOB</small>
          <h3>{channel.role}</h3>
        </article>
        <article>
          <small>WHAT THE SIGNAL MEANS</small>
          <p>{channel.meaning}</p>
        </article>
        <article className="social-channel-decision">
          <Target aria-hidden="true" />
          <div>
            <small>RECOMMENDED DECISION</small>
            <p>{channel.decision}</p>
          </div>
        </article>
      </div>
      <details className="social-channel-more">
        <summary>
          Content formats and data needed <ChevronDown aria-hidden="true" />
        </summary>
        <div>
          <section>
            <small>CONTENT TO RUN</small>
            <ul>
              {channel.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <DataTag tone="internal">INTERNAL DATA REQUIRED</DataTag>
            <p>{channel.proveWith}</p>
          </section>
        </div>
      </details>
    </section>
  );
}

export function SocialSystemWorkspace() {
  const [channelId, setChannelId] = useState(channels[0].id);
  const [metricLayer, setMetricLayer] = useState(metricLayers[0].id);
  const [stage, setStage] = useState<(typeof stages)[number]>('All');
  const channel = channels.find((item) => item.id === channelId) ?? channels[0];
  const selectedLayer =
    metricLayers.find((item) => item.id === metricLayer) ?? metricLayers[0];
  const SelectedMetricIcon = selectedLayer.icon;
  const filteredContent = useMemo(
    () =>
      contentOptions.filter((item) => stage === 'All' || item.stage === stage),
    [stage],
  );

  return (
    <div className="social-system-page">
      <header className="social-system-hero">
        <div>
          <DataTag>PUBLIC-SIGNAL PROTOTYPE</DataTag>
          <p>SOCIAL OPERATING SYSTEM</p>
          <h1>Know what to publish—and why</h1>
          <span>
            Read each channel by its job, compare metrics in decision order,
            then turn evidence into a focused content test.
          </span>
        </div>
        <aside aria-label="How to use this view">
          <BookOpenCheck aria-hidden="true" />
          <small>HOW TO USE THIS VIEW</small>
          <ol>
            <li>Choose a channel.</li>
            <li>Read outcomes before followers.</li>
            <li>Select one content test.</li>
            <li>Connect the missing internal data.</li>
          </ol>
        </aside>
      </header>

      <section
        className="social-test-queue"
        aria-labelledby="social-test-title"
      >
        <div className="social-section-heading">
          <div>
            <p>DECISIONS THIS WEEK</p>
            <h2 id="social-test-title">Ranked content test queue</h2>
          </div>
          <DataTag tone="demo">PROPOSED · VALIDATE WITH INTERNAL DATA</DataTag>
        </div>
        <div className="social-test-list">
          {[
            {
              priority: 'P1',
              title: 'Prove the one-friction demo on TikTok',
              owner: 'Social + Growth',
              due: 'Next weekly readout',
              metric: 'Hold → qualified click → contribution',
              scale:
                'Scale when hold and qualified clicks beat the matched baseline without weakening contribution.',
              stop: 'Revise or stop after two comparable periods below baseline.',
              platform: 'TikTok' as PlatformBrandName,
            },
            {
              priority: 'P2',
              title: 'Make “heatless by hair type” a saveable franchise',
              owner: 'Brand + Social',
              due: '14-day learning review',
              metric: 'Save/share → assisted product-page CVR',
              scale:
                'Scale the hair-type modules that lift both utility signals and assisted conversion.',
              stop: 'Stop versions that earn saves but do not advance qualified customers.',
              platform: 'Instagram' as PlatformBrandName,
            },
            {
              priority: 'P3',
              title: 'Test a profitable routine bundle in TikTok Shop',
              owner: 'Commerce + Creator',
              due: '30-day cohort read',
              metric: 'Contribution/order → new-to-brand → repeat',
              scale:
                'Scale only when the bundle clears the contribution guardrail and attracts quality customers.',
              stop: 'Stop discount-led volume that misses margin or cohort-quality rules.',
              platform: 'TikTok Shop' as PlatformBrandName,
            },
          ].map((test) => (
            <details key={test.priority}>
              <summary>
                <span>{test.priority}</span>
                <PlatformBrandIcon name={test.platform} label={false} />
                <div>
                  <strong>{test.title}</strong>
                  <small>{test.metric}</small>
                </div>
                <div>
                  <b>{test.owner}</b>
                  <small>{test.due}</small>
                </div>
                <ChevronDown aria-hidden="true" />
              </summary>
              <div>
                <p>
                  <strong>SCALE RULE</strong>
                  {test.scale}
                </p>
                <p>
                  <strong>STOP / REVISE RULE</strong>
                  {test.stop}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section
        className="social-channel-workspace"
        aria-labelledby="social-channel-title"
      >
        <div className="social-section-heading">
          <div>
            <p>CHANNEL PULSE</p>
            <h2 id="social-channel-title">
              Every platform has one primary job
            </h2>
          </div>
          <span>
            Choose a logo to inspect the signal, meaning and decision.
          </span>
        </div>
        <div
          className="social-channel-picker"
          role="tablist"
          aria-label="Social channels"
        >
          {channels.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={channelId === item.id}
              className={channelId === item.id ? 'active' : ''}
              onClick={() => setChannelId(item.id)}
            >
              <PlatformBrandIcon name={item.name} label={false} />
              <span>{item.name}</span>
              <small>{item.role.split(' + ')[0]}</small>
            </button>
          ))}
        </div>
        <ChannelBrief channel={channel} />
      </section>

      <section
        className="social-metric-workspace"
        aria-labelledby="social-metrics-title"
      >
        <div className="social-section-heading">
          <div>
            <p>METRIC PRIORITY</p>
            <h2 id="social-metrics-title">
              Sort metrics by the decision they support
            </h2>
          </div>
          <span>
            Follower totals are context. Business outcomes are the budget
            decision.
          </span>
        </div>
        <div className="social-metric-layout">
          <nav aria-label="Metric layers">
            {metricLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  type="button"
                  aria-pressed={metricLayer === layer.id}
                  className={metricLayer === layer.id ? 'active' : ''}
                  onClick={() => setMetricLayer(layer.id)}
                >
                  <Icon aria-hidden="true" />
                  <span>
                    <strong>{layer.label}</strong>
                    <small>{layer.why}</small>
                  </span>
                </button>
              );
            })}
          </nav>
          <div className="social-metric-detail" aria-live="polite">
            <header>
              <SelectedMetricIcon aria-hidden="true" />
              <div>
                <small>{selectedLayer.label}</small>
                <h3>{selectedLayer.why}</h3>
              </div>
              <DataTag tone={metricLayer === 'output' ? 'public' : 'internal'}>
                {metricLayer === 'output'
                  ? 'MIXED SOURCES'
                  : 'INTERNAL DATA REQUIRED'}
              </DataTag>
            </header>
            <div>
              {selectedLayer.metrics.map(([metric, question, source]) => (
                <article key={metric}>
                  <strong>{metric}</strong>
                  <p>{question}</p>
                  <small>{source}</small>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="social-benchmark-workspace"
        aria-labelledby="social-benchmark-title"
      >
        <div className="social-section-heading">
          <div>
            <p>BENCHMARK MODEL</p>
            <h2 id="social-benchmark-title">
              Use Kitsch baselines before generic averages
            </h2>
          </div>
          <DataTag tone="demo">ILLUSTRATIVE · NOT KITSCH ACTUALS</DataTag>
        </div>
        <div className="social-benchmark-rule">
          {[
            [
              '01',
              'Baseline',
              'Rolling eight-week median by channel, format and awareness stage.',
            ],
            [
              '02',
              'Winner',
              'Meaningful lift across two comparable periods with a minimum sample.',
            ],
            [
              '03',
              'Guardrail',
              'Contribution and customer quality cannot deteriorate while attention rises.',
            ],
            [
              '04',
              'Decision',
              'Scale, revise or stop—and record the reason against the creative ID.',
            ],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="social-demo-scorecard">
          <header>
            <FlaskConical aria-hidden="true" />
            <div>
              <strong>Example scorecard</strong>
              <p>
                Dummy values show the intended layout. Replace with approved
                channel baselines.
              </p>
            </div>
          </header>
          <div className="social-scorecard-table">
            <table aria-label="Illustrative social benchmark scorecard">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Demo current</th>
                  <th>Demo target</th>
                  <th>Read</th>
                </tr>
              </thead>
              <tbody>
                {demoBenchmarks.map(([metric, current, target, read]) => (
                  <tr key={metric}>
                    <th scope="row">{metric}</th>
                    <td>{current}</td>
                    <td>{target}</td>
                    <td>{read}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        className="social-content-workspace"
        aria-labelledby="social-content-title"
      >
        <div className="social-section-heading">
          <div>
            <p>CONTENT OPPORTUNITY BOARD</p>
            <h2 id="social-content-title">
              Eight tests across the customer journey
            </h2>
          </div>
          <span>
            Each idea includes a learning question and the metric that should
            answer it.
          </span>
        </div>
        <fieldset
          className="social-content-controls"
          aria-label="Filter content ideas by journey stage"
        >
          {stages.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={stage === item}
              onClick={() => setStage(item)}
            >
              {item}
            </button>
          ))}
        </fieldset>
        <div className="social-content-layout">
          <aside className="social-content-mix">
            <DataTag tone="demo">DEMO MIX</DataTag>
            <h3>Illustrative content allocation</h3>
            <figure
              className="social-content-chart"
              aria-label="Illustrative content mix: 35 percent Discover, 25 percent Consider, 25 percent Buy and 15 percent Repeat"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={contentMix}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={52}
                    outerRadius={82}
                    paddingAngle={3}
                    stroke="none"
                  />
                  <Tooltip
                    formatter={(value) => [
                      `${String(value)}%`,
                      'Illustrative mix',
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <strong aria-hidden="true">4 jobs</strong>
            </figure>
            <ul>
              {contentMix.map((item) => (
                <li key={item.name}>
                  <i style={{ background: item.fill }} />
                  <span>{item.name}</span>
                  <strong>{item.value}%</strong>
                </li>
              ))}
            </ul>
            <p>
              Start here, then rebalance using profitable customer outcomes—not
              engagement alone.
            </p>
          </aside>
          <div className="social-content-grid">
            {filteredContent.map((item) => (
              <details key={item.title}>
                <summary>
                  <span>{item.stage}</span>
                  <h3>{item.title}</h3>
                  <small>{item.format}</small>
                  <ChevronDown aria-hidden="true" />
                </summary>
                <div>
                  <nav aria-label={`${item.title} platforms`}>
                    {item.platforms.map((platform) => (
                      <PlatformBrandIcon
                        key={platform}
                        name={platform}
                        size="small"
                      />
                    ))}
                  </nav>
                  <p>
                    <strong>Learning question</strong>
                    {item.question}
                  </p>
                  <p>
                    <strong>Read together</strong>
                    {item.metric}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="social-learning-system"
        aria-labelledby="social-loop-title"
      >
        <div className="social-section-heading">
          <div>
            <p>WEEKLY LEARNING LOOP</p>
            <h2 id="social-loop-title">
              One creative ID, one accountable decision
            </h2>
          </div>
          <DataTag tone="internal">
            CONNECT PLATFORM + SHOPIFY + KLAVIYO
          </DataTag>
        </div>
        <div className="social-loop-steps">
          {[
            [
              FlaskConical,
              'Brief',
              'Hypothesis, audience, hook, product and guardrail',
            ],
            [
              UsersRound,
              'Publish',
              'Channel, creator, format, offer and landing page',
            ],
            [Gauge, 'Read', 'Attention, intent, commerce and cohort quality'],
            [
              Repeat2,
              'Decide',
              'Scale, revise or stop with an owner and due date',
            ],
          ].map(([Icon, title, copy], index) => {
            const StepIcon = Icon as typeof FlaskConical;
            return (
              <article key={String(title)}>
                <span>{index + 1}</span>
                <StepIcon aria-hidden="true" />
                <strong>{String(title)}</strong>
                <p>{String(copy)}</p>
              </article>
            );
          })}
        </div>
        <footer>
          <ShieldCheck aria-hidden="true" />
          <p>
            <strong>Data integrity rule:</strong> Public followers, likes,
            posts, reviews and storefront counters are visible signals. They are
            not reach, conversion, revenue, contribution or proof that a content
            pattern worked.
          </p>
        </footer>
      </section>
    </div>
  );
}
