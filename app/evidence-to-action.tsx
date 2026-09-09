import { ArrowRight, CircleGauge, Database, Eye, Target } from 'lucide-react';

import './evidence-to-action.css';
import { GlossaryText } from './glossary-term';

type EvidenceKind = 'PUBLIC SIGNAL' | 'ESTIMATE';
type InterpretationKind = 'HYPOTHESIS' | 'DIRECTIONAL READ';

type EvidenceToActionProps = {
  evidenceKind?: EvidenceKind;
  evidence: string;
  interpretationKind?: InterpretationKind;
  interpretation: string;
  internal: string;
  decision: string;
  owner?: string;
};

export function EvidenceToAction({
  evidenceKind = 'PUBLIC SIGNAL',
  evidence,
  interpretationKind = 'HYPOTHESIS',
  interpretation,
  internal,
  decision,
  owner,
}: EvidenceToActionProps) {
  const steps = [
    {
      Icon: Eye,
      label: evidenceKind,
      title: 'What we can see',
      copy: evidence,
      tone: 'public',
    },
    {
      Icon: CircleGauge,
      label: interpretationKind,
      title: 'What it may mean',
      copy: interpretation,
      tone: 'hypothesis',
    },
    {
      Icon: Database,
      label: 'INTERNAL DATA REQUIRED',
      title: 'What would prove it',
      copy: internal,
      tone: 'internal',
    },
    {
      Icon: Target,
      label: owner ? `DECISION · ${owner}` : 'OPERATING DECISION',
      title: 'What this supports',
      copy: decision,
      tone: 'decision',
    },
  ] as const;

  return (
    <section className="evidence-action" aria-label="Evidence to action guide">
      <header>
        <span>HOW TO READ THIS VIEW</span>
        <strong>Evidence → action</strong>
      </header>
      <ol>
        {steps.map((step, index) => (
          <li className={`evidence-action__step ${step.tone}`} key={step.title}>
            <article>
              <div>
                <span className="evidence-action__icon">
                  <step.Icon />
                </span>
                <small>{step.label}</small>
              </div>
              <h3>{step.title}</h3>
              <p>
                <GlossaryText>{step.copy}</GlossaryText>
              </p>
            </article>
            {index < steps.length - 1 && <ArrowRight aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </section>
  );
}
