---
title: Serial Monitor
sidebar_label: Serial Monitor
---

# Serial Monitor

TrinovaQ Studio includes an integrated **Serial Monitor** for communicating with embedded hardware over a USB serial (UART) connection. This enables real-time monitoring of debug output, sensor readings, and device status — without leaving the IDE.

---

## Overview

The Serial Monitor is available in the **Serial** tab of the bottom panel. It provides:

- Auto-discovery of available COM ports
- Configurable baud rate
- Live data stream display
- Command sending to the target device

---

## Connecting to a Device

### Step 1: Connect Your Hardware

Plug your target board into a USB port. Most boards appear as a virtual COM port (e.g., `COM3`, `COM4` on Windows).

### Step 2: Open the Serial Monitor

1. Click the **Serial** tab in the bottom panel
2. The Serial Monitor interface displays the port selector and baud rate options

### Step 3: Select the COM Port

1. Click the **Port** dropdown — available serial ports are listed automatically
2. Select the port corresponding to your device
3. If your port is not listed, click **Refresh** to re-scan for available ports

### Step 4: Select the Baud Rate

Choose the baud rate that matches your firmware's UART configuration:

| Baud Rate | Typical Use |
|---|---|
| **9600** | Low-speed sensors, legacy hardware |
| **115200** | Standard debugging and data logging |

:::tip
Make sure the baud rate configured in your firmware matches the selection in the Serial Monitor. A mismatch will result in garbled output.
:::

### Step 5: Connect

Click **Connect**. The Serial Monitor begins displaying incoming data from the device.

---

## Viewing Data

Once connected, the Serial Monitor displays:

- **Incoming data**: All bytes received from the device are shown as text in the display area
- **Timestamps**: Optional per-line timestamps for correlating events with code execution
- **Scroll behavior**: The display auto-scrolls to the latest data; click anywhere to pause auto-scroll

---

## Sending Data

To send a command or string to the device:

1. Click the input field at the bottom of the Serial Monitor
2. Type your command or data
3. Press `Enter` to send

The sent data is echoed in the display area for reference.

---

## Disconnecting

Click **Disconnect** to close the serial connection. The port is released so other tools can access it.

---

## Hardware Register Viewer

In addition to the Serial Monitor, TrinovaQ Studio provides a **Register Viewer** for inspecting and modifying hardware peripheral registers.

The Register Viewer supports the following peripheral definitions:

### GPIOA — General Purpose I/O

| Register | Offset | Description |
|---|---|---|
| **MODER** | `0x00` | Port mode register (input/output/alternate/analog) |
| **OTYPER** | `0x04` | Output type register (push-pull or open-drain) |
| **OSPEEDR** | `0x08` | Output speed register |

### CAN1 — Controller Area Network

| Register | Offset | Access | Description |
|---|---|---|---|
| **MCR** | `0x00` | Read/Write | Master Control Register |
| **MSR** | `0x04` | Read-Only | Master Status Register |

:::caution
The `MSR` register is **read-only**. Attempts to write to it are blocked by the Register Viewer.
:::

### WWDG — Window Watchdog

| Register | Offset | Description |
|---|---|---|
| **CR** | `0x00` | Control Register — critical for safety timeout configuration |

:::warning
The Window Watchdog control register directly affects system reset behavior. Incorrect configuration can cause unintended system resets.
:::

---

## Using the Register Viewer

1. Open the **Hardware** panel in the sidebar or Dashboard
2. Select a peripheral (e.g., `GPIOA`, `CAN1`, `WWDG`)
3. The 32-bit register values are displayed with individual bit toggling
4. Click any bit to toggle it (Read/Write registers only)
5. Read-Only registers display their values but cannot be modified

This view is intended for development and debugging. Changes made in the Register Viewer reflect the current device state but do not automatically generate corresponding firmware code.

---

## Troubleshooting

| Symptom | Likely Cause | Resolution |
|---|---|---|
| No COM ports listed | Board not connected or driver missing | Reconnect board, install USB-serial driver |
| Garbled output | Baud rate mismatch | Match baud rate to firmware configuration |
| Data stops appearing | Device stopped transmitting | Check firmware logic; reconnect if needed |
| Port not released | Previous connection not closed | Click Disconnect; restart Studio if needed |

---

## Related Pages

- [Compile & Flash](compile-and-flash) — Build and deploy firmware before using the Serial Monitor
- [Quick Start](../getting-started/quick-start) — See the Serial Monitor in the context of the full workflow
