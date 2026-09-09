import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  ChartNoAxesCombined,
  Database,
  DollarSign,
  ExternalLink,
  Fingerprint,
  MailCheck,
  Layers3,
  ListChecks,
  MousePointerClick,
  ShieldCheck,
  ShoppingBag,
  Target,
  Workflow,
} from 'lucide-react';
import { DataReliabilitySpine } from './data-reliability-spine';
import { OkrChiefOfStaff } from './okr-chief-of-staff';
import './marketing-ops-system-enhanced.css';

const weeklyExceptions = [
  {
    type: 'DECISION',
    title: 'Example launch offer needs a guardrail',
    why: 'The CRM, paid and storefront teams cannot finish their work until the offer and margin floor are approved.',
    owner: 'Marketing leader',
    due: 'Before the launch brief locks',
    action: 'Review the two options and record one decision.',
  },
  {
    type: 'LAUNCH RISK',
    title: 'Example readiness gate is missing proof',
    why: 'A verbal “done” status does not show that inventory, claims and tracking are ready for launch.',
    owner: 'Launch owner',
    due: 'At the T−14 readiness review',
    action: 'Attach evidence or assign a recovery owner.',
  },
  {
    type: 'DATA TRUST',
    title: 'Commerce and finance need reconciliation',
    why: 'Leadership should not act on revenue or ROAS until refunds, fees and timing differences are understood.',
    owner: 'Analytics + Finance',
    due: 'Before the weekly packet publishes',
    action: 'Explain the variance and mark the metric trusted or held.',
  },
  {
    type: 'MONEY',
    title: 'Example invoice has no matched PO',
    why: 'Unmatched commitments create a false view of remaining budget and month-end accruals.',
    owner: 'Marketing Ops',
    due: 'Before the weekly budget lock',
    action: 'Match, code or escalate the invoice.',
  },
] as const;

const stack = [
  [
    'WORK MANAGEMENT',
    'Asana or monday.com',
    'Launch record, OKRs, dependencies, owners, due dates and decision follow-through',
    'One—not both—as the execution source of truth.',
  ],
  [
    'COMMERCE TRUTH',
    'Shopify + channel exports',
    'Orders, refunds, customers, products, variants, discounts, inventory and DTC revenue',
    'Finance controls recognized revenue; Shopify controls transaction detail.',
  ],
  [
    'LIFECYCLE',
    'Klaviyo',
    'Profiles, consent, email/SMS events, segments, flows and channel-attributed activity',
    'Use Shopify customer ID as an external identifier where supported.',
  ],
  [
    'BEHAVIOR',
    'GA4 + Shopify Customer Events',
    'View item, add to cart, checkout, purchase, promotion and landing-page behavior',
    'Reconcile purchase events to Shopify orders; prevent duplicate pixels.',
  ],
  [
    'PAID MEDIA',
    'Google · Meta · TikTok Ads',
    'Spend, creative, click IDs, campaign structure and platform conversion signals',
    'Never use platform-reported ROAS as the only budget truth.',
  ],
  [
    'ATTRIBUTION',
    'Northbeam / Rockerbox / Triple Whale',
    'Blended and modeled channel read; incrementality and new-customer views',
    'Choose one methodology and document its windows and exclusions.',
  ],
  [
    'WAREHOUSE + BI',
    'BigQuery + Looker / Power BI',
    'Customer, order, SKU, creative, spend, margin and cohort models',
    'The semantic layer owns governed metric definitions.',
  ],
  [
    'FINANCE + PROCUREMENT',
    'ERP + Ramp / Brex / Coupa equivalent',
    'POs, committed spend, invoices, accruals, vendor terms and forecast',
    'Finance owns actuals; Marketing Ops owns coding and pacing.',
  ],
  [
    'KNOWLEDGE + COMMS',
    'Google Drive / Notion + Slack',
    'Briefs, playbooks, meeting pre-reads and asynchronous exceptions',
    'Chat is not the final system of record.',
  ],
] as const;

