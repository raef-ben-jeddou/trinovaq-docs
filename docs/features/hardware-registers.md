---
id: hardware-registers
title: Hardware Register Viewer
sidebar_label: Hardware Registers
---

# Hardware Register Viewer

TrinovaQ Studio includes a **Hardware Register Viewer** for inspecting and modifying peripheral registers on supported STM32 targets. This enables register-level debugging without an external tool.

The Register Viewer is available in the **Hardware** tab of the bottom panel.

---

## Supported Peripherals

### GPIOA — General Purpose I/O

| Register | Offset | Access | Description |
|---|---|---|---|
| **MODER** | `0x00` | Read/Write | Port mode register (input / output / alternate function / analog) |
| **OTYPER** | `0x04` | Read/Write | Output type register (push-pull or open-drain) |
| **OSPEEDR** | `0x08` | Read/Write | Output speed register |
| **LCKR** | `0x1C` | Read/Write | Port configuration lock register |

### CAN1 — Controller Area Network

| Register | Offset | Access | Description |
|---|---|---|---|
| **MCR** | `0x00` | Read/Write | Master Control Register |
| **MSR** | `0x04` | Read-Only | Master Status Register |
| **TSR** | `0x08` | Read-Only | Transmit Status Register |

:::caution
`MSR` and `TSR` are **read-only** registers. Attempts to modify them are blocked by the Register Viewer.
:::

### WWDG — Window Watchdog

| Register | Offset | Access | Description |
|---|---|---|---|
| **CR** | `0x00` | Read/Write | Control Register — configures the watchdog timeout |
| **CFR** | `0x04` | Read/Write | Configuration Register |

:::warning
The Window Watchdog Control Register directly affects system reset behavior. Incorrect configuration can cause unintended system resets during debugging.
:::

---

## Using the Register Viewer

1. Open the **Hardware** tab in the bottom panel
2. Select a peripheral from the list (e.g., `GPIOA`, `CAN1`, `WWDG`)
3. The 32-bit register value is displayed with individual bit indicators
4. For Read/Write registers: click **SET** or **CLR** on individual bits to toggle them
5. Read-Only registers display their values but cannot be modified

:::note
The Register Viewer is a development and debugging aid. Changes made here reflect register state for inspection purposes and do not automatically generate corresponding firmware code.
:::

---

## Safe Action Confirmation

Modifying certain registers (such as the WWDG Control Register) triggers a **SafeAction** confirmation dialog before the change is applied. This prevents accidental writes to safety-critical hardware registers during debugging.

---

## Related Pages

- [Serial Monitor](serial-monitor) — Communicate with the device over UART
- [Compile & Flash](compile-and-flash) — Deploy firmware before register-level debugging
