import {
  ArrowUpRight,
  BookOpenText,
  BookmarkCheck,
  ChevronRight,
  CircleAlert,
  Hash,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Quote,
  ScanSearch,
  ShieldCheck,
} from 'lucide-react';
import { PlatformBrandIcon } from './platform-brand-icon';
import './messaging-evidence-library.css';

const sources = {
  homepage: 'https://www.mykitsch.com/',
  founder: 'https://www.mykitsch.com/pages/our-founder',
  sustainable: 'https://www.mykitsch.com/collections/sustainable-products',
  airDry: 'https://www.mykitsch.com/products/kitsch-smoothing-air-dry-cream',
  blog: 'https://www.mykitsch.com/blogs/hair-care',
  instagram: 'https://www.instagram.com/mykitsch/',
  tiktok: 'https://www.tiktok.com/@kitsch',
  youtube: 'https://www.youtube.com/@mykitsch',
  pinterest: 'https://www.pinterest.com/mykitsch/',
} as const;

const examples = [
  {
    channel: 'Website · brand story',
    icon: Quote,
    excerpt: '“everyday beauty should be anything but ordinary”',
    pattern: 'Elevated utility',
    read: 'The brand makes ordinary routines feel more considered without positioning them as complicated or precious.',
    preserve: 'Keep the tension between practical use and emotional lift.',
    test: 'Pair this promise with a specific routine outcome on category and campaign pages.',
    source: sources.founder,
    scope: 'Founder page · captured Sep. 8, 2026',
  },
  {
    channel: 'Website · brand story',
    icon: ShieldCheck,
    excerpt: '“No fluff. No overhype.”',
    pattern: 'Plainspoken confidence',
    read: 'Short negation removes beauty-marketing excess and moves attention back to product usefulness.',
    preserve:
      'Use direct, low-friction sentences when the product proof is strong.',
    test: 'Follow confidence language with a substantiated mechanism, test condition or customer proof.',
    source: sources.founder,
    scope: 'Founder page · captured Sep. 8, 2026',
  },
  {
    channel: 'Website · announcement bar',
    icon: Megaphone,
    excerpt: '“Double the Drop: New fragrances are here!”',
    pattern: 'Compressed launch energy',
    read: 'Alliteration, novelty and a clear product event do the work in one line.',
    preserve: 'Keep announcement language fast, concrete and product-led.',
    test: 'Rotate one message at a time and connect each announcement version to a change ID and outcome.',
    source: sources.homepage,
    scope: 'US homepage snapshot · captured Sep. 8, 2026',
  },
  {
    channel: 'Website · urgency CTA',
    icon: MousePointerClick,
    excerpt: '“Get yours before it’s gone”',
    pattern: 'Conversational scarcity',
    read: 'The CTA sounds like a friend’s prompt rather than formal retail navigation.',
    preserve:
      'Use warm, human action language for genuinely limited collections.',
    test: 'Reserve scarcity for inventory-backed moments; compare it with benefit-led CTAs.',
    source: sources.homepage,
    scope: 'US homepage snapshot · captured Sep. 8, 2026',
  },
  {
    channel: 'PDP · Smoothing Air Dry Cream',
    icon: MessageCircle,
    excerpt: '“An air dry so good, it looks straight from the salon.”',
    pattern: 'Result first, mechanism second',
    read: 'The opening translates a low-effort behavior into a familiar high-value result before explaining ingredients.',
    preserve: 'Lead with the visible customer payoff, then earn it with proof.',
    test: 'Compare result-first and problem-first openings by qualified PDP engagement and net conversion.',
    source: sources.airDry,
    scope: 'US PDP snapshot · captured Sep. 8, 2026',
  },
  {
    channel: 'PDP · product benefit',
    icon: BookmarkCheck,
    excerpt: '“no heat, no fuss”',
    pattern: 'Paired friction removal',
    read: 'Rhythmic parallel language makes the benefit memorable and easy to reuse across formats.',
    preserve: 'Keep two-part phrases when they clarify the actual product job.',
    test: 'Build a message ladder from friction removed → visible result → substantiated proof.',
    source: sources.airDry,
    scope: 'US PDP snapshot · captured Sep. 8, 2026',
  },
  {
    channel: 'Collection · sustainability',
    icon: ShieldCheck,
    excerpt: '“designed to do more — without asking you to do more”',
    pattern: 'Purpose without sacrifice',
    read: 'Sustainability is framed as thoughtful product design, not extra customer effort.',
    preserve: 'Tie purpose to convenience and performance.',
    test: 'Add specific material or lifecycle evidence close to this promise to reduce skepticism.',
    source: sources.sustainable,
    scope: 'Sustainable-products collection · captured Sep. 8, 2026',
  },
  {
    channel: 'Blog · problem/solution education',
    icon: BookOpenText,
    excerpt: '“Heatless curls trade heat for time.”',
    pattern: 'Answer-first teaching',
    read: 'The article opens with the central trade-off instead of delaying the answer for search length.',
    preserve:
      'State the useful answer early, then explain technique and product fit.',
    test: 'Connect each answer block to a relevant product, comparison and next routine step.',
    source: sources.blog,
    scope: 'Hair Care index · article published Sep. 4, 2026',
  },
  {
    channel: 'Blog · search packaging',
    icon: ScanSearch,
    excerpt: '“How Long Does a Shampoo Bar Last? (Cost Per Wash)”',
    pattern: 'Question plus economic payoff',
    read: 'The title pairs a common product objection with the calculation a shopper needs to compare formats.',
    preserve:
      'Use explicit customer questions and decision criteria in titles.',
    test: 'Add transparent assumptions, comparison tables and FAQ schema; monitor non-brand query paths.',
    source: sources.blog,
    scope: 'Hair Care index · article published Sep. 4, 2026',
  },
] as const;

