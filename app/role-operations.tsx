import {
  CheckCircle2,
  CircleAlert,
  Database,
  DollarSign,
  ListChecks,
} from 'lucide-react';
import { OpsVisualStudio } from './ops-visual-studio';
import { EvidenceToAction } from './evidence-to-action';
import { GlossaryHint, GlossaryText } from './glossary-term';

const roleBlueprint = [
  [
    'Operating cadence',
    'Weekly pulse · monthly business review · quarterly planning',
    'Agenda, pre-read, owners, decisions and follow-through',
    'Week 2 pilot',
  ],
  [
    'Leadership dashboard',
    'CAC · ROAS · LTV · repeat rate · contribution',
    'Metric dictionary, locked refresh date and exception narrative',
    'Month 1 definition',
  ],
  [
    'Launch calendar',
    'One cross-functional launch record with readiness, risk and dependency fields',
    'Creative · E-commerce · Retail · Social · Ops',
    'Pilot on one launch',
  ],
  [
    'Quarterly planning + OKRs',
    'Priority trade-offs, targets, initiatives, capacity and dependencies',
    'Leadership decisions connected to weekly execution',
    'Quarter 1 operating cycle',
  ],
  [
    'Budget + POs',
    'Plan · actual · committed · forecast · accrual · variance',
    'Finance-ready channel and vendor pacing',
    'Month 1 baseline',
  ],
  [
    'Leadership meetings',
    'Pre-read, decision log, owner, due date and escalation path',
    'Meeting output becomes tracked work',
    'Immediate',
  ],
  [
    'Playbooks',
    'Document repeated friction only after the process is understood',
    'Trigger · steps · owner · SLA · exception path',
    'First 60 days',
  ],
  [
    'Cross-functional connection',
    'Shared definitions and handoffs across Product, E-commerce, Retail and Ops',
    'One source of truth, fewer duplicate status asks',
    'Continuous',
  ],
] as const;

function Head({
  eyebrow,
  title,
  copy,
  as = 'h2',
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  as?: 'h1' | 'h2';
}) {
  const Heading = as;
  return (
    <div className="section-head">
      <p>{eyebrow}</p>
      <Heading>
        <GlossaryText>{title}</GlossaryText>
      </Heading>
      {copy && (
        <span>
          <GlossaryText>{copy}</GlossaryText>
        </span>
      )}
    </div>
  );
}
function Label({ children }: { children: string }) {
  return <span className="signal internal">{children}</span>;
}

