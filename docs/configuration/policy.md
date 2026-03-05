---
title: Policy Configuration
sidebar_label: Policy Configuration
---

# Policy Configuration

TrinovaQ Studio supports **per-project rule policies** that let teams customize which MISRA C:2012 rules are enforced and at what severity level. This is useful for projects with documented, project-wide exceptions to specific rules — rather than creating individual deviations for each occurrence.

---

## What Is a Policy?

A **policy** is a project-level configuration that defines:

1. **Disabled rules** — MISRA rules that are turned off for the entire project
2. **Severity overrides** — Rules whose default severity (error, warning, etc.) is changed to a different level

Policies are designed to capture **project-wide architectural decisions** about MISRA compliance. They are not a substitute for individual deviation records, which document specific code-level exceptions.

:::caution
Disabling a MISRA rule in the policy affects the Safety Score and compliance posture for the entire project. Each disabled rule should have a corresponding entry in your project's Safety Plan or SW Development Plan, justifying the decision at a system level.
:::

---

## Policy File Location

The policy file is stored at:

```
<project_root>/.trinovaq/policy.json
```

This file is committed to version control alongside the source code.

---

## Policy File Format

```json
{
  "version": "1",
  "disabledRules": [
    "misra-c2012-17.7",
    "misra-c2012-19.1"
  ],
  "severityOverrides": {
    "misra-c2012-15.5": "warning",
    "misra-c2012-16.3": "information"
  }
}
```

### Fields

| Field | Type | Description |
|---|---|---|
| `version` | string | Policy schema version — always `"1"` |
| `disabledRules` | string[] | List of rule IDs to disable entirely |
| `severityOverrides` | object | Map of rule ID → new severity level |

### Rule ID Format

Rule IDs follow the pattern:

```
misra-c2012-<chapter>.<rule>
```

Examples:
- `misra-c2012-17.7` — MISRA C:2012 Rule 17.7 (return value of non-void functions)
- `misra-c2012-11.3` — MISRA C:2012 Rule 11.3 (cast between pointer types)
- `misra-c2012-15.5` — MISRA C:2012 Rule 15.5 (single return point)

### Severity Levels

| Level | Description |
|---|---|
| `error` | Treated as a build-blocking error |
| `warning` | Shown as a warning, does not block builds |
| `style` | Shown as a style suggestion |
| `information` | Informational only, lowest priority |

---

## Default Policy

If no `.trinovaq/policy.json` file exists, TrinovaQ Studio applies a default policy:

- All MISRA C:2012 rules are enabled at their standard severities
- No rules are disabled

The default policy represents the most conservative (strictest) compliance posture.

---

## Creating a Policy File

1. In your project root, create the directory `.trinovaq/` (if it does not exist)
2. Create a file named `policy.json` in that directory
3. Paste the JSON structure above and customize as needed
4. Save the file
5. On the next scan, the policy will be applied automatically

---

## Viewing Active Policy

The active policy for the current project can be viewed in **Settings → Policy**. This shows:

- The path to the active policy file
- The list of disabled rules
- The list of severity overrides

---

## Policy vs. Deviation

Understanding when to use a policy vs. a deviation:

| Scenario | Recommended Approach |
|---|---|
| A rule conflicts with a language pattern used project-wide | **Policy**: disable the rule (with project-level justification) |
| A specific line of code requires an exception | **Deviation**: document the individual case |
| A rule is too strict for a legacy codebase section | **Policy** with a scoped justification |
| An exception applies to one driver or module | **Deviation** per finding |

For compliance audits, both policy decisions and individual deviations must be documented. Policies are documented in the Safety Plan; deviations are in the deviation records and their exported CSV.

---

## Example: Common Policy Patterns

### Disabling the single-return-point rule

Some teams find MISRA C:2012 Rule 15.5 (a function should have a single point of exit) conflicts with guard-clause patterns:

```json
{
  "version": "1",
  "disabledRules": ["misra-c2012-15.5"],
  "severityOverrides": {}
}
```

This must be justified in the project's Software Development Plan.

### Downgrading advisory rules

Some advisory (not required) rules can be safely downgraded to informational to reduce noise:

```json
{
  "version": "1",
  "disabledRules": [],
  "severityOverrides": {
    "misra-c2012-15.5": "information",
    "misra-c2012-16.4": "information"
  }
}
```

---

## Related Pages

- [Static Analysis](../features/static-analysis) — How policies affect scan results
- [Deviation Management](../features/deviation-management) — Individual finding exceptions
- [Project Management](../project-management/workspace) — Project configuration files overview
- [Safety Compliance Workflow](../automotive-workflows/safety-compliance) — How policies fit into the compliance process
