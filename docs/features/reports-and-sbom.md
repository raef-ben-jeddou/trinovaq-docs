---
title: Reports & SBOM
sidebar_label: Reports & SBOM
---

# Reports & SBOM

TrinovaQ Studio generates compliance-grade documentation artifacts automatically. These include **security audit reports**, **PDF exports**, and **Software Bills of Materials (SBOM)** in the SPDX 2.3 format. These artifacts provide the evidence required for safety audits, tool qualification, and supply chain transparency under ISO 26262 and ISO/SAE 21434.

---

## Security Audit Report

The **Security Audit Report** is a comprehensive HTML document summarizing the safety and security posture of a project at the time of generation.

### Contents

| Section | Description |
|---|---|
| **Project Summary** | Project name, scan date, target hardware, language |
| **Safety Score** | Overall MISRA compliance percentage |
| **Issue Summary** | Total findings by severity (Error, Warning, Style, Information) |
| **Issues by Category** | Breakdown by risk category (Memory Safety, Concurrency, Hardware Safety, etc.) |
| **Deviation Summary** | Count and status of all deviations (Pending, Approved, Rejected) |
| **Risk Distribution** | Visual breakdown of findings by risk level |
| **Detailed Findings** | Per-finding entries with rule ID, file, line, description, and automotive risk |

### Generating a Report

1. Open your project and ensure a scan has been run recently
2. Select **Build → Generate Report** from the menu bar
3. The report is generated and opens automatically in the Report viewer
4. Review the report content within TrinovaQ Studio

---

## PDF Export

The audit report can be exported as a **PDF file** for distribution, storage in a document management system, or submission to auditors.

### How to Export

1. Generate the report (steps above)
2. In the Report viewer, click **Export PDF**
3. Choose a file name and save location in the dialog
4. The PDF is saved with full formatting, tables, and visual charts

The resulting PDF is suitable for:
- Inclusion in a Safety Case
- Functional Safety Audit evidence
- Internal team review

---

## Software Bill of Materials (SBOM)

A **Software Bill of Materials (SBOM)** is a machine-readable inventory of all software components in a project, including their versions, checksums, and relationships. TrinovaQ Studio exports SBOMs in the **SPDX 2.3 JSON** format — the industry standard used in automotive and industrial supply chain contexts.

### Why SBOM?

ISO/SAE 21434 (Clause 10) requires organizations to maintain software component transparency for the purposes of:

- Vulnerability management (tracking affected components when a CVE is published)
- Supply chain risk assessment
- Cybersecurity compliance documentation

### SBOM Contents

| Field | Description |
|---|---|
| **SPDX Version** | `SPDX-2.3` |
| **Document Name** | Project name |
| **Creation Date** | Timestamp of export |
| **Creator** | TrinovaQ Studio version |
| **Packages** | List of source files and their metadata |
| **File Checksums** | SHA-256 hash of each source file |
| **Relationships** | Build dependencies between files |

### Generating an SBOM

1. With your project open, select **Build → Export SBOM**
2. Choose a file name and save location
3. The SBOM is saved as a `.json` file in SPDX 2.3 format

The SBOM can be submitted to supply chain tools, vulnerability scanners, or stored alongside the Safety Case.

---

## Build Manifest

TrinovaQ Studio automatically records a **Build Manifest** for each successful compilation. Unlike the SBOM (which covers the software content), the Build Manifest captures **build process provenance**:

| Field | Description |
|---|---|
| **Compiler Version** | The exact GCC or rustc version used |
| **Compiler Flags** | The full set of flags passed to the compiler |
| **Source Files** | List of files compiled |
| **Build Timestamp** | When the build occurred |
| **Output Hash** | SHA-256 hash of the compiled binary |

### Purpose

The Build Manifest supports **Tool Confidence Level (TCL)** assessment under ISO 26262 Part 8. It provides evidence that the tool used to produce the binary was:

- A known, validated version
- Used with a consistent, documented configuration
- Traceable to a specific build event

Build manifests are stored within the project database and are accessible from the **Reports** view for export and review.

---

## Audit Trail

All significant actions in TrinovaQ Studio are logged to an **append-only audit log**. This log records:

| Event Type | Examples |
|---|---|
| **Safety events** | Deviation created, deviation approved, report generated |
| **Security events** | User sign-in, sign-out, unauthorized access attempt |
| **Tool events** | Scan run, compile started, binary flashed |

Each log entry includes:
- Timestamp
- User identity
- Action performed
- Outcome (success or failure)

The audit log is stored in a tamper-evident format and can be reviewed by administrators. It satisfies ASPICE and ISO 26262 process audit requirements.

---

## Best Practices

- **Generate reports at key milestones**: Before code reviews, at sprint boundaries, and before release
- **Archive reports with the Safety Case**: Store report PDFs alongside other safety artifacts
- **Generate SBOM before release**: Ensure the SBOM reflects the final released source set
- **Review deviation summary**: The report's deviation section quickly shows whether any unresolved deviations exist
- **Compare reports over time**: Trend the Safety Score across reports to track compliance improvement

---

## Related Pages

- [Static Analysis](static-analysis) — Provides the scan data used in reports
- [Deviation Management](deviation-management) — Deviation records summarized in reports
- [TARA Integration](tara-integration) — TARA traceability included in compliance reports
- [Safety Compliance Workflow](../automotive-workflows/safety-compliance) — Complete workflow including reporting
