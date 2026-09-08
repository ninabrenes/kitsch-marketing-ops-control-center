'use client';
import './product-showcase.css';

const kitschTikTokShop = 'https://shop.tiktok.com/us/store/kitsch-llc/7495183505163847730';

const products = [
  {
    name: 'Hair & Body Perfume Mist Discovery Set',
    franchise: 'FRAGRANCE · TRIAL',
    image: 'https://www.mykitsch.com/cdn/shop/files/69117-HairPerfumeDiscoverySet-Sampler-4pc-Fragrance-1280x1280px.jpg?v=1762182803',
    productUrl: 'https://www.mykitsch.com/products/hair-perfume-discovery-set',
    role: 'Low-risk acquisition doorway that lets a customer sample four scent identities before committing to a full size.',
    proof: 'The official PDP shows four mini scents and a 4.6 rating from 800+ reviews. The Kitsch TikTok Shop publicly displayed the discovery set in its assortment during the research snapshot.',
    hypothesis: 'Route each sampled scent to its full-size PDP, then test whether discovery-set buyers cross into sleep through a scented-pillowcase ritual.',
    metrics: 'New-to-brand rate · sample-to-full-size conversion · days to second order · scent chosen · cross-franchise attach · realized contribution',
  },
  {
    name: 'Smoothing Air Dry Cream',
    franchise: 'STYLING · REPLENISHMENT',
    image: 'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/500904-AirDryCream-Consumables-hero-1280x1280px.jpg?v=1779490582',
    productUrl: 'https://www.mykitsch.com/products/kitsch-smoothing-air-dry-cream',
    role: 'A demonstrable, replenishable styling hero that translates Kitsch from accessories into everyday consumable behavior.',
    proof: 'The official PDP presents 24-hour frizz control based on two-week consumer testing and a 4.6 rating from 800+ reviews. Public retail and TikTok Shop signals also identify it as a visible hero.',
    hypothesis: 'Pair the cream with a heatless set by hair type and desired result; the consumable can create repeat while the tool makes the first transformation visible.',
    metrics: 'Creator-to-PDP CVR · first-order contribution · replenishment interval · subscription take rate · heatless-set attach · return/refund reason',
  },
  {
    name: 'Rice Water Shampoo Bar for Hair Growth',
    franchise: 'HAIR CARE · AUTHORITY',
    image: 'https://cdn.shopify.com/s/files/1/0104/6904/8384/files/9081-RiceWaterProtein-Shampoo_Conditioner-2pc-Combo-BottleFreeBeauty-hero-opt2-1280x1280px_2.jpg?v=1780523783',
    productUrl: 'https://www.mykitsch.com/products/rice-water-protein-shampoo-bar-strengthening',
    role: 'A high-proof problem/solution product that can anchor education, search demand and a replenishment routine.',
    proof: 'The official PDP shows a 4.8 rating from 10K+ reviews and a supplier-approved claim of increased hair volume after five washes. The image shows the two-step bar system used in public merchandising.',
    hypothesis: 'The largest conversion unlock may be transition confidence—not awareness. A guided “first five washes” journey could reduce uncertainty and move single-bar buyers into the conditioner and scalp-care system.',
    metrics: 'Search term → SKU · bar-to-system attach · five-wash activation · support topic · subscription retention · 60/90-day reorder · cohort margin',
  },
  {
    name: 'Terracotta Checker Satin Shower Cap',
    franchise: 'SHOWER · UTILITY',
    image: 'https://www.mykitsch.com/cdn/shop/files/61418-SatinLinedFlexiShowerCap-Cleanse-TerracottaChecker-hero-1280x1280px_2.jpg?v=1785785305',
    productUrl: 'https://www.mykitsch.com/products/satin-lined-flexi-shower-cap-terracotta-checker',
    role: 'An evergreen utility hero with a visible fit mechanism: wide coverage, satin lining and an adjustable wire closure.',
    proof: 'The official PDP shows a 4.9 rating from 2K+ reviews and explains the open-back adjustable design. Public Shop velocity was observed for the adjustable shower-cap format; exact profitability is not public.',
    hypothesis: 'Merchandise by “protect the style” rather than by shower accessory: shower cap → towel or bonnet → pillowcase creates a day-to-night protection system.',
    metrics: 'Need-state landing CVR · hair-type/length fit · style-protection attach · review topic · return reason · bundle margin · second-category rate',
  },
  {
    name: 'Satin Pillowcase in Ivory',
    franchise: 'SLEEP · BRAND LEGACY',
    image: 'https://www.mykitsch.com/cdn/shop/files/4945-StandardSatinPillowcase-Sleep-Ivory-Hero-1280x1280px.jpg?v=1776278489',
    productUrl: 'https://www.mykitsch.com/products/satin-pillowcase-ivory',
    role: 'A recognizable brand gateway with broad retail proof, gifting potential and a large color/licensing system.',
    proof: 'The official PDP states more than 3.6M pillowcases sold and shows a 4.9 rating. Public retailer review counts reinforce category credibility, but do not reveal Kitsch revenue or margin.',
    hypothesis: 'Treat sleep as a retention destination: customers acquired through fragrance, styling or shower can enter an overnight-protection ritual instead of receiving a generic cross-sell.',
    metrics: 'First-product source · color/IP mix · gift vs self-use · 2-pack/4-pack trade-up · sleep-franchise attach · 90-day second order · net margin',
  },
  {
    name: 'Satin Heatless Hair Curler Bundle',
    franchise: 'HEATLESS · DEMONSTRATION',
    image: 'https://www.mykitsch.com/cdn/shop/products/heatlessCurlingSet-openShape_clawClip-new_1.jpg?v=1762182449',
    productUrl: 'https://www.mykitsch.com/products/satin-heatless-curling-set-bundle',
    role: 'A creator-native transformation product: the problem, process and payoff can all be understood in a short video.',
    proof: 'The official PDP shows a 4.8 rating from 2K+ reviews and positions the set around curls without heat damage. Public TikTok and Target signals support its role as a visible acquisition format.',
    hypothesis: 'Segment the demonstration by hair length, texture and desired curl—not only creator. Follow the tool purchase with Air Dry Cream or overnight protection based on the result sought.',
    metrics: '2-second hold · completion · creator/product click · hair-type CVR · tutorial engagement · styling attach · repeat by next franchise',
  },
] as const;

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>;
}

