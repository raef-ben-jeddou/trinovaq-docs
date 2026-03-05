---
id: terminal-cmds
title: Terminal Command Reference
sidebar_label: Terminal API
---

# Terminal Command Reference

TrinovaQ Studio includes an integrated terminal available in the **Terminal** tab of the bottom panel. The terminal supports action commands that trigger the build and analysis pipeline, and display commands for terminal management.

---

## Accessing the Terminal

1. Click the **Terminal** tab in the bottom panel
2. Click in the terminal input area and begin typing
3. Press `Enter` to execute a command

---

## Commands

| Command | Description |
|---|---|
| `scan` | Runs static analysis (MISRA/Rust quality scan) on the active file. Equivalent to pressing `Ctrl+Shift+I`. |
| `compile` | Compiles the active file for the selected target hardware. Equivalent to pressing `Ctrl+B`. |
| `help` | Lists all available terminal commands. |
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

---

## Terminal vs. Keyboard Shortcuts

The terminal and keyboard shortcuts are interchangeable for the core actions:

| Action | Terminal Command | Keyboard Shortcut |
|---|---|---|
| Static analysis | `scan` | `Ctrl+Shift+I` |
| Compile | `compile` | `Ctrl+B` |
| Save | *(not a terminal command)* | `Ctrl+S` |

---

## Notes

- Commands are case-insensitive (`SCAN`, `Scan`, and `scan` are equivalent)
- Unrecognized commands display a "command not found" message with a hint to use `help`
- The terminal is a task-oriented interface scoped to TrinovaQ Studio actions — general shell commands are not supported

---

## Related Pages

- [Terminal](../features/terminal) — Terminal feature overview and security model
- [Automation & Productivity](../automation/productivity) — Overview of all automation features
- [Static Analysis](../features/static-analysis) — Understanding scan results
- [Compile & Flash](../features/compile-and-flash) — Build and deployment workflow
