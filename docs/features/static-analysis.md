---
title: Static Analysis
sidebar_label: Static Analysis
---

# Static Analysis

TrinovaQ Studio provides integrated static code analysis as a first-class development feature. For C projects, it enforces **MISRA C:2012** coding rules using the bundled **cppcheck** analyzer. For Rust projects, it leverages the Rust compiler's built-in safety diagnostics. All findings are presented in a unified **Problems** panel with direct navigation to the source location.

---

## Running a Scan

There are three ways to trigger a static analysis scan:

| Method | Action |
|---|---|
| **Keyboard shortcut** | Press `Ctrl+Enter` |
| **Menu** | **Build → Scan Quality** |
| **Terminal** | Type `scan` in the integrated terminal |

Analysis runs in the background. A progress indicator appears during the scan. When complete, results appear in the **Problems** panel at the bottom of the screen.

:::note
Only one scan can run at a time. If a scan is already in progress, subsequent requests are queued until the current scan completes.
:::

---

## Analysis for C Projects (MISRA C:2012)

For C files, TrinovaQ Studio applies the **MISRA C:2012** ruleset — the industry standard for safety-critical C code used in automotive, aerospace, and industrial applications.

### What is MISRA C:2012?

MISRA C (Motor Industry Software Reliability Association) defines a restricted subset of the C language designed to:

- Eliminate undefined and implementation-defined behavior
- Prevent common sources of runtime errors
- Improve code portability and readability
- Support systematic safety analysis

MISRA C:2012 contains 143 rules and 16 directives, classified as **Mandatory**, **Required**, and **Advisory**.

### Risk Categories

Findings from static analysis are categorized by the type of risk they represent:

| Category | Description | Typical Examples |
|---|---|---|
| **Memory Safety** | Risks of buffer overflows, use-after-free, or memory leaks | Writing past array bounds, uninitialized variables |
| **Concurrency** | Potential race conditions or deadlock patterns | Shared variable access without synchronization |
| **Hardware Safety** | Issues affecting interrupt handling or stack integrity | Excessive interrupt latency, stack overflow risk |
| **MISRA Compliance** | Violations of specific MISRA C:2012 rules | Implicit type conversions, unreachable code |
| **Undefined Behavior** | Code with undefined semantics per the C standard | Signed overflow, null pointer dereference |
| **Style** | Code quality and readability issues | Missing braces, inconsistent naming |

### Understanding a Finding

Each finding in the Problems panel contains:

- **Severity**: Error, Warning, Style, or Information
- **Rule ID**: The specific MISRA rule number (e.g., `MISRA C 2012 Rule 15.5`)
- **File and Line**: Clickable link to jump directly to the issue in the editor
- **Description**: A plain-language explanation of the violation
- **Risk Guidance**: The automotive risk associated with this type of issue
- **Suggested Fix**: A recommended correction approach

---

## Analysis for Rust Projects

For Rust files, the analysis focuses on Rust-specific safety patterns:

| Check | Description |
|---|---|
| **Panic Risk** | Detects `.unwrap()` and `.expect()` calls that can cause runtime panics |
| **Unsafe Blocks** | Identifies `unsafe { }` blocks that bypass the Rust borrow checker |
| **Compiler Diagnostics** | Full rustc diagnostic output including type errors and lifetime violations |

---

## Safety Score

After each scan, the **Safety Score** is updated in the Dashboard. This score provides a quick, top-level view of the project's MISRA compliance posture:

```
Safety Score = max(100 - (issue_count × 5), 0)
```

| Score | Interpretation |
|---|---|
| **90–100** | Excellent — minimal issues |
| **70–89** | Good — minor issues to review |
| **50–69** | Moderate — significant issues to address |
| **Below 50** | Critical — major compliance work required |

The score is advisory only. It is not a substitute for a formal MISRA compliance audit.

---

## The "Error Doctor" — Automotive Risk Mapping

TrinovaQ Studio maps static analysis findings to concrete automotive risks, helping developers understand the real-world implications of each issue. This mapping is presented directly alongside each finding.

| Detected Issue | Automotive Risk | Recommended Action |
|---|---|---|
| Uninitialized variable | **Critical**: Unpredictable ECU behavior or sudden reset | Initialize all variables at declaration |
| Buffer overflow | **Vulnerability**: Potential code injection or system crash | Validate all array indices against bounds |
| Implicit function declaration | **Runtime Risk**: Dangerous return type assumptions | Add the appropriate `#include` or prototype |
| `unsafe` block (Rust) | **Memory Corruption**: Bypasses borrow checker safety | Document safety invariants in comments |
| Banned function usage (e.g., `gets`, `strcpy`) | **Security**: Risk of buffer overrun | Replace with safe alternatives (`fgets`, `strncpy`) |

---

## Metrics Dashboard

In addition to per-finding analysis, the Dashboard shows real-time metrics derived from the scan:

### RAM Usage Estimate

An estimate of stack memory consumption based on variable declarations found in the code. This is compared against the target hardware's RAM limit.

### Cyclomatic Complexity

An estimate of code complexity based on the number of branching constructs (`if`, `for`, `while`, `switch`, `case`). Higher complexity correlates with higher test burden and fault risk.

| Complexity Range | Meaning |
|---|---|
| 1–10 | Simple, low risk |
| 11–20 | Moderate complexity |
| 21–50 | High complexity — consider refactoring |
| 50+ | Very high — strong refactoring recommendation |

---

## Managing Findings

### Navigating to Issues

Click any finding in the Problems panel to jump directly to the relevant line in the editor.

### Creating a Deviation

If a MISRA violation is intentional and justified, you can document it as a formal **deviation**:

1. Right-click (or select) the finding in the Problems panel
2. Click **Create Deviation**
3. Fill in the justification, rationale, and risk acceptance details
4. Submit for review by a safety engineer

Deviations are tracked in the project's deviation database. See [Deviation Management](deviation-management) for full details.

### Applying a Code Fix

For some common violations, TrinovaQ Studio can suggest a corrective code change:

1. Select a finding in the Problems panel
2. Click **Show Fix** if available
3. Review the suggested change in the diff view
4. Click **Apply Fix** to accept the change

Applied fixes preserve the editor's undo/redo history.

---

## Policy: Customizing Analysis Rules

The rules enforced during a scan can be customized per project using a **policy file**. This allows teams to:

- Disable rules that conflict with an approved project-wide deviation
- Override the severity of specific rules

See [Policy Configuration](../configuration/policy) for details on setting up a project policy.
