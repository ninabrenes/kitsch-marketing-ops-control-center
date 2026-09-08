import { ArrowRight, BrainCircuit, CircleAlert, RefreshCw, Sparkles, Target } from 'lucide-react';
import { ExecutiveOkrSnapshot } from './okr-chief-of-staff';

const story=[
  {step:'01',verb:'ATTRACT',title:'Hair perfume is more than a launch story',copy:'Search direction, editorial inclusion and visible social-commerce merchandising converge around fragrance.',tag:'PUBLIC SIGNAL',tone:'signal'},
  {step:'02',verb:'EXPAND',title:'The real prize is the second category',copy:'A fragrance buyer who next adopts sleep, styling or wash care is more valuable than a one-product spike.',tag:'HYPOTHESIS',tone:'hypothesis'},
  {step:'03',verb:'PROVE',title:'Contribution must follow the customer',copy:'Connect first product, creator, discount, channel fees and 30/60/90-day repeat before calling the wedge scalable.',tag:'INTERNAL DATA REQUIRED',tone:'internal'}
] as const;

const opportunities=[
  {icon:RefreshCw,kicker:'FRAGRANCE WEDGE QUALITY',title:'Measure the second-category rate',copy:'Instead of asking only whether fragrance buyers repeat, ask which entry SKU creates the most profitable expansion into sleep, styling or wash care.',decision:'Build cohorts by first SKU and second-category destination.'},
  {icon:CircleAlert,kicker:'LAUNCH COLLISION INDEX',title:'The heroics may be a compression problem',copy:'Promotions, fragrance, licensed drops and seasonal collections can compete for the same homepage, creative capacity and customer attention.',decision:'Track simultaneous messages, dependencies and operational hours per launch.'},
  {icon:Target,kicker:'MARKETPLACE → RELATIONSHIP GAP',title:'Commerce velocity may not create identity',copy:'TikTok Shop can produce orders while leaving a limited direct lifecycle relationship. The strategic job is a compliant bridge to owned education and loyalty.',decision:'Measure marketplace cohorts that later become identifiable owned customers.'},
  {icon:BrainCircuit,kicker:'MEASUREMENT TRUTH TAX',title:'Count the cost of number disagreement',copy:'Multiple analytics and attribution systems can create decision delay even when every dashboard is technically correct.',decision:'Track hours from exception to trusted decision and retire duplicate definitions.'}
] as const;

export function ExecutiveSpotlight(){return <>
  <section className="storyboard" aria-label="Executive story in sixty seconds">
    <div className="storyboard-intro"><div><Sparkles/><span>THE STORY IN 60 SECONDS</span></div><h2>Turn a visible fragrance moment into a measurable portfolio flywheel.</h2><p>This is the strongest strategic thread in the public evidence—and the internal question that could change where the team invests.</p></div>
    <div className="storyboard-flow">{story.map((s,i)=><div className="story-step" key={s.step}><article><div><span>{s.step} · {s.verb}</span><b className={s.tone}>{s.tag}</b></div><h3>{s.title}</h3><p>{s.copy}</p></article>{i<story.length-1&&<ArrowRight/>}</div>)}</div>
  </section>
  <ExecutiveOkrSnapshot/>
  <section className="opportunity-section">
    <div className="opportunity-heading"><div><span>OPPORTUNITY RADAR</span><h2>Kitsch may not have an activity problem. It may have a compression problem.</h2></div><p>Many launches, channels, tools and product variants compete for the same customer attention and internal capacity. These four lenses reveal where to simplify.</p></div>
    <div className="opportunity-grid">{opportunities.map(({icon:Icon,...o},i)=><article key={o.title} className={`opportunity-card opportunity-${i+1}`}><div><Icon/><span>{o.kicker}</span></div><h3>{o.title}</h3><p>{o.copy}</p><footer><b>DECISION UNLOCKED</b><span>{o.decision}</span></footer></article>)}</div>
  </section>
 </>}
