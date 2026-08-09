const htmlEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};

function $(selector) {
  return document.querySelector(selector);
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => htmlEntities[char]);
}

const capabilityRules = {
  "Software engineering": ["python","java","typescript","node.js","react","angular","spring","backend api","rest api","system design","full-stack"],
  "Data & retrieval": ["sql","rag","retrieval","ranking","embedding","vector","data pipeline","data quality","knowledge graph","postgresql","mongodb","cassandra"],
  "Model development": ["machine learning","pytorch","tensorflow","jax","deep learning","nlp","computer vision","speech","reinforcement learning","statistics","optimization"],
  "LLM application engineering": ["llm","generative ai","agentic ai","langgraph","langchain","llamaindex","prompt","multimodal"],
  "Evaluation & safety": ["evaluation","xai","statistical validation","responsible ai","monitoring","experiment tracking","error analysis"],
  "Serving & platform": ["kubernetes","docker","mlflow","kubeflow","triton","cuda","gpu","distributed","model serving","inference","observability","ci/cd","cloud","aws","gcp","azure"],
  "Product & domain delivery": ["customer delivery","product engineering","sre","analytics","supply chain","healthcare","banking","fintech","retail"]
};

const sponsorMeta = {
  h1b_explicit: ["H-1B explicit", "yes"],
  h1b_transfer_only: ["H-1B transfer only", "transfer"],
  visa_unspecified: ["Visa route unclear", "maybe"],
  conditional: ["Continuing / conditional", "conditional"],
  explicit_no: ["No sponsorship", "no"]
};

let jobs = [];
let interviews = [];

function experience(job) {
  if (job.experienceMin == null && job.experienceMax == null) return "Not stated";
  if (job.experienceMax == null) return `${job.experienceMin}+ yrs`;
  return `${job.experienceMin}–${job.experienceMax} yrs`;
}

function credibilityClass(score) {
  if (score >= 85) return "high";
  if (score >= 70) return "mid";
  return "low";
}

function renderStats() {
  const india = jobs.filter((job) => job.market === "India").length;
  const california = jobs.filter((job) => job.market === "California").length;
  const firstParty = jobs.filter((job) => job.sourceTier === "A").length;
  const h1b = jobs.filter((job) => job.sponsorship === "h1b_explicit").length;
  const values = [
    [jobs.length, "role observations"],
    [india, `India roles · ${california} California`],
    [`${Math.round(firstParty / jobs.length * 100)}%`, "first-party evidence"],
    [h1b, "roles explicitly naming H-1B"]
  ];
  $("#stats").innerHTML = values.map(([value, label]) => `<article class="stat"><strong>${value}</strong><span>${label}</span></article>`).join("");
  $("#footer-count").textContent = `${jobs.length} roles · ${interviews.length} interview observations · snapshot 2026-08-09`;
}

function renderCapabilities() {
  const rows = Object.entries(capabilityRules).map(([name, terms]) => {
    const count = jobs.filter((job) => job.skills.some((skill) => terms.some((term) => skill.toLowerCase().includes(term)))).length;
    return {name, count, pct: Math.round(count / jobs.length * 100)};
  }).sort((a, b) => b.count - a.count);
  $("#capabilities").innerHTML = rows.map((row) => `<div class="bar-row"><span class="bar-label">${row.name}</span><span class="bar-track"><span class="bar-fill" style="width:${row.pct}%"></span></span><span class="bar-value">${row.pct}%</span></div>`).join("");
  const counts = new Map();
  jobs.flatMap((job) => job.skills).forEach((skill) => counts.set(skill, (counts.get(skill) || 0) + 1));
  $("#skill-tags").innerHTML = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 24).map(([skill, count]) => `<span class="tag">${escapeHtml(skill)} <b>${count}</b></span>`).join("");
}

