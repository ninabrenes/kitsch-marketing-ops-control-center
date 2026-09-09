'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Boxes,
  Building2,
  CalendarCheck2,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleDotDashed,
  Clock3,
  Database,
  FileCheck2,
  FileClock,
  FileText,
  FolderKanban,
  GitBranch,
  Handshake,
  Lightbulb,
  Link2,
  ListTodo,
  MessageSquareText,
  PackageCheck,
  RefreshCw,
  Rocket,
  Scale,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react';

import './ops-visual-studio.css';

const visualSystems = [
  {
    id: 'cadence',
    label: 'Cadence',
    Icon: CalendarDays,
    eyebrow: 'Operating cadence',
    title: 'Turn updates into decisions',
    copy: 'Async updates feed focused meetings. Each meeting closes with a decision, owner, date or documented no-change.',
    nodes: [
      {
        Icon: CalendarCheck2,
        tag: 'WEEKLY',
        title: 'See exceptions',
        copy: 'KPI shifts · launch risk · spend variance',
        meta: 'Owner · Marketing Ops',
      },
      {
        Icon: BarChart3,
        tag: 'MONTHLY',
        title: 'Choose the move',
        copy: 'Scale · stop · fix · resource',
        meta: 'Owner · Marketing Leader',
      },
      {
        Icon: Target,
        tag: 'QUARTERLY',
        title: 'Reset priorities',
        copy: 'OKRs · budget · capacity · roadmap',
        meta: 'Owner · Leadership Team',
      },
    ],
    detail:
      'Recommended outputs: updated decision log weekly, approved forecast monthly, and a scored OKR record with documented carry/stop choices quarterly.',
  },
  {
    id: 'okr',
    label: 'OKR cascade',
    Icon: GitBranch,
    eyebrow: 'Strategy to evidence',
    title: 'One outcome, visible at every level',
    copy: 'The cascade keeps a company priority connected to a measurable result and the proof that execution is actually complete.',
    nodes: [
      {
        Icon: Building2,
        tag: '01',
        title: 'Priority',
        copy: 'Profitable omnichannel growth',
        meta: 'Financial guardrail',
      },
      {
        Icon: Target,
        tag: '02',
        title: 'Objective + KR',
        copy: 'Predictable, measurable launches',
        meta: 'One accountable owner',
      },
      {
        Icon: Users,
        tag: '03',
        title: 'Team result',
        copy: '≥90% green at T−14',
        meta: 'Illustrative target',
      },
      {
        Icon: FileCheck2,
        tag: '04',
        title: 'Evidence',
        copy: 'Approved asset + timestamp',
        meta: 'Asana source record',
      },
    ],
    detail:
      'Actual baselines and targets require leadership approval. Activities such as “build the brief” belong in initiatives; the KR should describe the outcome that changes.',
  },
  {
    id: 'launch',
    label: 'Launch loop',
    Icon: RefreshCw,
    eyebrow: 'Launch + decision loop',
    title: 'Brief, gate, launch, learn, improve',
    copy: 'A launch is not complete on publish day. The loop closes only when measurement and the playbook both improve.',
    nodes: [
      {
        Icon: FileText,
        tag: 'BRIEF',
        title: 'Define success',
        copy: 'Customer · economics · evidence',
        meta: 'T−8 weeks',
      },
      {
        Icon: PackageCheck,
        tag: 'GATE',
        title: 'Clear readiness',
        copy: 'Inventory · legal · assets · tracking',
        meta: 'T−14 days',
      },
      {
        Icon: Rocket,
        tag: 'LIVE',
        title: 'Run + watch',
        copy: 'Exceptions and recovery owners',
        meta: 'Launch window',
      },
      {
        Icon: BookOpenCheck,
        tag: 'LEARN',
        title: 'Close the loop',
        copy: 'Plan vs outcome + reusable lesson',
        meta: 'D+30',
      },
    ],
    detail:
      'A red inventory, legal, tracking or customer-support blocker prevents a green readiness state—even when every marketing asset is complete.',
  },
  {
    id: 'asana',
    label: 'Asana flow',
    Icon: FolderKanban,
    eyebrow: 'Execution record',
    title: 'Work moves when evidence moves',
    copy: 'Asana becomes the shared execution record: every dependency has a giver, receiver, acceptance test and escalation date.',
    nodes: [
      {
        Icon: CircleDotDashed,
        tag: 'INTAKE',
        title: 'Name the outcome',
        copy: 'Objective · KR · launch · priority',
        meta: 'Portfolio field',
      },
      {
        Icon: Users,
        tag: 'OWN',
        title: 'Assign the handoff',
        copy: 'Giver → receiver · due date',
        meta: 'One accountable owner',
      },
      {
        Icon: Link2,
        tag: 'DEPEND',
        title: 'Expose the block',
        copy: 'Upstream task + risk trigger',
        meta: 'Escalate before miss',
      },
      {
        Icon: BadgeCheck,
        tag: 'CLOSE',
        title: 'Attach proof',
        copy: 'Link · timestamp · approver',
        meta: 'Trusted completion',
      },
    ],
    detail:
      'Suggested custom fields: objective, KR, owner, channel, launch, dependency, risk, due date, evidence link and decision ID. The examples below are illustrative—not Kitsch records.',
  },
  {
    id: 'meetings',
    label: 'Meetings',
    Icon: MessageSquareText,
    eyebrow: 'Meeting rhythm',
    title: 'Pre-read in. Decision record out.',
    copy: 'Status stays asynchronous. Live time is for exceptions, trade-offs, coaching and choices that require shared context.',
    nodes: [
      {
        Icon: FileClock,
        tag: '−24H',
        title: 'Send the pre-read',
        copy: 'Changes · risks · options',
        meta: 'No live readout',
      },
      {
        Icon: MessageSquareText,
        tag: 'ROOM',
        title: 'Discuss the choice',
        copy: 'Trade-off · dissent · rationale',
        meta: 'Named decision owner',
      },
      {
        Icon: Scale,
        tag: 'CLOSE',
        title: 'Record the call',
        copy: 'Decision · condition · date',
        meta: 'Durable log',
      },
      {
        Icon: ListTodo,
        tag: '+1H',
        title: 'Convert to work',
        copy: 'Owner · deadline · dependency',
        meta: 'Asana follow-through',
      },
    ],
    detail:
      'Cancel the meeting when no decision job exists. Sensitive people context stays private; only agreed work commitments move into the shared system.',
  },
  {
    id: 'metrics',
    label: 'Metrics',
    Icon: ChartNoAxesCombined,
    eyebrow: 'Source to decision',
    title: 'A metric earns space when it changes a choice',
    copy: 'Raw platform data becomes leadership truth only after definitions, reconciliation and an accountable decision path.',
    nodes: [
      {
        Icon: Database,
        tag: 'SOURCE',
        title: 'Collect',
        copy: 'Shopify · Klaviyo · media · finance',
        meta: 'System owners',
      },
      {
        Icon: ShieldCheck,
        tag: 'TRUST',
        title: 'Reconcile',
        copy: 'Perimeter · timing · refunds · fees',
        meta: 'Metric contract',
      },
      {
        Icon: ChartNoAxesCombined,
        tag: 'SIGNAL',
        title: 'Explain change',
        copy: 'Plan · prior · driver · confidence',
        meta: 'Executive packet',
      },
      {
        Icon: Lightbulb,
        tag: 'ACTION',
        title: 'Make the call',
        copy: 'Scale · stop · fix · investigate',
        meta: 'Owner + SLA',
      },
    ],
    detail:
      'Internal fields required: customer and order IDs, realized net revenue, COGS, discounts, refunds, channel fees, approved spend perimeter, creative ID and acquisition status.',
  },
] as const;

