import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  CheckCircle2,
  CircleAlert,
  Database,
  FileSearch,
  ListChecks,
  RefreshCw,
  Search,
  Target,
} from 'lucide-react';
import { PlatformBrandIcon } from './platform-brand-icon';
import { GlossaryHint, GlossaryText } from './glossary-term';
import './search-evidence-workbench.css';

const sources = {
  blog: 'https://www.mykitsch.com/blogs/hair-care',
  homepage: 'https://www.mykitsch.com/',
  hairCare: 'https://www.mykitsch.com/collections/hair-care',
  shampooArticle:
    'https://www.mykitsch.com/blogs/hair-care/how-long-does-a-shampoo-bar-last',
  googleBlog:
    'https://www.google.com/search?q=site%3Amykitsch.com%2Fblogs%2Fhair-care+Kitsch',
  googleHeatless:
    'https://www.google.com/search?q=site%3Amykitsch.com+Kitsch+heatless+curls',
  instagram: 'https://www.instagram.com/mykitsch/',
  sitemap: 'https://www.mykitsch.com/sitemap.xml',
  robots: 'https://www.mykitsch.com/robots.txt',
} as const;

const keywordOpportunities = [
  {
    query: 'how to do heatless curls overnight',
    intent: 'Learn · technique',
    result: 'Dedicated answer page observed',
    evidence: 'Public Kitsch article',
    href: 'https://www.mykitsch.com/blogs/hair-care/heatless-curls-overnight',
    opportunity:
      'Add a curl-result selector, before/after proof and a direct path to the right heatless set.',
    priority: 'DEFEND + IMPROVE',
  },
  {
    query: "why heatless curls won't hold",
    intent: 'Solve · troubleshooting',
    result: 'Dedicated answer listed in the Hair Care hub',
    evidence: 'Public Kitsch hub snapshot',
    href: sources.blog,
    opportunity:
      'Turn the diagnosis into a visual decision tree and reuse it in Reels, TikTok and PDP FAQs.',
    priority: 'HIGH-FIT TEST',
  },
  {
    query: 'how long does a shampoo bar last',
    intent: 'Compare · value',
    result: 'Dedicated cost-per-wash answer observed',
    evidence: 'Public Kitsch article',
    href: sources.shampooArticle,
    opportunity:
      'Connect the answer to product price, washes per bar and the most relevant starter bundle.',
    priority: 'DEFEND + CONVERT',
  },
  {
    query: 'how to use a shampoo bar',
    intent: 'Learn · adoption',
    result: 'Six-step answer page observed',
    evidence: 'Public Kitsch article',
    href: 'https://www.mykitsch.com/blogs/hair-care/how-to-use-a-shampoo-bar',
    opportunity:
      'Add a 30-second demonstration, common mistakes and post-purchase email reuse.',
    priority: 'RETENTION LEVER',
  },
  {
    query: 'shampoo bars vs liquid shampoo',
    intent: 'Compare · category',
    result: 'Format-comparison page observed',
    evidence: 'Public Kitsch article',
    href: 'https://www.mykitsch.com/blogs/hair-care/shampoo-bars-vs-liquid-format-comparison-2026',
    opportunity:
      'Strengthen comparison proof, objections and internal links to bar collections and beginner guides.',
    priority: 'CATEGORY EDUCATION',
  },
  {
    query: 'satin pillowcase benefits for hair',
    intent: 'Learn · consideration',
    result: 'Dedicated benefits article listed in hub',
    evidence: 'Public Kitsch hub snapshot',
    href: sources.blog,
    opportunity:
      'Build a complete sleep-routine cluster: pillowcase, bonnet, scrunchie and hair-type guidance.',
    priority: 'EXPAND ROUTINE',
  },
  {
    query: 'microfiber towel vs regular towel for hair',
    intent: 'Compare · problem',
    result: 'Dedicated comparison page observed',
    evidence: 'Public Kitsch article',
    href: 'https://www.mykitsch.com/blogs/hair-care/microfiber-vs-regular-towel-for-hair',
    opportunity:
      'Add hair-type outcomes and a next-step path into towels, styling and frizz care.',
    priority: 'CROSS-SELL TEST',
  },
  {
    query: 'how to use hair perfume / how long it lasts',
    intent: 'Learn · product discovery',
    result: 'Product category exists; no matching answer seen in sampled hub',
    evidence: 'Gap hypothesis · validate first',
    href: 'https://www.mykitsch.com/collections/hair-perfume',
    opportunity:
      'Validate demand, then create one canonical guide to application, layering, longevity and scent choice.',
    priority: 'CREATE IF VALIDATED',
  },
] as const;

