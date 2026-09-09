import {
  ArrowUpRight,
  ChevronDown,
  CircleAlert,
  Database,
  ExternalLink,
  FlaskConical,
  Layers3,
  Megaphone,
  Radio,
  ShieldCheck,
  ShoppingBag,
  Target,
} from 'lucide-react';
import { EvidenceToAction } from './evidence-to-action';
import './competitor-intelligence.css';

const brands = [
  {
    name: 'Slip',
    lane: 'SLEEP BEAUTY',
    site: 'https://www.slip.com/',
    instagram: 'https://www.instagram.com/slip/',
    tiktok: 'https://www.tiktok.com/@slip',
    ig: '≈309K',
    tt: '≈7K',
    price: '$26–$163',
    commerce:
      'Shopify · Sephora · Nordstrom · Ulta · prestige department stores',
    revenue: '$3.8M–$7.0M annualized DTC proxy',
    revenueNote: 'Third-party estimate; excludes wholesale and retail.',
    meta: '≈150 active / 441 tracked',
    google: '≈78 tracked',
    domain: 'slip.com',
    metaQuery: 'Slip silk pillowcase',
    message:
      'Clinical beauty-sleep proof, celebrity/editorial authority and premium gifting.',
    move: 'Protect affordable satin leadership; strengthen substantiated comparison and sleep-routine bundles.',
  },
  {
    name: 'Crown Affair',
    lane: 'PREMIUM RITUAL',
    site: 'https://www.crownaffair.com/',
    instagram: 'https://www.instagram.com/crownaffair/',
    tiktok: 'https://www.tiktok.com/@crownaffair',
    ig: '≈148K',
    tt: '≈20K',
    price: '$24–$133',
    commerce: 'Shopify · Sephora · premium collaborations',
    revenue: '$5.7M–$10.3M annualized DTC proxy',
    revenueNote:
      'Third-party estimate; a separate source reported $20M in 2024.',
    meta: '≈296 active',
    google: '≈200 tracked',
    domain: 'crownaffair.com',
    metaQuery: 'Crown Affair',
    message:
      'Hair ritual as modern luxury; stronger-hair claims, air-dry ease and creator demonstrations.',
    move: 'Match functional clarity without copying premium slowness; own accessible routines at scale.',
  },
  {
    name: 'dae',
    lane: 'MODERN HAIRCARE',
    site: 'https://daehair.com/',
    instagram: 'https://www.instagram.com/daehair/',
    tiktok: 'https://www.tiktok.com/@daehair',
    ig: '≈318K',
    tt: '≈175K',
    price: '$20–$56',
    commerce: 'Shopify · Sephora · Amazon',
    revenue: '$2.2M–$4.0M annualized DTC proxy',
    revenueNote: 'Third-party estimate; excludes Sephora and Amazon.',
    meta: '≈57 active',
    google: '≈41 tracked',
    domain: 'daehair.com',
    metaQuery: 'dae hair',
    message:
      'Desert botanicals, sensory styling and creator-led “soft volume, no crunch” education.',
    move: 'Connect Kitsch styling benefits to distinctive ingredients and repeatable technique education.',
  },
  {
    name: 'Gisou',
    lane: 'PRESTIGE FRAGRANCE',
    site: 'https://gisou.com/',
    instagram: 'https://www.instagram.com/gisou/',
    tiktok: 'https://www.tiktok.com/@gisou',
    ig: '≈2.2M',
    tt: '≈1.5M',
    price: '$22–$46',
    commerce: 'Shopify · Sephora · Revolve · international retail',
    revenue: '$10.5M–$19.2M annualized DTC proxy',
    revenueNote: 'Global storefront estimate; excludes wholesale and retail.',
    meta: '≈235 active / 3.6K tracked',
    google: '≈1K tracked',
    domain: 'gisou.com',
    metaQuery: 'Gisou',
    message:
      'Founder-led honey heritage, ingredient IP, “scentmaxxing” and hair/body fragrance layering.',
    move: 'Differentiate Kitsch hair perfume on odor technology, accessible discovery and cross-category routine.',
  },
  {
    name: 'Mermade Hair',
    lane: 'STYLING TOOLS',
    site: 'https://mermadehair.com/',
    instagram: 'https://www.instagram.com/mermade.hair/',
    tiktok: 'https://www.tiktok.com/@mermade.hair',
    ig: '≈542K',
    tt: '≈134K',
    price: '$39–$159',
    commerce: 'Shopify · Amazon · Target · international retail',
    revenue: '$0.36M–$0.66M UK annualized DTC proxy',
    revenueNote: 'UK storefront only; not a company or U.S. revenue estimate.',
    meta: '≈165 active / 1K tracked',
    google: '≈64 tracked',
    domain: 'mermadehair.com',
    metaQuery: 'Mermade Hair',
    message:
      'Fast, dramatic styling transformations amplified by creators, product demos and discount codes.',
    move: 'Frame heatless results around damage avoidance and overnight convenience—not tool spectacle.',
  },
  {
    name: 'Emi Jay',
    lane: 'FASHION ACCESSORIES',
    site: 'https://www.emijay.com/',
    instagram: 'https://www.instagram.com/emijayinc/',
    tiktok: 'https://www.tiktok.com/@emijayinc',
    ig: '≈288K',
    tt: '≈141K',
    price: '$18–$88',
    commerce: 'Shopify · Sephora · Revolve · TikTok Shop',
    revenue: '≈$15M–$25M company revenue',
    revenueNote:
      'Industry-source estimate reported by BeautyMatter; not audited.',
    meta: 'Not verified',
    google: 'Not verified',
    domain: 'emijay.com',
    metaQuery: 'Emi Jay',
    message:
      'Collectible fashion, recognizable drops, collaborations and a controlled expansion into haircare.',
    move: 'Use Kitsch breadth as a franchise system; preserve collectible excitement without SKU noise.',
  },
  {
    name: 'GIMME Beauty',
    lane: 'MASS ACCESSORIES',
    site: 'https://gimmebeauty.com/',
    instagram: 'https://www.instagram.com/gimmebeauty/',
    tiktok: 'https://www.tiktok.com/@gimmebeauty',
    ig: '≈122K',
    tt: '≈23K',
    price: '$8–$15',
    commerce: 'Shopify · Ulta · mass retail · subscription',
    revenue: '$1.8M–$3.3M annualized DTC proxy',
    revenueNote:
      'Third-party estimate; excludes its stated 2,600-store footprint.',
    meta: '≈103 active',
    google: '≈87 tracked',
    domain: 'gimmebeauty.com',
    metaQuery: 'GIMME Beauty',
    message:
      'Hair-type fit, damage-free utility, community identity and a 20%-off subscription offer.',
    move: 'Defend accessible utility with stronger design desire, omnichannel proof and lifecycle economics.',
  },
  {
    name: 'Grace Eleyae',
    lane: 'SATIN PROTECTION',
    site: 'https://www.graceeleyae.com/',
    instagram: 'https://www.instagram.com/graceeleyae/',
    tiktok: 'https://www.tiktok.com/@graceeleyae',
    ig: '≈112K',
    tt: 'Not surfaced',
    price: '$23–$28',
    commerce: 'Shopify · Amazon · selective retail',
    revenue: '$0.7M–$1.3M annualized DTC proxy',
    revenueNote: 'Third-party estimate; excludes marketplace and wholesale.',
    meta: '≈27 active',
    google: '≈65 tracked',
    domain: 'graceeleyae.com',
    metaQuery: 'Grace Eleyae',
    message:
      'Satin protection built around the original Slap cap, inclusive hair needs and promotional bundles.',
    move: 'Show Kitsch protection by hair type and occasion while using broader shower/sleep adjacencies.',
  },
  {
    name: 'invisibobble',
    lane: 'GLOBAL ACCESSORIES',
    site: 'https://www.invisibobble.com/',
    instagram: 'https://www.instagram.com/invisibobble/',
    tiktok: 'https://www.tiktok.com/@invisibobble',
    ig: '≈171K',
    tt: 'Not surfaced',
    price: '$8–$20',
    commerce: 'Shopify · Ulta · Amazon · global retail',
    revenue: '$0.75M–$1.36M annualized DTC proxy',
    revenueNote:
      'Global storefront estimate; materially excludes retail distribution.',
    meta: '≈39 active / 524 tracked',
    google: '≈78 tracked',
    domain: 'invisibobble.com',
    metaQuery: 'invisibobble',
    message:
      'Recognizable functional IP, playful collaborations, charms and “strong grip” product demonstrations.',
    move: 'Make Kitsch’s accessory architecture easier to shop by job, hair type and style identity.',
  },
];