export function ProductVisualShowcase() {
  return <section className="product-visual-showcase" aria-labelledby="product-showcase-title">
    <header className="product-showcase-head">
      <div>
        <span>E-COMMERCE · VISUAL PORTFOLIO</span>
        <h2 id="product-showcase-title">Six products. Six jobs in the customer system.</h2>
        <p>Read each card from image → public proof → strategic hypothesis → internal measurement. Product imagery and website links are official Kitsch assets; TikTok links open the official Kitsch storefront because stable public product-level URLs were not available for every SKU.</p>
      </div>
      <aside><b>IMPORTANT</b><p>No product revenue is inferred here. Ratings, review counts and public sell-through signals can establish proof—not profitability.</p></aside>
    </header>

    <div className="product-showcase-grid">
      {products.map((product, index) => <article className="product-showcase-card" key={product.name}>
        <div className="product-showcase-image">
          <img src={product.image} alt={`Official Kitsch product image: ${product.name}`} loading="lazy"/>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <small>{product.franchise}</small>
        </div>
        <div className="product-showcase-body">
          <h3>{product.name}</h3>
          <div className="product-showcase-role"><span>PORTFOLIO JOB</span><p>{product.role}</p></div>
          <dl>
            <div><dt>PUBLIC PROOF</dt><dd>{product.proof}</dd></div>
            <div className="hypothesis"><dt>SECOND-CATEGORY HYPOTHESIS</dt><dd>{product.hypothesis}</dd></div>
            <div className="internal"><dt>INTERNAL METRICS REQUIRED</dt><dd>{product.metrics}</dd></div>
          </dl>
          <div className="product-showcase-links">
            <a href={product.productUrl} target="_blank" rel="noopener noreferrer">View on Kitsch.com <ArrowIcon/></a>
            <a href={kitschTikTokShop} target="_blank" rel="noopener noreferrer">Open Kitsch TikTok Shop <ArrowIcon/></a>
          </div>
        </div>
      </article>)}
    </div>

    <div className="product-system-insight">
      <div><span>THE PORTFOLIO INSIGHT</span><h3>The next growth question is not “which SKU is biggest?” It is “which first product creates the most valuable second category?”</h3></div>
      <div className="product-system-flow"><span>DISCOVERY DOORWAY</span><ArrowIcon/><span>VISIBLE OUTCOME</span><ArrowIcon/><span>REPEAT HABIT</span><ArrowIcon/><span>SECOND FRANCHISE</span></div>
      <p><b>Illustrative example:</b> perfume discovery → full-size scent → pillowcase ritual. Validate every path with first-product cohort, realized contribution and 30/60/90-day second-order data before scaling.</p>
    </div>
  </section>;
}
