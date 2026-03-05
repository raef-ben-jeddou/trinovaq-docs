---
title: Quick Start
sidebar_label: Quick Start
---

# Quick Start Guide

This guide walks you through the core workflow in TrinovaQ Studio: opening a project, writing code, running a static analysis, and compiling for an embedded target.

**Time required:** approximately 10 minutes.

---

## Step 1: Open a Project Folder

TrinovaQ Studio works with folders as projects. All source files, configuration, and policy settings are stored within a single root folder.

1. Launch TrinovaQ Studio and sign in (or continue offline)
2. From the menu bar, select **File → Open Folder**, or press `Ctrl+O`
3. Browse to your project directory and click **Select Folder**
4. The **Explorer** panel on the left will populate with your project's file tree

:::tip
If you don't have an existing project, create a new folder and add a file with a `.c` or `.rs` extension to get started.
:::

---

## Step 2: Open and Edit a Source File

1. Click any `.c` or `.rs` file in the Explorer panel
2. The file opens in the code editor — syntax highlighting and auto-detection of the language (C or Rust) activate immediately
3. You can have multiple files open simultaneously as tabs in the editor

### Try the Automotive Snippets

TrinovaQ Studio includes a library of automotive-specific code templates. In a `.c` file, type one of the following trigger words and press `Tab` to expand:

| Trigger | What it generates |
|---|---|
| `header_guard` | A standard `#ifndef` include guard |
| `for_safe` | A bounds-checked loop pattern |
| `fsm_secure` | A secure Finite State Machine skeleton |

**Example:**
Type `header_guard` and press `Tab` in a `.c` file to insert:

```c
#ifndef MODULE_NAME_H
#define MODULE_NAME_H

/* Your declarations here */

#endif /* MODULE_NAME_H */
```

---

## Step 3: Select Your Target Hardware

Before compiling, select the target embedded hardware:

1. In the **Dashboard** panel (right side or bottom), find the **Target** selector
2. Choose one of the supported targets:
   - **Arduino Uno** — AVR microcontroller, 2 KB RAM / 32 KB Flash
   - **STM32 F103** — ARM Cortex-M3, 20 KB RAM / 128 KB Flash
   - **ESP32** — Xtensa dual-core, 512 KB RAM / 4 MB Flash

The selected target affects how RAM and Flash usage metrics are calculated during compilation.

---

## Step 4: Save and Run Static Analysis

1. Press `Ctrl+S` to save the active file
2. Press `Ctrl+Shift+I` to run a static analysis scan, or use the **Build → Scan Quality** menu option

The analysis runs in the background. When complete:

- The **Problems** panel (bottom panel) displays all issues found
- Each issue shows its **rule ID**, **severity**, **file location**, and a description
- The **Dashboard** updates with a **Safety Score** — a percentage reflecting MISRA compliance

### Understanding the Safety Score

The Safety Score gives a quick top-level view of your project's compliance posture:

- **90–100%** — Excellent, minimal issues
- **70–89%** — Good, minor issues to address
- **Below 70%** — Significant issues requiring attention before release

### Reviewing Issues

In the **Problems** panel, each issue shows:

- **Severity**: Error, Warning, Style, or Information
- **MISRA Rule ID**: The specific rule violated (e.g., MISRA C 2012 Rule 15.5)
- **Location**: File name and line number — click to jump to the location in the editor
- **Description**: A plain-language explanation of the violation

---

## Step 5: Compile Your Code

1. Press `Ctrl+B` to compile, or select **Build → Compile**
2. The compilation output appears in the **Output** tab of the bottom panel
3. After a successful build, the Dashboard shows:
   - **RAM Usage**: Estimated memory consumption vs. target limit
   - **Flash Usage**: Binary size vs. target Flash capacity
   - **Build Status**: Pass or fail indicator

If the build fails, error messages are displayed in the Output panel with file and line references.

---

## Step 6: Flash to Hardware (Optional)

If you have a supported board connected via USB:

1. Connect your board to a USB port
2. In the **Hardware** section, select the correct **COM port** from the dropdown
3. Select the **Baud Rate** (typically `115200` for modern boards)
4. Click **Flash** in the Dashboard

Flash progress is shown in real time. After completion, open the **Serial Monitor** tab to see output from your device.

---

## Step 7: Review the Safety Dashboard

The Dashboard provides a live summary of your project's safety posture:

| Metric | Description |
|---|---|
| **Safety Score** | Overall MISRA compliance percentage |
| **RAM Usage** | Memory use vs. target limit (updated after each compile) |
| **Flash Usage** | Binary size vs. target Flash capacity (updated after each compile) |
| **Issue Count** | Total static analysis findings |

---

## What to Explore Next

Now that you have run your first analysis and build, explore these features:

- **[Deviation Management](../features/deviation-management)** — Document and track MISRA rule exceptions
- **[TARA Integration](../features/tara-integration)** — Import cybersecurity threat data
- **[Compliance Reports](../features/reports-and-sbom)** — Generate PDF and SBOM reports
- **[Policy Configuration](../configuration/policy)** — Customize which rules are enforced
- **[Automotive Workflows](../automotive-workflows/embedded-development)** — End-to-end workflow guide
