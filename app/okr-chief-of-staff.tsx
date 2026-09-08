import {
  ArrowDown,
  CalendarClock,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  Clock3,
  ListChecks,
  MessageSquareText,
  Network,
  Target,
  Users,
} from 'lucide-react';
import './okr.css';

const okrs = [
  {
    id: 'O1',
    objective: 'Grow profitable, high-quality demand across the portfolio',
    executiveQuestion: 'Are we acquiring customers who return—without trading away contribution?',
    owner: 'Marketing Leader',
    keyResults: [
      ['Increase new-customer contribution', '+15% vs. approved Q1 baseline', '—', 'Shopify + finance + attribution'],
      ['Improve 90-day repeat-purchase rate', '+3 percentage points', '—', 'Shopify cohort model'],
      ['Keep marginal CAC payback within ceiling', '≤ 6 months', '—', 'Paid media + contribution model'],
    ],
    guardrail: 'Realized gross margin rate does not decline by more than 1 percentage point.',
  },
  {
    id: 'O2',
    objective: 'Make launches predictable, coordinated and measurable',
    executiveQuestion: 'Can every team see risk early enough to act before the launch date?',
    owner: 'Marketing Operations',
    keyResults: [
      ['Achieve green launch readiness at T−14', '≥ 90% of launches', '—', 'Asana launch portfolio'],
      ['Complete critical dependencies on time', '≥ 95%', '—', 'Asana dependency report'],
      ['Close a documented learning review', '100% by D+30', '—', 'Launch retrospective log'],
    ],
    guardrail: 'No launch is marked green with an unresolved inventory, legal, tracking or customer-support blocker.',
  },
  {
    id: 'O3',
    objective: 'Turn customer signals into a stronger lifecycle engine',
    executiveQuestion: 'Are Shopify behavior and customer needs changing what Klaviyo sends?',
    owner: 'CRM / Lifecycle Lead',
    keyResults: [
      ['Increase lifecycle net revenue per delivered recipient', '+10% vs. approved baseline', '—', 'Klaviyo + Shopify refunds'],
      ['Instrument and QA priority lifecycle flows', '100% of critical flows', '—', 'Klaviyo health register'],
      ['Convert recurring VOC themes into tests', '≥ 2 tests per month', '—', 'VOC → experiment queue'],
    ],
    guardrail: 'Unsubscribe, complaint and message-frequency thresholds remain within approved limits.',
  },
  {
    id: 'O4',
    objective: 'Replace status-chasing with a trusted operating rhythm',
    executiveQuestion: 'Are decisions, money and commitments visible without leadership heroics?',
    owner: 'Marketing Operations / Chief of Staff',
    keyResults: [
      ['Close leadership decisions by agreed SLA', '≥ 90%', '—', 'Decision log'],
      ['Map active spend to owner, PO and forecast', '100%', '—', 'Finance + procurement tracker'],
      ['Publish the weekly executive packet', 'By 12:00 PT every Monday', '—', 'Meeting pre-read archive'],
    ],
    guardrail: 'No metric is published without a definition, owner, refresh date and reconciliation status.',
  },
] as const;

const cascade = [
  ['COMPANY PRIORITY', 'Profitable, durable omnichannel growth', 'Leadership sets the strategic trade-off and financial guardrails.'],
  ['MARKETING OBJECTIVE', 'O2 · Make launches predictable and measurable', 'Marketing translates the priority into an owned outcome.'],
  ['TEAM RESULT', 'Creative achieves ≥90% T−14 readiness', 'Each function owns a measurable contribution—not a list of activity.'],
  ['INITIATIVE', 'Standardize brief, asset matrix and approval SLA', 'The initiative explains how the result should move.'],
  ['ASANA PORTFOLIO', 'Q1 launches · fields, dependencies and milestones', 'One live work record connects strategy to delivery.'],
  ['TASK EVIDENCE', 'Final assets approved · link + timestamp + approver', 'Completion requires proof, not a verbal status update.'],
] as const;

const quarter = [
  ['WEEK −3', 'Evidence + capacity', 'Marketing Ops circulates baseline performance, customer signals, committed work, budget, constraints and capacity.'],
  ['WEEK −2', 'Choices + draft OKRs', 'Leadership selects 3–4 outcomes; teams draft KRs, guardrails, dependencies and initiatives.'],
  ['WEEK −1', 'Commit + resource', 'Resolve conflicts, name one accountable owner per KR, approve budget and publish the Asana portfolio.'],
  ['WEEKS 1–12', 'Run + learn', 'Weekly exception review, monthly forecast and one mid-quarter confidence reset—without quietly rewriting history.'],
  ['WEEK 13', 'Score + learn', 'Score the result, separate outcome from effort, document drivers, and carry only justified work into the next quarter.'],
] as const;

