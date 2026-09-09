# Kitsch Marketing Operations Control Center — Tab Audit

**Audit date:** September 8, 2026  
**Scope:** Fourteen dedicated, read-only tab audits plus one cross-tab open-source architecture review.  
**Evidence boundary:** Public surfaces and repository code can validate structure, wording, links and observable signals. They cannot validate Kitsch revenue, ranking, conversion, profitability, internal cadence or platform performance.

## Executive verdict

The control center is strategically strong, visually differentiated and unusually disciplined about not inventing Kitsch actuals. Its main weakness is shared across the product: most tabs explain the operating system more effectively than they let a marketer run it.

The next version should prioritize a weekly command layer, one governed evidence registry, one metric-contract model, one content/experiment calendar and clear connected-versus-proposed states. Adding more standalone research cards or another dashboard framework would increase volume without increasing trust or operational value.

## Tab-by-tab findings

| Tab | Health | Strongest element | Highest-impact gap | Recommended next build |
|---|---|---|---|---|
| Executive overview | Mixed | Role alignment and evidence boundaries | “Know what changed” has no actual/target/delta/freshness layer | Six locked governed KPI slots, top exceptions and decisions due |
| Growth signals | Amber · 6.5/10 | Evidence → interpretation → decision framing | Expert scores create false precision; no executable test queue | Remove unexplained scores; add owner, baseline, target, minimum evidence and stop/scale rule |
| Commerce control | Amber · 7/10 | Shopify/Klaviyo/finance dependency thinking | Filters overpromise and unit economics omit channel costs | Contribution waterfall and cohort matrix by SKU × channel |
| Creator operations | Amber | Contribution/customer-quality philosophy | No creator content-supply or posting-cadence plan | Four-week supply plan, rights clock, creator lifecycle and exception queue |
| Customer journey | Amber | Clear five-stage jobs and handoffs | Illustrative funnel widths imply invented drop-off | Equal-width framework mode plus connected-data funnel and lifecycle matrix |
| Storefront + stack | Amber · 6/10 | Systems-of-record framing | No storefront performance or connection-health control plane | CRO scorecard, system lineage, technical health and experiment queue |
| KPI definitions | Amber · 7/10 | Formula, fields, limitations and benchmark honesty | It claims an owner per KPI but does not model or display one | Complete versioned metric contract plus KPI hierarchy and alert playbooks |
| Launch control | Amber · 5.5/10 | Clear assign → unblock → learn story | Real launch names paired with invented status/completion; no calendar | Neutral examples, quarterly workback calendar, readiness matrix and go/no-go log |
| Social system | Amber · 6.5/10 | Distinct role for each platform | No planned/published cadence or measurable creative-learning ledger | Four-week calendar and concept → creative → commerce/cohort learning view |
| Search + answers | Amber · 7/10 | Strongest evidence-to-decision lineage | Ranking labels remain ambiguous; agentic-commerce discovery is missing | SEO/AEO portfolio, query opportunity model and agentic-commerce readiness panel |
| Messaging playbook | Amber · 6.1/10 | Owned-site excerpts with preserve/test guidance | Social voice is implied without caption evidence; tests are not runnable | Product × audience × funnel × channel message matrix and claims registry |
| Competitor map | Amber · 6/10 | Strategic implications and candid limitations | Hard-coded fields drift; market set omits major U.S. mass competitors | True 2×2, per-field provenance, pin-to-compare and change alerts |
| Marketing operations | Amber · 7.2/10 | Role-specific cadence, identity and chief-of-staff model | No “what needs attention this week?” command surface | Weekly exception cockpit, data reliability, money/vendors and team-capacity views |
| Sources + methods | Needs revision · 4.4/10 | Strong public/estimate/hypothesis taxonomy | UI has 32 hard-coded sources while CSV has 12; claims do not reference source IDs | One validated evidence registry with claim backlinks, freshness and lineage |

## Cross-tab priorities

### P0 — Make Sources + methods the trust layer

Create one typed evidence registry consumed by every tab. The minimum record is:

`claim_id`, `claim_text`, `evidence_type`, `source_ids`, `publisher`, `url`, `captured_at`, `effective_period`, `geography`, `query_or_filter`, `method`, `confidence`, `confidence_rationale`, `limitation`, `refresh_sla`, `owner`, `status`, `used_in`, `internal_data_needed`.

The current UI source array and `research/sources.csv` must become one source of truth with duplicate-ID and required-field validation.

### P0 — Add a weekly command layer

Overview and Marketing Operations should answer, above the fold:

1. What changed versus target and prior period?
2. What is blocked, stale or financially off plan?
3. Which three decisions are due, who owns them and by when?
4. What evidence is missing?
5. What changed after the decision?

The same exception object should deep-link into Launches, Commerce, KPI Definitions, Social, Search or Asana rather than duplicating prose.

### P0 — Create one content and learning operating model

Social, Creators, Search, Messaging, Launches and Customer Journey need one shared record:

`content_id → campaign → product/SKU → audience/need state → funnel job → platform → concept → hook → proof → format → CTA → destination → owner → due/approval/live state → rights/claims state → result snapshot → decision`.

Add an experiment contract with hypothesis, control/treatment, eligibility, exposure event, primary metric, guardrail, minimum evidence, owner, readout date and adopt/iterate/retire decision.

