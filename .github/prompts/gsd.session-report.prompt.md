---
name: gsd.session-report
description: "Generate a session report with token usage estimates, work summary, and outcomes"
tools: ['edit', 'execute', 'read']
agent: agent
---

<!-- upstream-tools: ["Read","Bash","Write"] -->

<objective>
Generate a structured SESSION_REPORT.md document capturing session outcomes, work performed, and estimated resource usage. Provides a shareable artifact for post-session review.
</objective>

<execution_context>
- Read file at: ./.claude/get-shit-done/workflows/session-report.md
</execution_context>

<process>
Execute the session-report workflow from @./.claude/get-shit-done/workflows/session-report.md end-to-end.
</process>
