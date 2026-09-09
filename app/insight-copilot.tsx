'use client';

import { useMemo, useState } from 'react';
import {
  BrainCircuit,
  ChevronDown,
  ChevronUp,
  CircleAlert,
  Database,
  LoaderCircle,
  ShieldCheck,
} from 'lucide-react';
import { MessageResponse } from '@/components/ai-elements/message';
import { tabHelp, type DashboardTab } from './dashboard-guide';
import {
  PlatformBrandIcon,
  type PlatformBrandName,
} from './platform-brand-icon';
import './insight-copilot.css';

type Lens = 'plain' | 'meaning' | 'action';

const lensLabels: Record<Lens, string> = {
  plain: 'Explain simply',
  meaning: 'Why it matters',
  action: 'What should we do?',
};

const platformContext: Partial<Record<DashboardTab, PlatformBrandName[]>> = {
  overview: ['Instagram', 'Facebook', 'TikTok', 'TikTok Shop', 'YouTube'],
  intelligence: ['Website', 'Instagram', 'TikTok'],
  commerce: ['Shopify', 'TikTok Shop'],
  creators: ['Instagram', 'TikTok', 'TikTok Shop', 'YouTube'],
  funnel: ['Website', 'Instagram', 'TikTok', 'TikTok Shop'],
  website: ['Shopify', 'Website'],
  launches: ['Instagram', 'TikTok', 'TikTok Shop', 'Website'],
  social: [
    'Instagram',
    'Facebook',
    'TikTok',
    'TikTok Shop',
    'YouTube',
    'Pinterest',
  ],
  search: ['Website', 'Instagram', 'Pinterest', 'YouTube'],
  brand: ['Website', 'Instagram', 'TikTok'],
};

function reviewedBrief(active: DashboardTab, lens: Lens) {
  const help = tabHelp[active];

  if (lens === 'meaning') {
    return `### Why this view matters\n\n${help.purpose}\n\n**The leadership question:** ${help.decision}\n\n**Important limit:** A public signal can reveal direction or scale. It cannot prove revenue, profitability, causation, or customer quality without the internal data named in the view.`;
  }

  if (lens === 'action') {
    return `### What to do next\n\n${help.apply}\n\n**Start here:** ${help.inspect}\n\n**Decision to record:** ${help.decision}\n\nKeep the owner, due date, evidence link, and success rule together so the insight becomes operating work—not another slide.`;
  }

  return `### In plain English\n\n${help.purpose}\n\n**Look at:** ${help.inspect}\n\n**Then decide:** ${help.decision}\n\n**How to use it:** ${help.apply}`;
}

export function InsightCopilot({ active }: { active: DashboardTab }) {
  const [open, setOpen] = useState(active === 'overview');
  const [lens, setLens] = useState<Lens>('plain');
  const [generated, setGenerated] = useState<string | null>(null);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'generated' | 'fallback'
  >('idle');
  const help = tabHelp[active];
  const platforms = platformContext[active] ?? [];
  const reviewed = useMemo(() => reviewedBrief(active, lens), [active, lens]);
  const answer = generated ?? reviewed;

  async function generateBrief() {
    setStatus('loading');
    setGenerated(null);

    try {
      const response = await fetch('/.netlify/functions/insight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tab: active,
          lens,
          context: {
            purpose: help.purpose,
            inspect: help.inspect,
            decision: help.decision,
            apply: help.apply,
          },
        }),
      });

      if (!response.ok) throw new Error('AI connection is unavailable');

      const data = (await response.json()) as { markdown?: string };
      if (!data.markdown) throw new Error('AI response was empty');
      setGenerated(data.markdown);
      setStatus('generated');
    } catch {
      setGenerated(reviewed);
      setStatus('fallback');
    }
  }

  function chooseLens(nextLens: Lens) {
    setLens(nextLens);
    setGenerated(null);
    setStatus('idle');
  }

  return (
    <section className={`insight-copilot ${open ? 'is-open' : ''}`}>
      <header>
        <div className="insight-copilot__identity">
          <span className="insight-copilot__mark">
            <BrainCircuit aria-hidden="true" />
          </span>
          <div>
            <span>CMO ACTION BRIEF</span>
            <h2>{help.decision}</h2>
          </div>
        </div>
        <p>{help.apply}</p>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
        >
          {open ? 'Hide decision brief' : 'Open decision brief'}
          {open ? <ChevronUp /> : <ChevronDown />}
        </button>
      </header>

      {open && (
        <div className="insight-copilot__body">
          <aside>
            <div className="insight-copilot__sources">
              <span>SOURCE CONTEXT</span>
              {platforms.length > 0 ? (
                <div>
                  {platforms.map((platform) => (
                    <PlatformBrandIcon
                      key={platform}
                      name={platform}
                      label={false}
                      size="small"
                    />
                  ))}
                </div>
              ) : (
                <div className="insight-copilot__internal-source">
                  <Database aria-hidden="true" /> Operating data
                </div>
              )}
            </div>
            <div className="insight-copilot__lenses" aria-label="Insight lens">
              {(Object.keys(lensLabels) as Lens[]).map((item) => (
                <button
                  type="button"
                  key={item}
                  className={lens === item ? 'active' : ''}
                  onClick={() => chooseLens(item)}
                >
                  {lensLabels[item]}
                </button>
              ))}
            </div>
            <div className="insight-copilot__guardrail">
              <ShieldCheck aria-hidden="true" />
              <p>
                Uses the evidence boundary on this tab. It should never turn a
                public counter into a claim about sales or profitability.
              </p>
            </div>
          </aside>

          <article className="insight-copilot__answer" aria-live="polite">
            <div className="insight-copilot__answer-label">
              <span>
                {status === 'generated'
                  ? 'AI-GENERATED · REVIEW REQUIRED'
                  : 'REVIEWED EXPLANATION'}
              </span>
              {status === 'fallback' && (
                <small>
                  <CircleAlert /> AI connection unavailable; showing the
                  reviewed explanation.
                </small>
              )}
            </div>
            {status === 'loading' ? (
              <div className="insight-copilot__loading">
                <LoaderCircle aria-hidden="true" />
                Creating a source-bound brief…
              </div>
            ) : (
              <MessageResponse>{answer}</MessageResponse>
            )}
            <footer>
              <button
                type="button"
                onClick={generateBrief}
                disabled={status === 'loading'}
              >
                <BrainCircuit /> Generate AI brief
              </button>
              <p>
                Optional integration. Requires a server-side OpenAI key and
                keeps human approval in the loop.
              </p>
            </footer>
          </article>
        </div>
      )}
    </section>
  );
}
