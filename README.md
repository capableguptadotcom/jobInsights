# JobSignal

JobSignal is a dependency-free GitHub Pages dashboard for tracking AI/ML hiring signals across Bengaluru, Pune, India-remote, and California. It separates job discovery from canonical evidence, distinguishes H-1B categories, and turns raw technology mentions into durable capabilities.

## Run locally

```bash
npm test
npm run serve
```

Open `http://localhost:8765`. Opening `index.html` directly will not load JSON in browsers that block local `fetch`.

## Repository map

- `data/jobs.json`: append-oriented job observations with evidence and credibility fields.
- `data/interviews.json`: separately scored first-person interview signals.
- `research/market-primary-sources.md`: sourced baseline and interpretation.
- `METHODOLOGY.md`: evidence ladder, visa taxonomy, score, and twice-monthly runbook.
- `scripts/validate-data.mjs`: schema and evidence checks.
- `index.html`, `styles.css`, `app.js`: static dashboard.

## Updating

Use the runbook in [METHODOLOGY.md](METHODOLOGY.md). Preserve old observations, use a new snapshot date, and retain both discovery and canonical source links when available. Run `npm test` before committing.

## Publishing

The included GitHub Actions workflow deploys the repository root to GitHub Pages after a push to `main`. In repository settings, set **Pages → Source** to **GitHub Actions** if it is not already selected.

## Important caveats

This is directional market research, not legal advice or a complete labor-market dataset. A company's historical H-1B activity does not prove sponsorship for a current job. Always verify the live role and ask the recruiter about the exact requisition.