### P1 — Govern metrics before displaying actuals

The metric model needs version, owner, steward, approver, numerator, denominator, grain, dimensions, inclusions/exclusions, currency/timezone, source models, attribution window, cohort maturity, refresh SLA, target/warn/critical thresholds and change history.

Keep canonical financial metrics separate from channel-native diagnostics. Amazon/TikTok “new buyer,” retail POS, Shopify customer history and platform ROAS are not directly interchangeable.

### P1 — Turn four strategic reports into operating views

- **Customer Journey:** remove invented-width implications; add real denominators only after event contracts exist.
- **Competitor Map:** add U.S. mass/category specialists, a real axis-based map, field-level source dates and change history.
- **Storefront + Stack:** show source → ingestion → governed model → Looker → decision, with health and reconciliation.
- **Launch Control:** replace static gates with status, acceptance test, evidence, owner, due date, waiver and decision history.

### P1 — Make Search + Answers the distinctive AEO story

Kitsch’s public discovery footprint includes a Hair Care editorial hub and a reported agentic-discovery surface. The tab should separate:

- traditional SEO: query → page → impression/click/rank → assisted commerce;
- social search: native query → spoken/on-screen/caption language → discovery and action;
- AEO: prompt → cited brand/page → reproducibility and sentiment;
- agentic commerce: product-feed/entity freshness → agent discovery → checkout handoff.

Public evidence can confirm the surfaces exist. Ranking, citations, traffic and commercial value require Search Console, GA4, platform Insights, server logs and commerce data.

### P2 — Simplify mobile depth and accessibility

Raise operational body copy from 8–10px to at least 12–14px, keep essential owner/status information on mobile, use mobile cards instead of 820–980px tables, provide 44px targets and visible focus states, and turn dense schemas into disclosures. Tooltips should have explicit DOM state, dismissal and assistive-technology relationships rather than relying only on generated CSS content.

## GitHub architecture recommendation

### Borrow now as patterns

1. [JSON Schema](https://github.com/json-schema-org/json-schema-spec) — validate shared evidence, metric, experiment, content and decision records during the build.
2. [dbt MetricFlow](https://github.com/dbt-labs/metricflow) and [dbt Core](https://github.com/dbt-labs/dbt-core) — borrow metrics-as-code, tests, ownership, freshness and lineage concepts; do not install until the warehouse direction is known.
3. [GrowthBook](https://github.com/growthbook/growthbook) — borrow experiment contracts, guardrails, assignment/exposure discipline and decision history.
4. [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) and [web-vitals](https://github.com/GoogleChrome/web-vitals) — add reproducible storefront/Search health trends, never a one-off vanity score.
5. [OpenLineage](https://github.com/OpenLineage/OpenLineage) — borrow source → capture → transform → metric → claim provenance and refresh-run vocabulary.

Useful feature patterns include [Postiz](https://github.com/gitroomhq/postiz-app) for a content-calendar model, [EveryInc Marketing-OS](https://github.com/EveryInc/Marketing-OS) for launch workbacks/collision rules, [PostHog](https://github.com/PostHog/posthog) for funnel/cohort interaction patterns, and [Shopify’s React Router app template](https://github.com/Shopify/shopify-app-template-react-router) for a future authenticated Shopify integration boundary.

### Avoid or defer

- Do not replace the differentiated React experience with Evidence, Metabase, Superset or another BI frontend.
- Do not self-host Postiz or another publishing platform for this portfolio; OAuth tokens, publishing authority and AGPL obligations create unnecessary risk.
- Defer Airbyte, OpenMetadata, DataHub and full OpenLineage services until authenticated pipelines exist.
- Defer PostHog as a platform until Kitsch’s actual analytics/consent stack is known.
- Avoid social/ad scraping repositories as production dependencies; preserve authorized exports and terms-compliant public captures instead.

## Recommended delivery sequence

### Phase 1 — Trust and command

1. Unify the evidence registry and link every material claim.
2. Add the weekly exception/decision cockpit.
3. Remove false precision, invented launch status and funnel-width implications.
4. Complete the metric-contract schema and connected/proposed states.

### Phase 2 — Content and commerce operations

1. Build the shared four-week content/creator/launch calendar.
2. Add the creative-learning and experiment ledgers.
3. Add SKU × channel contribution and customer-cohort views.
4. Add the Search/AEO portfolio and agentic-commerce readiness panel.

### Phase 3 — Connected pilot

Use authorized Shopify, GA4, Search Console, Klaviyo, social, TikTok Shop, Asana and finance exports. Land immutable raw extracts, model governed aggregates, reconcile web purchases to Shopify/finance, and send only approved aggregates to the dashboard or existing Looker environment.

## Audit limits

- No authenticated Kitsch systems, internal metrics or historical exports were available.
- Public profile counters, retail result counts and ad-library presence cannot establish growth, revenue, spend, conversion, incrementality or profit.
- Most delegated agents could inspect source and public evidence but could not control the root thread’s in-app browser; root-level visual checks confirmed representative Overview, Commerce, Social, Customer Journey, Search and KPI states, not a complete device/accessibility matrix.
- Repository activity and architecture fit were reviewed as implementation references, not endorsements to install third-party software.
