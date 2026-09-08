/* oxlint-disable next/no-img-element -- Product imagery comes from official public Kitsch CDN assets. */
'use client';

import {
  ArrowUpRight,
  Boxes,
  Check,
  ChevronRight,
  CircleDollarSign,
  Compass,
  Database,
  FileKey,
  Link2,
  Mail,
  Megaphone,
  PackageCheck,
  RotateCcw,
  ShoppingBag,
  SlidersHorizontal,
  Users,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import './shopify-commerce-workspace.css';

type EvidenceMode = 'public' | 'connected';
type Channel = 'All commerce' | 'Kitsch.com' | 'TikTok Shop' | 'Retail';
type Readiness = 'Observed' | 'Internal required' | 'Join required';

const TIKTOK_SHOP =
  'https://shop.tiktok.com/us/store/kitsch-llc/7495183505163847730';

const sources: Array<{
  name: string;
  detail: string;
  readiness: Readiness;
  icon: typeof ShoppingBag;
  unlocks: string;
}> = [
  {
    name: 'Shopify orders',
    detail: 'Order, refund, discount, tax, shipping and channel records',
    readiness: 'Internal required',
    icon: ShoppingBag,
    unlocks: 'Net revenue · AOV · refund rate · contribution',
  },
  {
    name: 'Customers',
    detail: 'Customer ID, first order, geography and consent status',
    readiness: 'Internal required',
    icon: Users,
    unlocks: 'New-to-brand · cohorts · 30/60/90-day repeat',
  },
  {
    name: 'Products',
    detail: 'SKU, variant, collection, COGS and product status',
    readiness: 'Observed',
    icon: PackageCheck,
    unlocks: 'Product mix · franchise role · realized margin',
  },
  {
    name: 'Inventory',
    detail: 'SKU location, available quantity and stock movements',
    readiness: 'Internal required',
    icon: Boxes,
    unlocks: 'In-stock rate · weeks of cover · lost-demand risk',
  },
  {
    name: 'Discounts',
    detail: 'Code, automatic discount, allocation and campaign',
    readiness: 'Internal required',
    icon: CircleDollarSign,
    unlocks: 'Promo depth · full-price mix · offer incrementality',
  },
  {
    name: 'Returns',
    detail: 'Refund line, reason, return date and recovered inventory',
    readiness: 'Internal required',
    icon: RotateCcw,
    unlocks: 'Net sales · product friction · cohort margin',
  },
  {
    name: 'Klaviyo identity',
    detail: 'Profile ID, flow/campaign ID, consent and attribution window',
    readiness: 'Join required',
    icon: Mail,
    unlocks: 'Lifecycle revenue · repeat path · owned-channel quality',
  },
  {
    name: 'Media + finance',
    detail: 'Creative ID, spend, fees, COGS and approved revenue perimeter',
    readiness: 'Join required',
    icon: Megaphone,
    unlocks: 'CAC · MER · contribution · payback',
  },
];

const products = [
  {
    name: 'Smoothing Air Dry Cream',
    franchise: 'Styling',
    role: 'Replenishment hero',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/500904-AirDryCream-Consumables-hero-1280x1280px.jpg?v=1779490582',
    url: 'https://www.mykitsch.com/products/kitsch-smoothing-air-dry-cream',
    publicSignal: 'Official PDP + visible retail and TikTok Shop presence',
    internalQuestion:
      'Does it create a profitable second order or attach to heatless?',
    fields:
      'variant ID · quantity · net sales · COGS · first-product flag · next SKU',
    channels: ['Kitsch.com', 'TikTok Shop', 'Retail'],
  },
  {
    name: 'Hair Perfume Discovery Set',
    franchise: 'Fragrance',
    role: 'Trial doorway',
    image:
      'https://www.mykitsch.com/cdn/shop/files/69117-HairPerfumeDiscoverySet-Sampler-4pc-Fragrance-1280x1280px.jpg?v=1762182803',
    url: 'https://www.mykitsch.com/products/hair-perfume-discovery-set',
    publicSignal:
      'Official four-scent trial set + TikTok Shop assortment signal',
    internalQuestion:
      'Which sampled scent converts to full size, and how quickly?',
    fields:
      'customer ID · first order · scent path · second order date · realized margin',
    channels: ['Kitsch.com', 'TikTok Shop', 'Retail'],
  },
  {
    name: 'Rice Water Shampoo Bar',
    franchise: 'Hair care',
    role: 'Authority + routine',
    image:
      'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/9081-RiceWaterProtein-Shampoo_Conditioner-2pc-Combo-BottleFreeBeauty-hero-opt2-1280x1280px_2.jpg?v=1780523783',
    url: 'https://www.mykitsch.com/products/rice-water-protein-shampoo-bar-strengthening',
    publicSignal:
      'Large official-PDP review proof; image shows the public two-step system',
    internalQuestion:
      'Where does trial stall: education, first-five-wash activation or refill?',
    fields:
      'search term · SKU · bundle attach · support reason · 60/90-day reorder',
    channels: ['Kitsch.com', 'TikTok Shop', 'Retail'],
  },
  {
    name: 'Satin Pillowcase in Ivory',
    franchise: 'Sleep',
    role: 'Legacy gateway',
    image:
      'https://www.mykitsch.com/cdn/shop/files/4945-StandardSatinPillowcase-Sleep-Ivory-Hero-1280x1280px.jpg?v=1776278489',
    url: 'https://www.mykitsch.com/products/satin-pillowcase-ivory',
    publicSignal:
      'Official PDP states 3.6M+ pillowcases sold; no revenue or margin is inferred',
    internalQuestion:
      'Which acquisition doorway produces the strongest sleep attach?',
    fields:
      'first SKU · color/IP · gift flag · units · discount · second-category order',
    channels: ['Kitsch.com', 'Retail'],
  },
] as const;

const metricUnlocks = [
  {
    metric: 'Net revenue',
    needs: 'Orders + refunds + discounts + tax/shipping perimeter',
    owner: 'Finance + e-commerce',
    state: '1 source join',
  },
  {
    metric: 'Blended CAC',
    needs: 'Approved acquisition spend + distinct first-time customers',
    owner: 'Growth + analytics',
    state: '3 source joins',
  },
  {
    metric: 'Realized contribution',
    needs: 'Net revenue − COGS − fulfillment − fees − variable media',
    owner: 'Finance',
    state: '5 source joins',
  },
  {
    metric: '90-day second order',
    needs: 'Customer ID + first order date + mature observation window',
    owner: 'CRM + analytics',
    state: '2 source joins',
  },
];

const actions = [
  {
    priority: '01',
    title: 'Lock the revenue and spend perimeter',
    rationale:
      'Prevents ROAS, MER and contribution from disagreeing across meetings.',
    owner: 'Finance × Growth',
    output: 'Metric contract',
  },
  {
    priority: '02',
    title: 'Export one complete Shopify order month',
    rationale:
      'Proves the joins, return logic and product grain before automating.',
    owner: 'E-commerce × Data',
    output: 'Reconciled pilot',
  },
  {
    priority: '03',
    title: 'Create a persistent creative and campaign ID',
    rationale:
      'Connects spend and content learning to the order and customer outcome.',
    owner: 'Creative × Growth',
    output: 'Naming taxonomy',
  },
  {
    priority: '04',
    title: 'Publish the first-product cohort read',
    rationale: 'Shows which doorway creates the most valuable second category.',
    owner: 'CRM × Merchandising',
    output: '90-day cohort',
  },
];

function EvidencePill({
  children,
  tone = 'internal',
}: {
  children: React.ReactNode;
  tone?: 'public' | 'benchmark' | 'illustrative' | 'internal';
}) {
  return <span className={`scw-pill is-${tone}`}>{children}</span>;
}

export function ShopifyCommerceWorkspace() {
  const [mode, setMode] = useState<EvidenceMode>('public');
  const [period, setPeriod] = useState('Last 30 days');
  const [channel, setChannel] = useState<Channel>('All commerce');
  const [activeProduct, setActiveProduct] = useState<string>(products[0].name);

  const visibleProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          channel === 'All commerce' ||
          product.channels.includes(channel as never),
      ),
    [channel],
  );
  const selectedProduct =
    products.find((product) => product.name === activeProduct) ??
    visibleProducts[0] ??
    products[0];

  return (
    <section className="scw-shell" aria-labelledby="commerce-workspace-title">
      <header className="scw-hero">
        <div>
          <span className="scw-eyebrow">COMMERCE INTELLIGENCE WORKSPACE</span>
          <h2 id="commerce-workspace-title">
            From Shopify order to portfolio decision.
          </h2>
          <p>
            A Shopify-inspired operating view—not a replica of Shopify Admin.
            Public evidence can frame the questions today; connected Shopify,
            Klaviyo, media and finance data is required to calculate Kitsch
            performance.
          </p>
        </div>
        <div className="scw-mode" aria-label="Evidence mode">
          <button
            type="button"
            className={mode === 'public' ? 'active' : ''}
            onClick={() => setMode('public')}
            aria-pressed={mode === 'public'}
          >
            Public evidence
          </button>
          <button
            type="button"
            className={mode === 'connected' ? 'active' : ''}
            onClick={() => setMode('connected')}
            aria-pressed={mode === 'connected'}
          >
            Connected preview
          </button>
        </div>
      </header>

      <div className="scw-toolbar" aria-label="Commerce workspace filters">
        <div className="scw-view-status">
          <Database aria-hidden="true" />
          <div>
            <strong>
              {mode === 'public' ? 'Evidence mode' : 'Data model preview'}
            </strong>
            <small>
              {mode === 'public'
                ? 'No internal Kitsch actuals shown'
                : 'Schema and output slots—still no invented actuals'}
            </small>
          </div>
        </div>
        <label>
          <span>Date view</span>
          <select
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
          >
            <option>Last 30 days</option>
            <option>Quarter to date</option>
            <option>2025 vs 2026</option>
          </select>
        </label>
        <label>
          <span>Channel</span>
          <select
            value={channel}
            onChange={(event) => setChannel(event.target.value as Channel)}
          >
            <option>All commerce</option>
            <option>Kitsch.com</option>
            <option>TikTok Shop</option>
            <option>Retail</option>
          </select>
        </label>
        <div className="scw-filter-read">
          <SlidersHorizontal aria-hidden="true" />
          <span>
            {period}
            <b>·</b>
            {channel}
          </span>
        </div>
      </div>

      <div className="scw-kpi-grid" aria-label="Commerce KPI status">
        {[
          ['Net revenue', 'Connect Shopify + finance', 'INTERNAL REQUIRED'],
          [
            'Realized contribution',
            'Add COGS, fees + variable media',
            'INTERNAL REQUIRED',
          ],
          [
            '90-day second order',
            'Join mature customer cohorts',
            'INTERNAL REQUIRED',
          ],
          [
            'Product evidence',
            `${visibleProducts.length} official PDP examples in view`,
            'PUBLIC',
          ],
        ].map(([name, value, label]) => (
          <article key={name}>
            <span>{name}</span>
            <strong>{value}</strong>
            <EvidencePill tone={label === 'PUBLIC' ? 'public' : 'internal'}>
              {label}
            </EvidencePill>
          </article>
        ))}
      </div>

      <div className="scw-layout">
        <section
          className="scw-panel scw-sources"
          aria-labelledby="scw-source-title"
        >
          <div className="scw-panel-head">
            <div>
              <span>DATA READINESS</span>
              <h3 id="scw-source-title">What the commerce engine needs</h3>
            </div>
            <EvidencePill tone="internal">6 INTERNAL · 2 JOINS</EvidencePill>
          </div>
          <div className="scw-source-grid">
            {sources.map((source) => {
              const Icon = source.icon;
              return (
                <article key={source.name}>
                  <div className="scw-source-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h4>{source.name}</h4>
                    <p>{source.detail}</p>
                    <small>UNLOCKS · {source.unlocks}</small>
                  </div>
                  <span
                    className={`scw-readiness ${source.readiness.toLowerCase().replaceAll(' ', '-')}`}
                  >
                    {source.readiness === 'Observed' && (
                      <Check aria-hidden="true" />
                    )}
                    {source.readiness}
                  </span>
                </article>
              );
            })}
          </div>
        </section>

        <aside
          className="scw-panel scw-contract"
          aria-labelledby="scw-contract-title"
        >
          <FileKey aria-hidden="true" />
          <span>FIRST DATA CONTRACT</span>
          <h3 id="scw-contract-title">
            One row per order line. One definition per number.
          </h3>
          <p>
            Minimum viable extract to reconcile a pilot month before investing
            in automation.
          </p>
          <ul>
            {[
              'order ID + line item ID',
              'customer ID + first-order flag',
              'order/fulfillment/refund timestamps',
              'SKU + variant + quantity',
              'gross, discount, refund, tax and shipping',
              'COGS + fulfillment + payment fee',
              'source, campaign and creative ID',
              'consent + Klaviyo profile ID',
            ].map((field) => (
              <li key={field}>
                <Check aria-hidden="true" />
                {field}
              </li>
            ))}
          </ul>
          <div>
            <EvidencePill tone="illustrative">ILLUSTRATIVE SCHEMA</EvidencePill>
            <small>
              Field names must be mapped to Kitsch’s actual Shopify and finance
              configuration.
            </small>
          </div>
        </aside>
      </div>

      <section
        className="scw-panel scw-unlocks"
        aria-labelledby="scw-unlock-title"
      >
        <div className="scw-panel-head">
          <div>
            <span>DEPENDENCY MAP</span>
            <h3 id="scw-unlock-title">
              The metric is only as strong as the join beneath it
            </h3>
          </div>
          <Link2 aria-hidden="true" />
        </div>
        <div className="scw-unlock-grid">
          {metricUnlocks.map((item, index) => (
            <article key={item.metric}>
              <span>0{index + 1}</span>
              <div>
                <h4>{item.metric}</h4>
                <p>{item.needs}</p>
                <small>OWNER · {item.owner}</small>
              </div>
              <strong>{item.state}</strong>
            </article>
          ))}
        </div>
        <div
          className="scw-dependency-flow"
          aria-label="Commerce data dependency flow"
        >
          <div>
            <ShoppingBag aria-hidden="true" />
            <span>SHOPIFY EVENT</span>
            <strong>Order line + product</strong>
          </div>
          <ChevronRight aria-hidden="true" />
          <div>
            <Users aria-hidden="true" />
            <span>IDENTITY + ECONOMICS</span>
            <strong>Customer + cost joins</strong>
          </div>
          <ChevronRight aria-hidden="true" />
          <div>
            <FileKey aria-hidden="true" />
            <span>METRIC CONTRACT</span>
            <strong>Reconciled definition</strong>
          </div>
          <ChevronRight aria-hidden="true" />
          <div>
            <Compass aria-hidden="true" />
            <span>OPERATING OUTPUT</span>
            <strong>Decision + owner</strong>
          </div>
        </div>
        <div className="scw-unlock-note">
          <Database aria-hidden="true" />
          <p>
            <b>Interpretation:</b> these are readiness dependencies, not Kitsch
            results. Build the joins in sequence, reconcile against finance,
            then expose the metric to leadership.
          </p>
          <EvidencePill tone="internal">INTERNAL REQUIRED</EvidencePill>
        </div>
      </section>

      <section
        className="scw-panel scw-products"
        aria-labelledby="scw-products-title"
      >
        <div className="scw-panel-head">
          <div>
            <span>PRODUCT OPERATING VIEW</span>
            <h3 id="scw-products-title">
              Read the product as a role, not only a sales rank
            </h3>
            <p>
              Choose a product to see the public evidence, the operational
              question and the exact fields needed to answer it.
            </p>
          </div>
          <EvidencePill tone="public">OFFICIAL PRODUCT ASSETS</EvidencePill>
        </div>
        <div className="scw-product-workspace">
          <nav className="scw-product-list" aria-label="Product examples">
            {visibleProducts.map((product) => (
              <button
                type="button"
                key={product.name}
                className={
                  selectedProduct.name === product.name ? 'active' : ''
                }
                onClick={() => setActiveProduct(product.name)}
              >
                <img src={product.image} alt="" loading="lazy" />
                <span>
                  <small>{product.franchise}</small>
                  <strong>{product.name}</strong>
                  <em>{product.role}</em>
                </span>
                <ChevronRight aria-hidden="true" />
              </button>
            ))}
          </nav>
          <article className="scw-product-detail">
            <div className="scw-product-image">
              <img
                src={selectedProduct.image}
                alt={`Official Kitsch product: ${selectedProduct.name}`}
                loading="lazy"
              />
              <EvidencePill tone="public">PUBLIC</EvidencePill>
            </div>
            <div className="scw-product-copy">
              <span>
                {selectedProduct.franchise} · {selectedProduct.role}
              </span>
              <h4>{selectedProduct.name}</h4>
              <dl>
                <div>
                  <dt>PUBLIC EVIDENCE</dt>
                  <dd>{selectedProduct.publicSignal}</dd>
                </div>
                <div>
                  <dt>OPERATING QUESTION</dt>
                  <dd>{selectedProduct.internalQuestion}</dd>
                </div>
                <div>
                  <dt>FIELDS TO ANSWER IT</dt>
                  <dd>{selectedProduct.fields}</dd>
                </div>
              </dl>
              <div className="scw-product-links">
                <a
                  href={selectedProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official PDP <ArrowUpRight aria-hidden="true" />
                </a>
                {(selectedProduct.channels as readonly string[]).includes(
                  'TikTok Shop',
                ) && (
                  <a
                    href={TIKTOK_SHOP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kitsch TikTok Shop <ArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        className="scw-panel scw-actions"
        aria-labelledby="scw-actions-title"
      >
        <div className="scw-panel-head">
          <div>
            <span>PRIORITIZED ACTION QUEUE</span>
            <h3 id="scw-actions-title">
              Four moves from dashboard to operating system
            </h3>
            <p>
              Priority reflects measurement dependency and decision leverage—not
              a claim about current Kitsch performance.
            </p>
          </div>
          <EvidencePill tone="illustrative">ILLUSTRATIVE PRIORITY</EvidencePill>
        </div>
        <div className="scw-action-grid">
          {actions.map((action) => (
            <article key={action.priority}>
              <span>{action.priority}</span>
              <div>
                <h4>{action.title}</h4>
                <p>{action.rationale}</p>
                <small>{action.owner}</small>
              </div>
              <strong>{action.output}</strong>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