export function OpsVisualStudio() {
  const [activeId, setActiveId] =
    useState<(typeof visualSystems)[number]['id']>('cadence');
  const active =
    visualSystems.find((item) => item.id === activeId) ?? visualSystems[0];
  const ActiveIcon = active.Icon;

  return (
    <section
      className="ops-visual-studio"
      aria-label="Interactive marketing operating system"
    >
      <header className="ops-visual-studio__head">
        <div>
          <span>MARKETING OPERATING FLOWS</span>
          <h2>Six flows the CMO can run</h2>
          <p>
            Choose a flow to see its steps, owner, operating deadline and
            closure evidence.
          </p>
        </div>
        <div className="ops-visual-studio__labels">
          <span>ILLUSTRATIVE MODEL</span>
          <span>ACTUALS REQUIRE INTERNAL DATA</span>
        </div>
      </header>

      <div className="ops-how-to-read" aria-label="How to use this diagram">
        <span>
          <CircleDotDashed aria-hidden="true" />
          <b>1. Choose a loop</b>
          <small>Cadence, OKRs, launches, Asana, meetings or metrics</small>
        </span>
        <span>
          <ArrowRight aria-hidden="true" />
          <b>2. Follow left to right</b>
          <small>Each card is a handoff with an owner or proof point</small>
        </span>
        <span>
          <BookOpenCheck aria-hidden="true" />
          <b>3. Open “How to run this”</b>
          <small>Use the note as the meeting or workflow instruction</small>
        </span>
      </div>

      <nav className="ops-system-tabs" aria-label="Operating system views">
        {visualSystems.map((system) => (
          <button
            type="button"
            key={system.id}
            className={system.id === active.id ? 'active' : ''}
            aria-pressed={system.id === active.id}
            onClick={() => setActiveId(system.id)}
          >
            <system.Icon />
            <span>{system.label}</span>
          </button>
        ))}
      </nav>

      <div className="ops-system-canvas" key={active.id}>
        <div className="ops-system-canvas__intro">
          <span className="ops-system-canvas__icon">
            <ActiveIcon />
          </span>
          <div>
            <small>{active.eyebrow}</small>
            <h3>{active.title}</h3>
            <p>{active.copy}</p>
          </div>
        </div>

        <ol
          className="ops-flow-diagram"
          aria-label={`${active.label} workflow`}
        >
          {active.nodes.map((node, index) => (
            <li className="ops-flow-step" key={node.title}>
              <article>
                <header>
                  <span>
                    <node.Icon />
                  </span>
                  <small>{node.tag}</small>
                </header>
                <h4>{node.title}</h4>
                <p>{node.copy}</p>
                <footer>{node.meta}</footer>
              </article>
              {index < active.nodes.length - 1 && (
                <ArrowRight className="ops-flow-arrow" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        <details className="ops-system-detail">
          <summary>How to run this</summary>
          <p>{active.detail}</p>
        </details>
      </div>

      <div className="ops-role-outcomes" aria-label="Role outcomes">
        {[
          [Clock3, 'Faster closure', 'Decision owner + SLA'],
          [Handshake, 'Cleaner handoffs', 'Giver + receiver + proof'],
          [Boxes, 'Predictable launches', 'Readiness before publish'],
          [CheckCircle2, 'Trusted reporting', 'Definition + source + refresh'],
        ].map(([Icon, title, copy]) => {
          const OutcomeIcon = Icon as typeof Clock3;
          return (
            <article key={String(title)}>
              <OutcomeIcon />
              <span>
                <strong>{String(title)}</strong>
                <small>{String(copy)}</small>
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
