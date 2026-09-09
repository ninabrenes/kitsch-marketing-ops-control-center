import {
  ArrowUpRight,
  BookOpenText,
  BookmarkCheck,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Eye,
  FlaskConical,
  Hash,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Network,
  Quote,
  ScanSearch,
  ShieldCheck,
  Target,
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
  facebook: 'https://www.facebook.com/mykitsch/',
  tiktok: 'https://www.tiktok.com/@kitsch',
  youtube: 'https://www.youtube.com/@mykitsch',
  pinterest: 'https://www.pinterest.com/mykitsch/',
} as const;

const socialCaptionExamples = [
  {
    platform: 'Instagram' as const,
    excerpt: '“just a little hair tea from a hairapist”',
    pattern: 'Person-led hook → question → recurring giveaway mechanic',
    hashtags:
      '#kitsch · #kitschtakescollege · #beautyessentials · #hairstylist · #sorority',
    read: 'The playful hook earns attention, while the question and monthly incentive are designed to create comments and repeat participation.',
    translate:
      'Keep the personality, but connect the question to one learnable customer need or product decision.',
    href: 'https://www.instagram.com/mykitsch/reel/DdCV0kGvgc8/',
    scope: 'Official Instagram Reel · Sep. 8, 2026',
  },
  {
    platform: 'Instagram' as const,
    excerpt: '“what’s in our US Open bag?”',
    pattern: 'Cultural moment → routine bundle → audience prompt',
    hashtags:
      '#usopen · #whatsinmybag · #hairessentials · #hairaccessories · #kitsch',
    read: 'A familiar editorial format turns several products into one occasion-based routine instead of isolated SKUs.',
    translate:
      'Reuse the same “bag” as a landing-page bundle, email module and retailer endcap story.',
    href: 'https://www.instagram.com/mykitsch/reel/DdAM7rGhwEr/',
    scope: 'Official Instagram Reel · Sep. 8, 2026',
  },
  {
    platform: 'Instagram' as const,
    excerpt: '“fall has officially entered its cozy era”',
    pattern: 'Seasonal identity → sensory language → scent question',
    hashtags:
      '#fall · #kitsch · #kitschtakescollege · #sorority · #hairperfume',
    read: 'The caption sells an identity and mood before asking the customer to choose a scent.',
    translate:
      'Carry the same scent language into the PDP, sampler follow-up and fragrance quiz.',
    href: 'https://www.instagram.com/mykitsch/reel/Dc9ZaCrSoWz/',
    scope: 'Official Instagram Reel · Sep. 7, 2026',
  },
  {
    platform: 'Facebook' as const,
    excerpt: '“Frizz? Never heard of her.”',
    pattern: 'Punchline → product reveal → benefit detail → questions',
    hashtags: 'No stable hashtag set visible in the indexed post',
    read: 'Facebook carries more explanatory detail than the short hook: product role, zero-heat benefit, ingredients and a comment prompt.',
    translate:
      'Keep the hook, then add proof, a direct product link and one answerable question for the community.',
    href: 'https://www.facebook.com/mykitsch/posts/1228609889311435/',
    scope: 'Official Facebook post · public indexed capture',
  },
] as const;

const channelTranslation = [
  [
    'Website / PDP',
    'Promise → mechanism → proof → how to use',
    'Conversion, confidence and claim consistency',
  ],
  [
    'Instagram',
    'Playful hook → visual payoff → question → selective hashtags',
    'Discovery, saves, shares and cultural relevance',
  ],
  [
    'Facebook',
    'Hook → benefit detail → ingredients/proof → link → question',
    'Community explanation, traffic and retargetable engagement',
  ],
  [
    'Email / SMS',
    'Occasion → one useful benefit → one offer → one CTA',
    'Click quality, conversion and routine expansion',
  ],
  [
    'Creator brief',
    'Personal situation → demonstration → result → disclosure',
    'Believable proof, qualified traffic and reusable learning',
  ],
  [
    'Retail / marketplace',
    'Customer question → concise answer → approved proof',
    'Fast comprehension and channel-consistent product truth',
  ],
] as const;

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

const workflow = [
  {
    icon: Eye,
    step: '01',
    title: 'Observe',
    copy: 'Start with the exact public words customers are seeing now.',
  },
  {
    icon: ScanSearch,
    step: '02',
    title: 'Decode',
    copy: 'Name the hook, promise, proof and customer response it invites.',
  },
  {
    icon: Network,
    step: '03',
    title: 'Adapt',
    copy: 'Keep one product truth, then reshape it for each channel’s job.',
  },
  {
    icon: Target,
    step: '04',
    title: 'Decide',
    copy: 'Approve one test, one owner and one success measure.',
  },
] as const;

