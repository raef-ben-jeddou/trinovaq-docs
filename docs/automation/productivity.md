---
title: Automation & Productivity
sidebar_label: Automation & Productivity
---

# Automation & Productivity

TrinovaQ Studio includes several features that reduce manual effort, automate repetitive tasks, and help developers stay productive within safety process constraints.

---

## Auto-Save

Auto-save automatically persists changes to disk without requiring manual `Ctrl+S` presses.

### Configuration

| Setting | Default | Description |
|---|---|---|
| **Enable Auto-Save** | `true` | Automatically saves when the editor is idle |
| **Auto-Save Delay** | `3000 ms` | Idle time before the save triggers |

Configure via **Settings → Editor → Auto-Save**, or in `.trinovaq.json`:

```json
{
  "autoSave": true,
  "autoSaveDelay": 2000
}
```

### Behavior

- Auto-save triggers after the configured delay following the last keystroke
- The tab indicator (●) clears when the file is saved
- Auto-save does not trigger during active typing

---

## Code Fix Suggestions

For common, well-understood MISRA violations, TrinovaQ Studio can propose and apply **atomic code fixes** — single, targeted edits that resolve the violation without introducing side effects.

### How It Works

1. Run a static analysis scan (`Ctrl+Enter`)
2. In the **Problems** panel, look for findings with a **Show Fix** button
3. Click **Show Fix** to see the suggested change in a diff view
4. Click **Apply Fix** to accept the change

### Supported Fix Patterns

| Violation Type | Fix Applied |
|---|---|
| Uninitialized variable | Adds `= 0` or appropriate initializer at declaration |
| Banned function: `gets` | Replaces with `fgets` with safe arguments |
| Banned function: `strcpy` | Replaces with `strncpy` with explicit size |
| `sprintf` → size-safe variant | Replaces with `snprintf` |

:::note
Code fix suggestions are **deterministic** and **conservative** — they apply only well-understood, safe transformations. They do not perform semantic analysis or speculative refactoring. Always review the suggested fix before applying.
:::

### Undo Support

Applied fixes preserve the full undo/redo history. Press `Ctrl+Z` to revert a fix.

---

## Automotive Snippets Library

The snippet library accelerates writing common embedded patterns. See the [Code Editor](../features/code-editor) page for the full snippet reference.

**Quick access:**
- Type a trigger word in a `.c` file and press `Tab`
- Common triggers: `can_frame`, `isr_handler`, `state_machine`, `circular_buffer`, `for_safe`

---

## Terminal Commands

The integrated terminal provides quick access to common actions without leaving the keyboard:

| Command | Action |
|---|---|
| `scan` | Run static analysis on the active file |
| `compile` | Build the active file |
| `flash` | Flash the compiled binary to connected hardware |
| `docs` / `man` | Open this documentation in the browser |
| `help` | Show available terminal commands |
| `snippets` | List available snippet triggers |
| `hex <number>` | Convert a decimal number to hexadecimal |
| `cls` / `clear` | Clear the terminal display |

---

## Keyboard-Driven Workflow

All core actions are accessible via keyboard shortcuts to support a fast, keyboard-driven workflow:

| Shortcut | Action |
|---|---|
| `Ctrl+S` | Save |
| `Ctrl+O` | Open folder/file |
| `F5` | Compile |
| `Ctrl+Enter` | Scan Quality (static analysis) |
| `Ctrl+Shift+P` | Command palette |
| `Ctrl+F` | Find in file |
| `Ctrl+H` | Find and replace |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |

---

## Project-Level Policy Automation

By maintaining a `.trinovaq/policy.json` file in version control:

- All team members share the same rule enforcement configuration automatically
- CI/CD pipelines using TrinovaQ CLI tooling pick up the same policy
- Policy changes are auditable via version control history

See [Policy Configuration](../configuration/policy) for details.

---

## Audit Trail (Automatic)

All compliance-relevant actions are automatically logged to an audit trail — no manual logging required:

- Every scan, compile, and flash operation is recorded
- Every deviation creation and approval is recorded
- Every user sign-in and sign-out is recorded

The audit trail operates transparently in the background and is available for administrator review.

---

## Build Manifest (Automatic)

Every successful compilation automatically records a build manifest capturing the compiler version, flags, source files, and output hash. No manual action is required. This manifest is available for tool qualification evidence.

---

## Related Pages

- [Code Editor](../features/code-editor) — Full snippet library reference
- [Terminal Commands](../api/terminal-cmds) — Complete terminal command reference
- [Static Analysis](../features/static-analysis) — Code fixes from analysis results
- [Reports & SBOM](../features/reports-and-sbom) — Automated compliance artifacts
