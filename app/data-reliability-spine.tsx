'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Gauge,
  Mail,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';

import './data-reliability-spine.css';

const sources = [
  {
    id: 'shopify',
    name: 'Shopify',
    logo: 'https://cdn.simpleicons.org/shopify/7AB55C',
    data: 'Orders, refunds, customer, SKU, discount and inventory detail',
    key: 'Order ID · customer ID · SKU',
    check: 'Reconcile net sales and refunds to finance actuals',
    owner: 'E-commerce + Finance',
  },
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    Icon: Mail,
    data: 'Profiles, consent, sends, flow events and attributed activity',
    key: 'Profile ID · external customer ID',
    check: 'Confirm consent, identity match and attribution window',
    owner: 'Lifecycle + Marketing Ops',
  },
  {
    id: 'ga4',
    name: 'GA4',
    logo: 'https://cdn.simpleicons.org/googleanalytics/E37400',
    data: 'Sessions, landing pages, item views, carts, checkout and purchase events',
    key: 'Client ID · transaction ID',
    check: 'Deduplicate purchase events against Shopify orders',
    owner: 'Growth + Analytics',
  },
  {
    id: 'meta',
    name: 'Meta Ads',
    logo: 'https://cdn.simpleicons.org/meta/0866FF',
    data: 'Spend, campaign, ad set, creative and platform conversion signals',
    key: 'Campaign ID · ad ID · click ID',
    check: 'Compare platform ROAS with governed contribution economics',
    owner: 'Paid Media + Analytics',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    logo: 'https://cdn.simpleicons.org/tiktok/000000',
    data: 'Paid spend, creative signals, shop orders and affiliate activity',
    key: 'Creative ID · order ID · creator ID',
    check: 'Separate paid, organic, affiliate and Shop revenue',
    owner: 'Social Commerce + Finance',
  },
  {
    id: 'asana',
    name: 'Asana',
    logo: 'https://cdn.simpleicons.org/asana/F06A6A',
    data: 'Launch milestones, dependencies, decisions, owners and proof of completion',
    key: 'Launch ID · task ID · decision ID',
    check: 'Require owner, due date and evidence before a task is closed',
    owner: 'Marketing Ops',
  },
] as const;

export function DataReliabilitySpine() {
  const [activeId, setActiveId] =
    useState<(typeof sources)[number]['id']>('shopify');
  const active = sources.find((source) => source.id === activeId) ?? sources[0];

  return (
    <section className="data-spine" aria-labelledby="data-spine-title">
      <header className="data-spine__header">
        <div>
          <p>PROPOSED CONNECTION BLUEPRINT</p>
          <h2 id="data-spine-title">
            One path from activity to a trusted decision
          </h2>
          <span>
            Select a source to see what enters the model, how it joins and the
            control required before leadership uses it.
          </span>
        </div>
        <div className="data-spine__status">
          <span>PROPOSED · NOT CONNECTED</span>
          <small>Internal access + implementation required</small>
        </div>
      </header>

      <div
        className="data-spine__source-list"
        role="tablist"
        aria-label="Data sources"
      >
        {sources.map((source) => (
          <button
            key={source.id}
            type="button"
            role="tab"
            aria-selected={activeId === source.id}
            className={activeId === source.id ? 'active' : ''}
            onClick={() => setActiveId(source.id)}
          >
            {'logo' in source ? (
              <Image src={source.logo} alt="" width={25} height={25} />
            ) : (
              <span className="data-spine__tool-icon" aria-hidden="true">
                <source.Icon />
              </span>
            )}
            <span>{source.name}</span>
          </button>
        ))}
      </div>

      <div className="data-spine__flow">
        <article className="data-spine__active-card">
          <div className="data-spine__active-title">
            {'logo' in active ? (
              <Image src={active.logo} alt="" width={36} height={36} />
            ) : (
              <span
                className="data-spine__tool-icon data-spine__tool-icon--large"
                aria-hidden="true"
              >
                <active.Icon />
              </span>
            )}
            <div>
              <span>SELECTED SOURCE</span>
              <h3>{active.name}</h3>
            </div>
          </div>
          <dl>
            <div>
              <dt>Data entering</dt>
              <dd>{active.data}</dd>
            </div>
            <div>
              <dt>Join key</dt>
              <dd>{active.key}</dd>
            </div>
            <div>
              <dt>Control</dt>
              <dd>{active.check}</dd>
            </div>
            <div>
              <dt>Owner</dt>
              <dd>{active.owner}</dd>
            </div>
          </dl>
        </article>

        <ArrowRight className="data-spine__arrow" aria-hidden="true" />

        <div className="data-spine__pipeline">
          <article>
            <span className="data-spine__icon">
              <Database />
            </span>
            <small>01 · ORGANIZE</small>
            <h3>BigQuery model</h3>
            <p>
              Normalize channel, customer, order, SKU, creative and calendar
              keys.
            </p>
            <span className="data-spine__chip">Daily refresh proposed</span>
          </article>
          <ArrowRight className="data-spine__arrow" aria-hidden="true" />
          <article>
            <span className="data-spine__icon">
              <ShieldCheck />
            </span>
            <small>02 · GOVERN</small>
            <h3>Metric contracts</h3>
            <p>
              Define formula, grain, exclusions, owner, freshness and decision
              use.
            </p>
            <span className="data-spine__chip">Finance sign-off required</span>
          </article>
          <ArrowRight className="data-spine__arrow" aria-hidden="true" />
          <article className="data-spine__destination">
            <span className="data-spine__icon data-spine__looker">
              <Image
                src="https://cdn.simpleicons.org/looker/4285F4"
                alt=""
                width={22}
                height={22}
              />
            </span>
            <small>03 · DECIDE</small>
            <h3>Looker leadership view</h3>
            <p>
              Weekly exceptions, budget pacing, launch health and customer
              economics.
            </p>
            <span className="data-spine__chip">Role-based access</span>
          </article>
        </div>
      </div>

      <footer className="data-spine__footer">
        <span>
          <RefreshCw /> Refresh status and owner visible
        </span>
        <span>
          <CheckCircle2 /> Reconciliation before publication
        </span>
        <span>
          <Gauge /> Decision threshold on every KPI
        </span>
      </footer>
    </section>
  );
}
