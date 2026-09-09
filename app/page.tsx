'use client';

import { useState } from 'react';
import './social.css';
import './experience.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Funnel, Website } from './extended-views';
import { RoleOperations } from './role-operations';
import { DashboardGuide, type DashboardTab } from './dashboard-guide';
import { PaidMediaEvidence } from './paid-media-evidence';
import { CompetitorIntelligence } from './competitor-intelligence';
import { MarketingOpsSystem } from './marketing-ops-system';
import { ExecutiveSpotlight } from './executive-spotlight';
import { ProductVisualShowcase } from './product-visual-showcase';
import { MetricBenchmarkLab } from './metric-benchmark-lab';
import {
  PlatformBrandIcon,
  type PlatformBrandName,
} from './platform-brand-icon';
import { ShopifyCommerceWorkspace } from './shopify-commerce-workspace';
import { CreatorAffiliateDashboard } from './creator-affiliate-dashboard';
import { MessagingEvidenceLibrary } from './messaging-evidence-library';
import { EvidenceToAction } from './evidence-to-action';
import { SearchEvidenceWorkbench } from './search-evidence-workbench';
import { GlossaryText } from './glossary-term';
import './editorial-theme.css';
import {
  ArrowUpRight,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Database,
  DollarSign,
  Eye,
  FileSearch,
  Gauge,
  Globe2,
  Handshake,
  Lightbulb,
  ListChecks,
  LockKeyhole,
  Megaphone,
  Menu,
  PackageSearch,
  Palette,
  Radio,
  Search,
  ShieldCheck,
  ShoppingBag,
  Store,
  Target,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';

type Signal =
  | 'PUBLIC SIGNAL'
  | 'ESTIMATE'
  | 'ILLUSTRATIVE'
  | 'HYPOTHESIS'
  | 'INTERNAL DATA REQUIRED';
const links = {
  site: 'https://www.mykitsch.com/',
  founder: 'https://www.mykitsch.com/pages/our-founder',
  tiktok: 'https://shop.tiktok.com/us/store/kitsch-llc/7495183505163847730',
  target: 'https://www.target.com/b/kitsch/-/N-q643leatp7e',
  ulta: 'https://www.ulta.com/brand/kitsch',
  walmart: 'https://www.walmart.com/browse/kitsch/YnJhbmQ6S2l0c2No',
  shopifyCase: 'https://www.shopify.com/case-studies/kitsch',
  linkedin: 'https://www.linkedin.com/company/kitsch',
  hairPerfume:
    'https://www.goodhousekeeping.com/beauty-products/g70540163/hair-perfume-2026/',
  heatless: 'https://www.marieclaire.com/beauty/best-heatless-curlers/',
  shopvision: 'https://www.shopvision.ai/brands/kitsch',
  blog: 'https://www.mykitsch.com/blogs/hair-care',
  beautymatter: 'https://beautymatter.com/articles/future50-2026-kitsch',
  trends:
    'https://trends.google.com/trends/explore?date=2021-09-01%202026-08-31&geo=US&q=hair%20perfume,heatless%20curls,shampoo%20bar,satin%20pillowcase,hair%20oil',
  trendsApi: 'https://developers.google.com/search/apis/trends',
  googleAds: 'https://adstransparency.google.com/?region=US',
  metaAds: 'https://www.facebook.com/ads/library',
  motionKitsch: 'https://motionapp.com/library/kitsch',
  robots: 'https://www.mykitsch.com/robots.txt',
  sitemap: 'https://www.mykitsch.com/sitemap.xml',
  rewards: 'https://www.mykitsch.com/pages/loyalty-program',
  quiz: 'https://www.mykitsch.com/pages/take-the-kitsch-quiz',
  returns: 'https://mykitsch.loopreturns.com/#/',
  appStore: 'https://apps.apple.com/us/app/kitsch-llc/id1604441480',
};
const channels = [
  ['Instagram', '1M', 'followers'],
  ['Facebook', '473K', 'page likes'],
  ['TikTok', '342K', 'followers'],
  ['TikTok Shop', '2.3M', 'units sold shown'],
  ['YouTube', '24.1K', 'subscribers'],
  ['Pinterest', '11.5K', 'followers'],
];
const decisions = [
  [
    'P1',
    'TikTok Shop displays 2.3M sold and hair care dominates the visible assortment.',
    'Which TikTok product cohorts create repeat purchase beyond the first viral order?',
    'Growth + CRM',
    'High',
  ],
  [
    'P1',
    'Hair perfume is prominent in newness, TikTok Shop and 2026 editorial coverage.',
    'Is fragrance an acquisition wedge, a repeat engine, or both?',
    'Brand + Ecom',
    'High',
  ],
  [
    'P2',
    'Bottle-free hair care leads the DTC best-seller ordering observed on Sep. 8.',
    'Does best-seller merchandising align with contribution margin and retention?',
    'Ecom + Finance',
    'High',
  ],
  [
    'P2',
    'Kitsch appears in hair-perfume and heatless-curler editorial lists, less consistently for shampoo bars.',
    'Which search category deserves the next authority-building content sprint?',
    'SEO + Brand',
    'Medium',
  ],
];
const launches = [
  [
    'Soft Santal + Caramel Cream',
    'Live',
    88,
    'Close the loop from scent discovery to full-size repeat',
    'Creative · Site · TikTok Shop · CRM',
  ],
  [
    'Halloween Collection',
    'Live',
    76,
    'Online-exclusive urgency needs a single inventory signal',
    'Social · Site · Influencer · CX',
  ],
  [
    'Tennis Collection',
    'Live',
    72,
    'Clarify audience overlap and post-launch learning owner',
    'Creative · Organic · Email · Analytics',
  ],
  [
    'Next cross-channel launch',
    'Internal date required',
    42,
    'Template demonstrates gating; no internal status assumed',
    'Retail · Amazon · Paid · Ops',
  ],
];
const kpis = [
  [
    'Are we acquiring efficiently?',
    'Blended CAC',
    'Approved acquisition-spend perimeter ÷ distinct first-time customers',
    'Paid + Shopify + marketplaces',
    'Weekly',
    'Internal required',
  ],
  [
    'Is growth profitable?',
    'MER',
    'Realized net revenue in the agreed perimeter ÷ total marketing spend',
    'Finance + commerce',
    'Weekly',
    'Internal required',
  ],
  [
    'Are customers coming back?',
    'Repeat purchase rate',
    'Mature-cohort customers with a second order in 90/180 days ÷ eligible first-order customers',
    'Shopify + CRM',
    'Monthly',
    'Internal required',
  ],
  [
    'Which launches deserve scale?',
    'Launch contribution',
    'Realized launch contribution vs approved plan; claim incrementality only with an approved causal method',
    'Commerce + COGS + media',
    'Launch + 30/60d',
    'Internal required',
  ],
  [
    'Where is public momentum?',
    'Observable demand signals',
    'Platform-displayed sales, reviews and editorial presence',
    'Public platforms',
    'Weekly',
    'Public',
  ],
  [
    'Are we ready to launch?',
    'Readiness rate',
    'Completed gates ÷ required gates',
    'Project system',
    'Twice weekly',
    'Internal required',
  ],
];
const competitors = [
  [
    'Kitsch',
    '$8–$28 visible best-seller range',
    'Mass-accessible ritual ecosystem',
    'Breadth + omnichannel reach',
    'Hero assortment coherence',
  ],
  [
    'Crown Affair',
    '$22–$58 hero items',
    'Premium, clinically backed ritual',
    'Editorial authority',
    'Accessible scale',
  ],
  [
    'Dae',
    '$16–$38 visible best sellers',
    'Desert-inspired modern hair care',
    'Focused product storytelling',
    'Accessories + sleep ecosystem',
  ],
  [
    'Gisou',
    '$22–$44 hair perfume',
    'Honey-led prestige hair ritual',
    'Ingredient IP + prestige',
    'Value accessibility',
  ],
  [
    'Mermade Hair',
    '$12–$76 styling range',
    'Trend-forward styling tools',
    'Tool authority',
    'Daily essentials breadth',
  ],
  [
    'Emi Jay',
    '$16–$88 clips',
    'Handmade fashion accessory',
    'Drop culture + desirability',
    'Consumables + retail scale',
  ],
  [
    'Slip',
    '$90 sale / $120 list pillowcase',
    'Clinical luxury sleep beauty',
    'Premium proof architecture',
    'Mass affordability',
  ],
];
const sources = [
  [
    'S01',
    'DTC homepage',
    links.site,
    'Live Figtree body type, PT Serif display mapping, black/white system and #F8B68F CTA accent; merchandising and brand language',
    'High',
  ],
  [
    'S02',
    'Founder page',
    links.founder,
    'Founded 2010; self-funded; founder-led product philosophy',
    'High',
  ],
  [
    'S03',
    'TikTok profile',
    'https://www.tiktok.com/@kitsch',
    '341.9K followers; 1.7M likes; profile bio',
    'High',
  ],
  [
    'S04',
    'TikTok Shop',
    links.tiktok,
    '341.5K+ shop followers; 2.3M sold; 2,415 videos; visible SKU sales',
    'High',
  ],
  [
    'S05',
    'Instagram',
    'https://www.instagram.com/mykitsch/',
    '1M followers; 4,779 posts in public metadata',
    'High',
  ],
  [
    'S06',
    'YouTube',
    'https://www.youtube.com/@mykitsch',
    '24.1K subscribers; 1.8K videos; visible video examples',
    'High',
  ],
  [
    'S07',
    'Pinterest',
    'https://www.pinterest.com/mykitsch/',
    'Verified merchant; 11.5K followers; visible topic boards',
    'High',
  ],
  [
    'S08',
    'Target',
    links.target,
    '144 listed results; observable monthly purchase badges on hero hair care',
    'High',
  ],
  [
    'S09',
    'Ulta',
    links.ulta,
    'Approximately 203 listed results; 12,955 reviews on Satin Pillowcase',
    'High',
  ],
  [
    'S10',
    'Good Housekeeping',
    links.hairPerfume,
    'Warm Sugar named 2026 best-value hair perfume',
    'Medium',
  ],
  [
    'S11',
    'Marie Claire',
    links.heatless,
    'Kitsch included in 2026 heatless-curler testing roundup',
    'Medium',
  ],
  [
    'S12',
    'LinkedIn',
    links.linkedin,
    '43,487 followers; current founder and recognition signals',
    'High',
  ],
  [
    'S13',
    'ShopVision',
    links.shopvision,
    'Dated public asset capture: social, email, homepage and promotion observations',
    'Medium',
  ],
  [
    'S14',
    'Hair Care blog',
    links.blog,
    'Visible May and September article titles, dates and authors',
    'High',
  ],
  [
    'S15',
    'BeautyMatter FUTURE50',
    links.beautymatter,
    'March 2026 founder interview and public business-footprint context',
    'Medium',
  ],
  [
    'S16',
    'Google Trends',
    links.trends,
    'US Web Search, five terms, Sep 2021–Aug 2026; weekly index aggregated monthly',
    'High',
  ],
  [
    'S17',
    'Google Ads Transparency',
    links.googleAds,
    'US domain archive counts and verified-advertiser creative presence',
    'High',
  ],
  [
    'S18',
    'Meta Ad Library',
    links.metaAds,
    'Official active-ad discovery surface; no US commercial performance data',
    'High',
  ],
  [
    'S19',
    'Motion creative library',
    links.motionKitsch,
    'Third-party indexed active-ad count, velocity and format mix',
    'Medium',
  ],
  [
    'S20',
    'Google Trends API alpha',
    links.trendsApi,
    'Future automated five-year, consistently scaled trend feed',
    'High',
  ],
  [
    'S21',
    'Shopify case study',
    links.shopifyCase,
    'Published mobile mix, repurchase and Shop Campaigns optimization claims',
    'Medium',
  ],
  [
    'S22',
    'Walmart',
    links.walmart,
    '90 listed results and visible ratings/review evidence',
    'High',
  ],
  [
    'S23',
    'Kitsch 2023 brand book',
    'https://sandrapavleska.com/wp-content/uploads/2023/09/brandstyleguide_kitsch.pdf',
    'Avenir + Didot typography guidance; official core, pink, terracotta, gray and black color values',
    'Medium',
  ],
  [
    'S24',
    'DTC public integration audit',
    links.site,
    'Observable Shopify, lifecycle, reviews, loyalty, analytics, creator, localization and support scripts; configuration unknown',
    'High',
  ],
  [
    'S25',
    'Robots.txt',
    links.robots,
    'Public crawl rules, including AmazonProductDiscovery exclusion',
    'High',
  ],
  [
    'S26',
    'XML sitemap index',
    links.sitemap,
    'Product, collection, page, blog, metaobject, localized and agentic-discovery sitemap surfaces',
    'High',
  ],
  [
    'S27',
    'Triple Whale ecommerce benchmarks',
    'https://www.triplewhale.com/blog/whats-a-good-cost-per-acquisition',
    'External CPA and channel-efficiency reference points; not Kitsch actuals or fully loaded CAC',
    'Medium',
  ],
  [
    'S28',
    'Shopify conversion research',
    'https://www.shopify.com/blog/retail-conversion-rate',
    'Two separate reference points—not a single band: 2.70% skincare and 4.94% beauty, drawn from different category datasets/methods',
    'Medium',
  ],
  [
    'S29',
    'NYU Stern sector margins',
    'https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/margin.html',
    'January 2026 US public-company household-products margin proxy; not a Kitsch estimate',
    'Medium',
  ],
  [
    'S30',
    'Lifetimely by AMP beauty benchmarks',
    'https://useamp.com/benchmarks/beauty',
    'Directional 180-day health-and-beauty repurchase reference with methodology limitations',
    'Medium–Low',
  ],
  [
    'S31',
    'Klaviyo 2025 benchmark report',
    'https://klaviyocms.wpengine.com/wp-content/uploads/2025/02/2025-Benchmark-Report_AMER.pdf',
    'External email/SMS reference. Klaviyo uses attributed total purchase amount per delivered recipient; it is not like-for-like with an internal realized-net-revenue numerator unless the perimeter is matched',
    'High',
  ],
  [
    'S32',
    'Kitsch-owned logo asset',
    'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/kitsch-logo.png?v=1711391814',
    'Official Kitsch wordmark used in the persistent application chrome',
    'High',
  ],
];
const monthTimeline = [
  [
    'MAR',
    'Scale + credibility',
    'FUTURE50 profile surfaces Shopify, retail and TikTok Shop scale; useful context, not audited performance.',
    links.beautymatter,
    'High',
  ],
  [
    'APR',
    'Portfolio breadth',
    'Spring Hair Collection and seasonal collection architecture are visible in indexed DTC collection pages.',
    links.site,
    'Medium',
  ],
  [
    'MAY',
    'Search authority sprint',
    'A concentrated May 11–18 blog cluster targets syndet science, hair growth, shampoo-bar comparisons and travel.',
    links.blog,
    'High',
  ],
  [
    'JUN',
    'Creator utility',
    'Public bundle and creator merchandising connects products to routines and use occasions.',
    links.site,
    'Medium',
  ],
  [
    'JUL',
    'Fragrance conversation',
    'Warm Sugar appears in public fragrance discussion while hair perfume remains a visible category wedge.',
    links.hairPerfume,
    'Medium',
  ],
  [
    'AUG',
    'College + scent launch',
    'College-life creator storytelling, Brooke Monk fitness utility, Soft Santal + Caramel Cream, then Labor Day promotion.',
    links.shopvision,
    'High',
  ],
];
const accountCards = [
  [
    'Instagram',
    '1M followers',
    'Brand theater + launches',
    'Reels, polished product worlds, community prompts',
    'Shares · saves · qualified profile visits',
  ],
  [
    'TikTok',
    '341.9K followers / 1.7M likes',
    'Discovery + demonstration',
    'Fast hooks, reactions, routines, creator proof',
    '2s hold · completion · product clicks',
  ],
  [
    'TikTok Shop',
    '2.3M sold displayed',
    'Commerce conversion',
    'Live, affiliate proof, bundles, urgency',
    'GMV · new-to-brand · repeat cohort',
  ],
  [
    'Pinterest',
    '11.5K followers',
    'Evergreen intent',
    'Tutorials, routines, collections, college inspiration',
    'Outbound clicks · saves · assisted revenue',
  ],
  [
    'YouTube',
    '24.1K subscribers',
    'Education library',
    'How-to, product selection, troubleshooting',
    'Watch time · search views · assisted CVR',
  ],
  [
    'Facebook',
    '473K page likes',
    'Reach + community',
    'Launch recaps, offer communication, utility',
    'Engaged reach · click quality · contribution',
  ],
];
const platformInsights = [
  {
    id: 'instagram',
    name: 'Instagram',
    signal: '1M followers',
    job: 'Brand theater + launch memory',
    observed:
      'Public metadata shows 1M followers and 4,779 posts. August examples connect launches, participation prompts and polished product worlds.',
    insight:
      'The scale and visual consistency make Instagram the clearest brand-memory surface. Its role should be distinguished from TikTok instead of mirroring the same launch calendar.',
    working:
      'Recognizable visual codes, collectible drops and participatory “good hair day” prompts.',
    improve:
      'Create repeatable franchises by need state—not only launch bursts—and separate reach content from save/share utility.',
    action:
      'Run a monthly mix of hero campaign, creator proof, routine education and community participation.',
    metrics:
      'Qualified reach · saves/share rate · profile visits · assisted revenue',
    source: 'https://www.instagram.com/mykitsch/',
    confidence: 'HIGH',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    signal: '473K page likes',
    job: 'Community + offer amplification',
    observed:
      'The public page displays a large established audience, while comparable post-level historical reach and conversion are unavailable without first-party exports.',
    insight:
      'Facebook has scale but the public evidence does not yet reveal a distinct strategic job. It risks becoming a launch-recap mirror.',
    working:
      'Broad reach, recognizable product utility and a natural home for offer communication.',
    improve:
      'Give Facebook an explicit role in community proof, customer education and efficient retargeting.',
    action:
      'Test review-led posts, problem/solution education and retailer availability against promotion-only communication.',
    metrics:
      'Engaged reach · outbound CTR · new-to-brand conversion · contribution',
    source: 'https://www.facebook.com/mykitsch/',
    confidence: 'MED',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    signal: '341.9K followers · 1.7M likes',
    job: 'Discovery + rapid creative learning',
    observed:
      'The public profile emphasizes fast demonstrations, routines, reactions and creator-native product storytelling.',
    insight:
      'TikTok is the fastest learning surface for hooks and product problems, but creative velocity can hide concept repetition.',
    working:
      'Immediate payoff, creator-native delivery, scent reaction and one-step transformation.',
    improve:
      'Track distinct concepts separately from edits and expand problem-aware education before the product reveal.',
    action:
      'Maintain a hook library coded by problem, proof, creator, format and awareness stage.',
    metrics:
      '2-second hold · 6-second view · completion · share · product click',
    source: 'https://www.tiktok.com/@kitsch',
    confidence: 'HIGH',
  },
  {
    id: 'tiktok-shop',
    name: 'TikTok Shop',
    signal: '2.3M sold displayed',
    job: 'Social-commerce conversion',
    observed:
      'The public storefront displayed 341.5K+ followers, 2.3M sold and 2,415 videos, with hair care prominent in the visible assortment.',
    insight:
      'This is Kitsch’s strongest observable commerce proof—but displayed units cannot answer profitability, new-to-brand quality or repeat behavior.',
    working:
      'Affiliate scale, native proof, bundles, urgency and low-friction checkout.',
    improve:
      'Move from GMV celebration to contribution and cohort quality by first product and creator.',
    action:
      'Build acquisition cohorts for fragrance, heatless, bars and styling; inspect 30/60/90-day second purchase.',
    metrics: 'GMV · contribution · new-to-brand · creator CAC · repeat cohort',
    source: 'https://shop.tiktok.com/us/store/kitsch-llc/7495183505163847730',
    confidence: 'HIGH',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    signal: '24.1K subscribers · 1.8K videos',
    job: 'Evergreen education + search',
    observed:
      'The public channel shows a deep video library relative to its subscriber base, with how-to and product-use content visible.',
    insight:
      'The content inventory is substantial; the opportunity is stronger information architecture and measurable search/PDP reuse.',
    working:
      'Demonstration depth, troubleshooting potential and long-lived searchable utility.',
    improve:
      'Organize playlists around need states and turn top questions into canonical video series.',
    action:
      'Create five evergreen series: heatless by hair type, bar transition, scent finder, air-dry technique and overnight protection.',
    metrics: 'Search views · watch time · returning viewers · PDP-assisted CVR',
    source: 'https://www.youtube.com/@mykitsch',
    confidence: 'HIGH',
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    signal: '11.5K followers',
    job: 'Evergreen intent + planning',
    observed:
      'Kitsch is a verified merchant with visible topic boards; the August public capture identified Pinterest as the most active observed social platform.',
    insight:
      'High publishing volume is only useful if it earns saves, qualified outbound clicks and assisted demand.',
    working:
      'Tutorials, collections, college inspiration and routine-led visuals fit planning behavior.',
    improve:
      'Tie every board and pin cluster to search intent, seasonality and a canonical landing page.',
    action:
      'Build quarterly pin systems for gifting, college, travel, heatless, sleep and bottle-free routines.',
    metrics:
      'Saves · outbound CTR · qualified sessions · assisted contribution',
    source: 'https://www.pinterest.com/mykitsch/',
    confidence: 'MED',
  },
  {
    id: 'website',
    name: 'Website',
    signal: '152,617 reviews · 4.8 average',
    job: 'Conversion + source of truth',
    observed:
      'The DTC homepage displayed large review proof, broad need-state navigation and 28 captured homepage changes in the 30 days ending Aug. 31.',
    insight:
      'The site is both the conversion surface and the message-governance layer. Frequent merchandising changes create learning only when connected to a hypothesis and outcome.',
    working:
      'Strong social proof, broad portfolio pathways and fast launch/offer merchandising.',
    improve:
      'Resolve public footprint-claim conflicts, reduce overlapping answer pages and separate promotional lift from full-price demand.',
    action:
      'Attach a change ID, hypothesis, audience, success metric and post-period result to every material homepage or landing-page change.',
    metrics:
      'CVR · contribution/session · full-price mix · opt-in · repeat rate',
    source: 'https://www.mykitsch.com/',
    confidence: 'HIGH',
  },
];
const socialHistoryCoverage = [
  [
    'Instagram',
    'No comparable monthly public series captured',
    'Current profile snapshot + dated August examples',
    'Meta Business Suite export: monthly reach, plays, engagement, profile actions, link clicks and content IDs',
  ],
  [
    'Facebook',
    'No comparable monthly public series captured',
    'Current page snapshot; post-level performance is not public',
    'Meta Business Suite export: monthly reach, engagement, outbound clicks, paid/organic split and content IDs',
  ],
  [
    'TikTok',
    'No comparable monthly public series captured',
    'Current profile snapshot + visible creative themes',
    'TikTok Analytics export/API: views, watch time, completion, shares, profile/product clicks and video IDs',
  ],
  [
    'TikTok Shop',
    'No monthly storefront history available publicly',
    'Current displayed sold counter, catalog and creator/store snapshot',
    'Seller Center export/API: orders, refunds, GMV, fees, affiliate cost, creator/video IDs and new-to-brand customer joins',
  ],
  [
    'YouTube',
    'Public video dates exist; comparable monthly performance was not captured',
    'Current channel snapshot + public video library',
    'YouTube Studio/API: monthly views, watch time, traffic source, returning viewers, clicks and video IDs',
  ],
  [
    'Pinterest',
    'No comparable monthly public series captured',
    'Current profile snapshot + public boards/pins',
    'Pinterest Analytics export/API: impressions, saves, outbound clicks, audience and pin IDs',
  ],
  [
    'Website',
    'Public US Google Trends demand index only—not site performance',
    'Google Trends Jan–Aug comparison + current storefront snapshot',
    'Shopify + GA4 + Search Console: sessions, PDP behavior, checkout, net orders, search queries, channel IDs and cohorts',
  ],
] as const;
const searchYoY = [
  {
    name: 'Hair oil',
    prior: [30.8, 30, 28.2, 26.5, 27, 26.4, 32.5, 26.8],
    current: [33.8, 33.3, 47.8, 80.5, 63.4, 55.3, 31, 25.4],
    change: '+62%',
    max: 85,
    read: 'Scale category; spring 2026 acceleration was large but temporary.',
  },
  {
    name: 'Hair perfume',
    prior: [1, 1, 1.6, 2, 2, 1.8, 2.3, 2],
    current: [2.3, 2.3, 4, 9.8, 6.8, 5, 2.3, 2],
    change: '+152%',
    max: 12,
    read: 'The strongest relative expansion among Kitsch-relevant discovery wedges.',
  },
  {
    name: 'Shampoo bar',
    prior: [2, 1.8, 2, 2, 2, 2, 2.3, 2],
    current: [2, 2, 4.4, 11.8, 8, 6.5, 2.3, 1.2],
    change: '+138%',
    max: 13,
    read: 'Spring authority opportunity, followed by a return toward baseline.',
  },
  {
    name: 'Heatless curls',
    prior: [2, 2, 1.8, 1, 1, 1, 1, 1],
    current: [1.8, 1.5, 1, 1, 1, 1, 1, 1.4],
    change: '−10%',
    max: 3,
    read: 'Stable-to-softer category demand; branded Breakout queries remain strategically useful.',
  },
];
const monthlySearchReads = [
  [
    'JAN',
    'Perfume opens above 2025',
    'Hair perfume index 2.3 vs 1.0; oil 33.8 vs 30.8.',
    'Start scent education before Valentine’s and spring launch pressure.',
  ],
  [
    'FEB',
    'Fragrance momentum holds',
    'Hair perfume remains 2.3 vs 1.0; heatless softens to 1.5 vs 2.0.',
    'Prioritize scent discovery while refreshing heatless problem framing.',
  ],
  [
    'MAR',
    'Category inflection begins',
    'Oil +70%, perfume +150%, shampoo bar +120% year over year.',
    'Shift search, creators and landing pages toward the rising categories.',
  ],
  [
    'APR',
    'Peak attention month',
    'Oil reaches 80.5, perfume 9.8 and shampoo bar 11.8 on the shared index.',
    'Treat as an event signal; preserve campaign and merchandising context before scaling.',
  ],
  [
    'MAY',
    'Spring demand persists',
    'Perfume, bars and oil remain well above 2025, but below April peaks.',
    'Retarget high-intent education and capture email/SMS before attention decays.',
  ],
  [
    'JUN',
    'Demand decelerates, still elevated',
    'Oil +109%, perfume +178% and bars +225% versus June 2025.',
    'Move from launch urgency to evergreen proof, FAQ and routine content.',
  ],
  [
    'JUL',
    'Return to baseline',
    'Oil is 5% below 2025; perfume, bars and heatless are flat.',
    'Evaluate cohort quality and contribution instead of continuing peak-period assumptions.',
  ],
  [
    'AUG',
    'Portfolio signals diverge',
    'Heatless rises from 1.0 to 1.4 while bars fall from 2.0 to 1.2.',
    'Use back-to-school utility for heatless; refresh or consolidate bar messaging.',
  ],
];
const commerceProducts = [
  {
    name: 'Adjustable Satin Shower Cap',
    franchise: 'Shower',
    price: '$21.12 TikTok · $24–$24.49 retail',
    channels: 'DTC · TikTok Shop · Target · Ulta',
    proof: '166K TikTok sold · 8.5K TikTok reviews',
    proxy: '$3.51M',
    window: 'TikTok lifetime proxy',
    description:
      'Protects blowouts, braids and long or short hair with an adjustable satin-lined waterproof format.',
    role: 'Evergreen utility hero',
  },
  {
    name: 'Hair Perfume Discovery Set',
    franchise: 'Fragrance',
    price: '$14.62 observed TikTok · $15 Ulta',
    channels: 'DTC · TikTok Shop · Ulta',
    proof: '116.1K TikTok sold · 6.5K TikTok reviews',
    proxy: '$1.70M',
    window: 'TikTok lifetime proxy',
    description:
      'Four trial scents with patented odor-neutralizing positioning; lowers fragrance discovery risk.',
    role: 'Trial → full-size gateway',
  },
  {
    name: 'Smoothing Air Dry Cream',
    franchise: 'Styling',
    price: '$15 DTC/Ulta · $14.99 Target',
    channels: 'DTC · TikTok Shop · Target · Ulta',
    proof: '87.4K TikTok sold · 16K+ Target bought last month',
    proxy: '$1.35M · $240K+',
    window: 'TikTok lifetime · Target monthly',
    description:
      'One-step, no-heat styling with up to 24-hour frizz control and natural-texture definition.',
    role: 'Evergreen acquisition hero',
  },
  {
    name: 'Satin Pillowcase',
    franchise: 'Sleep',
    price: '$20 DTC/Ulta · $25 king',
    channels: 'DTC · Target · Ulta · Walmart · Amazon',
    proof: '12,955 Ulta reviews · 4.9 rating',
    proxy: 'Not estimable',
    window: 'Review proof only',
    description:
      'Accessible overnight hair and skin protection with a deep color/licensing variant system.',
    role: 'Brand legacy + retail proof',
  },
  {
    name: 'Rice Water Shampoo Bar',
    franchise: 'Bottle-free',
    price: '$16 DTC · $14 Ulta',
    channels: 'DTC · TikTok Shop · Target · Ulta · Walmart',
    proof: '10,496 DTC reviews · 4.8 rating',
    proxy: 'Not estimable',
    window: 'Review proof only',
    description:
      'pH-balanced, color-safe solid cleansing positioned around strength, volume and packaging reduction.',
    role: 'Authority + replenishment',
  },
  {
    name: 'Rice Water Bar Set',
    franchise: 'Bottle-free',
    price: '$22.75 TikTok · $28 DTC',
    channels: 'DTC · TikTok Shop · Target · Ulta',
    proof: '23.3K TikTok sold · 4,071 DTC reviews',
    proxy: '$530K',
    window: 'TikTok lifetime proxy',
    description:
      'Shampoo-and-conditioner system that converts a technical bar story into a complete routine.',
    role: 'AOV + routine builder',
  },
  {
    name: 'Warm Sugar Hair Perfume',
    franchise: 'Fragrance',
    price: '$20 DTC/Ulta/Target · $32.50 TikTok list',
    channels: 'DTC · TikTok Shop · Target · Ulta',
    proof: '63.5K TikTok sold · 3K+ Target bought last month',
    proxy: '$2.06M · $60K+',
    window: 'TikTok lifetime · Target monthly',
    description:
      'Odor-neutralizing gourmand mist for hair, body and pillowcase; designed for layering and gifting.',
    role: 'Full-size fragrance hero',
  },
  {
    name: 'Whoville Cookies Hair Perfume',
    franchise: 'Fragrance drop',
    price: '$18.15 observed TikTok',
    channels: 'DTC · TikTok Shop',
    proof: '37.1K TikTok sold · 4.7 rating',
    proxy: '$673K',
    window: 'TikTok lifetime proxy',
    description:
      'Licensed seasonal scent that combines recognizable IP, gourmand novelty and scarcity.',
    role: 'Collectible demand spike',
  },
  {
    name: 'Satin Heatless Curling Set',
    franchise: 'Heatless',
    price: '$15.36 TikTok · $20 Target/Ulta',
    channels: 'DTC · TikTok Shop · Target · Ulta · Walmart',
    proof: '30.9K TikTok sold · 6K+ Target bought last month',
    proxy: '$475K · $120K+',
    window: 'TikTok lifetime · Target monthly',
    description:
      'Overnight, no-heat curl formation with a visual demonstration that is native to creator commerce.',
    role: 'Demo-led acquisition',
  },
  {
    name: 'Cherry Blossom Dermaplaners',
    franchise: 'Skin',
    price: '$7.80 TikTok · $9.99 Target',
    channels: 'DTC · TikTok Shop · Target · Ulta',
    proof: '36.5K TikTok sold · Target bestseller',
    proxy: '$285K',
    window: 'TikTok lifetime proxy',
    description:
      'Low-ticket, easy-to-demonstrate facial exfoliation tool that broadens the basket beyond hair.',
    role: 'Impulse basket builder',
  },
  {
    name: 'Eco-Friendly Nylon Elastics',
    franchise: 'Accessories',
    price: '$7.99 Target',
    channels: 'DTC · Target · Ulta · Walmart · Amazon',
    proof: '52K+ Target bought last month',
    proxy: '$415K+',
    window: 'Target monthly floor',
    description:
      'High-frequency replenishment staple that expresses the brand’s original everyday-essentials equity.',
    role: 'Volume + retail entry',
  },
  {
    name: 'Rice Water Liquid Shampoo',
    franchise: 'Hair care',
    price: '$13.99 Target · $14 Ulta',
    channels: 'DTC · Target · Ulta',
    proof: '21K+ Target bought last month',
    proxy: '$294K+',
    window: 'Target monthly floor',
    description:
      'Familiar liquid delivery extends rice-water authority to customers who are not ready for solid bars.',
    role: 'Format expansion',
  },
];
const tiktokValue = [
  ['Satin shower cap', 3505920],
  ['Hair perfume discovery', 1697382],
  ['Air Dry Cream', 1349456],
  ['Cherry shower cap', 723292],
  ['Whoville perfume', 673365],
  ['Bar set', 530075],
  ['Heatless set', 474624],
  ['Banana clips', 410803],
  ['Dermaplaners', 284700],
] as const;
const targetValue = [
  ['Nylon elastics', 415480],
  ['Rice shampoo', 293790],
  ['Rice conditioner', 265810],
  ['Air Dry Cream', 239840],
  ['Curl Cream', 239840],
  ['Oversized scrunchies', 143880],
  ['Coconut shampoo', 125910],
  ['XL heatless set', 120000],
] as const;
const commerceFranchises = [
  [
    'SHOWER + SLEEP',
    'Protect the routine',
    'Satin, shower caps and overnight formats turn low-consideration utility into a recognizable ecosystem.',
  ],
  [
    'FRAGRANCE',
    'Create discovery',
    'Trial sets, layering and seasonal IP generate novelty while full sizes create the repeat-purchase test.',
  ],
  [
    'HAIR CARE',
    'Own the solution',
    'Rice water, rosemary/biotin and format choice span bars, liquid, oil and treatment.',
  ],
  [
    'STYLING',
    'Show the result',
    'Air Dry Cream, heatless and curl products translate exceptionally well to short-form demonstration.',
  ],
  [
    'ACCESSORIES',
    'Keep the entry price low',
    'Elastics, clips and dermaplaners support mass retail, impulse purchase and basket building.',
  ],
];
const augAssets = [
  {
    date: 'AUG 25',
    platform: 'TIKTOK',
    title: 'Double scent drop',
    copy: 'Soft Santal + Caramel Cream turn fragrance into collectible newness.',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/69117-HairPerfumeDiscoverySet-Sampler-4pc-Fragrance-1280x1280px.jpg?v=1762182803',
  },
  {
    date: 'AUG 26',
    platform: 'PINTEREST',
    title: 'Set & Flow utility',
    copy: 'Brooke Monk workout context makes the curling headband a routine solution.',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/60640SatinWrappedJumboFlexiRods4pc-Rosewood-Hero-1280x1280px.jpg?v=1774638694',
  },
  {
    date: 'AUG 28',
    platform: 'PINTEREST',
    title: 'Day-in-the-life college',
    copy: 'Creator narrative embeds the brand in a high-frequency life moment.',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/500904-AirDryCream-Consumables-hero-1280x1280px.jpg?v=1779490582',
  },
  {
    date: 'AUG 31',
    platform: 'INSTAGRAM',
    title: 'Good-hair-day loop',
    copy: 'Hair up / hair down participation plus gift-card incentive closes the month.',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/9081-RiceWaterProtein-Shampoo_Conditioner-2pc-Combo-BottleFreeBeauty-hero-opt2-1280x1280px_2.jpg?v=1780523783',
  },
];
const brandPillars = [
  [
    '01',
    'ELEVATED UTILITY',
    'Make ordinary routines feel exceptional without adding effort.',
  ],
  [
    '02',
    'ROUTINE ECOSYSTEM',
    'Organize Hair Care, Style, Skin, Shower and Sleep by need state—not only SKU.',
  ],
  [
    '03',
    'CULTURAL RELEVANCE',
    'Refresh useful formats through creators, seasonal drops and licensed worlds.',
  ],
  [
    '04',
    'ACCESSIBLE PURPOSE',
    'Attach sustainability to high-frequency utility, not sacrifice or prestige pricing.',
  ],
];
const gitTools = [
  [
    'Google Meridian',
    'MMM + budget scenarios after data maturity',
    'Future causal layer',
    'https://github.com/google/meridian',
  ],
  [
    'Google Ads Python',
    'Authorized Keyword Planner + campaign reporting',
    'Connect with OAuth',
    'https://github.com/googleads/google-ads-python',
  ],
  [
    'dbt Core',
    'Versioned KPI definitions, tests and lineage',
    'Data-trust foundation',
    'https://github.com/dbt-labs/dbt-core',
  ],
  [
    'Evidence',
    'SQL/Markdown BI-as-code drilldowns',
    'Future presentation option',
    'https://github.com/evidence-dev/evidence',
  ],
  [
    'Lighthouse',
    'Technical SEO + performance baseline',
    'Use now',
    'https://github.com/GoogleChrome/lighthouse',
  ],
  [
    'BERTopic',
    'Review, caption and blog topic clustering',
    'Use with a large corpus',
    'https://github.com/MaartenGr/BERTopic',
  ],
  [
    'TikTok Shop sample',
    'Future authenticated architecture',
    'Do not integrate yet',
    'https://github.com/tiktok/ttspc-server-sample',
  ],
];

const trendData = [
  ['24-01', 28.5, 1, 2, 2],
  ['24-02', 27.3, 1, 2, 1.8],
  ['24-03', 26, 1, 2, 1],
  ['24-04', 26.3, 1, 2, 1],
  ['24-05', 26.3, 1, 2, 1],
  ['24-06', 26.8, 1, 2, 1],
  ['24-07', 27.5, 1.3, 2, 1],
  ['24-08', 27.3, 1, 2, 1.3],
  ['24-09', 25.6, 1, 1.2, 1.2],
  ['24-10', 24.8, 1, 1.3, 1.8],
  ['24-11', 27.8, 2.3, 1.8, 2.5],
  ['24-12', 30.8, 2, 2, 2.2],
  ['25-01', 30.8, 1, 2, 2],
  ['25-02', 30, 1, 1.8, 2],
  ['25-03', 28.2, 1.6, 2, 1.8],
  ['25-04', 26.5, 2, 2, 1],
  ['25-05', 27, 2, 2, 1],
  ['25-06', 26.4, 1.8, 2, 1],
  ['25-07', 32.5, 2.3, 2.3, 1],
  ['25-08', 26.8, 2, 2, 1],
  ['25-09', 23.8, 1.5, 1.5, 1],
  ['25-10', 24, 2, 1.3, 1],
  ['25-11', 29.8, 4, 2, 1.2],
  ['25-12', 31.3, 4.3, 2, 1.5],
  ['26-01', 33.8, 2.3, 2, 1.8],
  ['26-02', 33.3, 2.3, 2, 1.5],
  ['26-03', 47.8, 4, 4.4, 1],
  ['26-04', 80.5, 9.8, 11.8, 1],
  ['26-05', 63.4, 6.8, 8, 1],
  ['26-06', 55.3, 5, 6.5, 1],
  ['26-07', 31, 2.3, 2.3, 1],
  ['26-08', 25.4, 2, 1.2, 1.4],
] as const;
const paidBrands = [
  [
    'Kitsch',
    '~700',
    '~1K / ~173 wk',
    'Demo · sensory · scarcity',
    'Accessible immediacy',
    'Build substantiated proof',
  ],
  [
    'Gisou',
    '~200',
    '47 / ~10 wk',
    'Offer · demo · statistics',
    'Ingredient IP + efficacy',
    'Answer with accessible evidence',
  ],
  [
    'Crown Affair',
    '~300',
    '296 / n.a.',
    'Ritual · outcome · authority',
    'Premium memory structure',
    'Clarify franchise architecture',
  ],
  [
    'Dae',
    '57',
    '29 / ~12 wk',
    'Demo · creator talk · UGC',
    'Focused hero-product memory',
    'Reduce assortment noise',
  ],
  [
    'Slip',
    '83',
    '36 / ~3 wk',
    'Demo · testimonial · unboxing',
    'Material + clinical proof',
    'Explain satin value honestly',
  ],
  [
    'Blissy',
    '~700',
    '58 / ~47 wk',
    'Demo · UGC · testimonial',
    'Urgency + skepticism handling',
    'Avoid discount escalation',
  ],
];
const messageScores = [
  [
    'Functional clarity',
    92,
    'Problem → demo → result is consistently legible.',
  ],
  [
    'Distinctive visual system',
    86,
    'Soft color, recognizable forms and collectible drops aid recall.',
  ],
  [
    'Portfolio memory structure',
    64,
    'Breadth is an advantage, but need-state and franchise roles need sharper hierarchy.',
  ],
  [
    'Proof architecture',
    54,
    'Creator reaction is strong; mechanisms and substantiated outcomes are less visible.',
  ],
  [
    'Full-funnel role clarity',
    48,
    'Public creative skews product-aware; problem framing and education are whitespace.',
  ],
];
const smartInsights = [
  {
    level: 'HIGH',
    title: 'Branded category association is visible',
    fact: '“heatless curls kitsch” and three Kitsch shampoo-bar variants are Breakout rising queries in the selected US Trends view.',
    read: 'Demand is not only generic; Kitsch is entering the category language.',
    action:
      'Prioritize canonical heatless and bar hubs, then measure non-brand → brand search migration.',
    metric:
      'Search Console query paths · assisted conversion · share of search',
  },
  {
    level: 'HIGH',
    title: 'Hair oil is the scale benchmark',
    fact: 'Hair oil averaged far above the other selected terms and peaked at 80.5 in April 2026 on the shared 0–100 index.',
    read: 'It is the competitive attention pool—not automatically the best positioning pivot.',
    action:
      'Use oil as a demand benchmark; protect Kitsch-owned wedges in perfume, heatless and bars.',
    metric: 'Keyword Planner volume/CPC · category margin · new-to-brand rate',
  },
  {
    level: 'MED',
    title: 'Fragrance combines holiday and event-led lift',
    fact: 'Hair perfume rose in Nov–Dec 2025, then expanded sharply across Mar–Jun 2026 before normalizing.',
    read: 'Gifting is repeatable; the spring spike needs causal validation.',
    action:
      'Build an evergreen scent finder plus a gifting calendar; do not annualize the spring peak.',
    metric: 'Launch incrementality · cohort repeat · full-price mix',
  },
  {
    level: 'HIGH',
    title: 'Creative velocity may hide repetition',
    fact: 'Third-party indexing shows roughly 1K Kitsch Meta ads and ~173 new creatives/week, with demos leading the mix.',
    read: 'Variant output is high; concept diversity and learning closure are unknown.',
    action:
      'Track concepts separately from edits and require a reusable learning from every completed test.',
    metric: 'Distinct concepts/variants · winner rate · fatigue · contribution',
  },
  {
    level: 'MED',
    title: 'The paid-story proof gap is addressable',
    fact: 'Gisou, Slip and Crown Affair foreground quantified, material or outcome proof more visibly than Kitsch’s sampled public creative.',
    read: 'Kitsch wins at immediacy but leaves skepticism-handling to creator reaction.',
    action:
      'Test a proof ladder: sensory reaction → customer evidence → mechanism → substantiated result.',
    metric:
      'Proof-coded CTR/CVR · claim approval · return reason · review sentiment',
  },
];

function Label({ children }: { children: string }) {
  const tone =
    children === 'PUBLIC SIGNAL'
      ? 'public'
      : children === 'ESTIMATE'
        ? 'estimate'
        : children === 'ILLUSTRATIVE'
          ? 'hypothesis'
          : children === 'HYPOTHESIS'
            ? 'hypothesis'
            : 'internal';
  return <span className={`signal ${tone}`}>{children}</span>;
}
function External({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="source-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={13} />
    </a>
  );
}
function Head({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-head">
      <p>{eyebrow}</p>
      <h2>
        <GlossaryText>{title}</GlossaryText>
      </h2>
      {copy && (
        <span>
          <GlossaryText>{copy}</GlossaryText>
        </span>
      )}
    </div>
  );
}
function ValueBars({ rows }: { rows: readonly (readonly [string, number])[] }) {
  const max = Math.max(...rows.map((r) => r[1]));
  const money = (n: number) =>
    n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` : `$${Math.round(n / 1000)}K`;
  return (
    <div className="value-bars">
      {rows.map(([name, value]) => (
        <div key={name}>
          <div>
            <strong>{name}</strong>
            <span>{money(value)}</span>
          </div>
          <div className="value-track">
            <i style={{ width: `${(value / max) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
function Metrics() {
  return (
    <section className="signal-strip">
      {channels.map((c) => (
        <article key={c[0]}>
          <div>
            <span>{c[0]}</span>
            <Label>PUBLIC SIGNAL</Label>
          </div>
          <strong>{c[1]}</strong>
          <p>{c[2]}</p>
        </article>
      ))}
    </section>
  );
}

function TrendChart({ compact = false }: { compact?: boolean }) {
  const width = 880,
    height = 260,
    pad = { l: 42, r: 18, t: 18, b: 34 };
  const max = compact ? 12 : 85;
  const series = compact
    ? [
        { name: 'Hair perfume', i: 2, color: '#CA9A8E', dash: '' },
        { name: 'Shampoo bar', i: 3, color: '#00426A', dash: '7 5' },
        { name: 'Heatless curls', i: 4, color: '#231F20', dash: '2 5' },
      ]
    : [{ name: 'Hair oil', i: 1, color: '#CA9A8E', dash: '' }];
  const x = (n: number) =>
    pad.l + (n * (width - pad.l - pad.r)) / (trendData.length - 1);
  const y = (v: number) => pad.t + ((max - v) * (height - pad.t - pad.b)) / max;
  return (
    <div className="trend-chart">
      <div className="chart-legend">
        {series.map((s) => (
          <span key={s.name}>
            <i style={{ background: s.color }} />
            {s.name}
          </span>
        ))}
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={
          compact
            ? 'Monthly US Google Trends interest for hair perfume, shampoo bar, and heatless curls'
            : 'Monthly US Google Trends interest for hair oil'
        }
      >
        <title>US Google Trends monthly relative search interest</title>
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <g key={t}>
            <line
              x1={pad.l}
              x2={width - pad.r}
              y1={y(max * t)}
              y2={y(max * t)}
              stroke="#D9D9D6"
            />
            <text x={pad.l - 8} y={y(max * t) + 4} textAnchor="end">
              {Math.round(max * t)}
            </text>
          </g>
        ))}
        {series.map((s) => {
          const points = trendData
            .map((d, n) => `${x(n)},${y(Number(d[s.i]))}`)
            .join(' ');
          return (
            <polyline
              key={s.name}
              points={points}
              fill="none"
              stroke={s.color}
              strokeWidth="3"
              strokeDasharray={s.dash}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          );
        })}
        {trendData.map((d, n) =>
          n % 6 === 0 || n === trendData.length - 1 ? (
            <text
              key={d[0]}
              x={x(n)}
              y={height - 8}
              textAnchor={
                n === 0
                  ? 'start'
                  : n === trendData.length - 1
                    ? 'end'
                    : 'middle'
              }
            >
              {d[0]}
            </text>
          ) : null,
        )}
        <line
          x1={pad.l}
          x2={width - pad.r}
          y1={y(0)}
          y2={y(0)}
          stroke="#53565A"
        />
      </svg>
    </div>
  );
}

