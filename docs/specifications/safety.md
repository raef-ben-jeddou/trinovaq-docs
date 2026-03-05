---
id: safety-specs
title: Safety & Static Analysis — Specifications
sidebar_label: Safety Analysis
---

# Safety & Static Analysis — Specifications

This page contains the formal feature specifications for the TrinovaQ Studio safety analysis subsystem (the "Error Doctor"). For usage instructions, see [Static Analysis](../features/static-analysis).

---

## Overview

TrinovaQ Studio integrates static code analysis directly into the development loop. For C projects, analysis is performed using the bundled **cppcheck** tool with the MISRA C:2012 addon. For Rust projects, the Rust compiler's diagnostic system is used. All findings are presented in a unified Problems panel with direct source navigation and automotive risk mapping.

---

## Analysis Feature Specifications

| ID | Feature | Description | Analysis Engine |
|---|---|---|---|
| **TRQ-SAF-001** | **MISRA Safety Score** | A compliance percentage calculated from the number of static analysis findings. Decrements by 5 points per finding; minimum value is 0. | cppcheck with MISRA C:2012 addon |
| **TRQ-SAF-002** | **RAM Usage Estimation** | Heuristic estimate of stack memory usage based on variable declarations found in source code. Used for dashboard visualization against target hardware limits. | Source-level variable declaration analysis |
| **TRQ-SAF-003** | **Cyclomatic Complexity Estimate** | An estimate of code complexity based on the count of branching constructs: `if`, `for`, `while`, `case`, `catch`, `match`, `loop`. | Source-level keyword analysis |
| **TRQ-SAF-004** | **Rust Panic Risk Detection** | Identifies Rust code patterns that can cause unhandled runtime panics. | Detection of `.unwrap()` and `.expect()` call patterns |
| **TRQ-SAF-005** | **Rust Unsafe Block Detection** | Identifies `unsafe { }` blocks that bypass Rust's memory safety guarantees. | Detection of `unsafe` keyword blocks |

---

## Risk Classification

All static analysis findings are classified into automotive risk categories:

| Category | Description |
|---|---|
| **MEMORY_SAFETY** | Buffer overflows, uninitialized access, use-after-free patterns |
| **CONCURRENCY** | Race conditions and shared-data access hazards |
| **HARDWARE_SAFETY** | Interrupt latency and stack overflow risks |
| **MISRA_COMPLIANCE** | Violations of specific MISRA C:2012 rules |
| **UNDEFINED_BEHAVIOR** | Code with undefined semantics per the C standard |
| **CRYPTOGRAPHIC_INTEGRITY** | Cryptographic usage issues |
| **STYLE** | Code quality and readability issues |

---

## Error Doctor — Automotive Risk Mapping

| Detected Issue | Automotive Risk | Recommended Action |
|---|---|---|
| Uninitialized variable | **Critical** — Unpredictable ECU behavior or sudden reset | Initialize all variables at declaration |
| Buffer overflow | **Vulnerability** — Potential code injection or system crash | Validate all array indices against size bounds |
| Unsafe block (Rust) | **Memory Corruption** — Bypasses borrow checker safety guarantees | Document safety invariants; minimize unsafe blocks |
| Implicit function declaration | **Runtime Risk** — Dangerous assumptions about return types | Add `#include` headers or explicit function prototypes |
| Banned function usage | **Security** — Risk of buffer overrun | Replace with safe standard library alternatives |

---

## Safety Score Formula

```
Safety Score = max(100 - (finding_count × 5), 0)
```

| Score Range | Compliance Level |
|---|---|
| 90–100 | Excellent |
| 70–89 | Good |
| 50–69 | Moderate |
| 0–49 | Critical |

---

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| **TRQ-SAF-NF-001** | Analysis must complete within 120 seconds for files up to 5,000 lines |
| **TRQ-SAF-NF-002** | Only one scan can execute concurrently per project |
| **TRQ-SAF-NF-003** | Memory consumption during analysis must not exceed 500 MB |
| **TRQ-SAF-NF-004** | Scan results must include file path, line number, rule ID, severity, and description |

---

## Standards Compliance

| Standard | Applicability |
|---|---|
| **MISRA C:2012** | Ruleset enforced by bundled cppcheck + MISRA addon |
| **ISO 26262 Part 6** | Analysis satisfies software unit verification activity evidence |
| **ISO 26262 Part 8** | Tool qualification evidence available via build manifests |

---

## Related Pages

- [Static Analysis](../features/static-analysis) — User guide with workflow and examples
- [Deviation Management](../features/deviation-management) — Managing exceptions to analysis findings
- [Safety Compliance Workflow](../automotive-workflows/safety-compliance) — ISO 26262 process integration