export function RoleOperations() {
  return (
    <div className="page-grid">
      <Head
        as="h1"
        eyebrow="Role operating blueprint"
        title="Build rhythm. Own the numbers. Close the loop."
        copy="Each responsibility maps to the artifact, owner and cadence that makes it operational."
      />
      <EvidenceToAction
        evidence="The role brief explicitly asks for cadence, dashboards, launch control, OKRs, budget governance and leadership follow-through."
        interpretation="The leverage opportunity is a shared operating system that makes exceptions, ownership and decisions visible without status-chasing."
        internal="Current meeting map, metric dictionary, launch calendar, Asana portfolio, budget/PO tracker, decision log and team capacity."
        decision="Pilot one weekly pulse and one live launch, measure decision latency and readiness, then standardize what reduces friction."
        owner="Marketing Ops / Chief of Staff"
      />
      <section className="role-hero">
        <div>
          <ListChecks />
          <p>THE FORCE-MULTIPLIER JOB</p>
          <h2>
            Give leadership trusted decisions and teams a shared way to execute.
          </h2>
        </div>
        <div>
          {[
            ['RHYTHM', 'Cadence + planning'],
            ['TRUTH', 'Metrics + budget'],
            ['DELIVERY', 'Launches + follow-through'],
            ['LEVERAGE', 'Playbooks + cross-functional systems'],
          ].map((x) => (
            <article key={x[0]}>
              <span>{x[0]}</span>
              <strong>{x[1]}</strong>
            </article>
          ))}
        </div>
      </section>
      <OpsVisualStudio />
      <section className="wide-card">
        <Head
          eyebrow="Job-description coverage"
          title="Eight responsibilities → eight operating artifacts"
        />
        <GlossaryHint />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Role requirement</th>
                <th>Operating artifact</th>
                <th>What makes it useful</th>
                <th>First proof point</th>
              </tr>
            </thead>
            <tbody>
              {roleBlueprint.map((r) => (
                <tr key={r[0]}>
                  {r.map((v, i) => (
                    <td key={v}>
                      {i === 0 ? (
                        <strong>
                          <GlossaryText>{v}</GlossaryText>
                        </strong>
                      ) : (
                        <GlossaryText>{v}</GlossaryText>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="30 / 60 / 90 days"
          title="Listen first, then pilot, then scale"
        />
        <div className="ninety-grid">
          <article>
            <span>0–30 DAYS</span>
            <h3>Define the operating truth</h3>
            <ul>
              <li>
                <CheckCircle2 />
                Interview decision-makers and map recurring friction.
              </li>
              <li>
                <CheckCircle2 />
                Publish KPI definitions, owners and refresh dates.
              </li>
              <li>
                <CheckCircle2 />
                Inventory martech, vendors, reports and meetings.
              </li>
              <li>
                <CheckCircle2 />
                Choose one live launch for the pilot.
              </li>
            </ul>
          </article>
          <article>
            <span>31–60 DAYS</span>
            <h3>Run the new rhythm</h3>
            <ul>
              <li>
                <CheckCircle2 />
                Pilot the weekly leadership pulse and decision queue.
              </li>
              <li>
                <CheckCircle2 />
                Run launch readiness from one shared record.
              </li>
              <li>
                <CheckCircle2 />
                Reconcile budget, committed POs and forecast.
              </li>
              <li>
                <CheckCircle2 />
                Close the first 30-day launch results review.
              </li>
            </ul>
          </article>
          <article>
            <span>61–90 DAYS</span>
            <h3>Turn repetition into leverage</h3>
            <ul>
              <li>
                <CheckCircle2 />
                Run the first monthly business review.
              </li>
              <li>
                <CheckCircle2 />
                Draft the next quarterly planning cycle.
              </li>
              <li>
                <CheckCircle2 />
                Document the first proven playbooks.
              </li>
              <li>
                <CheckCircle2 />
                Automate only stable, trusted workflows.
              </li>
            </ul>
          </article>
        </div>
      </section>
      <section className="two-col">
        <article className="wide-card">
          <DollarSign />
          <Head
            eyebrow="Budget + PO control"
            title="Plan, committed, actual and forecast"
          />
          <div className="ops-fields">
            {[
              'Channel / vendor',
              'Annual and monthly plan',
              'Approved PO value',
              'Invoiced actual',
              'Accrued but not invoiced',
              'Latest forecast',
              'Variance + explanation',
              'Renewal / cancellation date',
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <p>
            A weekly variance view should show which change requires a
            decision—not simply whether the spreadsheet balances.
          </p>
          <Label>INTERNAL DATA REQUIRED</Label>
        </article>
        <article className="wide-card">
          <Database />
          <Head
            eyebrow="Leadership meeting pack"
            title="One page before; one log after"
          />
          <ol className="number-list">
            <li>Headline changes versus plan and prior period</li>
            <li>Launch, inventory and budget exceptions</li>
            <li>Customer, channel and market signals</li>
            <li>Decisions required, with options and trade-offs</li>
            <li>Owner, deadline and outcome added to the decision log</li>
          </ol>
        </article>
      </section>
      <section className="wide-card">
        <Head eyebrow="Meeting rhythm" title="Every meeting earns its place" />
        <div className="meeting-grid">
          {[
            [
              'WEEKLY',
              '45 min',
              'KPI exceptions · launches · budget blockers · decisions',
              'Updated owners and deadlines',
            ],
            [
              'MONTHLY',
              '75 min',
              'Business performance · channel learning · customer · forecast',
              'Stop, scale and resource decisions',
            ],
            [
              'QUARTERLY',
              'Half day',
              'OKRs · budget · capacity · roadmap · experiments',
              'Priorities, trade-offs and accountable owners',
            ],
          ].map((m) => (
            <article key={m[0]}>
              <div>
                <span>{m[0]}</span>
                <small>{m[1]}</small>
              </div>
              <h3>{m[2]}</h3>
              <p>{m[3]}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="two-col">
        <article className="wide-card">
          <Head
            eyebrow="Friction-to-playbook rule"
            title="Standardize only repeated work"
          />
          <ul className="commerce-list">
            <li>
              <CheckCircle2 />
              Name the trigger and desired outcome.
            </li>
            <li>
              <CheckCircle2 />
              Map the current handoffs and failure points.
            </li>
            <li>
              <CheckCircle2 />
              Assign one process owner and service level.
            </li>
            <li>
              <CheckCircle2 />
              Pilot the simpler path and measure cycle time.
            </li>
            <li>
              <CheckCircle2 />
              Document the stable version and exception path.
            </li>
          </ul>
        </article>
        <article className="wide-card">
          <Head
            eyebrow="Operating risk register"
            title="Escalate exceptions early"
          />
          <ul className="commerce-list risk">
            <li>
              <CircleAlert />
              Metric definitions differ across Shopify, finance and attribution
              tools.
            </li>
            <li>
              <CircleAlert />
              Launch dates move without downstream dependency updates.
            </li>
            <li>
              <CircleAlert />
              Committed spend and invoices are not visible together.
            </li>
            <li>
              <CircleAlert />
              Decisions live in meetings but not in the work system.
            </li>
            <li>
              <CircleAlert />
              New tools automate a process that is not yet stable.
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}
