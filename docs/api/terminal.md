---
id: terminal-cmds
title: Terminal Command Reference
sidebar_label: Terminal API
---

# Terminal Command Reference

TrinovaQ Studio includes an integrated terminal available in the **Terminal** tab of the bottom panel. The terminal supports both client-side commands (processed locally by the IDE) and action commands that trigger the build and analysis pipeline.

---

## Accessing the Terminal

1. Click the **Terminal** tab in the bottom panel
2. Click in the terminal input area and begin typing
3. Press `Enter` to execute a command

---

## Action Commands

These commands trigger core IDE workflows:

| Command | Description |
|---|---|
| `scan` | Runs static analysis (MISRA/Rust quality scan) on the active file. Equivalent to pressing `Ctrl+Enter`. |
| `compile` | Compiles the active file for the selected target hardware. Equivalent to pressing `F5`. |
| `flash` | Initiates the flash deployment workflow for the compiled binary to the connected device. |
| `docs` | Opens this documentation website in the default browser. |
| `man` | Alias for `docs`. |

---

## Utility Commands

| Command | Arguments | Description | Example |
|---|---|---|---|
| `help` | — | Lists all available terminal commands with brief descriptions. | `help` |
| `snippets` | — | Lists all available snippet trigger words for the automotive snippet library. | `snippets` |
| `hex` | `<decimal_number>` | Converts a decimal integer to its hexadecimal representation. | `hex 255` → `0xFF` |
| `hex` | `<decimal_number>` | Supports large values. | `hex 65535` → `0xFFFF` |

---

## Display Commands

| Command | Description |
|---|---|
| `cls` | Clears the terminal display area. |
| `clear` | Alias for `cls`. |

---

## Command Examples

### Running a scan from the terminal

```
> scan
Running MISRA analysis...
Analysis complete. 3 finding(s) found.
See the Problems panel for details.
```

### Compiling from the terminal

```
> compile
Compiling can_driver.c for Arduino Uno...
Build successful.
RAM Usage:   1.1 KB / 2.0 KB  (55%)
Flash Usage: 6.8 KB / 32.0 KB (21%)
```

### Hex conversion

```
> hex 255
0xFF

> hex 4096
0x1000

> hex 1234567
0x12D687
```

### Listing snippets

```
> snippets
Available automotive snippets:
  header_guard   - Include guard (#ifndef / #define / #endif)
  for_safe       - Bounds-checked for loop
  can_frame      - CAN bus frame struct
  isr_handler    - Interrupt Service Routine template
  circular_buffer - Ring buffer implementation
  fixed_point_math - Fixed-point arithmetic macros
  debounce_switch - Button debounce state machine
  state_machine  - Finite State Machine skeleton
```

---

## Terminal vs. Keyboard Shortcuts

The terminal and keyboard shortcuts are fully interchangeable for the core actions:

| Action | Terminal Command | Keyboard Shortcut |
|---|---|---|
| Static analysis | `scan` | `Ctrl+Enter` |
| Compile | `compile` | `F5` |
| Save | *(not a terminal command)* | `Ctrl+S` |
| Open docs | `docs` or `man` | *(no shortcut)* |

---

## Notes

- Commands are case-insensitive (`SCAN`, `Scan`, and `scan` are equivalent)
- Unrecognized commands display a "command not found" message with a hint to use `help`
- The terminal maintains a command history — use the `Up` arrow key to cycle through previous commands
- Terminal output from builds and scans also appears in the dedicated **Output** and **Problems** tabs for easier review

---

## Related Pages

- [Automation & Productivity](../automation/productivity) — Overview of all automation features
- [Static Analysis](../features/static-analysis) — Understanding scan results
- [Compile & Flash](../features/compile-and-flash) — Build and deployment workflow
- [Code Editor](../features/code-editor) — Snippet library reference
