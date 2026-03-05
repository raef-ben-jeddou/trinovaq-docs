---
title: Best Practices
sidebar_label: Best Practices
---

# Best Practices

This page documents recommended practices for teams using TrinovaQ Studio in automotive embedded software development. Following these guidelines helps maintain compliance, reduce rework, and build reliable, auditable codebases.

---

## General Development Practices

### 1. Scan Early, Scan Often

Run static analysis (`Ctrl+Enter`) frequently — not just before a release:

- After completing each function or module
- Before every code review
- After merging or integrating changes from other team members

**Why:** Finding and fixing MISRA violations early is significantly less costly than doing so during a late-stage compliance review.

### 2. Address Issues Immediately

When a scan returns findings, address them in the same development session:

- Fix genuine violations before moving on to new code
- If a violation is intentional, create a deviation immediately with a complete justification
- Never accumulate a large backlog of unresolved findings

### 3. Keep the Safety Score Above 90%

Set a team threshold for the Safety Score (e.g., 90%) and treat a score below that threshold as a blocker for code review approval.

---

## MISRA C Coding Practices

### 4. Use Fixed-Width Integer Types

Always prefer explicit-width types over `int`, `long`, or `char` for data that has a known range or binary layout:

```c
/* Preferred */
uint8_t  sensor_value;
uint32_t timestamp_ms;
int16_t  temperature;

/* Avoid */
int   sensor_value;
long  timestamp_ms;
char  temperature;
```

### 5. Initialize All Variables at Declaration

```c
/* Correct */
uint32_t counter = 0U;
float    ratio   = 0.0F;

/* Incorrect — uninitialized */
uint32_t counter;
```

Uninitialized variables are flagged as Critical findings.

### 6. Use Explicit Casts

Never rely on implicit type conversions. Cast explicitly and document the intent:

```c
uint32_t address = (uint32_t)(&register_base);
int16_t  diff    = (int16_t)(a - b);
```

### 7. Avoid Dynamic Memory Allocation

In safety-critical embedded code, avoid `malloc`, `calloc`, `realloc`, and `free`:

- Use statically-allocated buffers and ring buffers (use the `circular_buffer` snippet)
- Pre-allocate all data structures at startup

### 8. Use the Automotive Snippets

Leverage the built-in snippet library for safe, pattern-consistent code:

- `for_safe` for loops with bounds checking
- `can_frame` for CAN bus message structures
- `isr_handler` for interrupt service routines
- `state_machine` for FSM implementations

---

## Project Organization Practices

### 9. Commit `.trinovaq.json` and Policy to Version Control

Both `.trinovaq.json` and `.trinovaq/policy.json` should be committed:

- This ensures all team members share the same project configuration
- Policy changes are tracked and auditable via git history
- CI/CD pipelines use the committed configuration automatically

### 10. Use a Consistent Folder Structure

For multi-module projects, keep a consistent structure:

```
project/
├── .trinovaq.json
├── .trinovaq/policy.json
├── src/
│   ├── <module>.c
│   └── <module>.h
├── inc/
│   └── types.h          # Shared type definitions
└── tara/
    └── threats.csv      # TARA import file
```

### 11. One Module per File Pair

Keep each source file focused on a single logical module or driver. One `.c` file paired with one `.h` file per module:

- Reduces merge conflicts
- Makes scan results easier to interpret
- Simplifies per-file TARA threat mapping

---

## Deviation Management Practices

### 12. Justify Precisely

A good deviation justification includes:

- **What** the violation is (rule ID and specific code)
- **Why** it cannot be avoided (the technical constraint)
- **Safety impact assessment** (does this affect any safety goal?)
- **Compensating measure** (e.g., test coverage, code review, restricted context)

**Weak (unacceptable):**
> "This is fine, it works in practice."

**Strong (acceptable):**
> "Rule 11.3 (pointer cast) is violated at line 47 of `can_driver.c` to access the memory-mapped peripheral register at its known physical address. This pattern is standard for bare-metal register access on STM32. The address and cast are verified against the reference manual. Test coverage: unit tests exercise all register access paths."

### 13. Zero Pending Deviations Before Release

Make it a release gate requirement that all deviations have been reviewed (Approved or Rejected). Pending deviations indicate an incomplete compliance review.

### 14. Minimize Deviations

Each deviation represents accepted risk. Keep the count as low as possible:

- Fix violations whenever feasible
- Use policy rules only for project-wide patterns, not individual cases
- Reject deviations that should be fixed instead

---

## Build and Compilation Practices

### 15. Verify Memory Metrics After Every Build

After compiling, confirm that RAM and Flash usage are within hardware limits. Approaching the limit is a risk indicator:

| Utilization | Action |
|---|---|
| < 70% | Normal — continue |
| 70–90% | Caution — monitor closely |
| > 90% | Warning — plan optimization |
| 100%+ | Build blocked — must reduce size |

### 16. Match Target Hardware to Actual Device

Always set the target hardware in `.trinovaq.json` to match the physical device you are programming. Incorrect target selection produces incorrect RAM/Flash metrics.

---

## Compliance Artifact Practices

### 17. Generate Reports at Every Milestone

Generate and archive a compliance PDF at:
- Every sprint/iteration boundary
- Every code review
- Every release candidate
- Final release

### 18. Maintain an SBOM for Every Release

Generate and archive a fresh SBOM at each release:
- The SBOM should reflect the final release source set
- Store it alongside the binary in your artifact repository
- Submit to supply chain partners as required

### 19. Import TARA Before Development Starts

Import your project's TARA data before any significant development work:
- Enables threat-aware code reviews from day one
- Ensures threat context is available when reviewing deviations

---

## Related Pages

- [Embedded Development Workflow](automotive-workflows/embedded-development) — End-to-end development process
- [Safety Compliance Workflow](automotive-workflows/safety-compliance) — ISO 26262 / ISO/SAE 21434 process
- [Deviation Management](features/deviation-management) — Deviation best practices in detail
- [Reports & SBOM](features/reports-and-sbom) — Artifact generation guidance
