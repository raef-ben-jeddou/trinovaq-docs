---
id: editor-specs
title: Editor & Language Support
sidebar_label: Editor Specs
---

# Code Editing & Language Support

## Overview
The editor core is built on the Monaco Editor engine (VS Code), providing industry-standard performance, keybindings, and IntelliSense. It features a heuristic engine to auto-detect languages and a specialized snippet library for automotive use cases.

## Requirements Specification

| ID | Feature Name | Description | Implementation Detail |
| :--- | :--- | :--- | :--- |
| **TRQ-EDT-001** | **Hybrid Language Detection** | The system shall automatically detect the active language (`c` or `rust`) based on code content heuristics. | Scans first 500 chars for keywords: `#include`, `printf` (C) vs `fn main`, `println!` (Rust). |
| **TRQ-EDT-002** | **Keyboard Shortcuts** | Critical build and analysis actions must be accessible via standard shortcuts. | `F5`: Compile<br />Ctrl+Enter: Scan Quality<br />Ctrl+S: Save File<br />Ctrl+O: Open File. |
| **TRQ-EDT-003** | **Monaco Integration** | The editor shall support syntax highlighting, minimap (disabled by default), and auto-formatting. | Configured via `monaco-editor-webpack-plugin` for C, C++, and JSON. |

## Automotive Snippets Library
The editor includes `registerAutomotiveSnippets` which provides the following intelligent templates:

| Snippet Trigger | generated Code Structure | Purpose |
| :--- | :--- | :--- |
| `header_guard` | `#ifndef NAME_H ... #endif` | Prevents recursive inclusion loops. |
| `for_safe` | `for (i=0; i<SIZE; i++) { if (i>=SIZE) break; }` | Defensive loop with bounds checking. |
| `can_frame` | `typedef struct { id, dlc, data[8] }` | Standard CAN Bus message frame structure. |
| `isr_handler` | `void __attribute__((interrupt))` | Interrupt Service Routine template with flag clearing. |
| `debounce_switch` | `switch (state) { CASE IDLE... }` | State machine for robust button signal debouncing. |
| `circular_buffer` | `struct RingBuffer_t` | Safe ring buffer implementation for UART/CAN streams. |
| `fixed_point_math` | Macros: `FP_MULT`, `FP_DIV` | Q15.16 Fixed-Point math for FPU-less microcontrollers. |
| `state_machine` | `enum AppState_t`, `switch(current_state)` | Standard Finite State Machine (FSM) skeleton. |