const contentQueue = [
  {
    rank: '01',
    title: 'Heatless curl troubleshooting visual',
    format: 'Interactive decision tree + short video',
    why: 'Two current answer pages signal a strong topic cluster; one visual diagnostic can connect search, social and PDP education.',
    measure:
      'Non-brand query clicks → product click-through → assisted mature net orders',
    owner: 'PROPOSED · SEO + Content',
    due: 'After GSC baseline · week 2',
  },
  {
    rank: '02',
    title: 'Shampoo bar beginner hub',
    format: 'Canonical guide + comparison modules',
    why: 'Multiple current articles cover use, longevity and format comparison. A hub can reduce overlap and clarify the next shopping step.',
    measure:
      'Query coverage → engaged sessions → starter-bundle conversion → 60-day repeat',
    owner: 'PROPOSED · SEO + E-commerce',
    due: 'After overlap audit · week 3',
  },
  {
    rank: '03',
    title: 'Satin sleep routine',
    format: 'Routine builder + FAQ + creator proof',
    why: 'The current pillowcase answer can become a cross-category path across pillowcases, bonnets and scrunchies.',
    measure:
      'Organic assisted revenue → attach rate → second-category purchase',
    owner: 'PROPOSED · Content + Lifecycle',
    due: 'After journey review · week 4',
  },
  {
    rank: '04',
    title: 'Hair perfume search test',
    format: 'One canonical answer only after demand validation',
    why: 'The product franchise is visible, but the sampled editorial hub did not expose a matching education page.',
    measure:
      'Impressions and query breadth first; publish only with a defensible customer question',
    owner: 'PROPOSED · SEO Lead',
    due: 'Decision after demand check',
  },
] as const;

const evidenceFlows = [
  {
    source: 'Official Hair Care editorial hub',
    href: sources.blog,
    observation:
      'The public archive exists and exposes answer-led articles on heatless curls, shampoo bars, satin pillowcases, towels and styling.',
    hypothesis:
      'Kitsch can turn product education into a durable discovery layer, not only campaign support.',
    validation:
      'In Search Console, group non-brand queries by article, intent and country; reconcile clicks to GA4 engaged sessions and assisted product journeys.',
    decision:
      'Keep, consolidate or refresh each article based on query coverage, overlap and downstream behavior.',
  },
  {
    source: 'Google site-search snapshot',
    href: sources.googleBlog,
    observation:
      'A September 8, 2026 site query surfaced the Hair Care hub and individual articles, including localized URL variants. A site query confirms discovery, not rank or traffic.',
    hypothesis:
      'International variants may broaden reach, but canonical and hreflang governance should be checked for duplication or wrong-market indexing.',
    validation:
      'Use Search Console page indexing, canonical, hreflang and country reports; inspect a sample of US and localized URLs.',
    decision:
      'Preserve localized pages when they serve distinct markets; otherwise consolidate signals to the intended canonical.',
  },
  {
    source: 'Official category and product surfaces',
    href: sources.hairCare,
    observation:
      'Public category architecture connects concerns, product types and routines, while editorial pages answer adjacent how-to and comparison questions.',
    hypothesis:
      'Intent-aligned links between answer pages, collections and PDPs could make the path from learning to shopping clearer.',
    validation:
      'Measure organic landing page → collection/PDP click-through → mature net order, segmented by query class and new-to-brand status.',
    decision:
      'Add or revise internal links only where the next page resolves the same customer job.',
  },
  {
    source: 'Official Instagram profile',
    href: sources.instagram,
    observation:
      'The public @mykitsch profile is an official discovery surface, but public browsing does not expose reliable Instagram search-query, reach-from-search or conversion history.',
    hypothesis:
      'Plain-language product problems in names, captions, spoken hooks and on-screen text may improve social-search retrieval.',
    validation:
      'Use Instagram Insights and platform-native search checks to compare search-sourced reach, profile visits, saves and qualified site sessions by tagged content ID.',
    decision:
      'Scale a wording pattern only when discoverability and downstream quality improve together.',
  },
] as const;

function SourceLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

