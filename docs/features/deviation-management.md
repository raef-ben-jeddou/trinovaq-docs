---
title: Deviation Management
sidebar_label: Deviation Management
---

# Deviation Management

In safety-critical software development, it is sometimes necessary to deviate from a coding standard rule with documented justification. TrinovaQ Studio provides a structured **Deviation Management** workflow that allows teams to formally document, review, approve, and audit MISRA C:2012 rule exceptions in compliance with ISO 26262 process requirements.

---

## What Is a Deviation?

A **deviation** (also called a waiver or exception) is a formal record documenting why a specific MISRA rule violation in the code is:

1. **Known** — the team is aware of the violation
2. **Intentional** — the violation is not an oversight
3. **Justified** — there is a documented technical or safety rationale
4. **Risk-accepted** — the residual risk has been formally acknowledged

Without a deviation record, a MISRA finding is treated as an unresolved compliance issue. With an approved deviation, the finding is acknowledged and excluded from compliance calculations.

---

## Deviation Lifecycle

```
┌─────────────┐   Submit    ┌─────────────┐
│   Finding   │ ─────────► │   Pending   │
│ (from scan) │            │   Review    │
└─────────────┘            └──────┬──────┘
                                  │
                   ┌──────────────┼──────────────┐
                   ▼              ▼              ▼
              ┌─────────┐   ┌──────────┐  (Escalate)
              │Approved │   │ Rejected │
              └─────────┘   └──────────┘
```

| Status | Description |
|---|---|
| **Pending** | Deviation submitted, awaiting review |
| **Approved** | Safety engineer or admin has approved the deviation |
| **Rejected** | Deviation was reviewed and rejected; violation must be fixed |

---

## User Roles

Deviation management enforces role-based access control:

| Role | Permissions |
|---|---|
| **Developer** | Create deviation requests |
| **Safety Engineer** | Review and approve or reject deviations |
| **Administrator** | All permissions, including bulk management and export |
| **Viewer** | Read-only access to deviation records |

---

## Creating a Deviation

### From the Problems Panel

1. Run a static analysis scan (`Ctrl+Enter`)
2. In the **Problems** panel, locate the finding you want to document
3. Right-click the finding and select **Create Deviation**, or click the **Deviation** button next to the finding
4. The **Deviation Dialog** opens

### Filling In the Deviation Record

| Field | Description |
|---|---|
| **Rule ID** | Automatically populated from the finding (e.g., `MISRA C 2012 Rule 11.3`) |
| **File** | The source file containing the violation |
| **Line** | The line number of the violation |
| **Justification** | Your technical rationale for accepting this violation |
| **Impact Assessment** | The safety impact of the violation, and why it is acceptable |
| **Mitigation** | Any compensating measures in place (e.g., code review, testing) |

Click **Submit** to create the deviation with **Pending** status.

---

## Reviewing and Approving Deviations

Users with the **Safety Engineer** or **Administrator** role can review pending deviations:

1. Open the **Deviations** view (accessible from the bottom panel or main menu)
2. Select a deviation with **Pending** status
3. Review the justification, impact, and mitigation details
4. Click **Approve** or **Reject**
5. Optionally add reviewer comments

Approved deviations are associated with your account identity and timestamp for audit purposes.

---

## Viewing All Deviations

The Deviations view lists all deviation records for the current project:

| Column | Description |
|---|---|
| **ID** | Unique deviation record identifier |
| **Rule** | MISRA rule or finding type |
| **File** | Source file |
| **Status** | Pending / Approved / Rejected |
| **Submitted By** | Developer who created the record |
| **Approved By** | Reviewer who approved (if applicable) |
| **Date** | Submission date |

---

## Exporting Deviations for Audit

Deviation records can be exported as a **CSV file** for use in compliance audits, tool qualifications, or external reporting:

1. Open the Deviations view
2. Click **Export CSV**
3. Choose a save location
4. The exported file contains all deviation records with their full audit fields

This export satisfies ISO 26262 and ASPICE requirements for documented deviation management evidence.

---

## Deviation Effect on Safety Score

Approved deviations affect the Safety Score displayed in the Dashboard:

- **Unapproved violations** count against the Safety Score
- **Approved deviations** are excluded from the Score calculation (they are documented and accepted)
- **Rejected deviations** remain counted until the underlying violation is fixed

---

## Best Practices

- **Justify precisely**: Vague justifications ("it works") are not acceptable. State the specific technical reason.
- **Keep deviations minimal**: Aim for the fewest possible deviations. Each one represents accepted risk.
- **Review promptly**: Long-pending deviations block accurate compliance reporting.
- **Update when code changes**: If the code around a deviation changes significantly, re-evaluate the justification.
- **Link to requirements**: Reference the system requirement or safety goal that necessitates the exception.

---

## Related Pages

- [Static Analysis](static-analysis) — Run scans that produce findings for deviation management
- [Reports & SBOM](reports-and-sbom) — Include deviation summary in compliance reports
- [TARA Integration](tara-integration) — Link cybersecurity threats to deviation context
- [Policy Configuration](../configuration/policy) — Suppress rules project-wide instead of per-finding
