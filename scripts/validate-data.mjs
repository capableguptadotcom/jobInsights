import { readFile } from "node:fs/promises";

const jobs = JSON.parse(await readFile(new URL("../data/jobs.json", import.meta.url), "utf8"));
const interviews = JSON.parse(await readFile(new URL("../data/interviews.json", import.meta.url), "utf8"));
const errors = [];
const ids = new Set();
const required = ["id","snapshotDate","market","location","company","title","roleFamily","skills","source","sourceUrl","sourceTier","applicationRoute","statusSignal","sponsorship","credibilityScore","confidence"];
const markets = new Set(["India","California"]);
const tiers = new Set(["A","B","C"]);
const sponsorStates = new Set(["not_applicable","h1b_explicit","h1b_transfer_only","visa_unspecified","conditional","explicit_no"]);

for (const [index, job] of jobs.entries()) {
  const label = `jobs[${index}] ${job.id || "(missing id)"}`;
  for (const field of required) if (job[field] === undefined || job[field] === "") errors.push(`${label}: missing ${field}`);
  if (ids.has(job.id)) errors.push(`${label}: duplicate id`); else ids.add(job.id);
  if (!markets.has(job.market)) errors.push(`${label}: invalid market ${job.market}`);
  if (!tiers.has(job.sourceTier)) errors.push(`${label}: invalid source tier ${job.sourceTier}`);
  if (!sponsorStates.has(job.sponsorship)) errors.push(`${label}: invalid sponsorship ${job.sponsorship}`);
  if (!Array.isArray(job.skills) || job.skills.length === 0) errors.push(`${label}: skills must be a non-empty array`);
  if (!Number.isInteger(job.credibilityScore) || job.credibilityScore < 0 || job.credibilityScore > 100) errors.push(`${label}: credibility score must be an integer from 0 to 100`);
  try { new URL(job.sourceUrl); } catch { errors.push(`${label}: sourceUrl is not an absolute URL`); }
  if (job.market === "California" && job.sponsorship !== "explicit_no" && job.sponsorship !== "not_applicable" && !job.sponsorshipEvidence) errors.push(`${label}: visa claim needs an evidence excerpt`);
}

for (const [index, story] of interviews.entries()) {
  const label = `interviews[${index}] ${story.id || "(missing id)"}`;
  for (const field of ["id","date","company","roleFamily","evidenceType","confidence","signal","topics","sourceUrl"]) if (!story[field]) errors.push(`${label}: missing ${field}`);
  try { new URL(story.sourceUrl); } catch { errors.push(`${label}: sourceUrl is not an absolute URL`); }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${jobs.length} job observations and ${interviews.length} interview observations.`);
}
