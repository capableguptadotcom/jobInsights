# AI/ML job-market intelligence: primary-source baseline

**Scope:** Bengaluru, Pune, and India-remote roles (focus: roughly 3–6 years of experience), plus California roles with explicit work-visa evidence
**Observed:** baseline 2026-08-09; refreshed 2026-09-01 (America/Los_Angeles)
**Source standard:** official employer career pages and employer-specific ATS tenants for job facts; U.S. government sources for immigration definitions and employer history; first-party employer pages for hiring/interview guidance. LinkedIn, Naukri, Instahyre, X, and aggregators are discovery channels, not final evidence.

## Refresh log — 2026-09-01

- Added two live A-tier observations: Loopio's India-remote Senior Machine Learning Engineer (4+ years of production ML; retrieval, embeddings, fine-tuning, serving, evaluation, and observability) and Stand Insurance's San Francisco hybrid multimodal MLE. [Loopio](https://jobs.ashbyhq.com/loopio/713e34ce-2e2e-4896-bb00-723cd5c97725), [Stand](https://jobs.ashbyhq.com/standinsurance/f3b0ebc3-f2db-4da3-b841-673878f71b42)
- Closed India observations: Citi's Pune Full Stack AI-Enabled Developer and METRO's Pune AI Engineer have employer pages indicating the roles are no longer open/expired. Amazon CMT and Sarvam Full Stack AI met the documented second-consecutive-failed-check threshold and are now `closed_inferred`. The prior closed Uplane and Clera California pages remain unavailable.
- Reverified every California role's exact visa wording. New/unspecified H-1B remains limited to Composite, zaimler, and Retell; Reka, Mercator, and new Stand are transfer-only; Poesis remains conditional; Yutori's two roles and Apiphany remain visa-route-unspecified. Stand explicitly says it does not sponsor new work visas and considers certain H-1B transfers only.
- The sample is now 51 job observations, 24 A-tier (47.1%), and 7 interview observations. The two additions reinforce the existing production-delivery pattern—retrieval/evaluation/observability in India remote and multimodal evaluation/deployment in California—but do not establish a three-snapshot trend, so dashboard conclusions remain otherwise unchanged.

## Executive readout

This is a baseline, not a labor-market census. The live primary-source examples are enough to establish a useful monitoring taxonomy and several hypotheses to test every two weeks:

1. **“AI engineer” and “ML engineer” are converging on production software ownership.** The sampled roles repeatedly ask candidates to build, deploy, operate, evaluate, and scale systems—not only train models. Amazon Music explicitly combines PyTorch/JAX with large-scale ML infrastructure and online serving; Citi combines model integration with APIs, containers, CI/CD, and MLOps; Sarvam asks for full-stack product delivery around speech, language, and multimodal models. [Amazon Music MLE](https://amazon.jobs/en/jobs/10486419/machine-learning-engineer-amazon-music-catalog-quality), [Citi Full Stack AI-Enabled Developer](https://jobs.citi.com/job/pune/full-stack-ai-enabled-developer-angular-and-java/287/97223901072), [Sarvam Full Stack AI Engineer](https://jobs.ashbyhq.com/sarvam/325c7d1b-963d-42a8-b2b8-a4c5c6705c54)
2. **GenAI demand is more specific than “prompt engineering.”** The examples name RAG/retrieval, agents/tool use, evaluation, observability, data pipelines, latency, reliability, and domain workflows. That combination is a stronger learning target than framework familiarity alone. [MightyBot AI Engineer](https://jobs.ashbyhq.com/MightyBot/4338903c-c692-4499-9350-9f72caa7ad0a/), [Deductive AI Forward-Deployed Engineer](https://jobs.ashbyhq.com/deductive/124b540e-f84f-46d5-9752-f151361b8223), [Composite Founding MLE](https://jobs.ashbyhq.com/composite/03e445d5-f7c9-41f3-8994-ed136dc1e64d/)
3. **Role titles are broadening around delivery context.** In addition to Machine Learning Engineer, the sample includes Full Stack AI Engineer, AI-Enabled Developer, and Forward-Deployed AI Engineer. The title alone is therefore a poor filter; classify the actual work as model development, ML platform/serving, applied GenAI/product, or forward-deployed/customer delivery.
4. **Domain understanding is part of the technical bar.** The primary examples apply ML to retail search, music-catalog quality, education, site reliability, banking applications, marketing, finance, and enterprise knowledge. The signal is “solve a measurable domain workflow with production constraints,” not generic chatbot construction.
5. **California visa evidence must be role-specific and time-stamped.** Composite and zaimler explicitly name H-1B sponsorship on current job pages; Mercator limits support to H-1B transfers; several other roles say only “visa sponsorship,” which is not enough to label H-1B-positive. Historical government filings are useful corroboration, but they do not prove that a particular current vacancy will sponsor. [Composite](https://jobs.ashbyhq.com/composite/03e445d5-f7c9-41f3-8994-ed136dc1e64d/), [zaimler](https://jobs.lever.co/zaimler/c4932cc1-5fba-4a80-92e4-15c4d0f30f96), [Mercator](https://jobs.ashbyhq.com/mercator/ea6168e0-ed3b-4a3c-8e3d-e3ccf8f961d2)

## Methodology for a maintainable tracker

### Evidence ladder

Use the highest available tier for each fact, and retain the lower-tier discovery URL separately.

| Tier | Evidence | Appropriate use |
|---|---|---|
| A | Live role on the employer's career domain, with requisition ID and working application path | Canonical job facts and active status |
| A- | Live role on an employer-named ATS tenant (Ashby, Greenhouse, Lever, Workday) | Canonical job facts when the employer delegates recruiting to the ATS; verify the tenant is linked from the company site when practical |
| B | Employer careers FAQ, immigration statement, interview guide, engineering blog, or talent-community page | Company-wide policy, interview preparation, recruiter channel, domain context |
| B | DOL LCA disclosure files and USCIS H-1B Employer Data Hub | Historical petition/attestation behavior and employer-name corroboration |
| C | LinkedIn, Naukri, Instahyre, or X post linking to the canonical vacancy | Discovery and outreach lead only; never the sole source for role status, requirements, or sponsorship |
| D | Anonymous aggregators, copied descriptions, unsourced interview stories | Leads only; exclude from demand counts until corroborated |

### Biweekly collection loop

1. Query discovery channels for a fixed search matrix: location × role-family × experience band.
2. Resolve every candidate listing to its official career/ATS URL; store the discovery URL separately.
3. Extract the requisition ID, dates, required years, work mode, responsibilities, skills, sponsorship text, application path, and a short evidence excerpt.
4. Normalize company legal/display names, titles, locations, and skills; deduplicate cross-posts by `company + requisition_id`, falling back to `company + normalized_title + location + posted_date`.
5. Revisit all open roles. Mark `closed_explicit` only when the employer page says it is unavailable; mark `stale_unconfirmed` after one failed observation and `closed_inferred` only after two consecutive failed observations.
6. Compute trends over a rolling window using **unique canonical requisitions** and **unique hiring companies**, not the number of copies across job boards.
7. Publish sample size and evidence coverage beside every percentage. Do not call a skill “rising” until it increases across at least three consecutive snapshots or enough roles to avoid one employer dominating the result.

The importance of live verification is concrete: Mastercard requisition R-277211 was recently indexed with a detailed Pune AI Engineer description, but its official page returned “this specific position is no longer available” on 2026-08-09. Treat search-engine snippets as leads and the live employer page as truth. [Mastercard R-277211](https://careers.mastercard.com/us/en/job/R-277211/AI-Engineer)

## Primary-source role snapshot

### India: roles within or adjacent to the target experience band

| Geography | Employer / title | Experience signal | Production and domain signal | Skill evidence | Status on observation |
|---|---|---:|---|---|---|
| Bengaluru | Amazon — Machine Learning Engineer II, EU INTech (Job 10418966) | 2+ years software development; adjacent lower edge | Retail search/document retrieval; statistically rigorous experiments; prototypes integrated into large-scale production | CS fundamentals, Big Data, NoSQL, MapReduce; preferred ML, distributed systems, C++/Java plus Python or another scripting language | Official page live; apply link present. [Source](https://amazon.jobs/en/jobs/10418966/machine-learning-engineer-ii-eu-intech-exports-emerging-and-expansions) |
| Bengaluru | Amazon Music — Machine Learning Engineer, Catalog Quality (Job 10486419) | 3+ years software development; 2+ years architecture; 2+ years large-scale ML infrastructure | Real-time metadata correction, online recommendation/ranking/search, high-volume low-latency systems | PyTorch or JAX, ML pipelines, online serving, transformers, training/inference optimization, operational excellence | Official page live; apply link present. [Source](https://amazon.jobs/en/jobs/10486419/machine-learning-engineer-amazon-music-catalog-quality) |
| Bengaluru | Amazon — Applied Scientist, CMT (Job 10470536) | 3+ years building models for business applications; PhD or MS plus 4 years also specified | Pricing work spanning NLP, optimization, image processing, LLMs, and GenAI | Java/C++/Python, algorithms/data structures, numerical optimization, data mining, distributed/HPC systems | Official page live; apply link present. [Source](https://www.amazon.jobs/es/jobs/10470536/applied-scientist-cmt) |
| Bengaluru | Sarvam — Full Stack AI Engineer | 3–5 years full-stack engineering | Education product; integrates speech, language, and multimodal capabilities; owns user-facing product end to end | Python/Node, React/Next, APIs, data pipelines, system design, cloud; Indian-language and low-bandwidth/mobile experience are bonuses | Employer-specific Ashby role recently live. [Source](https://jobs.ashbyhq.com/sarvam/325c7d1b-963d-42a8-b2b8-a4c5c6705c54) |
| Pune | Citi — Full Stack AI-Enabled Developer (Req 26975115) | 4–8 years; description says at least 6 | Enterprise applications with model/service integration, prediction, recommendation, NLP, automation | Java/Spring/Angular, MongoDB, REST, Docker/Kubernetes, CI/CD; preferred TensorFlow/PyTorch, cloud AI platforms, MLOps | Official page live; posted 2026-07-02; apply link present. [Source](https://jobs.citi.com/job/pune/full-stack-ai-enabled-developer-angular-and-java/287/97223901072) |
| Pune | METRO — AI Engineer | 5+ years | Explicitly integrates existing cloud models/APIs into enterprise workflows rather than inventing algorithms | GCP/Vertex/Document AI/BigQuery ML; OpenAI/Anthropic/Gemini/Azure OpenAI; prompt/context engineering, agents, SQL/Python, microservices/events, CI/CD, monitoring, responsible AI | Official SmartRecruiters role recently live; hybrid; interest/application control present. [Source](https://jobs.smartrecruiters.com/METROMAKRO/744000118548367-ai-engineer) |
| India remote | Deductive AI — AI Engineer / Forward-Deployed Engineer | 3+ years software, platform, or SRE | Customer deployments of AI SRE agents from scoping through production; scripts and automations around incident workflows | Python/scripting, AWS/GCP, Kubernetes, Datadog/Grafana/Prometheus/OpenTelemetry; customer communication | Employer-specific Ashby role recently live. [Source](https://jobs.ashbyhq.com/deductive/124b540e-f84f-46d5-9752-f151361b8223) |
| India remote | fal — Machine Learning Engineer, Reliability | 3+ years; 1+ year with production ML, high-scale API, or on-call | Reliability of diffusion/transformer workloads; incidents, canary/shadow/rollback, GPU capacity, model safety/security | Python/PyTorch, Kubernetes, distributed systems, networking, observability | Employer-specific Ashby role recently live; India/Australia/New Zealand eligibility stated. [Source](https://jobs.ashbyhq.com/fal-ai/1d9325cf-28da-4b78-af0d-eb0abe7b501d/) |
| India remote | Weave — Senior ML/GenAI Engineer | 5+ years ML/AI | Production B2B multitenant ML over TB-scale / 100M–10B-record data; India/US-hour overlap expected | Python, Dagster/MLflow/Kubeflow, DVC, Triton; LLM/RAG, fine-tuning, evals, multimodal and distributed cloud systems | Employer-specific Ashby role recently live; fully remote India. [Source](https://jobs.ashbyhq.com/weave/2518c1b8-3ffc-40e5-a968-c013e760c3f5) |
| India remote | MightyBot — AI Engineer | 1–3 years; adjacent lower band | Moves AI from demos to reliable products; builds self-improving systems, search/RAG, and agent evaluation | Python, FastAPI, Ray, Kubernetes, gRPC, Pub/Sub; LlamaIndex/LangGraph, vector search, open-source models | Employer-specific Ashby role recently live. [Source](https://jobs.ashbyhq.com/MightyBot/4338903c-c692-4499-9350-9f72caa7ad0a/) |
| India remote | AHL / Saaf AI — Forward-Deployed AI Engineer | Years not stated | End-to-end agents for mortgage underwriting, document processing, and borrower workflows; explicitly production rather than demo work | Business-problem framing, multi-step workflows, production delivery; details should be captured from the full posting at each refresh | Employer-specific Ashby role recently live. [Source](https://jobs.ashbyhq.com/AHL-SaafAI/cf683b2f-f1db-4ca0-9bac-57eb64827c0a/) |

**Initial location interpretation:** the sampled Bengaluru roles include standalone ML infrastructure and model-serving work; the clearest target-band Pune example blends AI into a Java/full-stack enterprise stack; the sampled India-remote roles strongly feature forward-deployed/customer-context work. This is a hypothesis for the tracker to test, not a claim about the full market.

### California: role-level visa evidence

Use the following sponsorship enum; do not collapse it to a yes/no field:

- `h1b_explicit_new_or_unspecified`: role names H-1B and does not restrict it to transfers.
- `h1b_transfer_only`: role explicitly supports only candidates who already hold H-1B status.
- `visa_explicit_route_unspecified`: role promises visa sponsorship but does not name H-1B.
- `continuing_work_visa_only`: wording suggests maintenance/transfer rather than a new cap-subject petition.
- `no_sponsorship`, `unknown`, or `conflicting`.

| Employer / role | California location | Experience fit | Exact role-level evidence | Classification |
|---|---|---:|---|---|
| Composite — Founding Machine Learning Engineer | San Francisco, onsite | Years not stated | “Comprehensive visa sponsorship including O-1, green card, TN, H-1B, and F-1/J-1.” The work covers action models, LLM inference/latency, browser understanding, evaluation, synthetic data, RAG, and full-stack delivery. [Source](https://jobs.ashbyhq.com/composite/03e445d5-f7c9-41f3-8994-ed136dc1e64d/) | `h1b_explicit_new_or_unspecified` |
| zaimler — Machine Learning Engineer, ML Platform | San Mateo, onsite | Years not stated | “We sponsor H-1B visas and assist with immigration processes.” Work includes training infrastructure, feature stores, model serving, inference optimization, GPUs, retrieval/ranking, and knowledge graphs. [Source](https://jobs.lever.co/zaimler/c4932cc1-5fba-4a80-92e4-15c4d0f30f96) | `h1b_explicit_new_or_unspecified` |
| Mercator — Founding AI Engineer | San Francisco, onsite | Years not stated | “We are able to support H-1B transfers but are not initiating new visa sponsorships at this time.” Work centers on LLM reasoning, RAG, data modeling, validation, APIs, and production pipelines for supply chains. [Source](https://jobs.ashbyhq.com/mercator/ea6168e0-ed3b-4a3c-8e3d-e3ccf8f961d2) | `h1b_transfer_only` |
| Poesis — Machine Learning Engineer | Menlo Park, hybrid | 5+ years | Requires current U.S. authorization and says “continuing work visa sponsorship” is available. Work covers finance/time series, model and agent evaluation, reproducible research, and production deployment. [Source](https://jobs.ashbyhq.com/poesis/15f2c818-6bb1-43d1-801b-ecf3e0090963) | `continuing_work_visa_only`; ask whether H-1B transfer is included |
| Uplane — Founding AI Engineer | San Francisco, onsite | 3+ years | “Visa sponsorship will be provided if needed,” but the visa class is not named. Stack includes LangGraph, PostgreSQL, TypeScript/Node, and end-to-end AI product ownership. [Source](https://jobs.ashbyhq.com/uplane/4d643fab-1e42-4f07-b28a-d3a2ec181bc5) | `visa_explicit_route_unspecified`; do not label H-1B-positive without confirmation |
| Apiphany — Machine Learning Engineer | San Francisco, hybrid | Years not stated | Benefits list “Visa Sponsorship,” with no route named. The role emphasizes Python, deep learning/NLP, and LLM reasoning over physical-product engineering data. [Source](https://jobs.ashbyhq.com/Apiphany/64904964-7caf-48d7-8375-8432dd7a7eef/) | `visa_explicit_route_unspecified` |

This small California sample is startup-heavy and often onsite. Preserve company stage and workplace mode so the tracker does not mistake a sourcing bias for a whole-market trend.

## How to verify H-1B evidence correctly

The process has distinct artifacts:

1. Before seeking H-1B classification, an employer submits a Labor Condition Application (LCA) to the Department of Labor. DOL describes H-1B/H-1B1/E-3 as attestation-based programs and says employers with certified LCAs may then proceed with USCIS or the Department of State. [DOL H-1B program](https://www.dol.gov/agencies/eta/foreign-labor/programs/h-1b)
2. A U.S. employer files the H-1B petition with USCIS. USCIS's Form I-129H1 instructions describe the employer as the filer for a beneficiary. [USCIS Form I-129H1 instructions](https://www.uscis.gov/sites/default/files/document/forms/i-129h1instr-feerule.pdf)
3. A certified LCA is not a visa or a guarantee of issuance. DOL says its approval does not guarantee visa issuance. [DOL foreign-labor overview](https://www.dol.gov/general/topic/hiring/foreign)

Therefore, use three independent evidence fields:

- **Current intent:** exact wording on the current vacancy (`role_sponsorship_text`, URL, observed date).
- **DOL history:** recent certified LCA records matching the employer's legal name, job family/SOC, and California worksite.
- **USCIS history:** initial and continuing petition approvals/denials for the employer.

DOL publishes quarterly LCA disclosure workbooks plus record-layout documents. The site states that post-FY2020 layouts changed and that the record layout defines every field. Store at minimum `CASE_NUMBER`, `CASE_STATUS`, `RECEIVED_DATE`, `DECISION_DATE`, `VISA_CLASS`, `EMPLOYER_NAME`, `JOB_TITLE`, `SOC_CODE`, `SOC_TITLE`, `FULL_TIME_POSITION`, employment dates, worker count, wage fields, and worksite geography as defined by that quarter's layout. [DOL performance/disclosure data](https://www.dol.gov/agencies/eta/foreign-labor/performance)

For reproducible ingestion, use the official [FY2026 Q2 LCA workbook](https://www.dol.gov/media/LCA_Dislclosure_Data_FY2026_Q2.xlsx), its [record layout](https://www.dol.gov/sites/dolgov/files/ETA/oflc/pdfs/LCA_Record_Layout_FY2026_Q2.pdf), and the separate [worksites workbook](https://www.dol.gov/media/LCA_Worksites_FY2026_Q2.xlsx). Filter `VISA_CLASS` to H-1B because the disclosure program also contains H-1B1 and E-3. Retain new/continued/change-employer fields, DBA and NAICS, secondary-entity fields, wage/prevailing-wage/level fields, and intended dates.

USCIS describes its H-1B Employer Data Hub as information on employers petitioning for H-1B workers; downloadable fiscal-year files support employer-level approval/denial analyses. The FY2024 congressional report says the hub covers employer petition data from FY2009 and is updated quarterly, while also warning that petitioner/data-entry errors can occur. Critically, USCIS says its electronic data do not contain the cities or states where H-1B workers are employed: hub geography is petitioner geography. Use DOL worksite fields for the California filter and USCIS for employer petition outcomes. [USCIS H-1B Employer Data Hub](https://www.uscis.gov/tools/reports-and-studies/h-1b-employer-data-hub), [USCIS FY2024 H-1B characteristics report](https://www.uscis.gov/sites/default/files/document/reports/ola_signed_h1b_characteristics_congressional_report_FY24.pdf)

**Interpretation rule:** historical LCAs/petitions demonstrate past behavior, not current-vacancy intent. A current posting that explicitly names H-1B is stronger for an applicant today; government history then raises or lowers confidence that the employer has actually navigated the process. Match legal entities carefully—brand names, subsidiaries, and similarly named employers can produce false joins.

**Current time-sensitive caveat:** a presidential proclamation effective 2025-09-21 restricts entry for certain H-1B beneficiaries outside the United States unless the petition is accompanied or supplemented by a $100,000 payment, subject to stated exceptions. The text says the restriction expires 12 months after its effective date absent extension. Because this baseline is dated 2026-08-09, add `covers_current_h1b_proclamation_payment = yes/no/unknown`, ask the recruiter directly, and re-check official guidance before every update—especially around 2026-09-21. This is a monitoring flag, not legal advice. [White House proclamation](https://www.whitehouse.gov/presidential-actions/2025/09/restriction-on-entry-of-certain-nonimmigrant-workers/)

Do not search only the literal title “AI Engineer.” O*NET maps AI Engineer, Artificial Intelligence Engineer, Machine Learning Engineer, and NLP Engineer to Computer and Information Research Scientists (15-1221), while employers may also use Software Developers (15-1252), Data Scientists (15-2051), or other computer-occupation codes. Search raw title plus a documented SOC set, but retain title and SOC separately rather than treating them as identical work. [O*NET 15-1221 alternate titles](https://www.onetonline.org/find/score/15-1221.00?s=engineers)

## Practical data model

Keep an append-only observation table and derive a current-role table from it. Suggested fields:

### Identity and provenance

- `snapshot_date`, `first_seen_at`, `last_seen_at`, `source_checked_at`
- `company_display_name`, `company_legal_name`, `company_domain`, `company_stage`
- `role_title_raw`, `role_title_normalized`, `role_family`, `seniority`
- `requisition_id`, `canonical_job_url`, `application_url`, `ats_host`
- `discovery_source`, `discovery_url`, `source_tier`, `evidence_excerpt`

### Job facts

- `country`, `state`, `city`, `location_raw`, `workplace_type`, `india_remote_eligible`
- `employment_type`, `posted_date`, `required_years_min`, `required_years_max`
- `responsibility_tags`: `model_dev`, `data_pipeline`, `serving`, `platform`, `full_stack`, `forward_deployed`, `research`
- `domain_tags`: search, ads/ranking, finance, banking, healthcare, education, SRE/observability, document intelligence, etc.
- `skills_raw`, `skills_normalized`, `skill_requirement_level` (`required`, `preferred`, `mentioned`)
- `production_signals`: scale/latency, evals, monitoring, on-call, CI/CD, security/governance, cost optimization

### Visa evidence

- `sponsorship_status`, `sponsorship_text`, `sponsorship_source_url`, `sponsorship_checked_at`
- `h1b_new_possible`, `h1b_transfer_possible`, `other_routes_named`
- `covers_current_h1b_proclamation_payment`
- `dol_legal_employer_match`, `dol_latest_fy`, `dol_recent_lca_count`, `dol_role_location_match_count`
- `uscis_latest_fy`, `uscis_initial_approvals`, `uscis_initial_denials`, `uscis_continuing_approvals`, `uscis_continuing_denials`
- `visa_evidence_confidence`, with a written reason rather than an unexplained numeric score

### Credibility and outreach

- `role_status`: `active_confirmed`, `stale_unconfirmed`, `closed_explicit`, `closed_inferred`
- `official_careers_linked_to_ats`, `application_path_works`, `job_id_present`, `company_contact_domain`
- `recruiting_fraud_guidance_url`, `red_flags`, `verification_notes`
- `hiring_team_function`, `public_hiring_contact_name`, `public_hiring_contact_role`, `public_contact_url`, `contact_source`
- `referral_candidate`, `referral_relationship_strength`, `outreach_channel`, `outreach_date`, `reply_status`
- `application_date`, `application_status`, `screen_stage`, `interview_stage`, `outcome`, `follow_up_date`

Avoid collecting personal phone numbers or private email addresses. Prefer an employer's official application, talent community, or a public professional profile, and reference the requisition ID in any outreach.

### Credibility decision, not a magic score

Label a vacancy `verified` when the official company/canonical ATS page is live, its job identity and application path agree, and no scam signal exists. Label it `needs_check` when it exists only on a discovery platform, has an anonymous client, or the ATS tenant cannot be connected to the employer. Label it `reject` when the employer page says closed, the application redirects to an unrelated role, money is requested, or contact comes only from an unverifiable domain.

Amazon India's own fraud guidance says Amazon charges no fee at any recruitment stage, warns about free email domains and payment requests, and says genuine offer documents are downloaded through its official joining portal. Anthropic similarly says legitimate recruiters use `@anthropic.com`, never request money/fees, and advises candidates to confirm openings through its careers page. These are company-specific rules, but they make good generic tracker fields. [Amazon India fraud alert](https://amazon.jobs/content/en/how-we-hire/fraud-alert-india), [Anthropic careers / hiring safety](https://www.anthropic.com/careers)

For U.S. sponsor research, also check the official DOL [H-1B debarred/disqualified employer list](https://www.dol.gov/agencies/whd/immigration/h1b/debarment) and [willful-violator list](https://www.dol.gov/agencies/whd/immigration/h1b/willful-violator-list). Absence from those lists is necessary due diligence, not proof that a vacancy is funded or actively interviewing.

## Outreach workflow

For each verified role:

1. Apply through the canonical requisition first unless the posting says otherwise; save the requisition ID and confirmation date.
2. Identify the likely team from the job description, engineering blog, product page, or named hiring manager—not from scraped personal-data lists.
3. Seek a referral from a real first- or credible second-degree connection who can speak to the candidate's work. Record relationship strength; do not treat mass unsolicited referral requests as equivalent.
4. If cold outreach is appropriate, send one concise note through a public professional channel or verified company-domain email: role ID, one domain-relevant result, one production artifact, and a specific question. Follow up once, then stop.
5. For U.S. roles, ask the recruiter a precise question: “Does this requisition support a new cap-subject H-1B, cap-exempt filing, or only an H-1B change of employer/transfer?” Save the answer and date as recruiter-confirmed evidence; policies can differ by role.

The tracker should distinguish `referral_submitted`, `employee_intro`, `recruiter_contact`, and `cold_outreach`; otherwise it cannot learn which route produces interviews.

## Interview signal from first-party sources

Candidate stories can suggest questions, but they are not stable enough to define the preparation plan without corroboration. First-party guidance provides a defensible baseline:

- Amazon says most technical interviews involve coding and system design and lists programming, data structures, algorithms, object-oriented design, databases, distributed computing, operating systems, internet topics, and general ML/AI. Its senior-SDE guide describes a technical phone screen followed by five 55-minute interviews, with coding, system design, and Leadership Principles, and emphasizes scalable, robust, well-tested code. [Amazon software-development topics](https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics), [Amazon SDE III interview prep](https://www.amazon.jobs/content/en/how-we-hire/sde-iii-interview-prep)
- Amazon's Applied Scientist guide is more role-specific: it describes one or two 60-minute technical phone screens followed by four 55-minute interviews, covering science depth, problem solving/coding, a technical discussion, and Leadership Principles. [Amazon Applied Scientist interview prep](https://amazon.jobs/content/en/how-we-hire/applied-scientist-interview-prep)
- Anthropic says technical interviews use live coding environments; candidates may consult documentation but should know syntax and standard libraries, and the company values direct evidence such as independent research, thoughtful writing, or substantial open-source work. Anthropic also says eligible roles may receive visa/green-card sponsorship. [Anthropic careers](https://www.anthropic.com/careers)
- OpenAI says it is not credential-driven and looks for experts as well as candidates who demonstrate rapid learning and results, alongside collaboration and communication. [OpenAI interview guide](https://openai.com/interview-guide/)
- Microsoft advises candidates solving code/design problems to clarify assumptions and explain choices, and recommends structured, result-oriented behavioral answers. [Microsoft interview tips](https://careers.microsoft.com/v2/global/en/hiring-tips/interview-tips.html)
- Microsoft's technical guide says interviewers assess problem solving, design, executable code and testing; for AI/ML and data-science roles it calls out model and training-pipeline evaluation, profiling/optimization, data manipulation at scale, probability/math, regression, time series, and hypothesis testing. [Microsoft technical interviewing](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing.html)

Translate those sources and the sampled descriptions into five preparation lanes:

1. coding and core CS;
2. system design for data/ML/LLM workloads;
3. ML fundamentals and experiment design;
4. production case study with evaluation, reliability, latency/cost, and monitoring;
5. domain and behavioral evidence with quantified outcomes.

## Skills taxonomy for trend reporting

Do not count raw strings such as “LangGraph” and “agents” as unrelated skills. Normalize them into durable capabilities while retaining the raw term:

| Durable capability | Example raw terms | What a portfolio should prove |
|---|---|---|
| Software engineering | Python, Java, TypeScript, APIs, testing, code review | Maintainable production code, not notebooks alone |
| Data and retrieval | SQL, Spark, data pipelines, embeddings, vector DB, knowledge graph, search/ranking | Data quality, indexing/retrieval metrics, lineage, failure handling |
| Model development | PyTorch, JAX, TensorFlow, transformers, fine-tuning | Sound experiments, baselines, validation, error analysis |
| LLM application engineering | RAG, agents, tool use, memory/context, multimodal | End-to-end workflow with grounded outputs and bounded failure modes |
| Evaluation and safety | offline/online evals, LLM-as-judge, guardrails, human-in-loop, bias/hallucination checks | Reproducible test set, meaningful metrics, review loop |
| Serving and platform | inference, batching/caching, GPUs, Ray, Kubernetes, model serving | Latency, throughput, availability, cost, rollback, observability |
| MLOps/LLMOps | CI/CD, MLflow, model/prompt versioning, monitoring, retraining | Repeatable release and measurement loop |
| Product/domain delivery | forward deployed, stakeholder discovery, user workflow, business impact | Clear problem definition and measured operational outcome |

## Metrics worth publishing every two weeks

- verified new openings, still-open roles, explicit closures, and median observed lifetime;
- unique hiring companies by geography and role family;
- required-years distribution and share fitting the 3–6 band;
- skill prevalence by `required` versus `preferred`, using unique requisitions;
- production-signal prevalence (evals, serving, monitoring, on-call, CI/CD, security);
- domain distribution and title-to-work-family crosswalk;
- California sponsorship categories and percentage with role-level text, recent DOL history, and both;
- outreach funnel by channel: contacted → response → referral → screen → interview → offer;
- sample coverage: proportion resolved to an official source and proportion still based only on discovery listings.

## Limitations

- This baseline intentionally samples high-trust sources; it is not representative enough for market-share claims.
- Employer pages change or disappear. Preserve a short evidence excerpt, observation timestamp, requisition ID, and optionally a content hash; never present an old excerpt as current policy.
- Search engines may cache closed jobs, while JavaScript ATS pages may not expose all text to a simple fetch. A working application path or explicit employer status is stronger than an indexed snippet.
- “Remote India” can still impose state, time-zone, payroll, or contractor restrictions; record the exact geography and employment type.
- “Visa sponsorship” may mean only certain visa categories or only transfers. Only wording that names H-1B should populate an affirmative H-1B field, and recruiter confirmation should specify new filing versus transfer.
- DOL LCA data includes H-1B, H-1B1, and E-3 records and represents employer attestations; USCIS data represents petition adjudications. Neither source proves a vacancy, a filled job, or an individual's visa issuance.
- Public candidate interview reports are vulnerable to selection bias, outdated loops, unverifiable identity, and copied content. Store them in a separate `anecdotal_interview_reports` table with source/date/role/office and never merge them into first-party facts.

## Immediate learning priorities supported by this snapshot

For a candidate with about six years of experience, the strongest cross-market portfolio is a production-shaped project that demonstrates:

1. strong Python plus one production backend ecosystem;
2. data/retrieval engineering and SQL;
3. one ML/LLM workflow with explicit evaluation and error analysis;
4. deployment, monitoring, CI/CD, reliability, latency, and cost trade-offs;
5. a domain problem with a measurable user or business outcome;
6. system-design and communication depth sufficient to defend every architectural decision.

Treat individual frameworks as replaceable implementation details. The recurring signal is end-to-end ownership of reliable, evaluated systems that solve a real workflow.
