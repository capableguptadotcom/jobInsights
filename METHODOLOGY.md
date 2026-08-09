# Methodology and refresh runbook

This tracker is an evidence log, not a labor-market census. Its job is to reveal durable capability and hiring signals while preserving enough provenance to challenge every conclusion.

## Scope

- India: Bengaluru, Pune, and roles explicitly available remotely from India.
- California: AI/ML roles with a separate, role-level work-visa classification.
- Experience: target roughly 3–6 years; adjacent roles remain visible when they clarify the market boundary.
- Families: AI Engineer, ML Engineer, Applied Scientist, and relevant Data Scientist variants.

## Evidence ladder

| Tier | Meaning | Allowed use |
|---|---|---|
| A | Live company careers page or employer-specific ATS | Canonical role, requirements, status, and sponsorship evidence |
| B | Branded or verified discovery listing with identifiable employer | Discovery and directional demand; verify before applying |
| C | Recruiter, anonymous client, or incomplete listing | Lead only; exclude from strong conclusions until corroborated |

Job boards are discovery surfaces. Cross-posts are not independent demand. Deduplicate by `company + requisition ID`, then by normalized company/title/location/date when no requisition exists.

## Sponsorship taxonomy

- `h1b_explicit`: the current role names H-1B without limiting support to transfers.
- `h1b_transfer_only`: the role supports a change of employer but not a new filing.
- `visa_unspecified`: the role promises visa help but does not name the route.
- `conditional`: continuing authorization or another condition must already be satisfied.
- `explicit_no`: the role says sponsorship is unavailable.
- `not_applicable`: India observation.

Historical DOL LCAs or USCIS petitions describe past employer behavior. They do not prove that a current requisition will sponsor. Use California worksite fields from DOL disclosure data; USCIS employer-hub geography is petitioner geography, not necessarily the worksite.

## Credibility score

The score is triage, not truth. Keep the written reason beside it.

| Component | Points |
|---|---:|
| First-party role and working application path | 0–35 |
| Traceable company, requisition, and contact domain | 0–20 |
| Freshness or live-status confirmation | 0–20 |
| Specific responsibilities and requirements | 0–15 |
| Clear application/recruiter route with no scam flags | 0–10 |

Interpretation: 85–100 prioritize; 70–84 verify then apply; below 70 investigate before sharing documents. Reject any role requesting payment, using only an unverifiable personal domain, redirecting to an unrelated vacancy, or lacking a verifiable employer.

## Twice-monthly refresh

Run on the 1st and 15th:

1. Search the fixed matrix: geography × role family × 3–6-year band.
2. Resolve each discovery listing to a company careers or employer ATS URL.
3. Record new observations with the date; do not silently rewrite old evidence.
4. Recheck live roles and classify them as `active_confirmed`, `stale_unconfirmed`, `closed_explicit`, or `closed_inferred` after two failed observations.
5. Normalize raw skills into durable capabilities while preserving both.
6. Deduplicate before calculating counts.
7. Recalculate skill, production-signal, domain, and sponsorship summaries.
8. Add interview accounts only to `data/interviews.json`; never merge anecdotes into job facts.
9. Run `npm test`, inspect the dashboard locally, and note sample/evidence coverage in the research log.

Do not call a capability “rising” until it moves in the same direction for three snapshots and the movement is not dominated by one employer.

## Outreach tracking

Apply through the canonical requisition first. Then record the route separately: direct application, credible referral, employee introduction, recruiter contact, or cold outreach. A useful note contains the role ID, one domain-relevant result, one production artifact, and one specific question. Do not collect private phone numbers or scraped personal emails.

For visa roles, ask whether the exact requisition supports a new cap-subject petition, a cap-exempt filing, or only a change of employer. Store the dated recruiter answer as a separate evidence item.

## Limitations

- The initial sample is intentionally source-heavy and not representative enough for market-share claims.
- Logged-in platform results can be personalized.
- Search indexes may retain closed roles; a live canonical application path wins.
- “Remote India” may still carry payroll, state, time-zone, or contractor restrictions.
- Interview accounts are selected, unverifiable anecdotes unless a company publishes the process itself.

Detailed evidence and government-source caveats live in [research/market-primary-sources.md](research/market-primary-sources.md).
