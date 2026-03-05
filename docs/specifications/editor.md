---
id: editor-specs
title: Editor & Language Support — Specifications
sidebar_label: Editor Specs
---

# Editor & Language Support — Specifications

This page contains the formal feature specifications for the TrinovaQ Studio code editor and language support subsystem. For usage instructions and examples, see [Code Editor](../features/code-editor).

---

## Overview

The editor provides an industry-standard code editing experience for C and Rust development, with extensions for automotive embedded software workflows. It supports automatic language detection, a curated snippet library, and seamless integration with the static analysis and build pipeline.

---

## Feature Specifications

| ID | Feature | Description |
|---|---|---|
| **TRQ-EDT-001** | **Automatic Language Detection** | The editor automatically identifies whether the active file is C or Rust, and applies the appropriate syntax highlighting, analysis, and compilation pathway. Detection is based on file extension and code content analysis. |
| **TRQ-EDT-002** | **Keyboard Shortcuts** | Core build and analysis actions are accessible via standard keyboard shortcuts: `F5` (Compile), `Ctrl+Enter` (Scan Quality), `Ctrl+S` (Save), `Ctrl+O` (Open), `Ctrl+Shift+P` (Command Palette). |
| **TRQ-EDT-003** | **Monaco Editor Integration** | The editor is built on a professional-grade editor engine, supporting syntax highlighting, code folding, bracket matching, find/replace, minimap, and IntelliSense-style auto-completion for C, C++, and JSON. |
| **TRQ-EDT-004** | **Multi-Tab Management** | Multiple source files can be open simultaneously as editor tabs. Each tab shows unsaved-change indicators. The editor warns before closing unsaved files. |
| **TRQ-EDT-005** | **Theming** | The editor applies the active application theme (dark or light), with consistent styling across all UI elements. |
| **TRQ-EDT-006** | **Auto-Save** | The editor can automatically save files after a configurable idle period, configurable per project. |

---

## Automotive Snippets Library

The editor includes a curated snippet library for automotive embedded development patterns. Snippets are accessed by typing the trigger word and pressing `Tab`.

| ID | Trigger | Generated Pattern | Purpose |
|---|---|---|---|
| **TRQ-SNP-001** | `header_guard` | `#ifndef` / `#define` / `#endif` block | Prevents recursive header inclusion |
| **TRQ-SNP-002** | `for_safe` | Bounds-checked `for` loop | Defensive loop with explicit guard condition |
| **TRQ-SNP-003** | `can_frame` | `CAN_Frame_t` struct | Standard CAN bus message structure |
| **TRQ-SNP-004** | `isr_handler` | Interrupt Service Routine with attribute annotation | ISR template with interrupt flag handling |
| **TRQ-SNP-005** | `debounce_switch` | State machine for button debouncing | Robust switch debounce implementation |
| **TRQ-SNP-006** | `circular_buffer` | `RingBuffer_t` struct | Safe ring buffer for UART/CAN streams |
| **TRQ-SNP-007** | `fixed_point_math` | `FP_MULT`, `FP_DIV` macros | Q15.16 fixed-point arithmetic for FPU-less MCUs |
| **TRQ-SNP-008** | `state_machine` | FSM enum and switch skeleton | Finite State Machine implementation template |

---

## Language Support Matrix

| Feature | C | Rust |
|---|---|---|
| Syntax highlighting | ✓ | ✓ |
| Auto-completion | ✓ | ✓ |
| Code folding | ✓ | ✓ |
| Static analysis | ✓ (MISRA C:2012) | ✓ (rustc diagnostics) |
| Compilation | ✓ (GCC) | ✓ (rustc) |
| Snippet library | ✓ | — |
| Automotive snippets | ✓ | — |

---

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| **TRQ-EDT-NF-001** | The editor must handle files up to 10,000 lines without degradation of responsiveness |
| **TRQ-EDT-NF-002** | Syntax highlighting must apply within 500 ms of file opening |
| **TRQ-EDT-NF-003** | The editor undo/redo stack must not be invalidated by applied code fixes |

---

## Related Pages

- [Code Editor](../features/code-editor) — User guide with examples
- [Static Analysis](../features/static-analysis) — Analysis integration with the editor
- [Automation & Productivity](../automation/productivity) — Auto-save and productivity features