const decisions = [
  {
    priority: 'Priority 01',
    title: 'Lock one message spine for heatless styling',
    evidence:
      '“An air dry so good, it looks straight from the salon” and “no heat, no fuss” already pair visible payoff with friction removal.',
    move: 'Approve friction → result → proof → how-to as the shared spine for PDP, creator briefs, paid creative and CRM.',
    owner: 'Brand + E-commerce',
    measure:
      'Internal: qualified PDP engagement, add-to-cart rate and net conversion by message version.',
  },
  {
    priority: 'Priority 02',
    title: 'Turn occasion content into a shoppable routine',
    evidence:
      '“What’s in our US Open bag?” makes a familiar cultural format carry several products at once.',
    move: 'Test one occasion story as a Reel, landing-page bundle, email module and retailer story—using the same campaign ID.',
    owner: 'Social + CRM + E-commerce',
    measure:
      'Internal: qualified clicks, bundle attach rate, conversion and new-customer contribution.',
  },
  {
    priority: 'Priority 03',
    title: 'Make every social prompt answer a business question',
    evidence:
      'Current public captions use questions and recurring participation mechanics to invite comments.',
    move: 'Map each prompt to one learning goal: need state, scent preference, objection, routine step or next-product demand.',
    owner: 'Social + Consumer Insights',
    measure:
      'Public: response themes and saves. Internal: assisted visits, conversion and cohort quality.',
  },
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
          <span>CMO DECISION VIEW</span>
          <h2>Choose the message to scale next.</h2>
          <p>
            Use this page before a launch, brief or campaign review. It turns
            current public language into a channel-ready test with an owner and
            a success measure.
          </p>
        </div>
        <aside>
          <CircleAlert />
          <strong>Snapshot boundary</strong>
          <p>
            Website copy and the selective public-caption sample were captured
            on Sep. 8, 2026. Four posts can reveal patterns, not frequency,
            reach, engagement or revenue. Those require authorized exports.
          </p>
        </aside>
      </header>

      <section
        className="message-workflow"
        aria-labelledby="message-workflow-title"
      >
        <header>
          <span>HOW TO USE THIS PAGE</span>
          <h3 id="message-workflow-title">
            Evidence → pattern → adaptation → decision
          </h3>
          <p>
            Read left to right. The page is complete only when a message has an
            owner and a measurable next action.
          </p>
        </header>
        <div>
          {workflow.map(({ icon: Icon, ...item }) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <Icon aria-hidden="true" />
              <h4>{item.title}</h4>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="message-decisions"
        aria-labelledby="message-decisions-title"
      >
        <header>
          <div>
            <span>RECOMMENDED NEXT MOVES</span>
            <h3 id="message-decisions-title">
              Three decisions for the next creative review
            </h3>
            <p>
              These are evidence-led test recommendations—not approved Kitsch
              strategy, targets or performance claims.
            </p>
          </div>
          <small>DEMONSTRATION RECOMMENDATIONS</small>
        </header>
        <div>
          {decisions.map((decision) => (
            <details key={decision.title}>
              <summary>
                <span>{decision.priority}</span>
                <h4>{decision.title}</h4>
                <div>
                  <strong>{decision.owner}</strong>
                  <span>
                    Open action brief <ChevronRight aria-hidden="true" />
                  </span>
                </div>
              </summary>
              <div className="message-decision-brief">
                <div>
                  <Eye aria-hidden="true" />
                  <span>PUBLIC EVIDENCE</span>
                  <p>{decision.evidence}</p>
                </div>
                <div>
                  <CheckCircle2 aria-hidden="true" />
                  <span>ACTION</span>
                  <p>{decision.move}</p>
                </div>
                <div>
                  <FlaskConical aria-hidden="true" />
                  <span>HOW TO READ THE TEST</span>
                  <p>{decision.measure}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

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
          <PlatformBrandIcon name="Facebook" size="small" />
          <SourceLink href={sources.facebook} label="Profile" />
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

      <section
        className="message-caption-corpus"
        aria-labelledby="caption-corpus-title"
      >
        <header>
          <div>
            <span>CURRENT SOCIAL LANGUAGE</span>
            <h3 id="caption-corpus-title">The evidence behind the decisions</h3>
            <p>
              Short excerpts from official public posts show the hook, story
              pattern, hashtag role and next operational test.
            </p>
          </div>
          <small>PUBLIC SNAPSHOT · NOT PERFORMANCE DATA</small>
        </header>
        <div>
          {socialCaptionExamples.map((example) => (
            <details key={example.href}>
              <summary>
                <span>
                  <PlatformBrandIcon name={example.platform} size="small" />
                  <small>{example.scope}</small>
                </span>
                <blockquote>{example.excerpt}</blockquote>
                <strong>{example.pattern}</strong>
                <span className="message-caption-open">
                  Read interpretation <ChevronRight aria-hidden="true" />
                </span>
              </summary>
              <div>
                <p>{example.read}</p>
                <dl>
                  <dt>Observed tags</dt>
                  <dd>{example.hashtags}</dd>
                  <dt>Translate it</dt>
                  <dd>{example.translate}</dd>
                </dl>
                <SourceLink href={example.href} label="Open post" />
              </div>
            </details>
          ))}
        </div>
      </section>

      <section
        className="message-translation"
        aria-labelledby="translation-title"
      >
        <header>
          <span>CHANNEL TRANSLATION MATRIX</span>
          <h3 id="translation-title">Adapt the message—do not copy-paste it</h3>
          <p>
            Do not paste the same caption everywhere. Preserve the promise and
            approved proof; change the structure to match the customer’s job.
          </p>
        </header>
        <div className="message-channel-grid">
          {channelTranslation.map(([channel, structure, job]) => (
            <details key={channel}>
              <summary>
                <strong>{channel}</strong>
                <span>{job}</span>
                <ChevronRight aria-hidden="true" />
              </summary>
              <div>
                <small>RECOMMENDED STRUCTURE</small>
                <p>{structure}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <details className="message-disclosure message-evidence-archive">
        <summary>
          <div>
            <span>PUBLIC COPY ARCHIVE</span>
            <strong>Open nine additional website and blog examples</strong>
          </div>
          <ChevronRight />
        </summary>
        <div className="message-disclosure-body">
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
        </div>
      </details>

      <details className="message-disclosure">
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