const budgetRules = [
  [
    'FUND',
    'Positive realized contribution; marginal CAC below the agreed payback ceiling; inventory healthy; tracking trusted.',
    'Scale in controlled increments and watch marginal—not average—economics.',
  ],
  [
    'MAINTAIN',
    'Strategic coverage or proven baseline demand, but limited headroom or uncertain incrementality.',
    'Hold the efficient floor; test creative or landing-page improvement.',
  ],
  [
    'FIX FIRST',
    'Demand exists, but measurement, feed, landing page, offer, inventory or creative quality is broken.',
    'Fund the constraint before buying more traffic.',
  ],
  [
    'TEST',
    'Clear customer hypothesis, bounded downside, named learning goal and enough volume to reach a decision.',
    'Set a test cap, minimum sample and stop/scale date before launch.',
  ],
  [
    'STOP / REALLOCATE',
    'Test cap exhausted; negative contribution after returns; poor new-customer quality; no learning value.',
    'Record the result and move funds to the next highest-confidence opportunity.',
  ],
] as const;

const identities = [
  [
    '01',
    'ACQUISITION',
    'UTM source / medium / campaign · gclid · fbclid · ttclid · creative ID',
    'Anonymous session + consent state',
  ],
  [
    '02',
    'COMMERCE',
    'Shopify customer ID · order ID · product / variant ID · SKU · discount code',
    'Transaction and product truth',
  ],
  [
    '03',
    'LIFECYCLE',
    'Klaviyo profile ID · external ID · email · phone · channel-specific consent',
    'Deterministic profile and messaging eligibility',
  ],
  [
    '04',
    'WAREHOUSE',
    'Durable customer key · order key · creative key · calendar · channel taxonomy',
    'Cross-system analytical join',
  ],
  [
    '05',
    'OUTCOME',
    'Net sales · refunds · COGS · fulfillment · fees · realized contribution · repeat',
    'Decision-grade customer and campaign economics',
  ],
] as const;

const identityPresentation = [
  [MousePointerClick, 'Capture demand', 'SESSION KEY'],
  [ShoppingBag, 'Anchor the order', 'ORDER KEY'],
  [MailCheck, 'Resolve consent', 'PROFILE KEY'],
  [Database, 'Govern the joins', 'DURABLE KEYS'],
  [ChartNoAxesCombined, 'Read economics', 'DECISION OUTPUT'],
] as const;

const workflows = [
  {
    name: 'Launch operating workflow',
    trigger: 'Approved launch brief',
    flow: 'Brief → one launch record → dependency owners → readiness gates → go/no-go → 7/30/60-day reviews',
    owner: 'Marketing Ops',
    sla: 'Exceptions surfaced twice weekly',
    automation:
      'Create tasks from a template; notify only on new risk, missed dependency or decision required.',
  },
  {
    name: 'Budget control workflow',
    trigger: 'New invoice, PO, forecast change or weekly close',
    flow: 'Plan → committed → invoiced → accrued → forecast → variance explanation → decision',
    owner: 'Marketing Ops + Finance',
    sla: 'Locked weekly pacing view',
    automation:
      'Ingest finance actuals; route unmatched invoices and over-plan commitments for review.',
  },
  {
    name: 'Creative learning workflow',
    trigger: 'New concept approved',
    flow: 'Creative ID → taxonomy → platform variants → spend/outcomes → learning → reuse or retire',
    owner: 'Growth + Creative Ops',
    sla: 'Weekly exception review',
    automation:
      'Generate IDs and naming; never auto-declare a winner from platform metrics alone.',
  },
  {
    name: 'Lifecycle workflow',
    trigger: 'Consent, browse/cart, purchase, delivery, replenishment or lapse',
    flow: 'Shopify event → Klaviyo profile → eligibility check → message → order/repeat outcome',
    owner: 'CRM / Lifecycle',
    sla: 'Daily health + weekly performance',
    automation:
      'Flow QA, suppression and anomaly alerts; human approval for material offer changes.',
  },
  {
    name: 'Leadership decision workflow',
    trigger: 'Metric outside threshold or cross-functional blocker',
    flow: 'Evidence → question → options → decision owner → due date → outcome → principle/playbook',
    owner: 'Marketing leader',
    sla: 'Decision date set in meeting',
    automation:
      'Pre-fill evidence and overdue reminders; never automate the business decision.',
  },
] as const;

const Auto = ({ children }: { children: React.ReactNode }) => (
  <span className="ops-auto">
    <Bot />
    {children}
  </span>
);
const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
    <ExternalLink />
  </a>
);

