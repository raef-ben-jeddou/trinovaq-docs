---
title: Embedded Development Workflow
sidebar_label: Embedded Development
---

# Embedded Development Workflow

This page describes the recommended end-to-end development workflow for automotive embedded software using TrinovaQ Studio. It covers the typical lifecycle from project setup through code delivery, with guidance tailored to ASIL D and similar safety-integrity-level contexts.

---

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────┐
│                  Development Lifecycle                      │
│                                                             │
│  1. Project Setup → 2. Code → 3. Analyze → 4. Review       │
│       ↓                                                     │
│  5. Compile → 6. Test on Hardware → 7. Document → 8. Ship  │
└─────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Project Setup

### Create the Project Structure

1. Create a project folder on your development machine
2. Open it in TrinovaQ Studio via **File → Open Folder**
3. Add your initial source files (`.c` / `.h` for C projects, `.rs` for Rust)

### Initialize Project Configuration

TrinovaQ Studio creates a `.trinovaq.json` file in the project root the first time you compile or configure the project. Edit this file to configure:

- Target hardware (`arduino_uno`, `stm32_f103`, or `esp32`)
- Language (`c` or `rust`)
- Custom toolchain paths (if not using bundled tools)
- Auto-save preferences

See [Project Management](../project-management/workspace) for the full configuration reference.

### Initialize Policy Configuration

Create a `.trinovaq/policy.json` file to define project-wide rule settings:

- Which MISRA rules are disabled (with documented justification)
- Severity overrides for specific rules

See [Policy Configuration](../configuration/policy) for details.

### Import TARA (if applicable)

If your project has a TARA (Threat Analysis and Risk Assessment) artifact:

1. Export a CSV from your TARA tool
2. Import it via the TARA panel
3. Confirm that all relevant source files are matched to threat entries

---

## Phase 2: Code Development

### Writing C Code

Follow these practices for MISRA-compliant C development:

- Use **fixed-width integer types** (`uint8_t`, `int32_t`) instead of `int`, `char`
- Use **explicit casts** when performing type conversions
- Initialize all variables at declaration
- Use the provided **automotive snippets** for common patterns (ISR handlers, CAN frames, state machines)
- Prefer static functions within compilation units
- Avoid dynamic memory allocation (`malloc`, `free`) in safety-critical paths

### Writing Rust Code

For Rust embedded development:

- Use `no_std` for bare-metal targets where appropriate
- Minimize `unsafe` blocks — each requires documented justification
- Avoid `.unwrap()` and `.expect()` in safety-critical code paths; use explicit error handling
- Prefer the `embedded-hal` abstraction layer for hardware interaction

### Using the Editor

- Use `Ctrl+S` frequently to save — auto-save is also available
- Use the **Automotive Snippets** library to accelerate writing common patterns
- Keep files focused: one module or driver per source file
- Add header guards to all `.h` files using the `header_guard` snippet

---

## Phase 3: Continuous Analysis

Run static analysis regularly throughout development — not just before release:

1. Press `Ctrl+Shift+I` after completing each logical section of code
2. Review findings in the **Problems** panel immediately
3. Fix genuine violations before continuing
4. For intentional exceptions, create a **Deviation record** with justification

### Analysis Cadence Recommendation

| Development Stage | Recommended Analysis Frequency |
|---|---|
| Active coding | After every save or every 15–30 minutes |
| Feature complete | Before every code review |
| Pre-release | Full project scan with zero unresolved findings (or all deviations approved) |

---

## Phase 4: Code Review

Before submitting code for review:

1. Run a full static analysis scan
2. Ensure all findings are either:
   - Fixed, or
   - Covered by an approved deviation
3. Generate a **Security Audit Report** (Build → Generate Report)
4. Share the PDF report with reviewers alongside the code

Reviewers with the **Safety Engineer** role can approve pending deviations directly in TrinovaQ Studio.

---

## Phase 5: Build and Hardware Testing

### Compile

1. Select the correct target hardware in the Dashboard
2. Press `Ctrl+B` to compile
3. Review RAM and Flash usage metrics — ensure both are within target limits
4. Address any compiler warnings that represent MISRA violations

### Flash and Test

1. Connect the target board via USB
2. Select the correct COM port and baud rate
3. Click **Flash** to deploy the firmware
4. Open the **Serial Monitor** to observe device output
5. Execute test procedures and document results

### Hardware Memory Limits

Always verify that the compiled binary stays within the target's hardware limits:

| Target | RAM Limit | Flash Limit |
|---|---|---|
| Arduino Uno | 2 KB | 32 KB |
| STM32 F103 | 20 KB | 128 KB |
| ESP32 | 512 KB | 4 MB |

---

## Phase 6: Documentation and Evidence

Before a release milestone, generate the required compliance artifacts:

### Compliance Report (PDF)

1. **Build → Generate Report**
2. **Export PDF**
3. Archive the PDF alongside the Safety Case or Software Development Plan

### SBOM Export

1. **Build → Export SBOM**
2. Save the `.json` file
3. Store in your configuration management system alongside the binary release

### Deviation Export

1. Open the Deviations view
2. **Export CSV**
3. Archive with release documentation

These three artifacts — the report PDF, SBOM, and deviation CSV — collectively provide the compliance evidence trail for an ISO 26262 software release.

---

## Phase 7: Release

At release:

- Verify all open deviations are in **Approved** state (no Pending deviations in the release build)
- Confirm the Safety Score meets your project's release threshold
- Confirm RAM and Flash usage are within hardware limits
- Archive the build manifest (stored automatically within the project database)
- Tag the source code in your version control system

---

## Typical Project Layout

A well-organized TrinovaQ Studio project typically looks like:

```
my_ecu_project/
├── .trinovaq.json         # Project configuration
├── .trinovaq/
│   └── policy.json        # Rule policy configuration
├── src/
│   ├── main.c             # Application entry point
│   ├── can_driver.c       # CAN bus driver
│   ├── can_driver.h
│   ├── sensor_read.c      # Sensor reading module
│   └── sensor_read.h
├── tara/
│   └── threats.csv        # TARA export for import
└── reports/               # Generated PDF reports (archived)
```

---

## Related Pages

- [Safety Compliance Workflow](safety-compliance) — Detailed ISO 26262 / ISO/SAE 21434 workflow
- [Static Analysis](../features/static-analysis) — Running and understanding scan results
- [Deviation Management](../features/deviation-management) — Managing MISRA exceptions
- [Reports & SBOM](../features/reports-and-sbom) — Generating compliance artifacts
- [Configuration](../configuration/settings) — Project and editor settings
