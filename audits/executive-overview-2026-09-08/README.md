# Executive overview UX audit

Audit date: September 8, 2026  
Audited surface: published Sites build `?version=18`  
User goal: a non-marketer should understand business health, what changed, and what leadership must do next without reading every specialist analysis.

## Overall verdict

The overview contains strong research and responsible evidence disclosures, but the published page behaves like a long presentation rather than an executive control surface. The decisive information arrives too late, decorative social counters lack interpretation, and several sections describe operating concepts instead of showing current state or a next action.

The local repository is ahead of the published build: its current overview has already replaced the old role-coverage, illustrative-scorecard and opportunity-radar sequence with four health areas and three leadership briefs. The next redesign should preserve that stronger decision structure while making it more visual and easier for a non-marketer.

## Step-by-step audit

### 1. Entry and orientation — needs improvement

Evidence: [01-overview-entry.png](./01-overview-entry.png)

- Strength: Kitsch visual language and the public-data disclosure establish trust.
- UX risk: the first viewport spends most of its space on navigation, explanation and a large editorial hero; it does not answer “Are we okay?” or “What needs a decision?”
- Recommendation: put a compact command bar and four outcome states in the first viewport. Reduce the hero to one sentence and a small product visual.

### 2. Public social counters — needs redesign

Evidence: [02-channel-signals.png](./02-channel-signals.png)

- Strength: the numbers are clearly labeled as public signals.
- UX risk: follower and page-like totals are scale counters, not business health. They have no date, change, role, interpretation or next action. Platform logos are not visibly rendered in these cards.
- Recommendation: replace the six counters with a channel pulse. Each row should show the official platform logo, channel job, latest public signal, period change when available, plain-English meaning and a link to the specialist view.

### 3. Role coverage — wrong level for an overview

Evidence: [03-role-coverage.png](./03-role-coverage.png)

- Strength: the eight systems map well to the job description.
- UX risk: eight text blocks explain the role but do not show operational state. This belongs in Marketing Operations, not the weekly executive page.
- Recommendation: move the complete role map to Marketing Operations. On the overview show only exceptions such as launch readiness, overdue decisions, budget risk and data freshness.

### 4. Illustrative quarterly scorecard — low trust and low usability

Evidence: [04-quarterly-scorecard.png](./04-quarterly-scorecard.png)

- Strength: it attempts to connect sales, marketing, customer and operations.
- UX risk: large example targets with blank actuals resemble company goals despite not being approved. A non-marketer cannot tell whether the business is ahead, behind or simply disconnected.
- Recommendation: replace it with an “Internal connection plan” until real targets exist. Show metric name, why it matters, required source, owner and connection status. Once authorized data exists, switch the same component to actual vs. target with status and trend.

### 5. Opportunity radar — useful thinking, unclear action

Evidence: [05-opportunity-radar.png](./05-opportunity-radar.png)

- Strength: the underlying questions are strategically relevant.
- UX risk: labels such as “compression problem,” “relationship gap” and “measurement truth tax” require interpretation. The cards have no owner, due date, priority or status, so they are insights rather than operating decisions.
- Recommendation: convert this section into “Decisions this week.” Limit it to three items with observed evidence, plain-English risk, decision needed, owner, deadline and destination tab.

## What the executive overview is missing

1. **A first-viewport status answer:** four states for profitable growth, customer quality, launch delivery and operating control.
2. **A “what changed” strip:** only three meaningful changes since the previous review, each with date, source and direction.
3. **A channel pulse with meaning:** official social logos plus channel role, latest signal, movement and action—not follower totals alone.
4. **A portfolio pulse:** five product franchises or hero SKUs, not the entire catalog; show public demand proof alongside the internal metric needed for contribution, inventory and repeat.
5. **A plain-language funnel:** Discover → Consider → Buy → Repeat, with the channel or product influencing each stage, the metric used and the largest current unknown.
6. **A decision queue:** three decisions with owner, due date, status and evidence link.
7. **Data health:** source connected/pending, last refresh, confidence and definition owner.
8. **Inline definitions:** tooltips for CAC, MER, ROAS, LTV, contribution, cohort and new-to-brand.

## Recommended React component structure

- `ExecutiveCommandBar`: period, public/internal mode, last refresh and source-health indicator.
- `OutcomeStatusGrid`: four executive outcomes with status, trend, definition and specialist link.
- `WhatChangedRail`: three dated changes with source and confidence.
- `ChannelPulse`: official platform identity, role, signal, interpretation and action.
- `PortfolioPulse`: five product families with image, public proof and internal proof required.
- `FunnelJourney`: a responsive funnel visualization with a text equivalent and stage-level drill-down.
- `DecisionQueue`: decision, owner, due date, status and destination.
- `MetricTooltip`: shared accessible definitions for marketing abbreviations.
- `DataHealthDrawer`: connection status, freshness, owner and quality warnings.

React or Next.js alone will not make the dashboard feel modern; component responsibility, information priority, responsive reflow and meaningful states will. The current Vinext/React architecture can support these components without a framework rewrite.

## Highest-impact design changes

1. Show status and decisions before explanation.
2. Replace long card walls with one visual hierarchy: status → change → diagnosis → decision.
3. Increase body and metadata type sizes; several labels are visually small at the audited viewport.
4. Use fewer, more meaningful cards and allow secondary methodology to live in disclosures.
5. Keep logos functional: every logo should identify a channel row and link to its analysis.
6. Preserve text equivalents for charts, clear focus states and reduced-motion behavior.

## Evidence limits

This is a screenshot-and-structure audit of the published desktop experience. It does not establish full WCAG compliance. Keyboard order, screen-reader announcements, color-contrast ratios, hover-only disclosures, chart semantics and mobile reflow still require implementation-level testing.
