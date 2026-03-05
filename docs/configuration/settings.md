---
title: Settings
sidebar_label: Settings
---

# Settings

TrinovaQ Studio provides two levels of configuration:

- **Application Settings** — User preferences that apply across all projects (theme, editor behavior, font)
- **Project Configuration** — Per-project settings stored in `.trinovaq.json`

---

## Opening Settings

To open the Settings dialog:

1. Select **File → Settings** from the menu bar, or
2. Click the **Settings** icon (gear icon) in the sidebar

Settings are organized into categories accessible via tabs.

---

## Editor Tab

The **Editor** tab contains appearance and behavior settings for the code editor.

### Theme

| Setting | Options | Description |
|---|---|---|
| **Color Theme** | `trinovaq-dark` (default), `lab-light` | Editor and UI color scheme |

### Font Size

| Setting | Default | Range | Description |
|---|---|---|---|
| **Editor Font Size** | `14` | 10–24 | Font size in the code editor (pt) |

### Keyboard Shortcuts Reference

The Editor tab includes an expandable **Keyboard Shortcuts** panel listing all available shortcuts. See [Keyboard Shortcuts](../features/keyboard-shortcuts) for the full reference.

---

## Project Tab

The **Project** tab contains per-project configuration options.

### Auto-Save

| Setting | Default | Description |
|---|---|---|
| **Enable Auto-Save** | `true` | Automatically saves the active file after a period of inactivity |
| **Auto-Save Delay** | `3000` ms | Time in milliseconds between the last keystroke and an automatic save |

Auto-save is project-scoped — it can be overridden per project in `.trinovaq.json`.

---

### Target Hardware

The target hardware is set per-project in `.trinovaq.json`. The Settings dialog shows the current project's target and allows it to be changed:

| Target | Architecture | RAM | Flash |
|---|---|---|---|
| **Arduino Uno** | AVR | 2 KB | 32 KB |
| **STM32 F103** | ARM Cortex-M3 | 20 KB | 128 KB |
| **ESP32** | Xtensa | 512 KB | 4 MB |

---

## Tools Tab

The **Tools** tab shows the detection status of each required tool and allows configuring custom tool paths.

### Tool Paths

By default, TrinovaQ Studio uses its bundled GCC and cppcheck tools. If your project requires a specific external toolchain:

| Setting | Description |
|---|---|
| **GCC Path** | Full path to a custom GCC executable (overrides bundled) |
| **cppcheck Path** | Full path to a custom cppcheck executable (overrides bundled) |

Leave these empty to use the bundled tools.

### Tool Availability

The Tools tab shows the detection status of each tool:

| Tool | Expected Status |
|---|---|
| **GCC** | Detected ✓ |
| **cppcheck** | Detected ✓ |
| **MISRA Addon** | Detected ✓ |
| **rustc** | Detected ✓ (only if Rust is installed) |

If a tool shows as not detected:
- For GCC and cppcheck: file a bug report — these are bundled and should always be detected
- For rustc: install Rust from [rustup.rs](https://rustup.rs)

---

---

## Applying Settings

Most settings apply immediately. Settings that require a restart (if any) are marked with a restart indicator. All settings are persisted across sessions.

---

## Application vs. Project Settings

| Setting | Scope | Where Stored |
|---|---|---|
| Color theme | Application | Local database |
| Font size | Application | Local database |
| Target hardware | Project | `.trinovaq.json` |
| Language | Project | `.trinovaq.json` |
| Auto-save | Project | `.trinovaq.json` |
| Tool paths | Project | `.trinovaq.json` |
| Compiler includes/defines | Project | `.trinovaq.json` |
| MISRA rule policy | Project | `.trinovaq/policy.json` |

Project settings in `.trinovaq.json` are committed to version control so the entire team shares the same project configuration. Application settings (theme, font size) are per-user and not committed.

---

## Related Pages

- [Policy Configuration](policy) — Configure MISRA rule enforcement
- [Project Management](../project-management/workspace) — `.trinovaq.json` project file reference
- [Troubleshooting](../troubleshooting) — Resolving tool detection issues
