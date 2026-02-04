---
id: safety-specs
title: Safety & Static Analysis
sidebar_label: Safety Analysis
---

# Safety & Static Analysis (The "Error Doctor")

## Overview
TrinovaQ Studio integrates real-time safety analysis directly into the development loop. It uses `cppcheck` for C and `rustc` analysis for Rust, visualized via a dashboard and the "Error Doctor" panel.

## Requirements Specification

| ID | Feature Name | Description | Analysis Engine |
| :--- | :--- | :--- | :--- |
| **TRQ-SAF-001** | **MISRA Safety Score** | Calculates a safety percentage based on static analysis issues found. Formula: `max(100 - (issues * 5), 0)`. | `cppcheck` with flags: `--enable=all --force --suppress=missingIncludeSystem`. |
| **TRQ-SAF-002** | **RAM Usage Estimation** | Heuristic estimation of stack memory usage. | Regex parsing for `int`, `char`, `double`, `uintXX_t` array declarations (e.g., `buffer[10]`). |
| **TRQ-SAF-003** | **Complexity Gauge** | Estimates Cyclomatic Complexity by counting branching keywords. | Counts: `if`, `for`, `while`, `case`, `catch`, `match`, `loop`. |
| **TRQ-SAF-004** | **Rust Panic Risk** | Detects potential runtime panics in Rust code. | Scans for `.unwrap()` and `.expect()` calls. |
| **TRQ-SAF-005** | **Rust Unsafe Detection** | Identifies memory-unsafe blocks that bypass the borrow checker. | Scans for `unsafe { ... }` blocks. |

## The Error Doctor Database
The tool maps raw compiler errors to human-readable "Automotive Risks".

| Detected Error Keyword | Explanation | Automotive Risk | Suggested Fix |
| :--- | :--- | :--- | :--- |
| `uninitialized` | Variable read before assignment. | **Critical:** Can cause unpredictable ECU behavior or sudden crashes. | `int x = 0;` |
| `buffer overflow` | Writing past array bounds. | **Vulnerability:** Attackers can inject code or crash the system. | Check loop indices against array size. |
| `unsafe` | Rust unsafe block usage. | **Memory Corruption:** Risk of segmentation faults. | Document safety invariants. |
| `implicit declaration` | Function called without prototype. | **Runtime Risk:** Dangerous assumptions about return types. | `#include` headers or define prototypes. |