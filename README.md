# Kitsch Marketing Operations Control Center

A public-data prototype for the Marketing Operations Manager opportunity at Kitsch. It demonstrates how observable marketing signals can be structured into executive questions, launch gates, KPI definitions and an operating cadence without inventing internal performance.

## Architecture

Vinext / React / TypeScript / Tailwind with a local structured research layer in CSV and Markdown. The interface is intentionally read-only and requires no backend, authentication or paid API.

## Research methodology

Primary sources were preferred: Kitsch pages and public profiles, retailer pages and marketplace pages. Current editorial sources were used for search and answer-engine observations. Every public claim carries a source, access date and confidence rating. Platform counters are snapshots.

## Evidence labels

- PUBLIC SIGNAL: directly observable first-party or platform data.
- ESTIMATE: third-party modeled value; none is presented as Kitsch internal truth.
- HYPOTHESIS: an interpretation to validate.
- INTERNAL DATA REQUIRED: a business metric that cannot be known publicly.

## Run

`npm run dev`

## Refresh

Update the dated CSV rows in `research/`, preserve the original source URL, then revise only affected interface claims. Never overwrite a snapshot without changing `date_accessed`.

## Add a competitor or source

Add a normalized row with comparable category, price, positioning, distribution and evidence fields. Prefer first-party product or retailer pages and avoid treating aesthetic similarity as competitive relevance.

## Limitations

No private Kitsch data, paid APIs, authenticated analytics, scraping bypasses or conversion claims are included. Public research is designed to create informed interview questions—not fake certainty.
