---
id: build-specs
title: Build System
sidebar_label: Build System
---

# Build System & Compilation

## Overview
The build system handles the compilation of source code into executable binaries. It manages temporary file creation, compiler invocation (`gcc` / `rustc`), and cleanup.

## Requirements Specification

| ID | Feature Name | Description | Implementation Detail |
| :--- | :--- | :--- | :--- |
| **TRQ-BLD-001** | **Temp Directory Build** | All compilation occurs in the system `%TEMP%` directory to avoid permission issues and Antivirus locking. | Path: `app.getPath('temp')` + timestamped filename. |
| **TRQ-BLD-002** | **C Compilation** | Compiles C code using GCC with console subsystem support. | Command: `gcc "file.c" -o "out.exe" -mconsole`. |
| **TRQ-BLD-003** | **Rust Compilation** | Compiles Rust code using the Rust compiler with debug info. | Command: `rustc "file.rs" -g -o "out.exe"`. |
| **TRQ-BLD-004** | **File Locking Prevention** | The system generates unique filenames (`trinova_build_{timestamp}.exe`) for every build to prevent `EBUSY` or `Permission Denied` errors if a previous build is still running. | Implemented in `getBuildPath`. |