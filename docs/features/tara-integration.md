---
title: TARA Integration
sidebar_label: TARA Integration
---

# TARA Integration

TrinovaQ Studio supports integration with **Threat Analysis and Risk Assessment (TARA)** artifacts as defined in **ISO/SAE 21434** — the international standard for automotive cybersecurity engineering. This feature enables development teams to link cybersecurity threat data directly to their source files, making it possible to perform risk-aware development with full traceability between threats and code.

---

## What Is TARA?

A **TARA** (Threat Analysis and Risk Assessment) is a structured process for identifying cybersecurity threats to a system, assessing the potential impact, and determining risk acceptance or mitigation strategies.

In the context of TrinovaQ Studio, TARA data is used to:

- **Annotate source files** with the cybersecurity threats that apply to them
- **Provide threat context** during code review and analysis
- **Support deviation justifications** by linking compliance exceptions to identified threats
- **Produce traceability evidence** for ISO/SAE 21434 compliance audits

---

## Preparing a TARA CSV File

TrinovaQ Studio imports TARA data from a **CSV file** exported from your TARA tool (e.g., from a spreadsheet or a dedicated TARA tool like PREEvision, YAKINDU, or a custom template).

### CSV Format and Column Mapping

Your CSV file can use any column names. When importing, TrinovaQ Studio presents a **column mapping UI** where you specify which column in your CSV corresponds to each of the following fields:

| Field | Description | Example Value |
|---|---|---|
| **File** | Source file path (relative to project root) | `src/can_driver.c` |
| **Threat ID** | Unique identifier for the threat | `THR-CAN-001` |
| **Threat Name** | Short name of the threat | `CAN Bus Injection` |
| **Attack Vector** | How the threat is realized | `Physical, adjacent network` |
| **Impact** | Potential impact category | `Safety, Privacy` |
| **Likelihood** | Likelihood of exploitation | `High, Medium, Low` |
| **Risk Level** | Assessed risk level | `Critical, High, Medium, Low` |
| **Cybersecurity Goal** | Associated cybersecurity goal | `Prevent unauthorized CAN frame injection` |

This flexible mapping means you can import TARA exports from any tool without reformatting your spreadsheet — simply map your existing column headers to the fields above during import.

---

## Importing a TARA File

1. Open the **TARA** panel (accessible from the main menu or the sidebar)
2. Click **Import TARA CSV**
3. Browse to your prepared CSV file and click **Open**
4. TrinovaQ Studio parses the file and maps each threat entry to the referenced source file

After import, a summary shows:
- Number of threat entries imported
- Number of source files matched
- Any rows that could not be matched (file not found in project)

---

## Viewing Threat Context

Once TARA data is imported, you can view threats associated with any source file:

### From the TARA Panel

1. Open the **TARA** panel
2. Browse the list of imported threats
3. Select a threat to see its full details: threat ID, attack vector, impact, likelihood, risk level, and cybersecurity goal
4. Click the associated file link to open the file in the editor

### During Code Review

When reviewing a source file, open the **TARA** panel and filter by file name to see all threats associated with that file. This gives you the cybersecurity context needed to assess whether code changes introduce new risk.

---

## Clearing TARA Data

To replace the current TARA dataset with a new import:

1. Open the **TARA** panel
2. Click **Clear TARA Data**
3. Confirm the action
4. Proceed with a new **Import TARA CSV**

Clearing TARA data does not affect deviations or scan results. It only removes the imported threat context records.

---

## TARA and Deviation Management

TARA integration adds cybersecurity context to the deviation management workflow:

- When creating a deviation, the TARA panel shows any threats linked to the file containing the violation
- This allows safety engineers to reference specific cybersecurity goals when assessing whether a deviation is acceptable
- Approved deviations can include a reference to associated threat IDs for full traceability

---

## TARA and Compliance Reports

When generating a compliance report (see [Reports & SBOM](reports-and-sbom)), imported TARA data is included as a traceability section, listing:

- All imported threats
- File-to-threat mappings
- Risk levels and cybersecurity goals

This supports ISO/SAE 21434 evidence requirements for cybersecurity development artifact traceability.

---

## Best Practices

- **Import TARA early**: Import your TARA data at the start of the development phase so threat context is available throughout coding and analysis
- **Keep TARA current**: Re-import whenever your TARA is updated — cybersecurity threats evolve as system design changes
- **Link all high-risk files**: Ensure every source file that implements a cybersecurity goal has corresponding TARA entries
- **Use TARA in deviation reviews**: Require reviewers to check TARA context before approving any deviation in safety- or security-critical files
- **Traceability matrix**: Use the report export to maintain a traceability matrix from threats to source files to deviations

---

## Related Pages

- [Deviation Management](deviation-management) — Link threat context to deviation records
- [Reports & SBOM](reports-and-sbom) — Include TARA traceability in compliance reports
- [Static Analysis](static-analysis) — Scan files associated with cybersecurity goals
- [Safety Compliance Workflow](../automotive-workflows/safety-compliance) — End-to-end ISO 26262 / ISO/SAE 21434 workflow