const sourceMap: Record<string, string> = {
  Slip: 'https://brandsearch.co/brands/slip.com',
  'Crown Affair': 'https://brandsearch.co/brands/crownaffair.com',
  dae: 'https://brandsearch.co/brands/daehair.com',
  Gisou: 'https://brandsearch.co/brands/gisou.com',
  'Mermade Hair': 'https://brandsearch.co/brands/mermadehair.co.uk',
  'Emi Jay': 'https://beautymatter.com/articles/the-emi-jay-story',
  'GIMME Beauty': 'https://brandsearch.co/brands/gimmebeauty.com',
  'Grace Eleyae': 'https://brandsearch.co/brands/graceeleyae.com',
  invisibobble: 'https://brandsearch.co/brands/invisibobble.com',
};

const enc = (s: string) => encodeURIComponent(s);
const BrandLogo = ({ brand, domain }: { brand: string; domain: string }) => (
  <span className="competitor-logo">
    {/* Remote favicons are decorative identity cues, not content images. */}
    {/* oxlint-disable-next-line next/no-img-element */}
    <img
      src={`https://www.google.com/s2/favicons?sz=128&domain_url=https://${domain}`}
      alt=""
      aria-hidden="true"
    />
    <span>{brand}</span>
  </span>
);
const Google = ({ domain }: { domain: string }) => (
  <a
    href={`https://adstransparency.google.com/?region=US&domain=${domain}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    Google ads <ExternalLink />
  </a>
);
const Meta = ({ query }: { query: string }) => (
  <a
    href={`https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=US&q=${enc(query)}&search_type=keyword_unordered`}
    target="_blank"
    rel="noopener noreferrer"
  >
    Meta ads <ExternalLink />
  </a>
);

export function CompetitorIntelligence() {
  return (
    <div className="page-grid">
      <section className="competitor-hero">
        <div>
          <p>U.S. MARKET · COMPETITOR MAP</p>
          <h1>Know the pressure. Choose the response.</h1>
          <span>
            U.S.-relevant brands selected for direct product, price, customer,
            retail or attention overlap. Snapshot: September 8, 2026.
          </span>
        </div>
        <div className="competitor-hero-stats">
          <article>
            <strong>9</strong>
            <span>tracked rivals</span>
          </article>
          <article>
            <strong>4</strong>
            <span>strategic lanes</span>
          </article>
          <article>
            <strong>18</strong>
            <span>official ad-library links</span>
          </article>
        </div>
      </section>
      <EvidenceToAction
        evidence="Official sites, public social profiles, current prices, retailer presence, ad-library surfaces and directional third-party snapshots."
        interpretation="Four strategic lanes clarify where competitors apply pressure; follower and ad presence do not prove demand or efficiency."
        internal="Kitsch share of search, win/loss research, retailer sell-through, paid incrementality and contribution-adjusted customer cohorts."
        decision="Choose the lane to defend, differentiate or test—and write the evidence threshold that would change the choice."
        owner="Brand + Growth"
      />
      <section className="wide-card comp-boundary">
        <CircleAlert />
        <div>
          <strong>Read the evidence correctly</strong>
          <p>
            Followers and ad counts are changing public or third-party
            snapshots. Revenue ranges are directional DTC proxies unless
            explicitly noted; they are not audited company revenue and usually
            exclude Amazon, Sephora, Ulta, Target and wholesale. “Meta active”
            and ad longevity show pressure—not spend, ROAS or success.
          </p>
        </div>
      </section>
      <section
        className="wide-card comp-choice-board"
        aria-labelledby="comp-choice-title"
      >
        <header>
          <div>
            <p>THREE DECISIONS THIS MAP SUPPORTS</p>
            <h2 id="comp-choice-title">Defend, differentiate, test</h2>
          </div>
          <span className="signal hypothesis">HYPOTHESES TO VALIDATE</span>
        </header>
        <div>
          <article>
            <ShieldCheck aria-hidden="true" />
            <span>DEFEND</span>
            <strong>Accessible sleep + protection</strong>
            <p>
              Protect price clarity and retail reach while strengthening
              material proof and routine education.
            </p>
            <small>
              Next: compare conversion, margin and repeat by protection entry
              product.
            </small>
          </article>
          <article>
            <Layers3 aria-hidden="true" />
            <span>DIFFERENTIATE</span>
            <strong>Fragrance as a portfolio gateway</strong>
            <p>
              Make discovery, odor technology and cross-category ritual more
              useful than prestige storytelling alone.
            </p>
            <small>
              Next: measure first fragrance order → second-category purchase.
            </small>
          </article>
          <article>
            <FlaskConical aria-hidden="true" />
            <span>TEST</span>
            <strong>A simpler way to shop the range</strong>
            <p>
              Organize accessories and care by customer job, hair type and
              occasion—not only by product format.
            </p>
            <small>
              Next: test one guided collection against the current path.
            </small>
          </article>
        </div>
      </section>
      <section className="comp-lanes">
        {[
          [
            'ACCESSIBLE ECOSYSTEM',
            'Kitsch · GIMME',
            'Broad utility, low-friction pricing and retail reach.',
          ],
          [
            'PREMIUM RITUAL',
            'Slip · Crown Affair · Gisou',
            'Proof, heritage and elevated daily ritual.',
          ],
          [
            'FASHION + TOOLS',
            'Emi Jay · Mermade Hair',
            'Drops, collaborations and visible transformation.',
          ],
          [
            'PROTECTION + IP',
            'Grace Eleyae · invisibobble',
            'Specific hair problems solved by recognizable formats.',
          ],
        ].map((x, i) => (
          <article key={x[0]}>
            <span>0{i + 1}</span>
            <strong>{x[0]}</strong>
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
          </article>
        ))}
      </section>
      <section className="wide-card">
        <div className="comp-title">
          <div>
            <p>COMPETITOR DIRECTORY</p>
            <h2>Compare commerce, audience and media</h2>
          </div>
          <span className="signal public">PUBLIC + ESTIMATED</span>
        </div>
        <div className="comp-grid">
          {brands.map((b) => (
            <article className="comp-card" key={b.name}>
              <header>
                <div>
                  <span>{b.lane}</span>
                  <h3>
                    <BrandLogo brand={b.name} domain={b.domain} />
                  </h3>
                </div>
                <a
                  href={b.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${b.name} website`}
                >
                  <ArrowUpRight />
                </a>
              </header>
              <div className="comp-social">
                <a href={b.instagram} target="_blank" rel="noopener noreferrer">
                  <Radio /> Instagram <b>{b.ig}</b>
                </a>
                <a href={b.tiktok} target="_blank" rel="noopener noreferrer">
                  TikTok <b>{b.tt}</b>
                </a>
              </div>
              <details className="comp-details">
                <summary>
                  View market evidence
                  <ChevronDown aria-hidden="true" />
                </summary>
                <dl>
                  <dt>Visible pricing</dt>
                  <dd>{b.price}</dd>
                  <dt>E-commerce footprint</dt>
                  <dd>{b.commerce}</dd>
                  <dt>Revenue signal</dt>
                  <dd>
                    <strong>{b.revenue}</strong>
                    <small>
                      {b.revenueNote}{' '}
                      <a
                        href={sourceMap[b.name]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Evidence <ExternalLink />
                      </a>
                    </small>
                  </dd>
                  <dt>Communication strategy</dt>
                  <dd>{b.message}</dd>
                </dl>
              </details>
              <div className="comp-ads">
                <div>
                  <span>GOOGLE ARCHIVE</span>
                  <strong>{b.google}</strong>
                </div>
                <div>
                  <span>META LIBRARY</span>
                  <strong>{b.meta}</strong>
                </div>
                <nav>
                  <Google domain={b.domain} />
                  <Meta query={b.metaQuery} />
                </nav>
              </div>
              <div className="comp-move">
                <Target />
                <p>
                  <b>Kitsch move</b>
                  {b.move}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <details className="wide-card comp-analysis-details">
        <summary>
          <div className="comp-title">
            <div>
              <p>MESSAGE + MEDIA READOUT</p>
              <h2>What competitor messages emphasize</h2>
            </div>
            <span className="signal estimate">DIRECTIONAL</span>
          </div>
          <ChevronDown aria-hidden="true" />
        </summary>
        <div className="comp-media-matrix">
          {[
            [
              'Proof authority',
              'Slip · Crown Affair',
              'Clinical/quantified proof, awards and premium editorial codes',
              'Build a governed proof ladder for satin, heatless and haircare claims.',
            ],
            [
              'Sensory desire',
              'Gisou · dae',
              'Ingredient worlds, scent language and high-production creator content',
              'Pair Kitsch’s fragrance newness with mechanism, occasion and repeat path.',
            ],
            [
              'Transformation speed',
              'Mermade Hair',
              'Fast visual outcomes, creator codes and tool-led spectacle',
              'Own zero-heat convenience and lower-friction routines.',
            ],
            [
              'Collectibility',
              'Emi Jay · invisibobble',
              'Drops, colors, collaborations, charms and recognizable product forms',
              'Separate true concepts from variants; measure full-price demand and halo.',
            ],
            [
              'Utility + offer',
              'GIMME · Grace Eleyae',
              'Hair-type fit, protection, bundles, subscription and BOGO',
              'Keep value clarity while making Kitsch’s portfolio easier to navigate.',
            ],
          ].map((r, i) => (
            <article key={r[0]}>
              <span>0{i + 1}</span>
              <h3>{r[0]}</h3>
              <strong>{r[1]}</strong>
              <p>{r[2]}</p>
              <small>Kitsch response</small>
              <p>{r[3]}</p>
            </article>
          ))}
        </div>
      </details>
      <section className="two-col">
        <details className="wide-card comp-operating-details">
          <summary>
            <ShoppingBag aria-hidden="true" />
            <span>Open commercial pressure map</span>
            <ChevronDown aria-hidden="true" />
          </summary>
          <ul className="commerce-list">
            <li>
              <b>Mass/value:</b> GIMME and Kitsch overlap most directly on
              accessible accessories.
            </li>
            <li>
              <b>Prestige:</b> Slip, Crown Affair and Gisou raise the proof and
              brand-world standard.
            </li>
            <li>
              <b>Fashion:</b> Emi Jay turns a functional clip into a
              status-bearing collectible.
            </li>
            <li>
              <b>Performance:</b> Mermade owns visible tool transformation;
              Grace and invisibobble own focused mechanisms.
            </li>
          </ul>
        </details>
        <details className="wide-card comp-operating-details">
          <summary>
            <Database aria-hidden="true" />
            <span>Open monthly operating cadence</span>
            <ChevronDown aria-hidden="true" />
          </summary>
          <ol className="number-list">
            <li>
              Refresh follower, price, assortment and ad-library snapshots.
            </li>
            <li>
              Code new concepts by problem, proof, offer, format and landing
              page.
            </li>
            <li>
              Flag sustained concepts—but never call them winners without spend
              and outcomes.
            </li>
            <li>
              Translate one market movement into a Kitsch test with an owner and
              stop/scale rule.
            </li>
          </ol>
        </details>
      </section>
      <section className="wide-card comp-final">
        <Megaphone />
        <h3>The strategic answer is not “copy the competitor.”</h3>
        <p>
          Kitsch can combine the accessibility of GIMME, the proof discipline of
          Slip, the cultural velocity of Emi Jay, and the ritual architecture of
          Crown Affair—without surrendering its own advantage: an unusually
          broad, affordable, omnichannel everyday-essentials ecosystem.
        </p>
      </section>
    </div>
  );
}
