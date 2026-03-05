---
id: code-fixes
title: Automated Code Fixes
sidebar_label: Code Fixes
---

# Automated Code Fixes

For common, well-understood MISRA violations, TrinovaQ Studio can propose and apply **atomic code fixes** — single, targeted edits that resolve the violation without introducing side effects.

---

## How It Works

1. Run a static analysis scan (`Ctrl+Shift+I`)
2. In the **Problems** panel, look for findings with a **Show Fix** button
3. Click **Show Fix** to preview the suggested change in a diff view
4. Click **Apply Fix** to accept and apply the change

:::note
Code fixes are **deterministic** and **conservative** — they apply only well-understood, safe transformations. Always review the suggested fix before applying it. The fix preview shows exactly what will change before you commit.
:::

---

## Supported Fix Patterns

| Violation | Fix Applied |
|---|---|
| Uninitialized variable | Adds `= 0` or appropriate zero-initializer at the declaration |
| Banned function: `gets` | Replaces with `fgets(buf, sizeof(buf), stdin)` |
| Banned function: `strcpy` | Replaces with `strncpy(dst, src, sizeof(dst))` |
| `sprintf` usage | Replaces with `snprintf` with explicit size argument |
| `malloc` result not checked | Adds a NULL check after the allocation |
| Missing `break` in switch case | Inserts `break;` at the end of the case |
| `atoi` usage | Replaces with `strtol` with proper error handling |

---

## Undo Support

Applied fixes are fully undoable. The editor's undo/redo history is preserved after a fix is applied — press `Ctrl+Z` to revert if needed.

---

## When Fixes Are Not Available

Not all findings have an automated fix. The **Show Fix** button only appears when the fix pattern is unambiguous and safe to apply automatically. For more complex violations, review the finding's description and suggested resolution in the Problems panel.

---

## Related Pages

- [Static Analysis](static-analysis) — Running scans and reviewing findings
- [Automation & Productivity](../automation/productivity) — Overview of automated features
- [Deviation Management](deviation-management) — For violations that cannot be fixed automatically