const formats = [
  [
    'Problem → visible result',
    'A recognizable routine friction opens the story; the product demonstrates the change.',
    'Preserve clarity. Test proof depth and customer specificity.',
  ],
  [
    'Routine → product system',
    'A day, occasion or beauty routine creates the setting for several useful products.',
    'Preserve contextual relevance. Test whether the next-product path improves cohort quality.',
  ],
  [
    'Launch → collectible moment',
    'New fragrance, seasonal collection or licensed world creates novelty and urgency.',
    'Preserve distinctiveness. Test overlap, message collision and full-price contribution.',
  ],
  [
    'Founder → earned scale',
    'Bootstrapping, practical invention and customer closeness explain why the brand exists.',
    'Preserve specificity. Test shorter founder proof in retail, recruiting and creator briefs.',
  ],
  [
    'Question → direct answer',
    'Search content names the customer question and answers before expanding the explanation.',
    'Preserve usefulness. Test assisted journeys, not only last-click blog conversion.',
  ],
] as const;

const ctas = [
  [
    'SHOP NOW',
    'Direct commerce',
    sources.homepage,
    'Use when the destination and offer are already clear.',
  ],
  [
    'TUNE IN NOW',
    'Founder/audio story',
    sources.founder,
    'Use for listening formats; keep the content promise specific.',
  ],
  [
    'WATCH HERE',
    'Founder/video story',
    sources.founder,
    'Useful but generic; test a benefit-led label for accessibility and intent.',
  ],
  [
    'Notify me when available',
    'Back-in-stock capture',
    'https://www.mykitsch.com/collections/whats-new/products/back-to-school-bundle',
    'Preserve explicit expectation setting and connect signup to inventory status.',
  ],
] as const;

const themes = [
  [
    'Elevated everyday',
    'Ordinary routines become more polished, enjoyable or exceptional.',
  ],
  [
    'Ease without compromise',
    'Low effort, heat-free or time-saving benefits appear repeatedly.',
  ],
  [
    'Visible proof',
    'Before/after, reviews, test conditions and demonstrations reduce explanation burden.',
  ],
  [
    'Routine ecosystems',
    'Products are framed as steps and companions, not only isolated SKUs.',
  ],
  [
    'Accessible innovation',
    'Materials, formats and mechanisms are explained in practical language.',
  ],
  [
    'Cultural newness',
    'Seasonal drops, fragrance and collaborations refresh high-frequency essentials.',
  ],
] as const;

function SourceLink({
  href,
  label = 'Open source',
}: {
  href: string;
  label?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {label}
      <ArrowUpRight />
    </a>
  );
}

