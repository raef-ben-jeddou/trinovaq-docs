---
id: terminal-cmds
title: Terminal Commands
sidebar_label: Terminal API
---

# Terminal Command Reference

TrinovaQ Studio includes a built-in shell for executing toolchain commands. Commands are typed into the "Terminal" tab.

## Local Commands (Client-Side)
*Handled directly by the UI in `terminal.tsx`.*

| Command | Description |
| :--- | :--- |
| `cls` / `clear` | Clears the terminal output history. |
| `scan` | Triggers the "Scan Quality" analysis (C or Rust). |
| `compile` | Triggers the build process for the active file. |
| `flash` | Initiates the (Mock) Flash to Device workflow. |
| `docs` / `man` | Opens this documentation website in the default browser. |

## Backend Commands (IPC)
*Executed by the main process in `index.ts`.*

| Command | Arguments | Description |
| :--- | :--- | :--- |
| `help` | None | Lists available commands. |
| `snippets` | None | Lists available snippet triggers (e.g., `can_frame`). |
| `hex` | `[decimal_number]` | Converts a decimal number to Hexadecimal (e.g., `hex 255` -> `0xFF`). |