function Intelligence() {
  return (
    <div className="page-grid">
      <Head
        eyebrow="Growth signals"
        title="Decide what to test next"
        copy="Use public search, ad and market evidence to frame one hypothesis, owner, validation metric and stop/scale rule."
      />
      <section className="intelligence-hero">
        <div>
          <BrainCircuit />
          <p>WEEKLY LEADERSHIP VIEW</p>
          <h2>Baseline → exception → diagnosis → action → owner → outcome.</h2>
        </div>
        <div className="leadership-stack">
          {[
            'Profitability exception',
            'Customer / cohort exception',
            'Launch / inventory exception',
            'Demand / competitor exception',
            'Leadership decision required',
          ].map((x, i) => (
            <div key={x}>
              <span>0{i + 1}</span>
              <strong>{x}</strong>
              <small>
                {i < 3 ? 'INTERNAL CONNECTION' : 'PUBLIC + INTERNAL'}
              </small>
            </div>
          ))}
        </div>
      </section>
      <section className="wide-card chart-card">
        <div className="chart-heading">
          <div>
            <p>SEARCH DEMAND · UNITED STATES</p>
            <h3>Monthly Google Trends relative interest</h3>
            <span>
              Jan 2024–Aug 2026 · US Web Search · shared 0–100 scale · monthly
              average of weekly observations
            </span>
          </div>
          <Label>PUBLIC SIGNAL</Label>
        </div>
        <div className="chart-pair">
          <article>
            <h4>Category scale benchmark</h4>
            <TrendChart />
            <p>
              <b>Read:</b> Hair oil is the largest selected attention pool; the
              April 2026 peak is an indexed signal, not absolute volume.
            </p>
          </article>
          <article>
            <h4>Emerging Kitsch-relevant categories</h4>
            <TrendChart compact />
            <p>
              <b>Read:</b> Perfume and shampoo bars expanded sharply in spring
              2026, while heatless curls remained smaller on this shared scale.
            </p>
          </article>
        </div>
        <div className="method-note">
          <CircleAlert />
          <p>
            Google Trends is relative and sampled. Low-volume series are
            compressed by hair oil. Use Keyword Planner for estimated volume/CPC
            and Search Console for Kitsch clicks, impressions and landing-page
            outcomes.
          </p>
          <External href={links.trends}>Open the exact Trends view</External>
        </div>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Rising-query evidence"
          title="Where Kitsch appears in category demand"
        />
        <div className="query-grid">
          <article>
            <span>HEATLESS CURLS</span>
            <strong>“heatless curls kitsch”</strong>
            <p>Breakout, alongside “kitsch hair.”</p>
          </article>
          <article>
            <span>SHAMPOO BAR</span>
            <strong>Three Kitsch product variants</strong>
            <p>
              Rice water, shampoo + conditioner, and castor oil queries were
              Breakout.
            </p>
          </article>
          <article>
            <span>HAIR PERFUME</span>
            <strong>Prestige + celebrity discovery</strong>
            <p>
              Sol de Janeiro, Billie Eilish, Crown Affair, Rare Beauty and
              Summer Fridays rose fastest.
            </p>
          </article>
          <article>
            <span>HAIR OIL</span>
            <strong>Formula + founder brands</strong>
            <p>K18, Veganic, Cyperus rotundus and Cécred were Breakout.</p>
          </article>
        </div>
      </section>
      <details className="editorial-disclosure">
        <summary>
          <span>PAID-MEDIA DEEP DIVE</span>
          <strong>Explore the ad evidence and competitor patterns</strong>
          <ChevronRight aria-hidden="true" />
        </summary>
        <div className="editorial-disclosure-body page-grid">
          <PaidMediaEvidence />
          <section className="wide-card">
            <div className="chart-heading">
              <div>
                <p>COMPETITIVE PAID PRESSURE</p>
                <h3>Observable ad inventory and message architecture</h3>
                <span>
                  Google: official US domain archive, any time · Meta:
                  third-party active-ad snapshots
                </span>
              </div>
              <Label>ESTIMATE</Label>
            </div>
            <div className="ad-bars">
              {paidBrands.map((b, i) => {
                const value = [700, 200, 300, 57, 83, 700][i];
                return (
                  <article key={b[0]}>
                    <div>
                      <strong>{b[0]}</strong>
                      <span>{b[1]} Google ads</span>
                    </div>
                    <div className="bar-track">
                      <i style={{ width: `${Math.max(8, value / 7)}%` }} />
                    </div>
                    <small>Meta: {b[2]}</small>
                  </article>
                );
              })}
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Brand</th>
                    <th>Dominant communication</th>
                    <th>Relative strength</th>
                    <th>Kitsch decision</th>
                  </tr>
                </thead>
                <tbody>
                  {paidBrands.map((b) => (
                    <tr key={b[0]}>
                      <td>
                        <strong>{b[0]}</strong>
                      </td>
                      <td>{b[3]}</td>
                      <td>{b[4]}</td>
                      <td>{b[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="method-note">
              <ShieldCheck />
              <p>
                Inventory, creative recurrence and longevity are pressure
                signals—not spend, targeting, conversion or ROAS. Facebook
                Marketplace placement delivery is not publicly available; this
                view uses Meta Ad Library signals instead.
              </p>
              <External href={links.googleAds}>Google archive</External>
              <External href={links.metaAds}>Meta library</External>
            </div>
          </section>
        </div>
      </details>
      <section className="two-col">
        <article className="wide-card">
          <Head
            eyebrow="Public communication patterns"
            title="Patterns worth preserving and testing"
          />
          <ul className="check-list">
            <li>
              <CheckCircle2 />
              Immediate sensory or visible payoff: scent reaction, smoother
              texture, easier styling.
            </li>
            <li>
              <CheckCircle2 />
              Creator-native delivery and high concept / variant velocity.
            </li>
            <li>
              <CheckCircle2 />
              Scarcity and culturally recognizable limited editions.
            </li>
            <li>
              <CheckCircle2 />
              Accessible price and broad retail availability reduce friction
              after discovery.
            </li>
            <li>
              <CheckCircle2 />
              Hair perfume is a discovery wedge; Air Dry Cream is an evergreen
              problem / solution story.
            </li>
          </ul>
        </article>
        <article className="wide-card">
          <Head
            eyebrow="Improvement agenda"
            title="Turn breadth into a system"
          />
          <ol className="number-list">
            <li>
              Build a substantiated proof ladder instead of relying on reaction
              alone.
            </li>
            <li>
              Organize the portfolio as need state → ritual → hero → supporting
              product.
            </li>
            <li>
              Separate new concepts from superficial variants and close the
              learning loop.
            </li>
            <li>
              Code awareness stage; add more problem framing and education.
            </li>
            <li>
              Measure full-price demand and post-promotion cohort quality.
            </li>
          </ol>
        </article>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Expert rubric"
          title="Communication clarity assessment"
          copy="A directional public-evidence rubric—not a performance score or consumer-research result."
        />
        <div className="score-grid">
          {messageScores.map((s) => (
            <article key={s[0]}>
              <div>
                <strong>{s[0]}</strong>
                <span>{s[1]}/100</span>
              </div>
              <div className="score-track">
                <i style={{ width: `${s[1]}%` }} />
              </div>
              <p>{s[2]}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Smart insight contract"
          title="Move from observation to decision"
        />
        <div className="insight-grid">
          {smartInsights.map((s, i) => (
            <article key={s.title}>
              <div>
                <span>0{i + 1}</span>
                <b>{s.level} CONFIDENCE</b>
              </div>
              <h3>{s.title}</h3>
              <dl>
                <dt>Observed</dt>
                <dd>{s.fact}</dd>
                <dt>Interpretation</dt>
                <dd>{s.read}</dd>
                <dt>Decision</dt>
                <dd>{s.action}</dd>
                <dt>Validate with</dt>
                <dd>{s.metric}</dd>
              </dl>
            </article>
          ))}
        </div>
      </section>
      <section className="principle-card">
        <Megaphone />
        <div>
          <strong>The next data connection</strong>
          <p>
            Join Google Trends + Keyword Planner + Search Console + paid search
            terms to Shopify, CRM, marketplace and margin data. Then the same
            cards can answer whether public attention becomes profitable,
            repeatable demand.
          </p>
        </div>
      </section>
    </div>
  );
}

function Overview() {
  return (
    <div className="page-grid">
      <section className="hero-panel">
        <div className="hero-copy">
          <Label>PUBLIC-DATA OPERATING PROTOTYPE</Label>
          <h1>
            Know what changed.
            <br />
            <em>Run what happens next.</em>
          </h1>
          <p>
            An executive view of public signals, operating priorities and the
            internal data needed to make trusted decisions.
          </p>
          <div className="hero-chips">
            <span>14 decision views</span>
            <span>{sources.length} sourced references</span>
            <span>0 fabricated Kitsch actuals</span>
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="Kitsch product and strategy collage"
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0104/6904/8384/files/69117-HairPerfumeDiscoverySet-Sampler-4pc-Fragrance-1280x1280px.jpg?v=1762182803"
            alt="Kitsch hair perfume discovery set"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0104/6904/8384/files/500904-AirDryCream-Consumables-hero-1280x1280px.jpg?v=1779490582"
            alt="Kitsch air dry cream"
          />
          <div>
            <span>KITSCH</span>
            <small>
              PUBLIC DATA PROTOTYPE
              <br />
              SEP 08 · 2026
            </small>
          </div>
        </div>
      </section>
      <EvidenceToAction
        evidence="Current public counters, retailer surfaces, product pages and dated market signals."
        interpretation="Fragrance and social commerce are visible growth narratives, while omnichannel scale creates a reconciliation job."
        internal="Finance-aligned revenue, spend, margin, inventory and customer cohorts joined across channels."
        decision="Set the leadership priority, assign an owner and define the internal proof required before funding or scaling."
        owner="Leadership"
      />
      <Metrics />
      <section className="wide-card">
        <Head
          eyebrow="Role coverage"
          title="Eight systems this role must own"
          copy="This overview maps directly to Kitsch’s brief: create rhythm, make numbers trustworthy and keep cross-functional work moving. These are operating capabilities—not claims about current Kitsch performance."
        />
        <div className="pulse-grid">
          {[
            [
              CalendarDays,
              'Operating cadence',
              'Weekly pulse, monthly review and quarterly planning with a defined input, decision and output.',
            ],
            [
              Database,
              'Trusted KPI definitions',
              'One governed definition, source, owner and refresh rule for CAC, ROAS, LTV, repeat and contribution.',
            ],
            [
              PackageSearch,
              'Launch control',
              'One calendar with readiness gates, dependencies, accountable owners and a 30-day learning review.',
            ],
            [
              Target,
              'OKRs + planning',
              'Company priorities cascade into measurable marketing outcomes, key results, initiatives and work records.',
            ],
            [
              DollarSign,
              'Budget, POs + vendors',
              'Plan, committed spend, invoices, forecast, variance, renewal dates and vendor accountability stay visible together.',
            ],
            [
              CheckCircle2,
              'Leadership follow-through',
              'Pre-read, decision owner, deadline, rationale and outcome close the loop after every leadership meeting.',
            ],
            [
              ListChecks,
              'Playbooks',
              'Recurring friction becomes a tested process with an owner, service level, evidence and exception path.',
            ],
            [
              Users,
              'Cross-functional integration',
              'Product, E-commerce, Retail, Creative, Social and Ops share dependencies and acceptance criteria.',
            ],
          ].map(([Icon, title, copy]) => {
            const CoverageIcon = Icon as typeof CalendarDays;
            return (
              <article key={String(title)}>
                <CoverageIcon />
                <h3>{String(title)}</h3>
                <p>{String(copy)}</p>
              </article>
            );
          })}
        </div>
      </section>
      <ExecutiveSpotlight />
      <section className="wide-card">
        <Head
          eyebrow="Leadership signals"
          title="Four questions worth resolving"
          copy="Public evidence opens the discussion; internal data determines the decision."
        />
        <div className="pulse-grid">
          <article>
            <Radio />
            <h3>Shop scale is observable</h3>
            <p>
              TikTok Shop displays 2.3M sold. The operational question is how
              that volume translates into profitable cohorts, repeat behavior
              and cross-channel demand.
            </p>
            <External href={links.tiktok}>Open source</External>
          </article>
          <article>
            <Palette />
            <h3>Fragrance is a live growth narrative</h3>
            <p>
              New DTC merchandising, visible Shop velocity and 2026 editorial
              inclusion converge around hair perfume.
            </p>
            <External href={links.hairPerfume}>Open source</External>
          </article>
          <article>
            <Globe2 />
            <h3>Omnichannel creates a measurement job</h3>
            <p>
              DTC, TikTok Shop, Ulta and Target expose different demand signals.
              Leadership needs one definition layer, not four dashboards.
            </p>
            <External href={links.target}>Open source</External>
          </article>
          <article>
            <CircleAlert />
            <h3>Public footprint claims differ</h3>
            <p>
              The supplied role brief says 32,000+ retailers / 92 countries; an
              older site page says 20,000 / 27. Validate the current master
              claim internally.
            </p>
            <Label>INTERNAL DATA REQUIRED</Label>
          </article>
        </div>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Leadership decision queue"
          title="Questions that need an owner"
          copy="Confirm the evidence, name the decision-maker and record the outcome."
        />
        {decisions.map((d) => (
          <article className="decision-row" key={d[2]}>
            <span className="priority">{d[0]}</span>
            <div>
              <h3>{d[2]}</h3>
              <p>{d[1]}</p>
            </div>
            <div className="decision-owner">
              <span>{d[3]}</span>
              <small>{d[4]} confidence</small>
            </div>
            <ChevronRight />
          </article>
        ))}
      </section>
      <section className="principle-card">
        <Lightbulb />
        <div>
          <strong>Positioning for the interview</strong>
          <p>
            I am not claiming to understand Kitsch better than the people inside
            Kitsch. This prototype shows how I structure ambiguity, separate
            evidence from assumptions, and turn signals into decisions.
          </p>
        </div>
      </section>
    </div>
  );
}
function Ecommerce() {
  const tikTokTotal = tiktokValue.reduce((sum, r) => sum + r[1], 0);
  const targetTotal = targetValue.reduce((sum, r) => sum + r[1], 0);
  return (
    <div className="page-grid">
      <Head
        eyebrow="Commerce control"
        title="Products, channels, profitable repeat"
        copy="Inspect public product and channel signals, then connect orders, costs, returns and cohorts before making a commercial decision."
      />
      <EvidenceToAction
        evidence="Public assortment, prices, retailer result counts, platform counters and Shopify-published case claims."
        interpretation="Visible product velocity and mobile behavior suggest franchise and cross-channel opportunities—not realized Kitsch economics."
        internal="Order-level net sales, discounts, returns, COGS, fees, fulfillment, customer status and 30/60/90-day repeat."
        decision="Choose which SKU × channel combinations to scale, fix, bundle or stop on contribution and customer quality."
        owner="E-commerce + Finance"
      />
      <section className="commerce-hero">
        <div>
          <ShoppingBag />
          <p>PORTFOLIO STRATEGY</p>
          <h2>
            Accessible utility becomes a repeatable franchise—then travels
            across DTC, retail and social commerce.
          </h2>
        </div>
        <div className="commerce-proof">
          <span>PUBLIC FOOTPRINT · SEP 08, 2026</span>
          <div>
            <strong>2.3M</strong>
            <small>TikTok Shop sold displayed</small>
          </div>
          <div>
            <strong>55</strong>
            <small>DTC best sellers listed</small>
          </div>
          <div>
            <strong>203 / 144 / 90</strong>
            <small>approx. Ulta / Target / Walmart results</small>
          </div>
        </div>
      </section>
      <section className="commerce-kpis">
        <article>
          <Store />
          <strong>80%</strong>
          <span>of traffic + revenue from mobile</span>
          <small>Shopify-published case claim</small>
        </article>
        <article>
          <TrendingUp />
          <strong>32%</strong>
          <span>faster repurchase in Shop app</span>
          <small>Shopify-published case claim</small>
        </article>
        <article>
          <DollarSign />
          <strong>+28%</strong>
          <span>ROAS after minimum-order optimization</span>
          <small>Shopify-published case claim</small>
        </article>
        <article>
          <PackageSearch />
          <strong>5</strong>
          <span>connected product franchises</span>
          <small>Independent strategy synthesis</small>
        </article>
      </section>
      <ShopifyCommerceWorkspace />
      <details className="editorial-disclosure commerce-deep-dive">
        <summary>
          <span>PRODUCT + CHANNEL EVIDENCE</span>
          <strong>Explore the complete commerce research</strong>
          <ChevronRight aria-hidden="true" />
        </summary>
        <div className="editorial-disclosure-body page-grid">
          <section className="two-col commerce-charts">
            <article className="wide-card">
              <div className="chart-heading">
                <div>
                  <p>TIKTOK SHOP · LIFETIME DISPLAY</p>
                  <h3>
                    ${(tikTokTotal / 1e6).toFixed(2)}M top-nine retail-value
                    proxy
                  </h3>
                  <span>
                    Rounded displayed units × price observed Sep. 8, 2026
                  </span>
                </div>
                <Label>ESTIMATE</Label>
              </div>
              <ValueBars rows={tiktokValue} />
              <div className="method-note">
                <CircleAlert />
                <p>
                  This is not revenue or GMV. Current price is multiplied by a
                  rounded lifetime unit counter; historical price, discounts,
                  returns, taxes and fees are unknown.
                </p>
                <External href={links.tiktok}>Storefront evidence</External>
              </div>
            </article>
            <article className="wide-card">
              <div className="chart-heading">
                <div>
                  <p>TARGET · “BOUGHT LAST MONTH” BADGES</p>
                  <h3>
                    ${(targetTotal / 1e6).toFixed(2)}M+ top-eight monthly floor
                  </h3>
                  <span>
                    Minimum displayed badge threshold × current observed price
                  </span>
                </div>
                <Label>ESTIMATE</Label>
              </div>
              <ValueBars rows={targetValue} />
              <div className="method-note">
                <CircleAlert />
                <p>
                  This is a minimum retail sales-value proxy for eight visible
                  SKUs—not Kitsch revenue. Badges are rounded, the period is
                  retailer-defined, and wholesale economics are unavailable.
                </p>
                <External href={links.target}>Retailer evidence</External>
              </div>
            </article>
          </section>
          <section className="wide-card">
            <div className="chart-heading">
              <div>
                <p>PUBLISHED COMMERCE CASE</p>
                <h3>Mobile acquisition is only the first move</h3>
                <span>
                  Shopify attributes faster app repurchase and a 28% ROAS
                  improvement to Shop Campaigns optimizations.
                </span>
              </div>
              <Label>PUBLIC SIGNAL</Label>
            </div>
            <div className="shopify-story">
              <article>
                <span>01 · ACQUIRE</span>
                <strong>Design for the 80% mobile mix</strong>
                <p>
                  Fast product understanding, creator proof and frictionless
                  checkout matter most on the dominant traffic surface.
                </p>
              </article>
              <ChevronRight />
              <article>
                <span>02 · INCREASE QUALITY</span>
                <strong>Use thresholds intentionally</strong>
                <p>
                  Minimum order value can protect economics and encourage
                  bundles—but should be read against conversion and
                  contribution.
                </p>
              </article>
              <ChevronRight />
              <article>
                <span>03 · RETAIN</span>
                <strong>Measure the second category</strong>
                <p>
                  The strategic test is whether a first TikTok or Shop order
                  creates profitable 30/60/90-day migration across franchises.
                </p>
              </article>
            </div>
            <External href={links.shopifyCase}>
              Read Shopify case study
            </External>
          </section>
          <section className="wide-card">
            <Head
              eyebrow="Product architecture"
              title="Five franchises. Five jobs."
              copy="A strategy hypothesis based on visible assortment and public demand proof."
            />
            <div className="commerce-franchises">
              {commerceFranchises.map((f, i) => (
                <article key={f[0]}>
                  <span>0{i + 1}</span>
                  <small>{f[0]}</small>
                  <h3>{f[1]}</h3>
                  <p>{f[2]}</p>
                </article>
              ))}
            </div>
          </section>
          <ProductVisualShowcase />
          <section className="wide-card">
            <Head
              eyebrow="Representative product intelligence"
              title="Product, channel and portfolio role"
              copy="Twelve visible hero products—not a complete SKU census. Prices, counters and result counts are snapshots that can change."
            />
            <div className="product-card-grid">
              {commerceProducts.map((p) => (
                <article key={p.name}>
                  <div>
                    <span>{p.franchise}</span>
                    <Label>
                      {p.proxy === 'Not estimable'
                        ? 'PUBLIC SIGNAL'
                        : 'ESTIMATE'}
                    </Label>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <dl>
                    <dt>Visible channels</dt>
                    <dd>{p.channels}</dd>
                    <dt>Price signal</dt>
                    <dd>{p.price}</dd>
                    <dt>Public proof</dt>
                    <dd>{p.proof}</dd>
                    <dt>Retail-value proxy</dt>
                    <dd>
                      {p.proxy} <small>{p.window}</small>
                    </dd>
                    <dt>Portfolio role</dt>
                    <dd>{p.role}</dd>
                  </dl>
                </article>
              ))}
            </div>
          </section>
          <section className="two-col">
            <article className="wide-card">
              <Head
                eyebrow="Public patterns to validate"
                title="Test utility as the core and novelty as the extension"
              />
              <ul className="commerce-list">
                {[
                  'Low-ticket, easy-to-understand functional heroes travel well across mass retail and TikTok Shop.',
                  'Short-form-friendly demonstrations make styling, shower and heatless products naturally discoverable.',
                  'Discovery sets and bundles reduce trial friction and create a path into higher-value routines.',
                  'Variants, scent launches and licensed drops refresh proven formats without rebuilding the product engine.',
                  'Retail review proof and social-commerce velocity reinforce one another across the portfolio.',
                ].map((x) => (
                  <li key={x}>
                    <CheckCircle2 />
                    {x}
                  </li>
                ))}
              </ul>
              <Label>HYPOTHESIS</Label>
            </article>
            <article className="wide-card">
              <Head
                eyebrow="Highest-value questions"
                title="Questions internal data must answer"
              />
              <ul className="commerce-list risk">
                {[
                  'Is promo depth creating incremental demand or training cross-channel price waiting?',
                  'Which first product drives the best contribution-adjusted 90-day repeat—not simply the most units?',
                  'Do fragrance buyers migrate into replenishable hair care, and do bar buyers expand into styling?',
                  'Which creator, retailer and SKU combinations remain profitable after fees, returns and fulfillment?',
                  'Where do stockouts, variant proliferation and channel conflict suppress full-price demand?',
                ].map((x) => (
                  <li key={x}>
                    <CircleAlert />
                    {x}
                  </li>
                ))}
              </ul>
              <Label>INTERNAL DATA REQUIRED</Label>
            </article>
          </section>
          <section className="formula-card">
            <div>
              <DollarSign />
              <span>PUBLIC PROXY</span>
              <strong>displayed units × observed price</strong>
            </div>
            <ChevronRight />
            <div>
              <Database />
              <span>COMMERCIAL TRUTH</span>
              <strong>
                realized net sales − returns − channel fees − COGS − fulfillment
                − media
              </strong>
            </div>
            <ChevronRight />
            <div>
              <Target />
              <span>DECISION</span>
              <strong>
                contribution + new-to-brand quality + 30/60/90-day repeat
              </strong>
            </div>
          </section>
          <section className="dark-card commerce-data">
            <Database />
            <h3>The internal commerce grain</h3>
            <p>
              SKU × channel × date × list price × realized price × units × gross
              sales × net sales × contribution × new-to-brand × return rate ×
              30/60/90-day repeat.
            </p>
            <Label>INTERNAL DATA REQUIRED</Label>
          </section>
        </div>
      </details>
    </div>
  );
}
function Performance() {
  return (
    <div className="page-grid">
      <Head
        eyebrow="KPI definitions"
        title="Define the KPI before reporting it"
        copy="Agree on the business question, formula, source, owner, refresh date and decision threshold before publishing an actual."
      />
      <MetricBenchmarkLab />
      <Metrics />
      <section className="wide-card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Business question</th>
                <th>Metric</th>
                <th>Definition</th>
                <th>Source</th>
                <th>Cadence</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {kpis.map((r) => (
                <tr key={r[1]}>
                  {r.map((v, i) => (
                    <td key={v}>
                      {i === 5 ? (
                        <Label>
                          {v === 'Public'
                            ? 'PUBLIC SIGNAL'
                            : 'INTERNAL DATA REQUIRED'}
                        </Label>
                      ) : (
                        v
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="two-col">
        <article className="wide-card">
          <Head
            eyebrow="Measurement contract"
            title="Agree the measurement contract"
          />
          <ul className="check-list">
            {[
              'One new-customer definition across DTC and marketplaces',
              'One spend perimeter for MER and CAC',
              'One launch window and baseline method',
              'One owner for channel reconciliation',
              'One weekly date when numbers lock',
            ].map((x) => (
              <li key={x}>
                <CheckCircle2 />
                {x}
              </li>
            ))}
          </ul>
        </article>
        <article className="dark-card">
          <LockKeyhole />
          <h3>Private metrics stay private</h3>
          <p>
            CAC, ROAS, MER, LTV, revenue, conversion, spend, margin and repeat
            purchase are intentionally blank until connected to trusted internal
            sources.
          </p>
          <Label>INTERNAL DATA REQUIRED</Label>
        </article>
      </section>
    </div>
  );
}
function Launches() {
  return (
    <div className="page-grid">
      <Head
        eyebrow="Launch control"
        title="See risk before the date slips"
        copy="Use one shared record for every dependency, owner, due date and decision, then close the launch with a 30-day learning review. All records below are illustrative."
      />
      <section className="launch-explainer">
        <article>
          <span>01 · BEFORE LAUNCH</span>
          <strong>Assign the work</strong>
          <p>
            Put inventory, creative, retailer, website, customer-care and
            measurement dependencies in one record with owners and due dates.
          </p>
        </article>
        <ChevronRight />
        <article>
          <span>02 · LAUNCH WEEK</span>
          <strong>Close the blockers</strong>
          <p>
            Use the weekly launch meeting only for at-risk work, missing
            approvals and decisions that could move the date or scope.
          </p>
        </article>
        <ChevronRight />
        <article>
          <span>03 · 30 DAYS LATER</span>
          <strong>Keep the learning</strong>
          <p>
            Compare actual sales, contribution, acquisition and repeat signals
            with the launch goal. Turn the result into the next playbook update.
          </p>
        </article>
      </section>
      <details className="editorial-disclosure">
        <summary>
          <span>ILLUSTRATIVE RECORDS</span>
          <strong>See how three launches would appear in the tracker</strong>
          <ChevronRight />
        </summary>
        <div className="editorial-disclosure-body">
          <section className="launch-grid">
            {launches.map((l, i) => (
              <article className="launch-card" key={l[0]}>
                <div className="launch-top">
                  <span>0{i + 1}</span>
                  <Label>ILLUSTRATIVE</Label>
                </div>
                <h3>{l[0]}</h3>
                <p className="date">
                  <CalendarDays /> {l[1]}
                </p>
                <Progress value={Number(l[2])} />
                <div className="ready">
                  <span>Example completion</span>
                  <strong>{l[2]}%</strong>
                </div>
                <p className="risk">{l[3]}</p>
                <div className="chips">
                  {String(l[4])
                    .split(' · ')
                    .map((w) => (
                      <span key={w}>{w}</span>
                    ))}
                </div>
              </article>
            ))}
          </section>
        </div>
      </details>
      <section className="wide-card">
        <Head
          eyebrow="Readiness gates"
          title="Ten gates every launch must clear"
          copy="A launch is ready only when these inputs are complete or a named decision-maker accepts the risk."
        />
        <div className="gate-grid">
          {[
            'Goal and audience',
            'Demand forecast and inventory',
            'Creative assets',
            'Channel plan',
            'Website merchandising',
            'Retailer readiness',
            'Measurement plan',
            'Customer-care answers',
            'Go / no-go decision',
            '30-day results review',
          ].map((x, i) => (
            <div key={x}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <p>{x}</p>
              <small>
                {[1, 4, 6, 8].includes(i)
                  ? 'Decision checkpoint'
                  : 'Owner + due date'}
              </small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
function SearchView() {
  const rows = [
    [
      'Hair perfume',
      'Strong public signal',
      'Own comparison + scent-finder answers',
      'High',
    ],
    [
      'Heatless curls',
      'Strong public signal',
      'Build hair-type / sleep-position troubleshooting',
      'High',
    ],
    [
      'Shampoo bars',
      'Mixed answer visibility',
      'Earn authority with formula, pH and transition education',
      'High',
    ],
    [
      'Satin pillowcases',
      'Competitive SERP',
      'Differentiate satin value vs silk with transparent materials education',
      'Medium',
    ],
    [
      'Overnight hair protection',
      'Portfolio opportunity',
      'Connect bonnet, pillowcase, shower cap and heatless styling',
      'Medium',
    ],
  ];
  return (
    <div className="page-grid">
      <Head
        eyebrow="Search + answer visibility"
        title="Answer the question. Earn the click."
        copy="Use the September 2026 public snapshot to prioritize customer questions; validate demand, ranking and conversion in Search Console and commerce data."
      />
      <SearchEvidenceWorkbench />
      <section className="two-col">
        <article className="wide-card">
          <div className="icon-title">
            <Search />
            <div>
              <small>SEO foundation</small>
              <h3>Strong commercial architecture</h3>
            </div>
          </div>
          <ul className="check-list">
            <li>
              <CheckCircle2 />
              Problem and category pathways across Hair Care, Style, Skin,
              Shower and Sleep
            </li>
            <li>
              <CheckCircle2 />
              Canonical, description and Organization / WebSite schema observed
            </li>
            <li>
              <CircleAlert />
              Homepage exposed duplicate WebSite and Organization schema blocks
            </li>
            <li>
              <CircleAlert />
              Older business-footprint copy conflicts with the current role
              brief
            </li>
          </ul>
        </article>
        <article className="wide-card">
          <div className="icon-title">
            <Eye />
            <div>
              <small>AEO observation</small>
              <h3>Editorial citations are the leverage point</h3>
            </div>
          </div>
          <p>
            Kitsch appears in current hair-perfume and heatless-curler roundups.
            Shampoo-bar results surface a more fragmented set of publishers,
            niche sites and community discussions.
          </p>
          <Label>HYPOTHESIS</Label>
        </article>
      </section>
      <section className="wide-card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Observed position</th>
                <th>Content job</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>
                  {r.map((v, i) => (
                    <td key={v}>
                      {i === 3 ? <span className="priority">{v}</span> : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="two-col">
        <article className="wide-card">
          <Head
            eyebrow="Blog audit"
            title="A strong cluster, published in bursts"
          />
          <p>
            The visible archive shows eight shampoo-bar and scalp-science
            articles published on May 18, then eight broad hair / beauty
            explainers on September 4. That is efficient topic clustering, but
            the publishing cadence looks episodic and some titles risk competing
            for the same intent.
          </p>
          <div className="blog-stats">
            <div>
              <strong>8</strong>
              <span>May 18 cluster</span>
            </div>
            <div>
              <strong>8</strong>
              <span>Sep 04 cluster</span>
            </div>
            <div>
              <strong>2</strong>
              <span>visible authors</span>
            </div>
          </div>
          <External href={links.blog}>Inspect public archive</External>
        </article>
        <article className="wide-card">
          <Head
            eyebrow="90-day content system"
            title="One pillar → five reusable answers"
          />
          <ol className="number-list">
            <li>
              Consolidate overlapping shampoo-bar pages around one canonical
              comparison hub.
            </li>
            <li>
              Add expert reviewer, cited evidence, freshness date and
              product-claim guardrails.
            </li>
            <li>
              Turn each article into PDP FAQ, creator brief, email module and
              retailer education.
            </li>
            <li>
              Track non-brand impressions, answer citations, assisted conversion
              and decay monthly.
            </li>
            <li>
              Publish at a steady weekly rhythm, then refresh winners instead of
              adding near-duplicates.
            </li>
          </ol>
        </article>
      </section>
      <section className="principle-card">
        <FileSearch />
        <div>
          <strong>Structured-answer sprint</strong>
          <p>
            Create one canonical guide per priority topic with concise
            definitions, comparison tables, hair-type variants, FAQs, expert
            review, product proof and retailer-consistent claims. Reuse the
            answer blocks across PDPs, CRM, creators and retail education.
          </p>
        </div>
      </section>
    </div>
  );
}
function SocialLegacy() {
  const rows = [
    ['Problem → demo → result', 'Heatless styling, bars, air-dry cream'],
    ['Scent reaction + occasion', 'Hair perfume discovery and drops'],
    ['Hair-type education', 'Bar finder, curl cream, treatments'],
    ['Founder / build story', 'Bootstrapped scale and innovation'],
    ['Seasonal collectible drop', 'Halloween, Tennis, Coastal Cottage'],
    ['Creator proof', 'Routine integration and before/after'],
  ];
  const overlap = [
    ['Instagram', '●●', '●●', '●●●', '●●●', '●●'],
    ['TikTok', '●●', '●●●', '●●●', '●●●', '●●●'],
    ['Pinterest', '●●●', '●●', '●●', '●●●', '●●●'],
    ['YouTube', '●●●', '●●●', '●', '●●', '●●●'],
    ['Facebook', '●●', '●●', '●●●', '●●', '●●'],
  ];
  return (
    <div className="page-grid">
      <Head
        eyebrow="Social + creative"
        title="Six accounts. One connected creative system."
        copy="Public profiles establish scale; historical reach, engagement, spend and conversion require first-party exports."
      />
      <Metrics />
      <section className="wide-card">
        <Head
          eyebrow="August 2026 readout"
          title="College utility → scent newness → promotional close"
          copy="Public marketing capture indicates 231 social assets in the last 30 days as of Aug. 31, with Pinterest the most active observed platform. This is capture volume, not performance."
        />
        <div className="august-summary">
          <div>
            <strong>231</strong>
            <span>captured social assets / 30d</span>
          </div>
          <div>
            <strong>36</strong>
            <span>captured emails / 30d</span>
          </div>
          <div>
            <strong>28</strong>
            <span>homepage changes / 30d</span>
          </div>
          <div>
            <strong>32%</strong>
            <span>average visible promo depth</span>
          </div>
        </div>
        <External href={links.shopvision}>Open public capture</External>
      </section>
      <section className="creative-grid">
        {augAssets.map((a) => (
          <article className="creative-card" key={a.date}>
            <div className="creative-image">
              <img
                src={a.image}
                alt={`${a.title} public Kitsch product visual`}
              />
              <span>{a.platform}</span>
            </div>
            <div>
              <small>{a.date} · OBSERVED THEME</small>
              <h3>{a.title}</h3>
              <p>{a.copy}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Six-month public signal history"
          title="March → August 2026"
          copy="A qualitative evidence timeline where comparable platform metrics are unavailable."
        />
        <div className="history-track">
          {monthTimeline.map((m) => (
            <article key={m[0]}>
              <span>{m[0]}</span>
              <div>
                <strong>{m[1]}</strong>
                <p>{m[2]}</p>
                <External href={m[3]}>Evidence</External>
              </div>
              <small>{m[4]} confidence</small>
            </article>
          ))}
        </div>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Account scorecards"
          title="Give every platform a distinct job"
        />
        <div className="account-grid">
          {accountCards.map((a) => (
            <article key={a[0]}>
              <div>
                <strong>{a[0]}</strong>
                <Label>PUBLIC SIGNAL</Label>
              </div>
              <h3>{a[1]}</h3>
              <p>
                <b>{a[2]}</b>
                <br />
                {a[3]}
              </p>
              <small>Connect internally: {a[4]}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="two-col">
        <article className="wide-card">
          <Head
            eyebrow="Visual overlap"
            title="Observed content-role heatmap"
            copy="Relative coding based on visible channel examples; ● = light, ●●● = strong."
          />
          <div className="table-wrap overlap">
            <table>
              <thead>
                <tr>
                  <th>Channel</th>
                  <th>Educate</th>
                  <th>Demo</th>
                  <th>Drop</th>
                  <th>Creator</th>
                  <th>Routine</th>
                </tr>
              </thead>
              <tbody>
                {overlap.map((r) => (
                  <tr key={r[0]}>
                    {r.map((v, i) => (
                      <td key={i}>
                        {i === 0 ? <strong>{v}</strong> : <span>{v}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <article className="wide-card">
          <Head eyebrow="Content taxonomy" title="Six systems to code" />
          {rows.map((r, i) => (
            <div className="taxonomy" key={r[0]}>
              <span>0{i + 1}</span>
              <div>
                <strong>{r[0]}</strong>
                <p>{r[1]}</p>
              </div>
            </div>
          ))}
        </article>
      </section>
      <section className="evidence-shot">
        <img
          src="https://d2z55ssxzfn8g4.cloudfront.net/website-snapshots/2026/08/31/1719bec4-884a-4160-8752-d97ab32f975b/snapshots/mykitsch.com/mykitsch.com-webpage_full-1788175374474.screenshot.webp"
          alt="Public Kitsch homepage capture from August 31, 2026"
        />
        <div>
          <Label>PUBLIC SIGNAL</Label>
          <h3>August 31 homepage capture</h3>
          <p>
            A dated public screenshot preserves the merchandising context behind
            the monthly readout. The control center links the creative moment to
            a decision, owner and learning agenda.
          </p>
          <External href={links.shopvision}>Capture source</External>
        </div>
      </section>
      <section className="dark-card social-connect">
        <Radio />
        <h3>What I would connect internally</h3>
        <p>
          One creative ID across paid, organic, TikTok Shop, affiliate and
          CRM—coded by hook, product, proof type, creator, format, offer and
          landing page.
        </p>
        <div className="mini-flow">
          <span>Asset</span>
          <ChevronRight />
          <span>Signal</span>
          <ChevronRight />
          <span>Decision</span>
        </div>
        <Label>INTERNAL DATA REQUIRED</Label>
      </section>
    </div>
  );
}

function YoYMiniChart({ item }: { item: (typeof searchYoY)[number] }) {
  const w = 440,
    h = 180,
    p = { l: 28, r: 12, t: 12, b: 28 };
  const x = (n: number) => p.l + (n * (w - p.l - p.r)) / 7;
  const y = (v: number) => p.t + ((item.max - v) * (h - p.t - p.b)) / item.max;
  const points = (a: number[]) => a.map((v, i) => `${x(i)},${y(v)}`).join(' ');
  return (
    <div className="yoy-mini">
      <div>
        <h4>{item.name}</h4>
        <strong>{item.change}</strong>
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        role="img"
        aria-label={`${item.name} monthly Google Trends comparison for January through August 2025 and 2026`}
      >
        <title>{item.name}: Jan–Aug 2025 versus Jan–Aug 2026</title>
        {[0, 0.5, 1].map((t) => (
          <g key={t}>
            <line
              x1={p.l}
              x2={w - p.r}
              y1={y(item.max * t)}
              y2={y(item.max * t)}
              stroke="#D9D9D6"
            />
            <text x={p.l - 5} y={y(item.max * t) + 3} textAnchor="end">
              {Math.round(item.max * t)}
            </text>
          </g>
        ))}
        <polyline
          points={points(item.prior)}
          fill="none"
          stroke="#53565A"
          strokeWidth="2"
          strokeDasharray="6 5"
        />
        <polyline
          points={points(item.current)}
          fill="none"
          stroke="#CA9A8E"
          strokeWidth="3"
        />
        {item.current.map((v, i) => (
          <circle key={i} cx={x(i)} cy={y(v)} r="3" fill="#CA9A8E" />
        ))}
        {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'].map(
          (m, i) => (
            <text key={m} x={x(i)} y={h - 7} textAnchor="middle">
              {m}
            </text>
          ),
        )}
      </svg>
      <div className="yoy-legend">
        <span>
          <i />
          2026
        </span>
        <span>
          <i />
          2025
        </span>
        <small>YTD average change</small>
      </div>
      <p>{item.read}</p>
    </div>
  );
}

function PublicYoYComparison() {
  const average = (values: readonly number[]) =>
    values.reduce((sum, value) => sum + value, 0) / values.length;
  return (
    <section className="wide-card yoy-scoreboard">
      <Head
        eyebrow="Comparable public year-over-year view"
        title="The 2026 demand mix expanded—but not evenly"
        copy="US Google Trends monthly index averages for the same January–August window in both years. This compares relative search interest, not sales, traffic or marketing effectiveness."
      />
      <div className="yoy-score-grid">
        {searchYoY.map((item) => {
          const prior = average(item.prior);
          const current = average(item.current);
          const scale = Math.max(prior, current, 1);
          return (
            <article key={item.name}>
              <header>
                <TrendingUp aria-hidden="true" />
                <div>
                  <span>JAN–AUG AVERAGE</span>
                  <h3>{item.name}</h3>
                </div>
                <strong>{item.change}</strong>
              </header>
              <div
                className="yoy-pair"
                role="img"
                aria-label={`${item.name}: 2025 average ${prior.toFixed(1)}, 2026 average ${current.toFixed(1)}`}
              >
                <div>
                  <span>2025</span>
                  <i style={{ width: `${(prior / scale) * 100}%` }} />
                  <b>{prior.toFixed(1)}</b>
                </div>
                <div>
                  <span>2026</span>
                  <i style={{ width: `${(current / scale) * 100}%` }} />
                  <b>{current.toFixed(1)}</b>
                </div>
              </div>
              <p>{item.read}</p>
            </article>
          );
        })}
      </div>
      <div className="yoy-context-note">
        <CircleAlert />
        <div>
          <strong>
            Advertising archive context—not a YOY performance metric
          </strong>
          <p>
            Google Ads Transparency returned roughly 400 Kitsch ads for calendar
            2025 and roughly 600 for Jan. 1–Sep. 8, 2026. Different windows,
            creative reuse and archive behavior make this a pressure signal—not
            spend, reach, conversion or proof that 2026 performed better.
          </p>
        </div>
        <External href={links.googleAds}>Open official archive</External>
      </div>
    </section>
  );
}

function PlatformPanel({ p }: { p: (typeof platformInsights)[number] }) {
  return (
    <div className="platform-panel">
      <section className="platform-hero">
        <div>
          <PlatformBrandIcon name={p.name as PlatformBrandName} />
          <Label>PUBLIC SIGNAL</Label>
          <p>{p.name.toUpperCase()} INTELLIGENCE</p>
          <h2>{p.signal}</h2>
          <span>{p.job}</span>
        </div>
        <div>
          <small>ROLE IN THE SYSTEM</small>
          <strong>{p.job}</strong>
          <p>{p.observed}</p>
          <External href={p.source}>Open public source</External>
        </div>
      </section>
      <section className="platform-insight-grid">
        <article>
          <span>01 · OBSERVED</span>
          <h3>What the public evidence says</h3>
          <p>{p.observed}</p>
        </article>
        <article className="focus">
          <span>02 · INTERPRETATION</span>
          <h3>What it may mean</h3>
          <p>{p.insight}</p>
          <b>{p.confidence} CONFIDENCE</b>
        </article>
        <article>
          <span>03 · WHAT WORKS</span>
          <h3>Protect the strength</h3>
          <p>{p.working}</p>
        </article>
        <article>
          <span>04 · IMPROVEMENT</span>
          <h3>Close the gap</h3>
          <p>{p.improve}</p>
        </article>
      </section>
      <section className="platform-action">
        <div>
          <Target />
          <span>RECOMMENDED NEXT MOVE</span>
          <h3>{p.action}</h3>
        </div>
        <div>
          <Database />
          <span>VALIDATE WITH FIRST-PARTY DATA</span>
          <p>{p.metrics}</p>
          <Label>INTERNAL DATA REQUIRED</Label>
        </div>
      </section>
    </div>
  );
}

function Social() {
  const overlap = [
    ['Instagram', '●●', '●●', '●●●', '●●●', '●●'],
    ['Facebook', '●●', '●', '●●', '●●', '●●'],
    ['TikTok', '●●', '●●●', '●●●', '●●●', '●●●'],
    ['TikTok Shop', '●', '●●●', '●●●', '●●●', '●●'],
    ['YouTube', '●●●', '●●●', '●', '●●', '●●●'],
    ['Pinterest', '●●●', '●●', '●●', '●●●', '●●●'],
    ['Website', '●●●', '●●●', '●●●', '●', '●●●'],
  ];
  return (
    <div className="page-grid">
      <Head
        eyebrow="Social operating system"
        title="Give every channel a job"
        copy="Inspect each platform’s evidence, role and next action, then connect creative IDs to attention, commerce and cohort outcomes."
      />
      <EvidenceToAction
        evidence="Current profile counters, observable posts, dated public captures and platform-native merchandising."
        interpretation="Channel roles and creative patterns are directional; public output volume does not reveal performance."
        internal="Monthly reach, watch time, saves, clicks, spend, conversions and cohort value joined by platform and creative ID."
        decision="Protect each channel’s job, prioritize the next creative test and move budget only after comparable outcome data."
        owner="Social + Growth"
      />
      <section className="wide-card social-switcher">
        <Tabs defaultValue="instagram">
          <TabsList className="platform-tabs">
            {platformInsights.map((p) => (
              <TabsTrigger value={p.id} key={p.id}>
                <PlatformBrandIcon name={p.name as PlatformBrandName} />
              </TabsTrigger>
            ))}
          </TabsList>
          {platformInsights.map((p) => (
            <TabsContent value={p.id} key={p.id}>
              <PlatformPanel p={p} />
            </TabsContent>
          ))}
        </Tabs>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="2025–2026 platform coverage"
          title="Know the coverage before reading the trend"
          copy="Public profiles do not expose a reliable month-by-month performance history. This matrix prevents current counters, dated examples and Google search interest from being mistaken for social results."
        />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Platform</th>
                <th>2025 public coverage</th>
                <th>2026 public coverage</th>
                <th>Authorized data needed to measure performance</th>
              </tr>
            </thead>
            <tbody>
              {socialHistoryCoverage.map((row) => (
                <tr key={row[0]}>
                  <td>
                    <PlatformBrandIcon name={row[0]} />
                  </td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="method-note">
          <ShieldCheck />
          <p>
            The honest baseline is “not available,” not zero. Once authorized
            exports are connected, report each month on the same metric
            definitions and join content IDs to commerce outcomes before calling
            a tactic successful.
          </p>
          <Label>INTERNAL DATA REQUIRED</Label>
        </div>
      </section>
      <PublicYoYComparison />
      <section className="wide-card">
        <Head
          eyebrow="Historical demand comparison"
          title="January–August 2025 vs 2026"
          copy="Monthly US Google Trends index—not social performance. Each panel has eight comparable observations; 2026 is shown against the same months in 2025."
        />
        <div className="yoy-grid">
          {searchYoY.map((x) => (
            <YoYMiniChart item={x} key={x.name} />
          ))}
        </div>
        <div className="method-note">
          <CircleAlert />
          <p>
            Search interest is relative, sampled and normalized across the
            selected terms and window. The YTD percentage compares monthly index
            averages; it is not search volume, market share, sales lift or
            campaign attribution.
          </p>
          <External href={links.trends}>Open exact source view</External>
        </div>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Month-by-month public read"
          title="Monthly signals and next tests"
          copy="These are demand signals and recommended responses, not claims that a social campaign caused the movement."
        />
        <div className="monthly-read-grid">
          {monthlySearchReads.map((m, i) => (
            <article key={m[0]}>
              <span>
                {String(i + 1).padStart(2, '0')} · {m[0]}
              </span>
              <h3>{m[1]}</h3>
              <p>{m[2]}</p>
              <div>
                <b>Next test</b>
                <small>{m[3]}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="history-boundary">
        <div>
          <Label>PUBLIC SIGNAL</Label>
          <h3>What the public history can answer</h3>
          <p>
            Category demand direction, dated launches, visible message themes,
            merchandising changes and observable audience/shop counters.
          </p>
        </div>
        <div>
          <Label>INTERNAL DATA REQUIRED</Label>
          <h3>What “worked” requires</h3>
          <p>
            Monthly reach, engagement, watch time, clicks, spend, conversions,
            contribution and 30/60/90-day repeat—exported by platform and joined
            by creative ID.
          </p>
        </div>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Combined channel architecture"
          title="Connect the channel handoffs"
          copy="A proposed role map based on the public footprint; validate contribution and customer movement internally."
        />
        <div className="channel-journey">
          <article>
            <span>01 · DISCOVER</span>
            <strong>TikTok + Instagram</strong>
            <p>
              Earn attention through visible payoff, creator relevance and
              distinctive launches.
            </p>
          </article>
          <ChevronRight />
          <article>
            <span>02 · UNDERSTAND</span>
            <strong>YouTube + Pinterest</strong>
            <p>
              Answer selection, technique and routine questions in durable
              formats.
            </p>
          </article>
          <ChevronRight />
          <article>
            <span>03 · CONVERT</span>
            <strong>Website + TikTok Shop</strong>
            <p>
              Translate proof into profitable acquisition, bundles and product
              discovery.
            </p>
          </article>
          <ChevronRight />
          <article>
            <span>04 · REINFORCE</span>
            <strong>Facebook + owned lifecycle</strong>
            <p>
              Extend proof, education, retailer availability and repeat
              behavior.
            </p>
          </article>
        </div>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Cross-channel overlap"
          title="Observed content-role matrix"
          copy="Relative public-evidence coding; ● = light presence, ●●● = strong presence. It is a role diagnostic—not a performance score."
        />
        <div className="table-wrap overlap">
          <table>
            <thead>
              <tr>
                <th>Platform</th>
                <th>Educate</th>
                <th>Demo</th>
                <th>Launch</th>
                <th>Creator</th>
                <th>Routine</th>
              </tr>
            </thead>
            <tbody>
              {overlap.map((r) => (
                <tr key={r[0]}>
                  {r.map((v, i) => (
                    <td key={i}>
                      {i === 0 ? <strong>{v}</strong> : <span>{v}</span>}
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
          eyebrow="August 2026 combined readout"
          title="College utility → scent newness → promotional close"
          copy="The public capture logged 231 social assets, 36 emails and 28 homepage changes in the 30 days ending Aug. 31. Output volume is not performance."
        />
        <div className="august-summary">
          <div>
            <strong>231</strong>
            <span>captured social assets / 30d</span>
          </div>
          <div>
            <strong>36</strong>
            <span>captured emails / 30d</span>
          </div>
          <div>
            <strong>28</strong>
            <span>homepage changes / 30d</span>
          </div>
          <div>
            <strong>32%</strong>
            <span>average visible promo depth</span>
          </div>
        </div>
        <External href={links.shopvision}>Open public capture</External>
      </section>
      <section className="creative-grid">
        {augAssets.map((a) => (
          <article className="creative-card" key={a.date}>
            <div className="creative-image">
              <img
                src={a.image}
                alt={`${a.title} public Kitsch product visual`}
              />
              <span>{a.platform}</span>
            </div>
            <div>
              <small>{a.date} · OBSERVED THEME</small>
              <h3>{a.title}</h3>
              <p>{a.copy}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Six-month combined history"
          title="March → August 2026"
          copy="A qualitative evidence timeline where comparable first-party platform metrics are unavailable."
        />
        <div className="history-track">
          {monthTimeline.map((m) => (
            <article key={m[0]}>
              <span>{m[0]}</span>
              <div>
                <strong>{m[1]}</strong>
                <p>{m[2]}</p>
                <External href={m[3]}>Evidence</External>
              </div>
              <small>{m[4]} confidence</small>
            </article>
          ))}
        </div>
      </section>
      <section className="dark-card social-connect">
        <Radio />
        <h3>One asset ID. One customer journey. One learning ledger.</h3>
        <p>
          Join paid, organic, TikTok Shop, affiliate, CRM and website behavior
          by creative concept, hook, product, proof, creator, format, offer and
          landing page.
        </p>
        <div className="mini-flow">
          <span>Asset</span>
          <ChevronRight />
          <span>Attention</span>
          <ChevronRight />
          <span>Commerce</span>
          <ChevronRight />
          <span>Cohort</span>
          <ChevronRight />
          <span>Decision</span>
        </div>
        <Label>INTERNAL DATA REQUIRED</Label>
      </section>
    </div>
  );
}
function Competitors() {
  return <CompetitorIntelligence />;
}
function Brand() {
  return (
    <div className="page-grid">
      <Head
        eyebrow="Messaging playbook"
        title="One Kitsch voice, adapted by channel"
        copy="Use this creative QA layer before launches, creator briefs, CRM, retail and PDP work; validate it against the current internal brand book."
      />
      <section className="brand-hero">
        <div>
          <span>KITSCH</span>
          <h3>
            Practical problem-solving
            <br />× cultural relevance
            <br />× accessible purpose
          </h3>
        </div>
        <p>
          Kitsch’s defensible territory is not prestige for prestige’s sake. It
          is the ability to turn daily friction into a desirable, affordable
          ritual across an unusually broad portfolio.
        </p>
      </section>
      <section className="wide-card">
        <Head
          eyebrow="Why this view exists"
          title="One message spine, adapted by channel"
          copy="Use this before an asset enters production. It keeps the customer problem, promise and proof consistent while allowing each channel to do a different job."
        />
        <div className="message-playbook-grid">
          <article>
            <Megaphone />
            <span>PRODUCT LAUNCH</span>
            <h3>Friction → promise → proof → next step</h3>
            <p>
              Make the everyday problem recognizable before introducing the
              product world.
            </p>
          </article>
          <article>
            <Users />
            <span>CREATOR BRIEF</span>
            <h3>Situation → demonstration → reason to believe</h3>
            <p>
              Preserve the creator’s voice while requiring a visible product
              payoff and approved claim.
            </p>
          </article>
          <article>
            <Radio />
            <span>EMAIL + SMS</span>
            <h3>Occasion → useful benefit → routine expansion</h3>
            <p>
              Connect launches to replenishment, cross-sell and the next
              customer need—not only promotion.
            </p>
          </article>
          <article>
            <ShoppingBag />
            <span>RETAIL + PDP</span>
            <h3>Question → specific answer → proof → how-to</h3>
            <p>
              Give shoppers the same product truth across DTC, marketplaces and
              retail partners.
            </p>
          </article>
        </div>
      </section>
      <MessagingEvidenceLibrary />
      <section className="wide-card visual-system">
        <div>
          <Head
            eyebrow="Current web typography"
            title="Figtree + editorial serif"
            copy="The live store uses Figtree for interface and body copy, with a PT Serif mapping for its Sophillia-style display treatment. The 2023 guide specifies Avenir and Didot; this dashboard follows the newer live web implementation."
          />
          <div className="type-samples">
            <p>Figtree keeps operational data clear and modern.</p>
            <strong>
              PT Serif brings Kitsch’s softer editorial character to major
              headings.
            </strong>
          </div>
        </div>
        <div>
          <Head
            eyebrow="Official core palette"
            title="Calm neutrals, warm pinks, true black"
          />
          <div className="brand-swatches">
            {[
              ['CORE', '#F0E6D8'],
              ['PINK', '#E9D5CD'],
              ['TERRACOTTA', '#CA9A8E'],
              ['COOL GRAY 1', '#D9D9D6'],
              ['COOL GRAY 11', '#53565A'],
              ['TRUE BLACK', '#231F20'],
              ['LIVE WEB CTA', '#F8B68F'],
            ].map((c) => (
              <div key={c[1]}>
                <i style={{ background: c[1] }} />
                <span>{c[0]}</span>
                <small>{c[1]}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="brand-pillars">
        {brandPillars.map((p) => (
          <article key={p[0]}>
            <span>{p[0]}</span>
            <small>{p[1]}</small>
            <p>{p[2]}</p>
          </article>
        ))}
      </section>
      <section className="two-col">
        <article className="wide-card">
          <Head
            eyebrow="Portfolio measurement"
            title="Measure portfolio roles, not only SKUs"
          />
          <div className="measure-stack">
            <span>NEED STATE</span>
            <ChevronRight />
            <span>FRANCHISE</span>
            <ChevronRight />
            <span>CHANNEL</span>
            <ChevronRight />
            <span>EVERGREEN / DROP</span>
          </div>
          <p>
            That structure makes halo, cannibalization, replenishment and launch
            incrementality visible. It also gives Product, Brand, E-commerce and
            Retail a shared language.
          </p>
          <Label>HYPOTHESIS</Label>
        </article>
        <article className="wide-card">
          <Head
            eyebrow="Claims governance"
            title="Govern claims in one registry"
          />
          <p>
            The current role brief cites 32,000+ retailers / 92 countries; owned
            pages still expose 20,000 / 27 in places. Sustainability totals also
            vary across localized pages. Give every material claim an owner,
            source, geography and refresh date.
          </p>
          <Label>INTERNAL DATA REQUIRED</Label>
        </article>
      </section>
      <details className="editorial-disclosure">
        <summary>
          <span>OPTIONAL TECHNICAL APPENDIX</span>
          <strong>Open-source tools and data guardrails</strong>
          <ChevronRight />
        </summary>
        <div className="editorial-disclosure-body page-grid">
          <section className="wide-card">
            <Head
              eyebrow="Open-source enablement"
              title="Useful building blocks—with judgment"
              copy="Repositories were verified on September 8, 2026. None is a substitute for platform permission or first-party data."
            />
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Repository</th>
                    <th>Job</th>
                    <th>Decision</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {gitTools.map((r) => (
                    <tr key={r[0]}>
                      <td>
                        <strong>{r[0]}</strong>
                      </td>
                      <td>{r[1]}</td>
                      <td>{r[2]}</td>
                      <td>
                        <External href={r[3]}>GitHub</External>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section className="principle-card">
            <CircleAlert />
            <div>
              <strong>Deliberate avoid</strong>
              <p>
                Do not scrape private or access-controlled data for a hiring
                artifact. Unofficial TikTok and Instagram scrapers are fragile,
                can require session tokens or proxies, and create needless
                platform-risk. Use public evidence now; connect authorized
                exports later.
              </p>
            </div>
          </section>
        </div>
      </details>
    </div>
  );
}
function Operations() {
  const cadence = [
    [
      'Weekly',
      'KPI pulse · launch room · blocker + decision queue',
      'What changed? What is off track? Who decides by when?',
    ],
    [
      'Monthly',
      'Business review · budget pacing · VOC · channel learning',
      'What should we stop, scale or standardize?',
    ],
    [
      'Quarterly',
      'OKRs · resource allocation · launch roadmap · experiments',
      'What are the few priorities and trade-offs?',
    ],
  ];
  return (
    <div className="page-grid">
      <Head
        eyebrow="Operating cadence"
        title="Rhythm is a management system"
        copy="Every meeting has an input, decision right, owner and output."
      />
      <section className="cadence-grid">
        {cadence.map((r, i) => (
          <article key={r[0]}>
            <span>0{i + 1}</span>
            <small>{r[0]}</small>
            <h3>{r[1]}</h3>
            <p>{r[2]}</p>
          </article>
        ))}
      </section>
      <section className="two-col">
        <article className="wide-card">
          <Head eyebrow="Decision log" title="Close the loop" />
          <ol className="number-list">
            {[
              'Signal enters queue with source + confidence',
              'Owner frames the business question',
              'Decision maker reviews options + trade-offs',
              'Decision, rationale and deadline are recorded',
              'Results are reviewed against the original goal',
            ].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
        </article>
        <article className="wide-card">
          <Head eyebrow="First 30 days" title="Listen → define → pilot" />
          <div className="weeks">
            {[
              'Map decisions, calendars, definitions and recurring friction.',
              'Publish source-of-truth launch map and KPI dictionary.',
              'Pilot weekly pulse + decision queue on one live launch.',
              'Complete the first 30-day results review; automate only trusted steps.',
            ].map((x, i) => (
              <div key={x}>
                <span>0{i + 1}</span>
                <p>{x}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
function Sources() {
  return (
    <div className="page-grid">
      <Head
        eyebrow="Sources + methods"
        title="Trace every claim to evidence"
        copy="Check the source, capture date, confidence and limitation before using a claim. Platform counters are September 8, 2026 snapshots and will change."
      />
      <section className="wide-card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Source</th>
                <th>Claim used</th>
                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              {sources.map((r) => (
                <tr key={r[0]}>
                  <td>{r[0]}</td>
                  <td>
                    <External href={r[2]}>{r[1]}</External>
                  </td>
                  <td>{r[3]}</td>
                  <td>
                    <span className="confidence">{r[4]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="principle-card">
        <Database />
        <div>
          <strong>Research rule</strong>
          <p>
            Public counters and retailer “bought” badges are observable platform
            data—not audited revenue, attribution or first-party performance.
            Conflicts are surfaced, not smoothed over.
          </p>
        </div>
      </section>
    </div>
  );
}
function Demo({ close }: { close: () => void }) {
  const [step, setStep] = useState(0);
  const slides = [
    [
      'Why I built it',
      'To demonstrate how I would turn marketing heroics into a trusted operating rhythm—without pretending public data is internal truth.',
    ],
    [
      'One public signal',
      'TikTok Shop displays 2.3M sold, while DTC and retailers surface different hero products. The question is how demand, margin and repeat behavior reconcile across channels.',
    ],
    [
      'The non-obvious insight',
      'Kitsch may not have an activity problem. It may have a compression problem: many launches, platforms and proof points competing for the same customer attention and operating capacity.',
    ],
    [
      'Launch tracker',
      'Before launch, every dependency needs an owner and due date. Thirty days later, compare actual results with the goal and record what to repeat.',
    ],
    [
      'Decision queue',
      'Signals enter as sourced observations. They become business questions before they become recommendations.',
    ],
    [
      'What stays blank',
      'CAC, ROAS, MER, LTV, revenue, conversion, margin and repeat purchase remain internal data required.',
    ],
    [
      'How I would operate',
      'Listen → define → pilot → close the loop. Start with one live launch, one weekly pulse and one decision log.',
    ],
  ];
  return (
    <div className="demo">
      <button className="demo-close" onClick={close} aria-label="Close demo">
        <X />
      </button>
      <div className="demo-brand">
        <img src="/kitsch-official-logo.png" alt="Kitsch" />
        <span>90-SECOND OPERATING WALKTHROUGH</span>
      </div>
      <div className="demo-body">
        <p>
          0{step + 1} / 0{slides.length}
        </p>
        <h2>{slides[step][0]}</h2>
        <div className="demo-line" />
        <h3>{slides[step][1]}</h3>
        {step === 4 && <Label>INTERNAL DATA REQUIRED</Label>}
      </div>
      <div className="demo-nav">
        <button disabled={step === 0} onClick={() => setStep(step - 1)}>
          Previous
        </button>
        <div>
          {slides.map((_, i) => (
            <span key={i} className={i === step ? 'active' : ''} />
          ))}
        </div>
        <button
          onClick={() =>
            step === slides.length - 1 ? close() : setStep(step + 1)
          }
        >
          {step === slides.length - 1 ? 'Finish' : 'Next'} <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [demo, setDemo] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState<DashboardTab>('overview');
  if (demo) return <Demo close={() => setDemo(false)} />;
  const navGroups = [
    [
      'LEADERSHIP',
      [
        ['overview', 'Executive overview', Gauge],
        ['intelligence', 'Growth signals', BrainCircuit],
      ],
    ],
    [
      'GROWTH ENGINE',
      [
        ['commerce', 'Commerce control', ShoppingBag],
        ['creators', 'Creator operations', Handshake],
        ['funnel', 'Customer journey', Users],
        ['website', 'Storefront + stack', Globe2],
        ['performance', 'KPI definitions', Database],
      ],
    ],
    [
      'MARKET + CHANNELS',
      [
        ['launches', 'Launch control', CalendarDays],
        ['social', 'Social system', Users],
        ['search', 'Search + answers', Search],
        ['brand', 'Messaging playbook', Palette],
        ['competitors', 'Competitor map', Target],
      ],
    ],
    [
      'OPERATING SYSTEM',
      [
        ['operations', 'Marketing operations', ListChecks],
        ['sources', 'Sources + methods', FileSearch],
      ],
    ],
  ] as const;
  const navigate = (tab: DashboardTab) => {
    setActive(tab);
    setMobile(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Tabs
      value={active}
      onValueChange={(v) => navigate(v as DashboardTab)}
      orientation="vertical"
      className="app-shell"
    >
      <aside className={`sidebar ${mobile ? 'open' : ''}`}>
        <div className="wordmark">
          <a
            href={links.site}
            target="_blank"
            rel="noreferrer"
            aria-label="Open the official Kitsch website"
          >
            <img src="/kitsch-official-logo.png" alt="Kitsch" />
          </a>
          <small>
            Marketing operations
            <br />
            control center
          </small>
        </div>
        <TabsList className="nav-list" variant="line">
          {navGroups.map(([group, tabs]) => (
            <div className="nav-group" key={group}>
              <span>{group}</span>
              {tabs.map(([v, l, Icon]) => (
                <TabsTrigger value={v} key={v} onClick={() => setMobile(false)}>
                  <Icon />
                  {l}
                </TabsTrigger>
              ))}
            </div>
          ))}
        </TabsList>
        <div className="sidebar-bottom">
          <p>PUBLIC DATA PROTOTYPE</p>
          <span>Accessed Sep 08, 2026</span>
          <button onClick={() => setDemo(true)}>
            <Palette /> 90-sec walkthrough
          </button>
        </div>
      </aside>
      <main className="main">
        <header className="topbar">
          <button
            className="mobile-menu"
            onClick={() => setMobile(!mobile)}
            aria-label="Toggle navigation"
          >
            <Menu />
          </button>
          <div>
            <img
              className="topbar-logo"
              src="/kitsch-official-logo.png"
              alt="Kitsch"
            />
            <small>PUBLIC DATA PROTOTYPE</small>
          </div>
          <div className="legend">
            <Label>PUBLIC SIGNAL</Label>
            <Label>HYPOTHESIS</Label>
            <Label>INTERNAL DATA REQUIRED</Label>
          </div>
          <button className="demo-button" onClick={() => setDemo(true)}>
            <Palette /> 90-sec walkthrough
          </button>
        </header>
        <div className="content">
          <DashboardGuide active={active} onNavigate={navigate} />
          <TabsContent value="overview">
            <Overview />
          </TabsContent>
          <TabsContent value="intelligence">
            <Intelligence />
          </TabsContent>
          <TabsContent value="commerce">
            <Ecommerce />
          </TabsContent>
          <TabsContent value="creators">
            <CreatorAffiliateDashboard />
          </TabsContent>
          <TabsContent value="funnel">
            <Funnel />
          </TabsContent>
          <TabsContent value="website">
            <Website />
          </TabsContent>
          <TabsContent value="performance">
            <Performance />
          </TabsContent>
          <TabsContent value="launches">
            <Launches />
          </TabsContent>
          <TabsContent value="social">
            <Social />
          </TabsContent>
          <TabsContent value="search">
            <SearchView />
          </TabsContent>
          <TabsContent value="brand">
            <Brand />
          </TabsContent>
          <TabsContent value="competitors">
            <Competitors />
          </TabsContent>
          <TabsContent value="operations">
            <RoleOperations />
            <div className="page-grid ops-system-grid">
              <MarketingOpsSystem />
            </div>
          </TabsContent>
          <TabsContent value="sources">
            <Sources />
          </TabsContent>
        </div>
      </main>
    </Tabs>
  );
}
