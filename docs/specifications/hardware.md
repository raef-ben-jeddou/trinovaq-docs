---
id: hardware-specs
title: Hardware Abstraction
sidebar_label: Hardware Specs
---

# Hardware Abstraction Layer

## Overview
TrinovaQ Studio provides tools to interact with embedded hardware without leaving the IDE. This includes a register bit manipulation view and a serial monitor.

## Requirements Specification

| ID | Feature Name | Description | Constraints |
| :--- | :--- | :--- | :--- |
| **TRQ-HW-001** | **Register Viewer** | Visualizes 32-bit hardware registers with bit-level toggling capabilities. | Supported Peripherals: `GPIOA`, `CAN1`, `WWDG`. |
| **TRQ-HW-002** | **Read-Only Protection** | Prevents users from modifying registers marked as Read-Only (RO) in the definition file. | Logic: `if (targetReg.access === 'RO') return;`. |
| **TRQ-HW-003** | **Serial Monitor** | Provides UART communication with external devices. Supports auto-discovery of COM ports. | Baud Rates: `9600`, `115200`. Backend: `serialport` library. |

## Peripheral Definitions
The tool includes built-in definitions for the following mock peripherals:

### GPIOA (General Purpose I/O)
* **MODER** (Offset `0x00`): Port mode register.
* **OTYPER** (Offset `0x04`): Output type register.
* **OSPEEDR** (Offset `0x08`): Output speed register.

### CAN1 (Controller Area Network)
* **MCR** (Offset `0x00`): Master Control Register.
* **MSR** (Offset `0x04`): Master Status Register (RO).

### WWDG (Window Watchdog)
* **CR** (Offset `0x00`): Control Register (Critical for safety).