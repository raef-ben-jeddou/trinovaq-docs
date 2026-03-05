---
title: Installation
sidebar_label: Installation
---

# Installation

This page covers installing TrinovaQ Studio and completing the initial setup on a Windows system.

---

## System Requirements

| Requirement | Minimum | Recommended |
|---|---|---|
| **Operating System** | Windows 10 (64-bit) | Windows 11 (64-bit) |
| **RAM** | 4 GB | 8 GB or more |
| **Disk Space** | 500 MB | 1 GB |
| **Display** | 1280 × 720 | 1920 × 1080 |
| **Internet** | Required for initial sign-in | Optional after first login |

:::note
macOS and Linux packages are available. Contact your TrinovaQ account team for platform-specific installation assets.
:::

---

## Download

Download the latest installer from the official TrinovaQ distribution channel provided by your organization. The installer is a standard Windows setup executable (`TrinovaQ_Studio_Setup.exe`).

---

## Installation Steps

1. **Run the installer**
   Double-click `TrinovaQ_Studio_Setup.exe`. If prompted by Windows User Account Control (UAC), click **Yes** to allow the installation.

2. **Accept the license agreement**
   Read and accept the End User License Agreement.

3. **Choose installation directory**
   Accept the default location or choose a custom path. The default is:
   `C:\Users\<YourName>\AppData\Local\TrinovaQ Studio`

4. **Complete installation**
   Click **Install**. The process takes approximately 30–60 seconds.

5. **Launch TrinovaQ Studio**
   Click **Finish** to launch the application, or find it in your Start Menu under **TrinovaQ Studio**.

---

## First Launch: Account Setup

When you open TrinovaQ Studio for the first time, you will see the sign-in screen.

### Option 1: Sign In with Your Organization Account

If your organization has a TrinovaQ Studio subscription:

1. Enter your work email address and password
2. Click **Sign In**
3. Your session will be saved securely for future launches

### Option 2: Create a New Account

If you are setting up for the first time:

1. Click **Create Account** on the sign-in screen
2. Enter your email address and choose a password
3. Click **Sign Up**
4. Check your email for a confirmation link and follow the instructions
5. Return to TrinovaQ Studio and sign in

### Option 3: Offline / Demo Mode

TrinovaQ Studio supports offline operation for development without internet access:

1. On the sign-in screen, click **Continue Offline** (or **Use Demo Account**)
2. You will have access to all core features
3. Compliance features that require user attribution (deviation approvals, audit trail) will use a local demo identity

:::info
In offline mode, deviations and audit records are stored locally. When you reconnect and sign in, your full audit history becomes attributable to your account identity.
:::

---

## Bundled Toolchain

TrinovaQ Studio ships with all required development tools bundled — no separate installation is needed for the core toolchain:

- **GCC** (C compiler for embedded targets, including AVR and ARM support)
- **cppcheck** (MISRA C:2012 static analyzer)

These tools are automatically detected and used when you compile or scan your project. If you have additional toolchain installations on your system, you can configure their paths in [Settings](../configuration/settings).

### Optional: Rust Support

For Rust projects, `rustc` (the Rust compiler) must be installed separately:

1. Install Rust from [rustup.rs](https://rustup.rs)
2. Follow the Windows installation instructions for rustup
3. After installation, TrinovaQ Studio will automatically detect `rustc`

You can verify Rust detection in **Settings → Tool Availability**.

---

## Verifying the Installation

Once signed in, verify your installation is working correctly:

1. Open a project folder using **File → Open Folder** (or `Ctrl+O`)
2. Select or create a folder containing a `.c` or `.rs` source file
3. Open the file in the editor — syntax highlighting should appear immediately
4. Open the terminal panel at the bottom and type:
   ```
   help
   ```
   You should see a list of available commands.

5. Run a quick tool check:
   ```
   scan
   ```
   If cppcheck is detected correctly, a static analysis pass will run on the active file.

---

## Next Steps

- [Quick Start Guide](quick-start) — Open your first project and run an analysis
- [Project Management](../project-management/workspace) — Learn how to organize your workspace
- [Configuration](../configuration/settings) — Customize editor and toolchain settings
