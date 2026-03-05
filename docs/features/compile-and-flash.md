---
title: Compile & Flash
sidebar_label: Compile & Flash
---

# Compile & Flash

TrinovaQ Studio provides an integrated build pipeline for compiling embedded firmware and deploying it to target hardware. The workflow supports C and Rust projects, enforces hardware-specific memory constraints, and produces build evidence suitable for tool validation in safety-critical contexts.

---

## Supported Targets

Select your target hardware before compiling. The target affects compiler flags, hardware constraints, and memory limit checking.

| Target | Architecture | RAM | Flash |
|---|---|---|---|
| **Arduino Uno** | AVR (8-bit) | 2 KB | 32 KB |
| **STM32 F103** | ARM Cortex-M3 (32-bit) | 20 KB | 128 KB |
| **ESP32** | Xtensa dual-core (32-bit) | 512 KB | 4 MB |

To select a target:
1. Open the **Dashboard** panel
2. Use the **Target** dropdown to select your hardware
3. The selected target is saved in your project configuration

---

## Selecting the Language

TrinovaQ Studio automatically detects C (`.c`) or Rust (`.rs`) files and selects the appropriate compiler:

| Language | Compiler | Notes |
|---|---|---|
| **C** | GCC (bundled) | MISRA-compatible toolchain included |
| **Rust** | rustc (system) | Requires separate Rust/rustup installation |

---

## Compiling

### Triggering a Build

| Method | Action |
|---|---|
| **Keyboard shortcut** | `Ctrl+B` |
| **Menu** | **Build → Compile** |
| **Terminal** | Type `compile` |

### Build Output

During and after the build, the **Output** tab in the bottom panel displays:

- Compiler invocation details
- Warning and error messages with file/line references
- Build success or failure status

### Memory Metrics

After a successful build, the Dashboard updates with:

- **RAM Usage**: Estimated RAM consumption as a percentage of the target's limit
- **Flash Usage**: Binary size as a percentage of the target's Flash capacity

If either metric exceeds the target's hardware limit, the build is flagged with a hardware constraint violation.

**Example output for Arduino Uno (2 KB RAM / 32 KB Flash):**

```
Build successful.
RAM Usage:   1.2 KB / 2.0 KB  (60%)
Flash Usage: 8.4 KB / 32.0 KB (26%)
Target: Arduino Uno ✓
```

---

## Build Evidence & Provenance

TrinovaQ Studio automatically records a **build manifest** for every successful compilation. This manifest captures:

- GCC or rustc version used
- Compiler flags applied
- Source file list
- Build timestamp
- Output binary hash (SHA-256)

This information serves as **tool validation evidence** required under ISO 26262 Part 8 (Tool Confidence Level, TCL) and supports audit traceability. Build manifests are accessible from the **Reports** view.

---

## Flashing to Hardware

After a successful build, you can deploy the binary to a connected hardware target via the USB serial interface.

### Prerequisites

- The target board is connected via USB
- The correct serial port (COM port) is selected
- The correct baud rate is selected

### Flash Workflow

1. Connect your board to a USB port
2. In the **Hardware** section, select the **COM port** from the dropdown (use **Refresh** if the port doesn't appear)
3. Select the appropriate **Baud Rate** (commonly `115200`)
4. Click **Flash** in the Dashboard
5. A progress indicator shows flashing status in real time
6. Upon completion, a success or error message is shown

### Supported Flash Methods

| Target | Flash Method |
|---|---|
| **Arduino Uno** | avrdude via USB serial (arduino programmer) |
| **STM32 F103** | OpenOCD via ST-Link debug adapter |
| **ESP32** | Not yet supported |

:::note
Flashing the STM32 F103 requires an **ST-Link** debug adapter connected to the target board's SWD/JTAG header — UART bootloader is not used.
:::

### Binary Integrity

Before flashing, the binary is validated for integrity. Only binaries produced by the current build session are accepted for flashing.

---

## Recommended Workflow

The following sequence represents the recommended build and deploy cycle:

```
┌──────────────┐
│  Write Code  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Save File   │  Ctrl+S
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Scan Quality │  Ctrl+Shift+I
└──────┬───────┘
       │ Review issues / create deviations
       ▼
┌──────────────┐
│   Compile    │  Ctrl+B
└──────┬───────┘
       │ Check RAM/Flash metrics
       ▼
┌──────────────┐
│    Flash     │  Connect board → Flash
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Serial Mon.  │  Monitor output
└──────────────┘
```

---

## Troubleshooting Build Issues

| Symptom | Likely Cause | Resolution |
|---|---|---|
| `GCC not found` | Toolchain detection failed | Check **Settings → Tool Paths** |
| `rustc not found` | Rust not installed | Install from [rustup.rs](https://rustup.rs) |
| RAM or Flash limit exceeded | Binary too large for target | Optimize code size or choose a different target |
| `Permission denied` on binary | Previous build still running | Wait briefly and retry; Studio uses unique build filenames automatically |
| Flash fails with port error | Wrong COM port selected | Reconnect board, click Refresh, reselect port |

---

## Related Pages

- [Static Analysis](static-analysis) — Run MISRA analysis before building
- [Serial Monitor](serial-monitor) — Communicate with the device after flashing
- [Reports & SBOM](reports-and-sbom) — Generate build evidence and compliance reports
- [Project Configuration](../project-management/workspace) — Configure compiler paths and project settings
