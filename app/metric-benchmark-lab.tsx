import {
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  Calculator,
  CircleAlert,
  Clock3,
  Database,
  ExternalLink,
  Gauge,
  LockKeyhole,
  Mail,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { GlossaryHint, GlossaryText } from './glossary-term';

type Metric = {
  id: string;
  icon: typeof Gauge;
  name: string;
  question: string;
  reference: string;
  referenceLabel: string;
  formula: string;
  fields: readonly string[];
  decision: string;
  confidence: 'HIGH' | 'MEDIUM' | 'MEDIUM–LOW';
  limitation: string;
  source: string;
  sourceLabel: string;
};

const metrics: readonly Metric[] = [
  {
    id: 'CAC',
    icon: Target,
    name: 'New-customer CAC',
    question: 'What does it cost to acquire one genuinely new customer?',
    reference: '$31.42',
    referenceLabel: 'Beauty median CPA · global USD · trailing 12 months',
    formula: 'Total acquisition spend ÷ distinct first-time customers',
    fields: [
      'Customer ID + first-order date',
      'Order ID + cancellation status',
      'Media spend by channel/campaign',
      'Agency, creator, affiliate + tool costs',
      'Currency + daily FX rate',
    ],
    decision:
      'Set an allowable CAC from contribution LTV and payback; separate media CAC from fully loaded CAC before scaling.',
    confidence: 'MEDIUM',
    limitation:
      '40K+ ecommerce ad accounts and $21B spend. The published CPA may include repeat purchasers and is not a fully loaded CAC.',
    source:
      'https://www.triplewhale.com/blog/whats-a-good-cost-per-acquisition',
    sourceLabel: 'Triple Whale · 2026 CPA benchmark',
  },
  {
    id: 'ROAS / MER',
    icon: TrendingUp,
    name: 'Paid return + blended efficiency',
    question: 'Is paid growth creating enough revenue—and enough contribution?',
    reference: '1.50× – 3.29×',
    referenceLabel: 'Current channel medians: TikTok 1.50× · Google 3.29×',
    formula:
      'ROAS = attributed net revenue ÷ ad spend · MER = total net revenue ÷ total marketing spend',
    fields: [
      'Spend + campaign/ad/creative IDs',
      'Attributed order ID + model/window',
      'Gross sales, discounts + reversals',
      'Customer type: new or returning',
      'Currency + daily FX rate',
    ],
    decision:
      'Use platform ROAS to diagnose; use MER and contribution after marketing to hold, fix, test, fund or stop spend.',
    confidence: 'MEDIUM',
    limitation:
      'Global cross-category medians, not beauty targets. Attribution models can move revenue credit between channels. Break-even ROAS must come from Kitsch margin.',
    source:
      'https://www.triplewhale.com/blog/whats-a-good-cost-per-acquisition',
    sourceLabel: 'Triple Whale · trailing-12-month channel panel',
  },
  {
    id: 'NET REVENUE',
    icon: BadgeDollarSign,
    name: 'Realized net revenue',
    question:
      'How much product revenue remained after discounts and reversals?',
    reference: 'No universal $ benchmark',
    referenceLabel:
      'Compare to plan, prior year and like-for-like channel/SKU cohorts',
    formula: 'Gross sales − discounts − sales reversals',
    fields: [
      'Order + line-item IDs',
      'Order, refund + reversal timestamps',
      'Channel, market, product, variant + SKU',
      'Gross line sales + discount allocation',
      'Refund/reversal value + currency/FX',
    ],
    decision:
      'Forecast demand, pace budgets, identify price/mix changes and reconcile commerce reporting to finance.',
    confidence: 'HIGH',
    limitation:
      'Shopify net sales excludes tax and shipping. Recognized revenue remains finance-owned; marketplace and retail feeds need the same contract.',
    source:
      'https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/sales-report',
    sourceLabel: 'Shopify Help · sales-report definitions',
  },
  {
    id: 'CVR',
    icon: ShoppingBag,
    name: 'Store purchase conversion',
    question:
      'How efficiently does qualified traffic become a completed purchase?',
    reference: '2.70% skincare · 4.94% beauty',
    referenceLabel:
      'Two separate global category references · not a single benchmark band',
    formula: 'Sessions that completed checkout ÷ eligible store sessions',
    fields: [
      'Session ID + timestamp',
      'Completed-checkout / purchase event',
      'Landing page + device',
      'Source, medium, campaign + creative',
      'Market + consent/tracking state',
    ],
    decision:
      'Locate a traffic-quality, product-page, cart or checkout constraint before buying more reach.',
    confidence: 'MEDIUM',
    limitation:
      'These are two distinct category datasets and methodologies, not the lower and upper bounds of one range. Orders can exceed converted sessions; Shopify and GA4 attribution can differ.',
    source: 'https://www.shopify.com/blog/retail-conversion-rate',
    sourceLabel: 'Shopify · retail conversion research',
  },
  {
    id: 'MARGIN',
    icon: Calculator,
    name: 'Gross + contribution margin',
    question:
      'Does each order create enough cash contribution to support growth?',
    reference: '51.04% gross · 11.68% net',
    referenceLabel: 'US Household Products public-company proxy · January 2026',
    formula:
      'Gross margin = (net sales − COGS) ÷ net sales · CM1 = net sales − COGS − variable fulfillment/fees',
    fields: [
      'Realized net sales by line',
      'SKU cost + effective date',
      'Pick/pack, postage + duties',
      'Payment + marketplace fees',
      'Returns handling + variable service cost',
    ],
    decision:
      'Calculate break-even ROAS and the maximum CAC; distinguish high revenue from profitable revenue.',
    confidence: 'MEDIUM',
    limitation:
      'NYU sector proxy covers 110 US public companies, not comparable DTC stores. Kitsch channel mix, wholesale economics and cost accounting will differ.',
    source:
      'https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/margin.html',
    sourceLabel: 'NYU Stern · US margins by sector',
  },
  {
    id: 'LTV',
    icon: Users,
    name: 'Cohort contribution LTV',
    question:
      'How much contribution does an acquisition cohort realize over time?',
    reference: 'No defensible universal $ band',
    referenceLabel:
      'Directional guardrail: ~3:1 LTV:CAC only after definitions match',
    formula:
      'Cohort cumulative contribution at 90/180/365 days ÷ customers acquired in that cohort',
    fields: [
      'Durable customer ID + first-order cohort',
      'All orders, dates + line items',
      'Discounts, refunds + reversals',
      'COGS, fulfillment + transaction fees',
      'Acquisition channel + cohort CAC',
    ],
    decision:
      'Set CAC ceilings, payback expectations and retention investment by first product, channel and customer cohort.',
    confidence: 'MEDIUM',
    limitation:
      'External dollar LTV is meaningless without price, margin, repeat window and censoring rules. Label revenue LTV and contribution LTV separately.',
    source: 'https://www.shopify.com/blog/customer-lifetime-value-analysis',
    sourceLabel: 'Shopify · CLV analysis guide',
  },
  {
    id: 'REPEAT',
    icon: RefreshCcw,
    name: '180-day new-customer repurchase',
    question:
      'Did first-time buyers form a habit—or was the first order the finish line?',
    reference: '17%',
    referenceLabel: 'Health & Beauty second-purchase reference · 180 days',
    formula:
      'Mature first-order customers with a second valid order within 180 days ÷ all eligible first-order customers',
    fields: [
      'Durable customer ID',
      'First + second valid-order dates',
      'Order status + cancellation/refund',
      'First product/SKU + acquisition channel',
      'Cohort maturity / observation cutoff',
    ],
    decision:
      'Find first-product and channel cohorts that deserve replenishment, education, bundles or suppression.',
    confidence: 'MEDIUM–LOW',
    limitation:
      'The provider does not disclose the public sample size, geography or measurement period. Never include cohorts that have not had 180 days to mature.',
    source: 'https://useamp.com/benchmarks/beauty',
    sourceLabel: 'Lifetimely by AMP · beauty benchmarks',
  },
  {
    id: 'LIFECYCLE',
    icon: Mail,
    name: 'Email + SMS value per recipient',
    question:
      'Which lifecycle messages produce action without exhausting consent?',
    reference: '$0.10 → $0.97',
    referenceLabel: 'Email campaign RPR · average to top 10% · 2025',
    formula: 'Attributed realized net revenue ÷ delivered recipients',
    fields: [
      'Message + flow/campaign ID',
      'Profile ID + consent state',
      'Delivered, clicked + unsubscribed timestamps',
      'Attributed order ID + model/window',
      'Realized net revenue + bot filtering',
    ],
    decision:
      'Prioritize segmented flows over batch sends; diagnose relevance with clicks/orders and protect the audience with unsubscribe guardrails.',
    confidence: 'HIGH',
    limitation:
      'Klaviyo analyzed billions of messages across ecommerce, not only beauty, and its public benchmark uses attributed total purchase amount—not realized net revenue. It is only like-for-like when the numerator, window and exclusions match. Opens are privacy-inflated.',
    source:
      'https://klaviyocms.wpengine.com/wp-content/uploads/2025/02/2025-Benchmark-Report_AMER.pdf',
    sourceLabel: 'Klaviyo · 2025 email + SMS benchmark report',
  },
  {
    id: 'MRR',
    icon: CircleAlert,
    name: 'MRR is not monthly retail sales',
    question:
      'Is revenue contractually recurring—or simply reported every month?',
    reference: 'N/A for non-subscription orders',
    referenceLabel:
      'Use monthly net revenue, repeat share and cohort LTV instead',
    formula:
      'Subscription MRR only = sum of monthly-equivalent value of active recurring contracts',
    fields: [
      'Subscription/contract ID',
      'Active, paused + cancelled status',
      'Start/end/cancellation dates',
      'Billing cadence + recurring amount',
      'One-time versus recurring order flag',
    ],
    decision:
      'Prevent a SaaS metric from overstating retail predictability. Use MRR only for a real subscription program.',
    confidence: 'HIGH',
    limitation:
      'A customer buying twice does not create MRR. Ordinary Shopify orders, retailer POs and forecasted sales are not contractual recurring revenue.',
    source: 'https://www.shopify.com/blog/customer-retention-strategies',
    sourceLabel: 'Shopify · ecommerce retention metrics',
  },
] as const;

const operationalTargets = [
  [
    'Launch on-time rate',
    '≥95%',
    'Launches live by committed date with every critical gate passed ÷ launches due',
  ],
  ['Milestone reliability', '≥90%', 'Due tasks completed on time ÷ tasks due'],
  [
    'Decision closure',
    '≤3 days',
    'Median business days from logged question to recorded decision, DRI and deadline',
  ],
  [
    'Action follow-through',
    '≥90%',
    'Actions completed by agreed due date ÷ actions due',
  ],
  [
    'Monthly budget variance',
    '±5%',
    '(Actual or accrued spend − approved plan) ÷ approved plan',
  ],
  [
    'Forecast accuracy',
    '≥90%',
    '1 − |actual − forecast| ÷ actual; return N/A when actual = 0 and report absolute error instead',
  ],
  [
    'Dashboard freshness',
    '<24 hr',
    'Current time − latest successful source refresh',
  ],
  [
    'Revenue reconciliation',
    '<1%',
    '|commerce net sales − finance-controlled value| ÷ finance-controlled value after close; return N/A when the finance denominator = 0 and report absolute variance',
  ],
] as const;

function Confidence({ value }: { value: Metric['confidence'] }) {
  return (
    <span
      className={`mbl-confidence ${value === 'HIGH' ? 'is-high' : value === 'MEDIUM' ? 'is-medium' : 'is-low'}`}
    >
      {value} CONFIDENCE
    </span>
  );
}

export function MetricBenchmarkLab() {
  return (
    <section className="mbl-shell">
      <style>{styles}</style>
      <header className="mbl-hero">
        <div className="mbl-hero-copy">
          <span className="mbl-kicker">
            <BarChart3 /> METRIC DECISION LAB
          </span>
          <h2>
            Numbers that tell the team what to do next—not just what happened.
          </h2>
          <p>
            Every metric has one definition, one source contract and one
            decision. Connect Shopify, Klaviyo, paid media and finance to unlock
            Kitsch actuals.
          </p>
          <GlossaryHint />
        </div>
        <div className="mbl-hero-orbit" aria-label="Metric workflow">
          <span>
            <Database /> Connect
          </span>
          <ArrowUpRight />
          <span>
            <Calculator /> Calculate
          </span>
          <ArrowUpRight />
          <span>
            <Target /> Decide
          </span>
        </div>
      </header>

      <aside className="mbl-disclosure">
        <ShieldCheck />
        <div>
          <strong>Benchmark ≠ Kitsch performance</strong>
          <p>
            External bands are directional comparison points from the named
            source—not estimates, forecasts or claims about Kitsch. Every
            internal actual remains intentionally blank until governed
            first-party data is connected and reconciled.
          </p>
        </div>
        <span>PUBLIC REFERENCE · INTERNAL ACTUAL REQUIRED</span>
      </aside>

      <div className="mbl-toolbar">
        <div>
          <span>9</span>
          <small>metric contracts</small>
        </div>
        <div>
          <span>0</span>
          <small>invented Kitsch actuals</small>
        </div>
        <div>
          <span>1</span>
          <small>decision owner per KPI</small>
        </div>
        <p>
          <Gauge /> Read each card left to right: actual → reference → formula →
          action.
        </p>
      </div>

      <div className="mbl-grid">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <article className="mbl-card" key={metric.id}>
              <header>
                <div className="mbl-icon">
                  <Icon />
                </div>
                <div>
                  <span>{metric.id}</span>
                  <h3>
                    <GlossaryText>{metric.name}</GlossaryText>
                  </h3>
                </div>
                <Confidence value={metric.confidence} />
              </header>
              <p className="mbl-question">
                <GlossaryText>{metric.question}</GlossaryText>
              </p>
              <div className="mbl-values">
                <div className="mbl-actual">
                  <span>INTERNAL ACTUAL</span>
                  <strong>—</strong>
                  <small>
                    <LockKeyhole /> Awaiting governed data
                  </small>
                </div>
                <div className="mbl-reference">
                  <span>EXTERNAL REFERENCE</span>
                  <strong>{metric.reference}</strong>
                  <small>{metric.referenceLabel}</small>
                </div>
              </div>
              <div className="mbl-formula">
                <Calculator />
                <div>
                  <span>FORMULA</span>
                  <p>
                    <GlossaryText>{metric.formula}</GlossaryText>
                  </p>
                </div>
              </div>
              <div className="mbl-fields">
                <span>
                  <Database /> EXACT INTERNAL FIELDS
                </span>
                <div>
                  {metric.fields.map((field) => (
                    <small key={field}>
                      <GlossaryText>{field}</GlossaryText>
                    </small>
                  ))}
                </div>
              </div>
              <div className="mbl-decision">
                <Target />
                <div>
                  <span>DECISION IT CHANGES</span>
                  <p>
                    <GlossaryText>{metric.decision}</GlossaryText>
                  </p>
                </div>
              </div>
              <div className="mbl-limit">
                <CircleAlert />
                <p>{metric.limitation}</p>
              </div>
              <a
                className="mbl-source"
                href={metric.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{metric.sourceLabel}</span>
                <ExternalLink />
              </a>
            </article>
          );
        })}
      </div>

      <section className="mbl-ops">
        <header>
          <div>
            <span>ILLUSTRATIVE INTERNAL TARGETS</span>
            <h3>The operating system should measure its own reliability.</h3>
            <p>
              These are proposed starting thresholds—not public beauty-industry
              benchmarks and not claims about current Kitsch performance.
              Baseline for one quarter, then ratify targets with leadership.
            </p>
          </div>
          <Clock3 />
        </header>
        <div className="mbl-ops-grid">
          {operationalTargets.map(([name, target, formula], index) => (
            <article key={name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h4>{name}</h4>
                <p>{formula}</p>
              </div>
              <strong>{target}</strong>
            </article>
          ))}
        </div>
      </section>

      <footer className="mbl-footer">
        <ShieldCheck />
        <p>
          <strong>Decision rule:</strong> never scale from an external benchmark
          alone. First verify identity coverage, attribution window, refund
          maturity, inventory and realized contribution.
        </p>
      </footer>
    </section>
  );
}