const cadence = [
  {
    rhythm: 'WEEKLY',
    meetings: [
      ['Marketing pulse · 30 min', 'KPI exceptions, launch risk, budget variance and decisions', 'Tuesday', 'Decision log + updated owners'],
      ['Launch readiness · 25 min', 'Only red/amber gates and cross-functional blockers', 'Thursday', 'Recovery plan or explicit go/no-go'],
      ['Leadership 1:1 · 30 min', 'Priority trade-offs, sensitive people topics, delegated decisions', 'Friday', 'Top three commitments for next week'],
    ],
  },
  {
    rhythm: 'MONTHLY',
    meetings: [
      ['Marketing business review · 75 min', 'Outcome vs plan, channel learning, customer, forecast', 'Day 5–7', 'Scale, stop, fix and resource decisions'],
      ['Talent + capacity review · 45 min', 'Workload, role clarity, coaching, hiring and vendor gaps', 'After MBR', 'Capacity moves + people follow-ups'],
      ['Launch retrospective · 45 min', 'Plan vs outcome, missed handoffs, reusable learning', 'D+30', 'One playbook improvement'],
    ],
  },
  {
    rhythm: 'QUARTERLY',
    meetings: [
      ['Quarterly planning · half day', 'OKRs, budget, roadmap, capacity and dependencies', 'Before quarter', 'Approved priorities and trade-offs'],
      ['Quarterly business review · 90 min', 'KR score, economics, customer quality and learning', 'Week 13', 'Scorecard + carry/stop decisions'],
      ['Operating-system retro · 45 min', 'Which meetings, handoffs and reports created value?', 'Week 13', 'Process change owner + due date'],
    ],
  },
] as const;

const asanaExamples = [
  {
    status: 'AT RISK',
    task: 'Approve TikTok Shop PDP + creator claim matrix',
    project: 'Q1 Launch Portfolio / Hair Fragrance',
    owner: 'E-commerce Lead',
    due: 'T−14 · Thursday 3:00 PM',
    dependency: 'Blocks creator briefing and paid whitelisting',
    proof: 'Required: final URL, claim approval and mobile QA screenshot',
    comment: 'Marketing Ops · 10:12 AM — Legal approved two claims; “odor eliminating” remains open. Decision owner: Brand Director by 2:00 PM.',
  },
  {
    status: 'CLOSED',
    task: 'Publish launch measurement brief',
    project: 'Q1 Launch Portfolio / Hair Fragrance',
    owner: 'Marketing Operations',
    due: 'Completed two days early',
    dependency: 'Unblocked paid, CRM, analytics and 30-day review',
    proof: 'Evidence: metric definitions, UTMs, creative IDs, owner sign-off and dashboard link',
    comment: 'Analytics Lead · 4:46 PM — Purchase event reconciled to Shopify order count in QA. Variance 0.0%; measurement gate approved.',
  },
  {
    status: 'DECISION',
    task: 'Choose launch offer: discovery credit or sitewide discount',
    project: 'Leadership Decision Queue',
    owner: 'Marketing Leader',
    due: 'Decision required Friday',
    dependency: 'Blocks email build, paid copy and margin forecast',
    proof: 'Attached: options, margin sensitivity, precedent and customer trade-off',
    comment: 'Chief of Staff · 9:05 AM — Recommendation: discovery credit. Preserves price integrity and creates a measurable full-size conversion path.',
  },
] as const;

const peopleSystem = [
  ['1:1 intelligence', 'Goals, energy, growth, blockers and commitments—not a project-status recital.', 'Private notes stay private; only explicit commitments become shared tasks.'],
  ['Capacity + ownership', 'Map critical work by accountable owner, required skill, weekly capacity and backup.', 'Escalate overload before a missed launch becomes the signal.'],
  ['Decision stewardship', 'Prepare the evidence, surface trade-offs, secure the decision and record the rationale.', 'Never become the hidden decision-maker; preserve the named authority.'],
  ['Cross-functional follow-through', 'Convert Product, E-commerce, Retail, Creative, Social and Ops handoffs into dependencies.', 'Every dependency has a giver, receiver, due date and acceptance evidence.'],
  ['Leadership leverage', 'Protect focus, shape pre-reads, sequence discussions and close loops after meetings.', 'Measure decisions closed and time returned—not meeting volume.'],
  ['Team health signals', 'Watch role ambiguity, decision latency, workload concentration and recurring rework.', 'Use patterns for process improvement; do not turn human concerns into a public score.'],
] as const;

