---
title: Workspace & Project Management
sidebar_label: Workspace
---

# Workspace & Project Management

TrinovaQ Studio uses a **folder-based project model**. A project is simply a directory on your file system containing source files and optional configuration files. There is no separate project creation step — open a folder and start working.

---

## Opening a Project

### Via Menu

1. Select **File → Open Folder** from the menu bar
2. Browse to your project directory in the dialog
3. Click **Select Folder**

### Via Keyboard Shortcut

Press `Ctrl+O` to open the folder selection dialog.

Once a folder is opened:
- The **Explorer** panel on the left populates with the folder's file tree
- TrinovaQ Studio tracks the folder as the active project root
- All scan, compile, and policy operations use this folder as their root

:::note
You can only have one project folder open at a time. Opening a new folder replaces the current project context.
:::

---

## The Explorer Panel

The Explorer panel displays the full file tree of your project folder:

- Click a file to open it in the editor
- Files are grouped by directory
- Modified files are indicated with a dot marker in the tab bar
- Hidden files (starting with `.`) are visible for configuration management

---

## File Operations

### Opening Files

Click any file in the Explorer panel to open it as an editor tab. Supported file types:

| File Type | Support |
|---|---|
| `.c` | C source with syntax highlighting and MISRA analysis |
| `.h` | C header with syntax highlighting |
| `.rs` | Rust source with syntax highlighting and compiler analysis |
| `.json` | JSON with syntax highlighting |
| `.md` | Markdown with basic highlighting |
| Other text files | Opened as plain text |

### Saving Files

| Method | Action |
|---|---|
| `Ctrl+S` | Save the active file |
| Auto-save | Saves automatically after inactivity (configurable in Settings) |

### File Dialogs

Use **File → Open File** (`Ctrl+O`) to open a specific file rather than a folder.
Use **File → Save As** to save the active file to a different location.

---

## Project Configuration File

TrinovaQ Studio creates a **`.trinovaq.json`** file at the root of your project. This file stores per-project settings and is committed to version control alongside your source code.

### Configuration File Location

```
my_project/
└── .trinovaq.json
```

### Available Settings

| Setting | Type | Description | Default |
|---|---|---|---|
| `target` | string | Target hardware: `arduino_uno`, `stm32_f103`, `esp32` | `arduino_uno` |
| `language` | string | Project language: `c`, `rust` | `c` |
| `autoSave` | boolean | Enable automatic saving | `true` |
| `autoSaveDelay` | number | Auto-save delay in milliseconds | `3000` |
| `cppcheckPath` | string | Custom path to cppcheck executable | *(uses bundled)* |
| `gccPath` | string | Custom path to GCC executable | *(uses bundled)* |
| `includes` | string[] | Additional include directories for compilation | `[]` |
| `defines` | string[] | Preprocessor defines for compilation | `[]` |

### Example `.trinovaq.json`

```json
{
  "target": "stm32_f103",
  "language": "c",
  "autoSave": true,
  "autoSaveDelay": 2000,
  "includes": ["./inc", "./drivers"],
  "defines": ["STM32F103", "DEBUG=1"]
}
```

---

## Policy Configuration File

Alongside the project configuration, you can create a **`.trinovaq/policy.json`** file to configure MISRA rule enforcement for the project. See [Policy Configuration](../configuration/policy) for full details.

```
my_project/
├── .trinovaq.json
└── .trinovaq/
    └── policy.json
```

---

## Recommended Project Structure

For a typical embedded C project targeting ASIL compliance:

```
my_ecu_project/
├── .trinovaq.json            # Project configuration
├── .trinovaq/
│   └── policy.json           # MISRA rule policy
├── src/
│   ├── main.c                # Application entry point
│   ├── can_driver.c          # Peripheral driver
│   ├── can_driver.h
│   ├── sensor_read.c
│   └── sensor_read.h
├── inc/                      # Shared headers
│   └── types.h
├── tara/
│   └── threats.csv           # TARA import file
└── reports/                  # Archived compliance reports (PDF)
```

---

## Multiple Files and Tabs

You can have multiple files open simultaneously as tabs in the editor:

- Each tab shows the file name and a modification indicator
- Click a tab to switch to it
- Click the `×` on a tab to close it
- If you attempt to close a file with unsaved changes, you are prompted to save or discard

---

## Unsaved Changes Guard

When you close TrinovaQ Studio with unsaved changes in any open tab:

- A dialog appears listing all files with unsaved changes
- You can choose to **Save All**, **Discard All**, or **Cancel** the close

---

## Related Pages

- [Installation](../getting-started/installation) — Opening your first project after installation
- [Quick Start](../getting-started/quick-start) — Opening and working with a project
- [Configuration](../configuration/settings) — Application-level settings
- [Policy Configuration](../configuration/policy) — Project-level rule policy
