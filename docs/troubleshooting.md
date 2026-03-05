---
title: Troubleshooting
sidebar_label: Troubleshooting
---

# Troubleshooting

This page covers common issues encountered when using TrinovaQ Studio and their solutions.

---

## Installation & Launch Issues

### The application does not start

**Symptom:** TrinovaQ Studio fails to open after installation.

**Solutions:**
1. Ensure Windows 10 or later (64-bit) is installed
2. Re-run the installer as Administrator (right-click → Run as administrator)
3. Check the Windows Event Viewer for application error details
4. Reinstall the application: uninstall from Windows Settings, then re-run the installer

---

### Sign-in fails with "Invalid credentials"

**Symptom:** Entering your email and password results in an error.

**Solutions:**
1. Verify your email address is entered exactly as registered (case-sensitive)
2. Reset your password via the "Forgot password" link on the sign-in screen
3. Check your internet connection — sign-in requires network access
4. If your organization uses SSO, contact your IT administrator

---

### Offline mode does not have all features

**Symptom:** Some features appear unavailable when using offline/demo mode.

**Explanation:** Certain features that require user identity (deviation approval attribution, audit trail user records) use a local demo identity in offline mode. All core development features (scanning, compiling, flashing) are fully available offline.

---

## Tool Detection Issues

### "GCC not found" error

**Symptom:** Compile fails with a message indicating GCC cannot be found.

**Solutions:**
1. Open **Settings → Toolchain → Tool Availability**
2. Check whether GCC shows as "Detected"
3. If not detected:
   - TrinovaQ Studio bundles GCC — try reinstalling the application
   - If you are using a custom GCC path, verify it in **Settings → Toolchain → GCC Path**
4. Ensure the application is not blocked by antivirus software (add an exclusion for the TrinovaQ Studio installation folder)

---

### "rustc not found" error

**Symptom:** Rust compilation fails with a message indicating rustc cannot be found.

**Solutions:**
1. Install Rust via rustup: visit [rustup.rs](https://rustup.rs) and follow the Windows instructions
2. After installation, restart TrinovaQ Studio
3. Verify detection in **Settings → Toolchain → Tool Availability**
4. If rustc is installed but not detected, ensure it is on your system `PATH`:
   - Open a Windows terminal and run: `rustc --version`
   - If this fails, rustup may not have added it to PATH — run `rustup default stable`

---

### "MISRA addon not available" warning

**Symptom:** MISRA analysis runs but MISRA-specific rules are not enforced.

**Solutions:**
1. Open **Settings → Toolchain → Tool Availability** and check the "MISRA Addon" status
2. The MISRA addon is bundled with the application — try reinstalling TrinovaQ Studio
3. If using a custom cppcheck path, ensure the MISRA addon (`misra.py`) is located in the same directory as cppcheck

---

## Static Analysis Issues

### Scan returns no results for a C file

**Symptom:** Running a scan on a `.c` file shows no findings, even for obviously problematic code.

**Solutions:**
1. Verify the active file is saved (`Ctrl+S`) before scanning
2. Ensure a project folder is open (File → Open Folder) — scanning requires a project root
3. Check the **Output** tab for any error messages from the analysis engine
4. Verify the file has a `.c` extension — files with other extensions are not analyzed as C

---

### Scan takes a very long time or appears stuck

**Symptom:** The scan progress indicator runs indefinitely.

**Solutions:**
1. Wait up to 2 minutes for large files — analysis has a timeout
2. If the scan appears stuck, restart TrinovaQ Studio and try again
3. Reduce the file size or split large files into smaller modules

---

### "Another scan is already running" message

**Symptom:** Attempting to start a scan shows this message.

**Explanation:** Only one scan can run at a time. Wait for the current scan to complete before starting another. The progress indicator in the toolbar shows scan status.

---

## Compilation Issues

### Compile fails: "Permission denied" on output binary

**Symptom:** The compiler reports an access denied error when writing the output file.

**Explanation:** This can occur if a previously compiled binary is still being executed. TrinovaQ Studio automatically generates unique filenames for each build to prevent this, but if a process is actively locking the file, wait a moment and try again.

**Solution:** Close any terminal windows or processes that may be running the previously compiled binary, then retry.

---

### RAM or Flash usage exceeds target limit

**Symptom:** The Dashboard shows RAM or Flash usage at or above 100%.

**Solutions:**
1. Review the build output for the exact usage numbers
2. Reduce code size by:
   - Removing unused functions and variables
   - Reducing buffer sizes
   - Enabling compiler optimizations (add `-Os` to GCC defines in `.trinovaq.json`)
3. Consider using a target with more memory if the hardware allows

---

### Compilation warnings about missing includes

**Symptom:** GCC warns about missing header files.

**Solutions:**
1. Open `.trinovaq.json` and add the missing include directories to the `includes` array:
   ```json
   {
     "includes": ["./inc", "./drivers/include"]
   }
   ```
2. Ensure the header files exist at the specified paths

---

## Flash Issues

### No COM ports appear in the dropdown

**Symptom:** The serial port dropdown shows no available ports.

**Solutions:**
1. Ensure the board is connected via USB
2. Click the **Refresh** button next to the port dropdown
3. Install the USB-to-serial driver for your board:
   - Arduino Uno: CH340 or FTDI driver (depending on board variant)
   - STM32 F103: STM32 Virtual COM Port driver
   - ESP32: CP210x driver

---

### Flash fails with "Port unavailable" error

**Symptom:** Attempting to flash fails with a port access error.

**Solutions:**
1. Ensure no other application (such as the Arduino IDE, PuTTY, or another serial terminal) has the port open
2. Close the Serial Monitor in TrinovaQ Studio before flashing, then reconnect after
3. Disconnect and reconnect the board

---

### Flash completes but device does not run the new firmware

**Symptom:** Flash reports success, but the device still runs old firmware.

**Solutions:**
1. Ensure the board fully resets after flashing — some boards require a manual reset button press
2. For STM32: verify the BOOT0 pin state is correct for bootloader mode vs. normal run mode
3. Verify the baud rate matches the bootloader expectation for your board variant

---

## Serial Monitor Issues

### Serial Monitor shows garbled text

**Symptom:** Received data appears as random characters.

**Solution:** The baud rate in the Serial Monitor does not match the baud rate configured in your firmware. Change the baud rate selection to match your `UART_Init()` configuration.

---

### Serial Monitor stops showing data

**Symptom:** Data was streaming correctly but suddenly stopped.

**Solutions:**
1. Check the board is still powered and connected
2. Click **Disconnect** then **Connect** to re-establish the connection
3. Check your firmware for conditions that stop UART transmission

---

## Getting Additional Help

If the solutions above do not resolve your issue:

1. Check the **Output** tab in TrinovaQ Studio for detailed error messages
2. Use the terminal command `help` to list available commands
3. Contact TrinovaQ support or file an issue through your organization's TrinovaQ support channel

---

## Related Pages

- [Installation](getting-started/installation) — Initial setup and tool verification
- [Configuration](configuration/settings) — Toolchain path configuration
- [Compile & Flash](features/compile-and-flash) — Build and deployment workflow
- [Serial Monitor](features/serial-monitor) — Hardware communication
