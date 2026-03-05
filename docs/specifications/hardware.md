---
id: hardware-specs
title: Hardware Abstraction — Specifications
sidebar_label: Hardware Specs
---

# Hardware Abstraction — Specifications

This page contains the formal feature specifications for the TrinovaQ Studio hardware interface subsystem, including the Serial Monitor and Register Viewer. For usage instructions, see [Serial Monitor](../features/serial-monitor).

---

## Overview

TrinovaQ Studio provides tools for interacting with embedded hardware without leaving the IDE. These include a **Serial Monitor** for UART communication and a **Register Viewer** for inspecting and modifying hardware peripheral registers.

---

## Feature Specifications

| ID | Feature | Description | Constraints |
|---|---|---|---|
| **TRQ-HW-001** | **Register Viewer** | Visualizes 32-bit hardware peripheral registers with individual bit-level toggling. Displays register name, offset, access type, and current value in both hex and binary formats. | Supported peripherals: `GPIOA`, `CAN1`, `WWDG` |
| **TRQ-HW-002** | **Read-Only Register Protection** | Prevents modification of registers defined as Read-Only (RO). Bit-toggle controls are disabled for RO registers; their values are displayed but cannot be changed. | Applies to all registers with `access: RO` in the peripheral definition |
| **TRQ-HW-003** | **Serial Monitor** | Provides UART communication with external devices. Supports automatic discovery of available COM ports and configurable baud rates. | Supported baud rates: 9600, 115200 |
| **TRQ-HW-004** | **Simulator Mode** | When no physical hardware is connected, the system operates in simulator mode, allowing development and testing workflows to proceed without requiring physical hardware. | Activated automatically when no serial port is available |

---

## Peripheral Register Definitions

### GPIOA — General Purpose I/O Port A

| Register | Offset | Access | Description |
|---|---|---|---|
| **MODER** | `0x00` | Read/Write | Port mode register — configures each pin as input, output, alternate function, or analog |
| **OTYPER** | `0x04` | Read/Write | Output type register — selects push-pull or open-drain for each output pin |
| **OSPEEDR** | `0x08` | Read/Write | Output speed register — configures slew rate for each output pin |

### CAN1 — Controller Area Network Controller 1

| Register | Offset | Access | Description |
|---|---|---|---|
| **MCR** | `0x00` | Read/Write | Master Control Register — controls initialization, sleep, and mode configuration |
| **MSR** | `0x04` | Read-Only | Master Status Register — reflects current operating mode and error state |

### WWDG — Window Watchdog

| Register | Offset | Access | Description |
|---|---|---|---|
| **CR** | `0x00` | Read/Write | Control Register — configures watchdog timeout window and triggers reset if not refreshed within the window |

:::warning
The WWDG Control Register directly governs system reset behavior. Incorrect configuration may cause unintended system resets in production firmware.
:::

---

## Serial Communication Specifications

| Parameter | Value |
|---|---|
| **Protocol** | UART (asynchronous serial) |
| **Supported baud rates** | 9600, 115200 |
| **Data format** | 8N1 (8 data bits, no parity, 1 stop bit) |
| **Port discovery** | Automatic enumeration of available system COM ports |
| **Refresh** | Manual port list refresh available in the UI |

---

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| **TRQ-HW-NF-001** | Serial Monitor must display incoming data with latency ≤ 100 ms under normal conditions |
| **TRQ-HW-NF-002** | COM port unavailability must not cause application crash; the system must fall back to simulator mode gracefully |
| **TRQ-HW-NF-003** | Port disconnection must be detected and reported without requiring application restart |

---

## Related Pages

- [Serial Monitor](../features/serial-monitor) — User guide for hardware communication
- [Compile & Flash](../features/compile-and-flash) — Deploying firmware to hardware
- [Quick Start](../getting-started/quick-start) — Hardware integration in the basic workflow
