---
id: terminal
title: Integrated Terminal
sidebar_label: Terminal
---

# Integrated Terminal

TrinovaQ Studio includes an integrated terminal accessible from the **Terminal** tab in the bottom panel. It provides quick access to development actions without switching to an external application, while enforcing security boundaries appropriate for a safety-critical IDE.

---

## Accessing the Terminal

1. Click the **Terminal** tab in the bottom panel, or
2. Use the **View → Terminal** menu option

---

## Available Commands

The terminal supports the following built-in commands:

| Command | Action |
|---|---|
| `scan` | Run static analysis on the currently active file |
| `compile` | Build the currently active file |
| `help` | List all available terminal commands |
| `cls` / `clear` | Clear the terminal display |

:::note
The terminal is a task-oriented command interface, not a general-purpose shell. It is scoped to TrinovaQ Studio actions. System commands and shell operations are not supported.
:::

---

## Security Model

The terminal enforces a blocklist of destructive commands. Commands that could harm the system, modify critical files, or escalate privileges are rejected with an error message. This restriction is intentional and ensures the terminal cannot be used to bypass safety workflow controls.

---

## Workflow Integration

The terminal is most useful for rapid keyboard-driven interaction during development:

- Type `scan` immediately after saving to trigger analysis without reaching for the menu
- Type `compile` to build without switching focus from the editor
- Type `help` at any time to review available commands

For a complete keyboard-driven workflow including editor shortcuts, see [Automation & Productivity](../automation/productivity).

---

## Related Pages

- [Static Analysis](static-analysis) — Understanding scan results
- [Compile & Flash](compile-and-flash) — Build and deployment workflow
- [Automation & Productivity](../automation/productivity) — Full keyboard-driven workflow guide