const styles = `
.mbl-shell{--ink:#231F20;--muted:#53565A;--line:#D9D9D6;--paper:#F0E6D8;--blush:#E9D5CD;--coral:#CA9A8E;--wine:#713F2A;--sage:#CBDEDA;color:var(--ink);display:grid;grid-column:1/-1;gap:18px;margin-top:22px;min-width:0;font-family:inherit}
.mbl-shell *{box-sizing:border-box}.mbl-hero{background:linear-gradient(130deg,#261e1c 0%,#51332f 58%,#9e5044 100%);border-radius:26px;color:#fff;display:grid;grid-template-columns:1.2fr .8fr;gap:28px;min-height:270px;overflow:hidden;padding:38px;position:relative}.mbl-hero:after{background:radial-gradient(circle,rgba(255,255,255,.14) 0 2px,transparent 2.5px);background-size:19px 19px;content:"";inset:0 0 0 58%;opacity:.5;position:absolute}.mbl-hero-copy{position:relative;z-index:1}.mbl-kicker{align-items:center;color:#f7c9be;display:flex;font-size:11px;font-weight:800;gap:8px;letter-spacing:.15em}.mbl-kicker svg{height:16px;width:16px}.mbl-hero h2{font-family:var(--font-kitsch-display),Georgia,serif;font-size:clamp(30px,4vw,52px);font-weight:400;letter-spacing:-.035em;line-height:1.02;margin:18px 0 16px;max-width:760px}.mbl-hero p{color:#eadedb;font-size:15px;line-height:1.65;margin:0;max-width:680px}.mbl-hero-orbit{align-content:center;display:grid;gap:11px;justify-content:center;position:relative;z-index:1}.mbl-hero-orbit>span{align-items:center;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:999px;display:flex;font-size:12px;font-weight:750;gap:9px;min-width:180px;padding:12px 18px}.mbl-hero-orbit svg{height:16px;width:16px}.mbl-hero-orbit>svg{color:#f4b3a5;margin-left:82px;transform:rotate(90deg)}
.mbl-disclosure{align-items:flex-start;background:#fff7df;border:1px solid #ead294;border-radius:18px;display:grid;gap:14px;grid-template-columns:auto 1fr auto;padding:18px 20px}.mbl-disclosure>svg{color:#936c16;height:22px;width:22px}.mbl-disclosure strong{display:block;font-size:14px;margin-bottom:4px}.mbl-disclosure p{color:#725f38;font-size:12px;line-height:1.5;margin:0}.mbl-disclosure>span{background:#f1dfae;border-radius:999px;color:#61490f;font-size:9px;font-weight:850;letter-spacing:.1em;padding:8px 10px;white-space:nowrap}
.mbl-toolbar{align-items:center;background:#fff;border:1px solid var(--line);border-radius:18px;display:grid;gap:10px;grid-template-columns:repeat(3,auto) 1fr;padding:15px 18px}.mbl-toolbar>div{border-right:1px solid var(--line);display:grid;min-width:115px;padding-right:14px}.mbl-toolbar span{font-size:21px;font-weight:850}.mbl-toolbar small{color:var(--muted);font-size:9px;letter-spacing:.06em;text-transform:uppercase}.mbl-toolbar p{align-items:center;color:var(--muted);display:flex;font-size:11px;gap:8px;justify-self:end;margin:0}.mbl-toolbar svg{height:15px;width:15px}
.mbl-grid{display:grid;gap:16px;grid-template-columns:repeat(2,minmax(0,1fr))}.mbl-card{background:#fff;border:1px solid var(--line);border-radius:22px;display:flex;flex-direction:column;min-width:0;overflow:hidden;padding:22px;position:relative}.mbl-card:before{background:linear-gradient(90deg,var(--coral),#f2b3a6);content:"";height:4px;inset:0 0 auto;position:absolute}.mbl-card>header{align-items:center;display:grid;gap:12px;grid-template-columns:auto 1fr auto}.mbl-icon{align-items:center;background:var(--blush);border-radius:12px;color:var(--wine);display:flex;height:40px;justify-content:center;width:40px}.mbl-icon svg{height:19px;width:19px}.mbl-card header span{color:var(--coral);display:block;font-size:9px;font-weight:850;letter-spacing:.14em}.mbl-card h3{font-size:18px;letter-spacing:-.02em;margin:3px 0 0}.mbl-confidence{border:1px solid currentColor;border-radius:999px;font-size:8px!important;letter-spacing:.08em!important;padding:6px 8px}.mbl-confidence.is-high{color:#347058}.mbl-confidence.is-medium{color:#9a6a1d}.mbl-confidence.is-low{color:#9b554b}.mbl-question{color:var(--muted);font-size:12px;line-height:1.5;margin:14px 0}.mbl-values{display:grid;gap:8px;grid-template-columns:.8fr 1.2fr}.mbl-values>div{border-radius:14px;display:grid;min-height:112px;padding:13px}.mbl-values span,.mbl-formula span,.mbl-fields>span,.mbl-decision span{font-size:8px;font-weight:850;letter-spacing:.12em}.mbl-values strong{font-size:22px;line-height:1.05;margin:9px 0 6px}.mbl-values small{font-size:9px;line-height:1.4}.mbl-actual{background:#f2efed;color:#8b817d}.mbl-actual small{align-items:center;display:flex;gap:5px}.mbl-actual svg{height:11px;width:11px}.mbl-reference{background:var(--sage);color:#2b5946}.mbl-formula,.mbl-decision{align-items:flex-start;border-bottom:1px solid var(--line);display:grid;gap:10px;grid-template-columns:auto 1fr;padding:15px 2px}.mbl-formula svg,.mbl-decision svg{color:var(--coral);height:17px;width:17px}.mbl-formula p,.mbl-decision p{font-size:11px;line-height:1.55;margin:5px 0 0}.mbl-fields{padding:15px 2px 10px}.mbl-fields>span{align-items:center;display:flex;gap:7px}.mbl-fields>span svg{color:var(--coral);height:15px;width:15px}.mbl-fields>div{display:flex;flex-wrap:wrap;gap:5px;margin-top:10px}.mbl-fields small{background:var(--paper);border:1px solid #e9e3df;border-radius:999px;color:#635b58;font-size:9px;padding:6px 8px}.mbl-limit{align-items:flex-start;background:#fbf7f4;border-radius:10px;color:#766863;display:grid;gap:8px;grid-template-columns:auto 1fr;margin:12px 0;padding:10px}.mbl-limit svg{height:14px;width:14px}.mbl-limit p{font-size:9px;line-height:1.45;margin:0}.mbl-source{align-items:center;color:var(--wine);display:flex;font-size:9px;font-weight:800;gap:6px;margin-top:auto;text-decoration:none}.mbl-source:hover{text-decoration:underline}.mbl-source svg{height:12px;width:12px}
.mbl-ops{background:var(--paper);border:1px solid var(--line);border-radius:24px;overflow:hidden;padding:26px}.mbl-ops>header{align-items:flex-start;display:grid;gap:20px;grid-template-columns:1fr auto;margin-bottom:18px}.mbl-ops>header span{background:#f0dfad;border-radius:999px;color:#6d5211;display:inline-block;font-size:9px;font-weight:850;letter-spacing:.12em;padding:7px 9px}.mbl-ops h3{font-size:23px;letter-spacing:-.025em;margin:12px 0 6px}.mbl-ops header p{color:var(--muted);font-size:11px;line-height:1.5;margin:0;max-width:780px}.mbl-ops>header>svg{color:var(--coral);height:34px;width:34px}.mbl-ops-grid{display:grid;gap:8px;grid-template-columns:repeat(2,minmax(0,1fr))}.mbl-ops-grid article{align-items:center;background:#fff;border:1px solid var(--line);border-radius:13px;display:grid;gap:12px;grid-template-columns:auto 1fr auto;padding:13px}.mbl-ops-grid article>span{color:#b2a7a2;font-size:10px;font-weight:850}.mbl-ops-grid h4{font-size:12px;margin:0 0 3px}.mbl-ops-grid p{color:var(--muted);font-size:9px;line-height:1.4;margin:0}.mbl-ops-grid strong{color:var(--wine);font-size:16px;white-space:nowrap}.mbl-footer{align-items:center;background:#F0E6D8;border:1px solid var(--line);border-radius:17px;color:var(--ink);display:flex;gap:12px;padding:17px 20px}.mbl-footer svg{color:var(--wine);flex:0 0 auto;height:20px;width:20px}.mbl-footer p{font-size:11px;line-height:1.5;margin:0}
.mbl-hero{background:linear-gradient(135deg,#FFFDFC 0%,#F0E6D8 58%,#E9D5CD 100%);border:1px solid var(--line);color:var(--ink)}.mbl-hero:after{background:radial-gradient(circle,#CA9A8E80 0 2px,transparent 2.5px);opacity:.35}.mbl-kicker{color:var(--wine)}.mbl-hero p{color:var(--muted)}.mbl-hero-orbit>span{background:#FFFFFF;border-color:#D9D9D6;box-shadow:0 8px 24px #713F2A10}.mbl-hero-orbit>svg{color:var(--wine)}
@media(max-width:900px){.mbl-hero{grid-template-columns:1fr}.mbl-hero-orbit{display:none}.mbl-grid{grid-template-columns:1fr}.mbl-disclosure{grid-template-columns:auto 1fr}.mbl-disclosure>span{grid-column:2;justify-self:start}.mbl-toolbar{grid-template-columns:repeat(3,1fr)}.mbl-toolbar p{grid-column:1/-1;justify-self:start}.mbl-ops-grid{grid-template-columns:1fr}}
@media(max-width:560px){.mbl-hero{padding:26px}.mbl-disclosure{grid-template-columns:1fr}.mbl-disclosure>span{grid-column:1;white-space:normal}.mbl-toolbar{grid-template-columns:1fr}.mbl-toolbar>div{border-bottom:1px solid var(--line);border-right:0;padding-bottom:9px}.mbl-toolbar p{grid-column:1}.mbl-card{padding:18px}.mbl-card>header{grid-template-columns:auto 1fr}.mbl-confidence{grid-column:2;justify-self:start}.mbl-values{grid-template-columns:1fr}.mbl-ops{padding:20px}.mbl-ops-grid article{grid-template-columns:auto 1fr}.mbl-ops-grid strong{grid-column:2}}
`;