export function MessagingEvidenceLibrary() {
  return (
    <section
      className="message-library"
      aria-label="Kitsch messaging evidence library"
    >
      <header className="message-library-hero">
        <div>
          <span>OBSERVED MESSAGING EVIDENCE</span>
          <h2>What Kitsch says, how it says it, and what to test next.</h2>
          <p>
            A dated library of short excerpts and public-format observations—not
            an internal brand book, a complete caption corpus or a performance
            analysis.
          </p>
        </div>
        <aside>
          <CircleAlert />
          <strong>Snapshot boundary</strong>
          <p>
            Website copy was captured from current US public pages on Sep. 8,
            2026. Social platforms restrict stable machine-readable caption
            history, so social themes below are directional and no hashtag
            frequency is claimed.
          </p>
        </aside>
      </header>

      <div
        className="message-platform-row"
        aria-label="Official Kitsch messaging surfaces"
      >
        <SourceLink href={sources.homepage} label="Website" />
        <SourceLink href={sources.blog} label="Blog" />
        <span>
          <PlatformBrandIcon name="Instagram" size="small" />
          <SourceLink href={sources.instagram} label="Profile" />
        </span>
        <span>
          <PlatformBrandIcon name="TikTok" size="small" />
          <SourceLink href={sources.tiktok} label="Profile" />
        </span>
        <span>
          <PlatformBrandIcon name="YouTube" size="small" />
          <SourceLink href={sources.youtube} label="Channel" />
        </span>
        <span>
          <PlatformBrandIcon name="Pinterest" size="small" />
          <SourceLink href={sources.pinterest} label="Profile" />
        </span>
      </div>

      <div className="message-example-grid">
        {examples.map(({ icon: Icon, ...example }) => (
          <article key={example.excerpt}>
            <header>
              <Icon />
              <span>{example.channel}</span>
            </header>
            <blockquote>{example.excerpt}</blockquote>
            <strong>{example.pattern}</strong>
            <p>{example.read}</p>
            <dl>
              <dt>Preserve</dt>
              <dd>{example.preserve}</dd>
              <dt>Test</dt>
              <dd>{example.test}</dd>
            </dl>
            <footer>
              <small>{example.scope}</small>
              <SourceLink href={example.source} />
            </footer>
          </article>
        ))}
      </div>

      <details className="message-disclosure" open>
        <summary>
          <div>
            <span>STORYTELLING FORMATS</span>
            <strong>
              Five repeatable structures across owned and observed social
              surfaces
            </strong>
          </div>
          <ChevronRight />
        </summary>
        <div className="message-disclosure-body">
          <div className="message-format-flow">
            {formats.map((format, index) => (
              <article key={format[0]}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{format[0]}</h3>
                <p>{format[1]}</p>
                <footer>{format[2]}</footer>
              </article>
            ))}
          </div>
        </div>
      </details>

      <details className="message-disclosure">
        <summary>
          <div>
            <span>CTA SYSTEM</span>
            <strong>
              Short verbs, clear destinations, limited explanation
            </strong>
          </div>
          <ChevronRight />
        </summary>
        <div className="message-disclosure-body">
          <div className="message-cta-grid">
            {ctas.map((cta) => (
              <article key={cta[0]}>
                <MousePointerClick />
                <h3>{cta[0]}</h3>
                <span>{cta[1]}</span>
                <p>{cta[3]}</p>
                <SourceLink href={cta[2]} />
              </article>
            ))}
          </div>
        </div>
      </details>

      <details className="message-disclosure">
        <summary>
          <div>
            <span>RECURRING THEMES</span>
            <strong>The message architecture worth protecting</strong>
          </div>
          <ChevronRight />
        </summary>
        <div className="message-disclosure-body">
          <div className="message-theme-grid">
            {themes.map((theme, index) => (
              <article key={theme[0]}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{theme[0]}</h3>
                  <p>{theme[1]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </details>

      <details className="message-disclosure">
        <summary>
          <div>
            <span>HASHTAG + SOCIAL LANGUAGE</span>
            <strong>
              Do not manufacture a pattern from an inaccessible corpus
            </strong>
          </div>
          <ChevronRight />
        </summary>
        <div className="message-disclosure-body message-hashtag-boundary">
          <Hash />
          <div>
            <h3>Current evidence boundary</h3>
            <p>
              The official Instagram, TikTok and Pinterest profiles confirm
              active visual and creator-led surfaces, while the public retrieval
              used here did not provide a stable, comparable caption-and-hashtag
              history. A few indexed fragments are not enough to report branded,
              category or campaign hashtag frequency.
            </p>
          </div>
          <div>
            <h3>Internal data to connect</h3>
            <p>
              Export post ID, publish date, full caption, hashtags, format,
              creator, product, campaign, reach, watch time, saves, shares,
              clicks and paid status. Then separate branded, category, intent,
              occasion and campaign tags.
            </p>
          </div>
          <div>
            <h3>Decision it unlocks</h3>
            <p>
              Keep tags that improve discovery or campaign continuity; retire
              decorative tags that add no qualified reach, navigation value or
              reusable learning.
            </p>
          </div>
        </div>
      </details>
    </section>
  );
}
