---
title: Safety & Compliance Workflow
sidebar_label: Safety & Compliance
---

# Safety & Compliance Workflow

This page describes how TrinovaQ Studio supports a compliant development process under **ISO 26262** (Functional Safety) and **ISO/SAE 21434** (Automotive Cybersecurity). It is intended for safety engineers, lead developers, and teams undergoing functional safety audits.

---

## Standards Alignment Summary

| Standard | Applicable Activity | TrinovaQ Studio Support |
|---|---|---|
| **MISRA C:2012** | C coding rules enforcement | Bundled static analyzer with MISRA ruleset |
| **ISO 26262 Part 6** | Software development process | Analysis, deviation tracking, build evidence |
| **ISO 26262 Part 8** | Tool confidence level (TCL) | Automatic build manifests with tool version and flags |
| **ISO/SAE 21434 Clause 9** | Cybersecurity analysis and design | TARA integration, risk-annotated analysis |
| **ISO/SAE 21434 Clause 10** | Supply chain management | SBOM export in SPDX 2.3 format |
| **ASPICE SWE.1–SWE.6** | Software engineering process | Deviation lifecycle, audit trail, traceability |

---

## ISO 26262 Compliance Workflow

### Step 1: Configure the Safety Policy

Before development begins, configure the project policy to reflect your team's agreed MISRA compliance scope:

1. Create or open `.trinovaq/policy.json`
2. Specify any rules that are disabled project-wide (these must be justified at the project level)
3. Specify any severity overrides

See [Policy Configuration](../configuration/policy) for the full format.

### Step 2: Develop with Continuous Analysis

During software development:

- Run static analysis regularly (`Ctrl+Enter` or `scan` in the terminal)
- Address violations as they arise — early resolution is cheaper than late-stage remediation
- Use the **Automotive Snippets** library to write patterns that are inherently MISRA-friendly

### Step 3: Document Every Deviation

For every MISRA violation that cannot be fixed:

1. Create a deviation record with a complete justification
2. Include in the justification:
   - The technical reason the violation cannot be avoided
   - The safety assessment (does this affect any safety goal?)
   - The compensating measure (e.g., unit test coverage, code review, restricted usage context)
3. Submit for review by a Safety Engineer

### Step 4: Safety Engineer Review

As a Safety Engineer:

1. Review all **Pending** deviations before each milestone
2. For each, evaluate:
   - Is the justification technically sound?
   - Has the safety impact been correctly assessed?
   - Are the compensating measures sufficient for the ASIL level?
3. Approve or reject with comments
4. Target: **zero Pending deviations** before a release

### Step 5: Generate Compliance Evidence

At each development milestone (code freeze, pre-release, release):

1. **Run a full project scan** — ensure no unresolved findings
2. **Generate the Security Audit Report** — review the Safety Score and issue summary
3. **Export the PDF** — archive as compliance evidence
4. **Export the SBOM** — store with release artifacts
5. **Export deviations as CSV** — include in the Software Development Folder

### Step 6: Release Gate Check

Before release sign-off, verify the following checklist:

```
☐ Safety Score meets the project threshold (e.g., ≥ 90%)
☐ No Pending deviations (all are Approved or Rejected)
☐ RAM usage within target hardware limit
☐ Flash usage within target hardware limit
☐ Compliance report PDF generated and archived
☐ SBOM JSON exported and archived
☐ Deviation CSV exported and archived
☐ Build manifest recorded (automatic)
☐ Audit log complete and accessible
```

---

## ISO/SAE 21434 Cybersecurity Workflow

### Step 1: Prepare and Import TARA

1. Complete the TARA process using your organization's TARA tool
2. Export threat data as CSV
3. Import into TrinovaQ Studio via the TARA panel

### Step 2: Cybersecurity-Aware Development

With TARA data imported:

- Source files linked to high-risk threats are visible in the TARA panel
- When reviewing code in these files, consult the associated threats and cybersecurity goals
- Prioritize fixing static analysis findings in files linked to Critical or High threats

### Step 3: Linking Threats to Deviations

If a MISRA deviation involves a file with associated TARA threats:

1. Note the threat IDs in the deviation's **Impact Assessment** field
2. The Safety Engineer reviewing the deviation should consider the cybersecurity context
3. Deviations in high-threat files may require additional mitigation measures

### Step 4: Generate SBOM for Supply Chain

1. At release, generate the SBOM (**Build → Export SBOM**)
2. The SPDX 2.3 JSON includes SHA-256 checksums for all source files
3. Store the SBOM in your configuration management system
4. Submit to supply chain partners as required by ISO/SAE 21434 Clause 10

---

## Tool Qualification Evidence (ISO 26262 Part 8)

TrinovaQ Studio produces evidence to support its use as a software development tool under ISO 26262 Part 8 (TCL — Tool Confidence Level):

| Evidence Type | How It Is Generated |
|---|---|
| **Compiler version** | Recorded automatically in each build manifest |
| **Compiler flags** | Recorded in each build manifest |
| **Tool version (Studio)** | Available via **Help → About** |
| **Analysis tool version** | Cppcheck version recorded in scan results |
| **Build output hash** | SHA-256 in build manifest |

These records collectively demonstrate that:
- The tool used is a known, controlled version
- The configuration is documented
- The build output is traceable to a specific tool invocation

---

## Audit Trail

TrinovaQ Studio maintains a complete **audit trail** of all compliance-relevant actions:

| Logged Action | Detail |
|---|---|
| User sign-in / sign-out | User identity, timestamp |
| Scan executed | File, scan type, timestamp |
| Deviation created | Rule, file, submitter, timestamp |
| Deviation approved/rejected | Reviewer identity, outcome, timestamp |
| Report generated | Project, scope, timestamp |
| Binary flashed | Target, COM port, binary hash, timestamp |

The audit log is append-only and is available for review by administrators. It satisfies ASPICE process evidence requirements.

---

## Role-Based Access for Safety Processes

TrinovaQ Studio enforces a role model aligned with functional safety process requirements:

| Role | Typical Personnel | Key Permissions |
|---|---|---|
| **Developer** | Software engineers | Write code, run scans, create deviations |
| **Safety Engineer** | Functional safety engineers | Approve/reject deviations, review reports |
| **Administrator** | Project lead, safety manager | Full access including user management and exports |
| **Viewer** | Auditors, managers | Read-only access to all data |

Role assignment is managed through the organization's TrinovaQ account administration.

---

## Related Pages

- [Embedded Development Workflow](embedded-development) — Day-to-day development workflow
- [Deviation Management](../features/deviation-management) — Full deviation lifecycle
- [TARA Integration](../features/tara-integration) — Cybersecurity threat integration
- [Reports & SBOM](../features/reports-and-sbom) — Compliance artifact generation
- [Policy Configuration](../configuration/policy) — Setting up MISRA rule policies
