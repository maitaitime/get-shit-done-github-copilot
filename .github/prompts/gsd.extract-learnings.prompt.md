---
name: gsd.extract-learnings
description: "Extract decisions, lessons, patterns, and surprises from completed phase artifacts"
argument-hint: "<phase-number>"
tools: ['edit', 'execute', 'read', 'search']
agent: agent
---

<!-- upstream-tools: ["Read","Write","Bash","Grep","Glob","Agent"] -->
<!-- omitted-tools: ["agent"] — no Copilot equivalent found -->

<objective>
Extract structured learnings from completed phase artifacts (PLAN.md, SUMMARY.md, VERIFICATION.md, UAT.md, STATE.md) into a LEARNINGS.md file that captures decisions, lessons learned, patterns discovered, and surprises encountered.
</objective>

<execution_context>
- Read file at: ./.claude/get-shit-done/workflows/extract_learnings.md
</execution_context>

Execute the extract-learnings workflow from @./.claude/get-shit-done/workflows/extract_learnings.md end-to-end.
