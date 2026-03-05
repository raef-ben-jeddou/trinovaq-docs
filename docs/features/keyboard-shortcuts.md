---
id: keyboard-shortcuts
title: Keyboard Shortcuts
sidebar_label: Keyboard Shortcuts
---

# Keyboard Shortcuts

TrinovaQ Studio is designed for a keyboard-driven workflow. All core development actions are accessible without leaving the keyboard.

---

## File Operations

| Shortcut | Action |
|---|---|
| `Ctrl+N` | New file |
| `Ctrl+O` | Open folder or file |
| `Ctrl+S` | Save active file |
| `Ctrl+Shift+S` | Save as |
| `Ctrl+W` | Close active tab |

---

## Build & Analysis

| Shortcut | Action |
|---|---|
| `Ctrl+Shift+I` | Run static analysis (Scan Quality) |
| `Ctrl+B` | Compile active file |

---

## Editing

| Shortcut | Action |
|---|---|
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| `Ctrl+F` | Find in file |
| `Ctrl+H` | Find and replace |
| `Ctrl+Q` | Toggle line comment |
| `Ctrl+Shift+Q` | Toggle block comment |
| `Ctrl+D` | Duplicate line |
| `Ctrl+L` | Delete line |
| `Ctrl+Shift+L` | Select line |
| `Ctrl+G` | Go to line |
| `Ctrl+]` | Indent |
| `Ctrl+[` | Outdent |
| `Alt+Up` | Move line up |
| `Alt+Down` | Move line down |

---

## Snippets

Snippets are triggered by typing a keyword in a `.c` file and pressing `Tab`:

| Trigger | Inserts |
|---|---|
| `header_guard` | `#ifndef` / `#define` / `#endif` include guard |
| `for_safe` | Bounds-checked `for` loop |
| `fsm_secure` | Finite State Machine skeleton with defensive default |

---

## Related Pages

- [Code Editor](code-editor) — Editor features and snippet details
- [Automation & Productivity](../automation/productivity) — Keyboard-driven workflow guide