function renderJobs() {
  const market = $("#market-filter").value;
  const family = $("#family-filter").value;
  const tier = $("#tier-filter").value;
  const sponsor = $("#sponsor-filter").value;
  const query = $("#search-filter").value.trim().toLowerCase();
  const filtered = jobs.filter((job) => (!market || job.market === market) && (!family || job.roleFamily === family) && (!tier || job.sourceTier === tier) && (!sponsor || job.sponsorship === sponsor) && (!query || JSON.stringify(job).toLowerCase().includes(query)));
  $("#results-meta").textContent = `${filtered.length} of ${jobs.length} observations · sorted by evidence, credibility, then fit`;
  filtered.sort((a, b) => a.sourceTier.localeCompare(b.sourceTier) || b.credibilityScore - a.credibilityScore || a.company.localeCompare(b.company));
  $("#jobs-body").innerHTML = filtered.map((job) => `<tr>
    <td><a class="job-title" href="${escapeHtml(job.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(job.title)}</a><div class="company">${escapeHtml(job.company)}</div><div class="small">${escapeHtml(job.roleFamily)} · ${escapeHtml(job.source)}</div></td>
    <td>${escapeHtml(job.location)}<div class="small">${escapeHtml(job.workMode)}</div></td>
    <td>${experience(job)}</td>
    <td><div class="skills">${job.skills.slice(0,6).map((skill)=>`<span class="skill-chip">${escapeHtml(skill)}</span>`).join("")}</div><div class="small">${escapeHtml(job.problem)}</div></td>
    <td><span class="tier ${job.sourceTier}">${job.sourceTier}</span><div class="small">${escapeHtml(job.statusSignal)}</div></td>
    <td><span class="score ${credibilityClass(job.credibilityScore)}">${job.credibilityScore}</span><div class="small">${escapeHtml(job.confidence)}</div></td>
    <td>${escapeHtml(job.applicationRoute)}</td>
  </tr>`).join("") || `<tr><td colspan="7">No observations match these filters.</td></tr>`;
}

function renderVisa() {
  const rows = jobs.filter((job) => job.market === "California" && sponsorMeta[job.sponsorship]).sort((a, b) => b.credibilityScore - a.credibilityScore);
  $("#visa-grid").innerHTML = rows.map((job) => {
    const [label, kind] = sponsorMeta[job.sponsorship];
    const evidence = job.sponsorshipEvidence || "No evidence excerpt recorded";
    return `<article class="visa-card"><span class="pill ${kind}">${label}</span><h3><a href="${escapeHtml(job.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(job.company)} · ${escapeHtml(job.title)}</a></h3><div class="small">${escapeHtml(job.location)} · ${experience(job)}</div><p class="evidence">${escapeHtml(evidence)}</p><div class="small">${escapeHtml(job.applicationRoute)}</div></article>`;
  }).join("");
}

function renderInterviews() {
  $("#interview-stories").innerHTML = interviews.map((story) => `<article class="story"><div class="story-top"><span>${escapeHtml(story.company)} · ${escapeHtml(story.date)}</span><span>${escapeHtml(story.confidence)} confidence</span></div><p>${escapeHtml(story.signal)}</p><a href="${escapeHtml(story.sourceUrl)}" target="_blank" rel="noreferrer">Open account ↗</a></article>`).join("");
}

async function boot() {
  try {
    [jobs, interviews] = await Promise.all([
      fetch("data/jobs.json").then((response) => response.json()),
      fetch("data/interviews.json").then((response) => response.json())
    ]);
    const families = [...new Set(jobs.map((job) => job.roleFamily))].sort();
    $("#family-filter").insertAdjacentHTML("beforeend", families.map((family) => `<option>${escapeHtml(family)}</option>`).join(""));
    renderStats();
    renderCapabilities();
    renderJobs();
    renderVisa();
    renderInterviews();
    $("#filters").addEventListener("input", renderJobs);
  } catch (error) {
    $("#stats").innerHTML = `<p class="error">The dataset could not be loaded. Serve the repository through a local web server instead of opening index.html directly.</p>`;
    console.error(error);
  }
}

boot();
