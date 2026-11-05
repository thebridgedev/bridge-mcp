// Rewrites the README's tool list from the live server card, so the count and the list
// never go stale when the server gains a tool. Groups come from tool-groups.json; a tool
// not in any group lands under "More" until someone files it.
import { readFileSync, writeFileSync } from "node:fs";

const CARD = "https://api.thebridge.dev/.well-known/mcp/server-card.json";
const card = await (await fetch(CARD)).json();
const tools = card.tools ?? [];
if (tools.length < 10) throw new Error(`server card has only ${tools.length} tools; not touching the README`);

const live = new Map(tools.map((t) => [t.name, t]));
const groups = JSON.parse(readFileSync(new URL("./tool-groups.json", import.meta.url)));
const placed = new Set();
const fmt = (n) => "`" + n + "`" + (live.get(n)?.annotations?.destructiveHint ? "*" : "");
const lines = [];
for (const g of groups) {
  const names = g.tools.filter((n) => live.has(n));
  names.forEach((n) => placed.add(n));
  if (names.length) lines.push(`**${g.name}** (${names.length}): ${names.map(fmt).join(", ")}`);
}
const rest = [...live.keys()].filter((n) => !placed.has(n)).sort();
if (rest.length) lines.push(`**More** (${rest.length}): ${rest.map(fmt).join(", ")}`);

const section = [
  `## Tools (${tools.length})`,
  "",
  "Every tool is labeled read-only or destructive. Deletes (marked *) are off on browser-approved connections and need a typed confirmation when granted.",
  "",
  lines.join("\n\n"),
].join("\n");

const readme = readFileSync("README.md", "utf8");
const re = /(<!-- tools:start[^>]*-->\n)[\s\S]*?(\n<!-- tools:end -->)/;
if (!re.test(readme)) throw new Error("tools markers missing in README.md");
const next = readme.replace(re, `$1${section}$2`);
if (next !== readme) writeFileSync("README.md", next);
console.log(`${tools.length} tools${rest.length ? `, ungrouped: ${rest.join(", ")}` : ""}${next === readme ? ", README unchanged" : ", README updated"}`);