export function MarketingOpsSystem() {
  return (
    <>
      <section className="ops-system-hero">
        <div>
          <Layers3 />
          <p>MARKETING OPERATING SYSTEM</p>
          <h2>Every handoff needs an owner, definition and decision.</h2>
        </div>
        <div className="ops-system-principles">
          <span>ONE WORK RECORD</span>
          <span>ONE METRIC CONTRACT</span>
          <span>ONE IDENTITY SPINE</span>
          <span>ONE CLOSED LOOP</span>
        </div>
      </section>
      <section className="wide-card ops-weekly-cockpit">
        <header className="ops-editorial-head">
          <div>
            <span className="ops-eyebrow">THIS WEEK</span>
            <h2>What needs attention now?</h2>
            <p>
              The live version should surface only exceptions that need a
              decision, recovery owner or deadline—not every task in motion.
            </p>
          </div>
          <div className="ops-demo-notice" role="note">
            <CircleAlert aria-hidden="true" />
            <span>
              <strong>DEMO WORKSPACE</strong>
              Fictional records below show the operating logic. They are not
              Kitsch activity or performance.
            </span>
          </div>
        </header>
        <div className="ops-exception-grid">
          {weeklyExceptions.map((item) => (
            <details key={item.type}>
              <summary>
                <span className="ops-exception-label">
                  <span>{item.type}</span>
                  <b>DEMO ONLY</b>
                </span>
                <strong>{item.title}</strong>
                <small>
                  Open decision brief <ChevronRight aria-hidden="true" />
                </small>
              </summary>
              <div className="ops-exception-detail">
                <p>{item.why}</p>
                <dl>
                  <dt>Who decides or fixes it</dt>
                  <dd>{item.owner}</dd>
                  <dt>When it is due</dt>
                  <dd>{item.due}</dd>
                  <dt>What happens next</dt>
                  <dd>{item.action}</dd>
                </dl>
              </div>
            </details>
          ))}
        </div>
        <div className="ops-meaning-strip" aria-label="How to read this view">
          <span>
            <strong>Decision</strong> The choice leadership must make.
          </span>
          <span>
            <strong>Owner</strong> The one person accountable for closure.
          </span>
          <span>
            <strong>Due</strong> When delay creates downstream risk.
          </span>
          <span>
            <strong>Evidence</strong> What proves completion.
          </span>
        </div>
      </section>
      <DataReliabilitySpine />
      <section className="wide-card ops-worked-okr">
        <header className="ops-editorial-head">
          <div>
            <span className="ops-eyebrow">WORKED OKR EXAMPLE</span>
            <h2>How one result becomes a weekly decision</h2>
            <p>
              This example shows the fields and management behavior—not a
              proposed Kitsch target.
            </p>
          </div>
          <div className="ops-demo-notice ops-demo-notice--strong" role="note">
            <CircleAlert aria-hidden="true" />
            <span>
              <strong>FICTIONAL DATA · NOT KITSCH PERFORMANCE</strong>
              Every number in this card is a demonstration value.
            </span>
          </div>
        </header>
        <div className="ops-okr-layout">
          <article className="ops-okr-story">
            <span>EXAMPLE OBJECTIVE</span>
            <h3>Make launches predictable, coordinated and measurable.</h3>
            <p>
              <strong>Key result:</strong> Reach green cross-functional
              readiness at T−14 for at least 90% of launches.
            </p>
            <div className="ops-okr-numbers" aria-label="Fictional OKR values">
              <span>
                <small>DEMO BASELINE</small>
                <strong>68%</strong>
              </span>
              <span>
                <small>DEMO TARGET</small>
                <strong>90%</strong>
              </span>
              <span>
                <small>DEMO ACTUAL</small>
                <strong>82%</strong>
              </span>
              <span>
                <small>DEMO FORECAST</small>
                <strong>88%</strong>
              </span>
            </div>
            <progress
              className="ops-okr-progress"
              aria-label="Fictional OKR actual"
              aria-valuetext="82 percent actual against a 90 percent fictional target"
              max={100}
              value={82}
            />
          </article>
          <article className="ops-okr-decision">
            <header>
              <Target aria-hidden="true" />
              <span>DEMO WEEKLY READ</span>
            </header>
            <dl>
              <dt>Status</dt>
              <dd>Amber · forecast is below the fictional target</dd>
              <dt>Accountable owner</dt>
              <dd>Marketing Operations</dd>
              <dt>Leading signal</dt>
              <dd>Critical dependencies complete by T−21</dd>
              <dt>Decision needed</dt>
              <dd>Re-resource the blocked gate or accept the forecast risk</dd>
              <dt>Decision due</dt>
              <dd>Before the next launch-readiness review</dd>
              <dt>Closure evidence</dt>
              <dd>Approved recovery task, owner, date and linked proof</dd>
            </dl>
          </article>
        </div>
      </section>
      <section className="wide-card">
        <div className="ops-system-title">
          <div>
            <p>TOOL ARCHITECTURE</p>
            <h2>The minimum stack for reliable execution</h2>
            <span>
              This is a capability map—not a recommendation to buy every named
              product. Confirm the current stack, choose one owner per layer and
              remove duplicate sources of truth.
            </span>
          </div>
          <span className="signal internal">INTERNAL INVENTORY REQUIRED</span>
        </div>
        <div className="ops-stack-grid">
          {stack.map((s, i) => (
            <article key={s[0]}>
              <span>
                0{i + 1} · {s[0]}
              </span>
              <h3>{s[1]}</h3>
              <p>{s[2]}</p>
              <small>{s[3]}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="wide-card">
        <div className="ops-system-title">
          <div>
            <p>BUDGET DECISION ENGINE</p>
            <h2>Allocate spend by economics, constraints and learning value</h2>
            <span>
              No public evidence can determine Kitsch’s actual channel budget.
              Apply these rules after joining spend to realized contribution and
              customer quality.
            </span>
          </div>
          <span className="signal internal">INTERNAL DATA REQUIRED</span>
        </div>
        <div className="budget-rule-grid">
          {budgetRules.map((r, i) => (
            <article key={r[0]}>
              <span>0{i + 1}</span>
              <h3>{r[0]}</h3>
              <p>{r[1]}</p>
              <small>{r[2]}</small>
            </article>
          ))}
        </div>
        <div className="budget-illustration">
          <div>
            <DollarSign />
            <span>ILLUSTRATIVE ONLY · NOT A KITSCH RECOMMENDATION</span>
            <h3>If the team had $100 of flexible marketing budget</h3>
          </div>
          <div className="budget-envelope">
            {[
              ['$55', 'Proven profitable demand'],
              ['$15', 'Retention + conversion'],
              ['$15', 'Creative learning'],
              ['$10', 'Launch bets'],
              ['$5', 'Measurement + contingency'],
            ].map((x) => (
              <article key={x[1]}>
                <strong>{x[0]}</strong>
                <span>{x[1]}</span>
              </article>
            ))}
          </div>
          <p>
            Replace this example with marginal contribution, payback, inventory
            and cohort evidence. The point is to protect learning and
            measurement capacity—not prescribe these percentages.
          </p>
        </div>
      </section>
      <section className="wide-card">
        <div className="ops-system-title">
          <div>
            <p>IDENTITY + MEASUREMENT WORKFLOW</p>
            <h2>Connect customer, order, product and creative</h2>
            <span>
              Use deterministic identifiers and consent. Marketplace customers
              may remain channel-level cohorts when person-level identity is
              unavailable or restricted.
            </span>
          </div>
          <Fingerprint />
        </div>
        <ol
          className="identity-spine"
          aria-label="Identity and measurement flow"
        >
          {identities.map((x, i) => {
            const [IdentityIcon, title, output] = identityPresentation[i];
            return (
              <li key={x[1]}>
                <article>
                  <header>
                    <span>
                      <IdentityIcon aria-hidden="true" />
                    </span>
                    <small>{x[0]}</small>
                  </header>
                  <em>{x[1]}</em>
                  <h3>{title}</h3>
                  <p>{x[3]}</p>
                  <details>
                    <summary>IDs carried forward</summary>
                    <p>{x[2]}</p>
                  </details>
                  <footer>{output}</footer>
                </article>
                {i < identities.length - 1 && (
                  <span className="identity-spine__handoff" aria-hidden="true">
                    <ArrowRight />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        <div className="identity-guardrails">
          <article>
            <ShieldCheck />
            <h3>Identity rules</h3>
            <ul>
              <li>Hash personal data before eligible ad-platform matching.</li>
              <li>Keep email and SMS consent channel-specific.</li>
              <li>Do not merge profiles on name or address alone.</li>
              <li>Preserve source IDs and a merge audit trail.</li>
            </ul>
          </article>
          <article>
            <Database />
            <h3>Reconciliation rules</h3>
            <ul>
              <li>Shopify order ID anchors the DTC transaction.</li>
              <li>Refunds and cancellations update realized revenue.</li>
              <li>Finance controls recognized revenue and COGS.</li>
              <li>Creative ID survives every platform variant.</li>
            </ul>
          </article>
        </div>
        <div className="ops-source-links">
          <Link href="https://help.klaviyo.com/hc/en-us/articles/12902308138011">
            Klaviyo identity resolution
          </Link>
          <Link href="https://help.klaviyo.com/hc/en-us/articles/115005080447">
            Klaviyo Shopify data
          </Link>
          <Link href="https://help.shopify.com/en/manual/promoting-marketing/pixels">
            Shopify customer events
          </Link>
          <Link href="https://support.google.com/analytics/answer/12200568?hl=en">
            GA4 ecommerce events
          </Link>
        </div>
      </section>
      <section className="wide-card">
        <div className="ops-system-title">
          <div>
            <p>FIVE CLOSED-LOOP WORKFLOWS</p>
            <h2>Trigger → work → decision → recorded outcome</h2>
          </div>
          <Workflow />
        </div>
        <div className="workflow-cards">
          {workflows.map((w, i) => (
            <article key={w.name}>
              <header>
                <span>0{i + 1}</span>
                <h3>{w.name}</h3>
              </header>
              <dl>
                <dt>Trigger</dt>
                <dd>{w.trigger}</dd>
                <dt>System flow</dt>
                <dd>{w.flow}</dd>
                <dt>Accountable owner</dt>
                <dd>{w.owner}</dd>
                <dt>Operating SLA</dt>
                <dd>{w.sla}</dd>
              </dl>
              <Auto>{w.automation}</Auto>
            </article>
          ))}
        </div>
      </section>
      <section className="two-col">
        <article className="wide-card">
          <ListChecks />
          <h3 className="paid-subhead">Weekly leadership packet</h3>
          <ol className="number-list">
            <li>What changed versus plan and prior period?</li>
            <li>
              Which exception threatens profit, customer quality or launch
              readiness?
            </li>
            <li>
              What is the most likely driver—and what evidence is missing?
            </li>
            <li>Which decision is required, by whom and by when?</li>
            <li>
              What action, owner and expected outcome enter the work system?
            </li>
          </ol>
        </article>
        <article className="wide-card">
          <CircleAlert />
          <h3 className="paid-subhead">Non-negotiable data labels</h3>
          <ul className="commerce-list">
            <li>
              <b>Public signal:</b> directly observable and linked.
            </li>
            <li>
              <b>Estimate:</b> modeled by a named external source.
            </li>
            <li>
              <b>Hypothesis:</b> interpretation awaiting validation.
            </li>
            <li>
              <b>Illustrative:</b> simulated example; never Kitsch performance.
            </li>
            <li>
              <b>Internal data required:</b> intentionally blank until
              connected.
            </li>
          </ul>
        </article>
      </section>
      <details className="editorial-disclosure ops-deep-dive">
        <summary>
          <span>OKRS + CHIEF OF STAFF</span>
          <strong>Open the complete operating playbook</strong>
          <ChevronRight aria-hidden="true" />
        </summary>
        <div className="editorial-disclosure-body">
          <OkrChiefOfStaff />
        </div>
      </details>
      <section className="dark-card ops-system-final">
        <CheckCircle2 />
        <h3>The role’s force-multiplier promise</h3>
        <p>
          Marketing leadership gets a trusted exception view. Every launch has
          one record. Every dollar has a decision rule. Every metric has a
          definition and owner. Every meeting closes with a decision, deadline
          and measurable outcome.
        </p>
      </section>
    </>
  );
}