function SectionHead({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-head"><p>{eyebrow}</p><h2>{title}</h2>{copy && <span>{copy}</span>}</div>;
}

export function OkrChiefOfStaff() {
  return <div className="okr-cos-system">
    <section className="wide-card okr-disclosure">
      <CircleAlert />
      <div>
        <span className="signal hypothesis">ILLUSTRATIVE OPERATING MODEL</span>
        <h2>Targets below demonstrate the management system—not Kitsch performance or an approved plan.</h2>
        <p>Every actual remains intentionally blank. Before adoption, leadership would replace provisional targets with approved baselines, financial guardrails, capacity and strategy.</p>
      </div>
    </section>

    <section className="wide-card okr-scorecard-section">
      <SectionHead eyebrow="Example marketing OKRs" title="Four outcomes leadership can inspect—and teams can influence" copy="A KR earns space only when its movement changes a decision. Activity belongs in the initiative plan, not the executive scorecard." />
      <div className="okr-objective-grid">
        {okrs.map((okr) => <article className="okr-objective-card" key={okr.id}>
          <header><span>{okr.id}</span><div><h3>{okr.objective}</h3><p>{okr.executiveQuestion}</p></div></header>
          <div className="okr-owner"><Users /> Accountable: {okr.owner}</div>
          <div className="table-wrap"><table><thead><tr><th>Key result</th><th>Illustrative target</th><th>Actual</th><th>Source of truth</th></tr></thead><tbody>
            {okr.keyResults.map((kr) => <tr key={kr[0]}><td><strong>{kr[0]}</strong></td><td>{kr[1]}</td><td><span className="signal internal">{kr[2]} INTERNAL</span></td><td>{kr[3]}</td></tr>)}
          </tbody></table></div>
          <footer><CircleAlert /><span><b>Guardrail</b>{okr.guardrail}</span></footer>
        </article>)}
      </div>
    </section>

    <section className="wide-card okr-cascade-section">
      <SectionHead eyebrow="Strategy → execution" title="Cascade meaning—not just tasks" copy="Each level answers a different question: why this matters, what must change, who contributes and what proof closes the work." />
      <div className="okr-cascade">
        {cascade.map((row, index) => <div key={row[0]}>
          <article><span>{row[0]}</span><h3>{row[1]}</h3><p>{row[2]}</p></article>
          {index < cascade.length - 1 && <ArrowDown aria-hidden="true" />}
        </div>)}
      </div>
      <div className="ops-auto"><Network />Asana mirrors the cascade with Portfolio → Project → Milestone → Task → Subtask. Custom fields: objective, KR, owner, channel, launch, dependency, risk, status, due date and evidence link.</div>
    </section>

    <section className="wide-card quarterly-cycle-section">
      <SectionHead eyebrow="Quarterly operating cycle" title="Planning is a sequence of choices, not a single meeting" />
      <div className="quarterly-cycle">
        {quarter.map((item) => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}
      </div>
      <div className="two-col">
        <article className="okr-scoring-card"><ClipboardCheck /><h3>Quarter-end scoring</h3><ul className="commerce-list"><li><b>0.0–0.3:</b> materially missed; diagnose assumption, capacity or execution.</li><li><b>0.4–0.6:</b> partial progress; name the remaining constraint.</li><li><b>0.7–1.0:</b> outcome achieved or substantially achieved.</li><li>Score the KR first, then write the narrative. Never raise a score to reward effort.</li></ul></article>
        <article className="okr-scoring-card"><Target /><h3>Confidence discipline</h3><ul className="commerce-list"><li>Green: ≥80% confidence without unowned critical risk.</li><li>Amber: 50–79%; recovery plan and decision date required.</li><li>Red: &lt;50%; re-scope, re-resource or explicitly accept the miss.</li><li>Changing a target requires a recorded leadership decision—not silent editing.</li></ul></article>
      </div>
    </section>

    <section className="wide-card cadence-operating-section">
      <SectionHead eyebrow="Meeting architecture" title="Every cadence has a decision job and a durable output" copy="Status is asynchronous. Meeting time is reserved for exceptions, trade-offs, coaching and decisions." />
      <div className="cadence-columns">
        {cadence.map((group) => <article key={group.rhythm}><header><CalendarClock /><h3>{group.rhythm}</h3></header>{group.meetings.map((meeting) => <div className="cadence-meeting" key={meeting[0]}><strong>{meeting[0]}</strong><p>{meeting[1]}</p><dl><dt>Timing</dt><dd>{meeting[2]}</dd><dt>Durable output</dt><dd>{meeting[3]}</dd></dl></div>)}</article>)}
      </div>
      <div className="meeting-contract"><Clock3 /><div><b>The meeting contract</b><span>Pre-read 24 hours ahead · no readout in the room · name the decision owner · capture dissent and rationale · convert commitments to work before adjournment · cancel when there is no decision job.</span></div></div>
    </section>

    <section className="wide-card asana-evidence-section">
      <SectionHead eyebrow="Asana proof-of-work prototype" title="A task is closed only when the next person can trust the evidence" copy="These are fictional examples that demonstrate field design, comments and closure standards—not records from Kitsch or its team." />
      <span className="signal hypothesis">SAMPLE ASANA STRUCTURE ONLY</span>
      <div className="asana-ticket-grid">
        {asanaExamples.map((ticket) => <article key={ticket.task} className={`asana-ticket ${ticket.status.toLowerCase()}`}>
          <header><span>{ticket.status}</span><small>{ticket.project}</small></header>
          <h3>{ticket.task}</h3>
          <dl><dt>Owner</dt><dd>{ticket.owner}</dd><dt>Timing</dt><dd>{ticket.due}</dd><dt>Dependency</dt><dd>{ticket.dependency}</dd></dl>
          <div className="asana-proof"><CheckCircle2 />{ticket.proof}</div>
          <div className="asana-comment"><MessageSquareText /><p>{ticket.comment}</p></div>
        </article>)}
      </div>
    </section>

    <section className="wide-card chief-of-staff-section">
      <SectionHead eyebrow="Chief of staff layer" title="The human operating system behind the dashboard" copy="The role creates leverage by clarifying ownership, preparing decisions and protecting follow-through across functions—not by collecting more meetings." />
      <div className="people-system-grid">
        {peopleSystem.map((item, index) => <article key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p><small>{item[2]}</small></article>)}
      </div>
      <div className="two-col">
        <article className="one-on-one-template"><Users /><h3>30-minute 1:1 template</h3><ol className="number-list"><li>5 min · human check-in and energy</li><li>5 min · progress on role goals and development</li><li>10 min · blockers, decisions and manager support</li><li>5 min · feedback in both directions</li><li>5 min · commitments, owners and dates</li></ol><p><b>Private by default:</b> personal context and coaching. <b>Shared by agreement:</b> work commitments, dependencies and requested support.</p></article>
        <article className="cross-functional-template"><ListChecks /><h3>Cross-functional follow-up record</h3><dl><dt>Commitment</dt><dd>What observable output was promised?</dd><dt>Giver → receiver</dt><dd>Who supplies it, and who accepts it?</dd><dt>Acceptance criteria</dt><dd>What makes the handoff usable?</dd><dt>Deadline + escalation</dt><dd>When is it due, and when does risk surface?</dd><dt>Closure evidence</dt><dd>Link, timestamp, approver and downstream unblock.</dd></dl></article>
      </div>
    </section>

    <section className="dark-card cos-final-promise">
      <CheckCircle2 />
      <h3>From heroics to rhythm</h3>
      <p>Leadership sees a small set of outcomes, every team sees how its work contributes, Asana preserves the execution evidence, and the chief-of-staff layer closes the people and decision loops that dashboards alone cannot.</p>
    </section>
  </div>;
}

export function ExecutiveOkrSnapshot() {
  return <section className="executive-okr-snapshot">
    <div className="executive-okr-head"><div><span>ILLUSTRATIVE QUARTERLY SCORECARD</span><h2>One objective layer connects sales, marketing, customer and operations.</h2></div><p>Targets demonstrate management logic. Actuals remain blank until Kitsch’s governed internal sources are connected.</p></div>
    <div className="executive-okr-grid">{okrs.map((okr) => <article key={okr.id}><header><span>{okr.id}</span><b>EXAMPLE</b></header><h3>{okr.objective}</h3><strong>{okr.keyResults[0][1]}</strong><p>{okr.keyResults[0][0]}</p><footer><span>ACTUAL</span><b>—</b><small>INTERNAL DATA REQUIRED</small></footer></article>)}</div>
    <div className="metric-family-strip">{[['SALES','Net sales · contribution · full-price mix'],['MARKETING','New customers · marginal CAC · MER'],['CUSTOMER','Repeat · second-category · returns'],['OPERATIONS','Readiness · budget · decision latency']].map(m=><article key={m[0]}><span>{m[0]}</span><strong>{m[1]}</strong><b>—</b></article>)}</div>
  </section>;
}