export function SearchEvidenceWorkbench() {
  return (
    <section
      className="search-evidence-workbench"
      aria-labelledby="search-evidence-title"
    >
      <header className="search-evidence-header">
        <div>
          <span>SEARCH EVIDENCE WORKBENCH</span>
          <h2 id="search-evidence-title">
            Turn search evidence into a content plan.
          </h2>
          <p>
            See what is publicly discoverable, what it may mean and which
            internal report is needed before choosing what to publish.
          </p>
          <GlossaryHint />
        </div>
        <div className="search-evidence-boundary">
          <CircleAlert aria-hidden="true" />
          <strong>Snapshot · September 8, 2026</strong>
          <span>
            Search results vary by time, market, device and personalization.
          </span>
        </div>
      </header>

      <section
        className="keyword-command-center"
        aria-labelledby="keyword-command-title"
      >
        <header>
          <div>
            <span>KEYWORDS + CURRENT RESULTS</span>
            <h3 id="keyword-command-title">
              What people may search—and what Kitsch has today.
            </h3>
            <p>
              Exact query patterns are taken from current Kitsch article titles
              and customer-language hypotheses. A public check can confirm a
              page exists; only Search Console and a keyword platform can verify
              impressions, rank, volume and clicks.
            </p>
          </div>
          <div
            className="keyword-snapshot-metrics"
            aria-label="Sample coverage summary"
          >
            <article>
              <strong>8</strong>
              <span>query patterns reviewed</span>
              <small>PUBLIC SAMPLE</small>
            </article>
            <article>
              <strong>7</strong>
              <span>with visible Kitsch coverage</span>
              <small>NOT RANK</small>
            </article>
            <article>
              <strong>1</strong>
              <span>high-fit gap to validate</span>
              <small>HYPOTHESIS</small>
            </article>
          </div>
        </header>

        <table className="keyword-table" aria-label="Keyword opportunity table">
          <thead>
            <tr className="keyword-table__head">
              <th scope="col">Search term</th>
              <th scope="col">Intent</th>
              <th scope="col">Current Kitsch result</th>
              <th scope="col">Opportunity</th>
              <th scope="col">Demand + rank</th>
            </tr>
          </thead>
          <tbody>
            {keywordOpportunities.map((item) => (
              <tr key={item.query}>
                <td data-label="Search term">
                  <Search aria-hidden="true" />
                  <strong>“{item.query}”</strong>
                </td>
                <td data-label="Intent">
                  <span>{item.intent}</span>
                  <b>{item.priority}</b>
                </td>
                <td data-label="Current Kitsch result">
                  <strong>{item.result}</strong>
                  <SourceLink href={item.href}>{item.evidence}</SourceLink>
                </td>
                <td data-label="Opportunity">
                  <p>{item.opportunity}</p>
                </td>
                <td data-label="Demand + rank">
                  <strong>—</strong>
                  <span>Connect GSC + keyword planner</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section
        className="search-content-queue"
        aria-labelledby="content-queue-title"
      >
        <header>
          <div>
            <span>CONTENT OPPORTUNITY QUEUE</span>
            <h3 id="content-queue-title">Publish the next useful answer.</h3>
          </div>
          <p>
            Priorities are editorial hypotheses, not performance claims. Open
            each brief to see why it belongs and how to measure it.
          </p>
        </header>
        <div>
          {contentQueue.map((item) => (
            <details key={item.rank}>
              <summary>
                <span>{item.rank}</span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.format}</small>
                </div>
                <ArrowRight aria-hidden="true" />
              </summary>
              <section>
                <div>
                  <span>WHY NOW</span>
                  <p>{item.why}</p>
                </div>
                <div>
                  <span>MEASURE</span>
                  <p>{item.measure}</p>
                </div>
                <div>
                  <span>OWNER</span>
                  <p>{item.owner}</p>
                </div>
                <div>
                  <span>DUE / GATE</span>
                  <p>{item.due}</p>
                </div>
              </section>
            </details>
          ))}
        </div>
      </section>

      <div className="search-evidence-decision-rail">
        <article>
          <Search aria-hidden="true" />
          <div>
            <span>WHAT WE KNOW</span>
            <strong>Kitsch already has a Hair Care editorial hub.</strong>
            <p>
              Public pages confirm the system exists—not how much demand or
              revenue it creates.
            </p>
          </div>
        </article>
        <article>
          <Target aria-hidden="true" />
          <div>
            <span>WHAT TO DECIDE</span>
            <strong>
              Which customer question deserves one canonical answer?
            </strong>
            <p>
              Choose by query coverage, business value, proof readiness and the
              next shopping step.
            </p>
          </div>
        </article>
        <article>
          <Database aria-hidden="true" />
          <div>
            <span>WHAT TO OPEN NEXT</span>
            <strong>GSC → GA4 → Shopify cohort.</strong>
            <p>
              Rank and traffic are incomplete until landing-page behavior and
              mature net orders are joined.
            </p>
          </div>
        </article>
      </div>

      <div
        className="search-evidence-source-map"
        aria-label="Sources reviewed and data required"
      >
        <article>
          <BookOpenText aria-hidden="true" />
          <span>OWNED EDITORIAL</span>
          <strong>Hair Care hub confirmed</strong>
          <p>Official archive and answer-led article pages were reviewed.</p>
          <SourceLink href={sources.blog}>Open editorial hub</SourceLink>
        </article>
        <article>
          <Search aria-hidden="true" />
          <span>PUBLIC SEARCH</span>
          <strong>Discovery, not performance</strong>
          <p>
            Site queries can reveal indexed-looking surfaces, never reliable
            rank or demand.
          </p>
          <SourceLink href={sources.googleHeatless}>Open query</SourceLink>
        </article>
        <article>
          <PlatformBrandIcon name="Instagram" size="small" label={false} />
          <span>SOCIAL SEARCH</span>
          <strong>Official profile confirmed</strong>
          <p>
            Query-level discovery and conversion require authorized Insights.
          </p>
          <SourceLink href={sources.instagram}>Open profile</SourceLink>
        </article>
        <article>
          <Database aria-hidden="true" />
          <span>MEASUREMENT GAP</span>
          <strong>GSC + GA4 + commerce</strong>
          <p>
            Needed to connect query, landing page, customer behavior and mature
            net order.
          </p>
          <b>INTERNAL DATA REQUIRED</b>
        </article>
      </div>

      <div className="search-evidence-flows">
        {evidenceFlows.map((item, index) => (
          <details key={item.source}>
            <summary>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <small>SOURCE → DECISION</small>
                <strong>{item.source}</strong>
              </div>
              <ArrowRight aria-hidden="true" />
            </summary>
            <div className="search-evidence-flow-grid">
              <div>
                <span>SOURCE</span>
                <SourceLink href={item.href}>Open public evidence</SourceLink>
              </div>
              <div>
                <span>OBSERVATION</span>
                <p>
                  <GlossaryText>{item.observation}</GlossaryText>
                </p>
              </div>
              <div>
                <span>HYPOTHESIS</span>
                <p>
                  <GlossaryText>{item.hypothesis}</GlossaryText>
                </p>
              </div>
              <div>
                <span>VALIDATE</span>
                <p>
                  <GlossaryText>{item.validation}</GlossaryText>
                </p>
              </div>
              <div>
                <span>DECISION</span>
                <p>
                  <GlossaryText>{item.decision}</GlossaryText>
                </p>
              </div>
            </div>
          </details>
        ))}
      </div>

      <section
        className="search-evidence-operating-plan"
        aria-labelledby="search-plan-title"
      >
        <header>
          <div>
            <span>ILLUSTRATIVE OPERATING PLAN</span>
            <h3 id="search-plan-title">A practical first 30 days</h3>
          </div>
          <p>
            No Kitsch performance is assumed. Replace this sequence only after
            internal access confirms a better priority.
          </p>
        </header>
        <ol>
          <li>
            <span>01</span>
            <RefreshCw aria-hidden="true" />
            <div>
              <strong>Build the baseline</strong>
              <p>
                Export 16 months of GSC pages and queries; add country, device,
                brand/non-brand and current canonical.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <ListChecks aria-hidden="true" />
            <div>
              <strong>Resolve overlap</strong>
              <p>
                Group URLs by customer intent and flag cannibalization, thin
                variants, outdated proof and missing links.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <CheckCircle2 aria-hidden="true" />
            <div>
              <strong>Ship one measurable test</strong>
              <p>
                Refresh or create one canonical page with an owner, proof
                review, commerce path and 30-day readout.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <footer className="search-evidence-footer">
        <FileSearch aria-hidden="true" />
        <div>
          <strong>Technical sources to verify in the operating cadence</strong>
          <p>
            Recheck crawl rules and sitemap coverage before each major migration
            or market rollout; public access alone does not prove indexation
            health.
          </p>
        </div>
        <SourceLink href={sources.robots}>Robots.txt</SourceLink>
        <SourceLink href={sources.sitemap}>XML sitemap</SourceLink>
      </footer>
    </section>
  );
}
