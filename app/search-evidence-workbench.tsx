import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  CircleAlert,
  Database,
  FileSearch,
  Search,
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
            Trace the signal before choosing the content.
          </h2>
          <p>
            Public sources show what exists and what Google can discover. Only
            authorized platform data can show impressions, ranking, traffic,
            attribution or profit.
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
          <details key={item.source} open={index === 0}>
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
