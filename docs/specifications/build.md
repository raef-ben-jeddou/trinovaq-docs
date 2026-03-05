---
id: build-specs
title: Build System — Specifications
sidebar_label: Build System
---

# Build System — Specifications

This page contains the formal feature specifications for the TrinovaQ Studio build pipeline. For usage instructions and examples, see [Compile & Flash](../features/compile-and-flash).

---

## Overview

The build system manages the compilation of C and Rust source code into executable binaries targeting embedded hardware. It handles compiler invocation, hardware constraint validation, build provenance recording, and binary deployment to target devices.

---

## Feature Specifications

| ID | Feature | Description |
|---|---|---|
| **TRQ-BLD-001** | **Isolated Build Environment** | All compilation occurs in an isolated temporary directory to prevent conflicts with the project source tree and avoid antivirus-related file locking. Each build uses a uniquely named output file to prevent access conflicts from concurrent or prior builds. |
| **TRQ-BLD-002** | **C Compilation** | Compiles C source files using the bundled GCC toolchain with settings appropriate for the selected target hardware (AVR for Arduino Uno, ARM for STM32, Xtensa for ESP32). |
| **TRQ-BLD-003** | **Rust Compilation** | Compiles Rust source files using the system-installed rustc compiler with debug information enabled. |
| **TRQ-BLD-004** | **Hardware Constraint Validation** | After compilation, the build system checks the binary size and estimated RAM consumption against the selected target hardware's limits. A warning is issued if either limit is exceeded. |
| **TRQ-BLD-005** | **Build Manifest Recording** | Every successful compilation automatically records a build manifest capturing the compiler version, compiler flags, source file list, build timestamp, and SHA-256 hash of the output binary. |
| **TRQ-BLD-006** | **Secure Flash Deployment** | Before deploying a binary to hardware, its integrity is validated. Only binaries produced by the current session are accepted for deployment. |
| **TRQ-BLD-007** | **SBOM Generation** | The build system can generate a Software Bill of Materials (SBOM) in SPDX 2.3 JSON format, listing all project source files with their SHA-256 checksums and build relationships. |

---

## Supported Target Hardware

| Target | Architecture | RAM Limit | Flash Limit | Flash Protocol |
|---|---|---|---|---|
| **Arduino Uno** | AVR (8-bit) | 2 KB | 32 KB | avrdude via USB serial (arduino programmer) |
| **STM32 F103** | ARM Cortex-M3 (32-bit) | 20 KB | 128 KB | OpenOCD via ST-Link debug adapter |
| **ESP32** | Xtensa dual-core (32-bit) | 512 KB | 4 MB | Not yet supported |

---

## Build Manifest Contents

| Field | Description |
|---|---|
| Compiler name and version | Exact version string of GCC or rustc |
| Compiler flags | Full flag set used for the build |
| Source files | List of all compiled source files |
| Build timestamp | ISO 8601 date and time of the build |
| Output binary hash | SHA-256 checksum of the compiled binary |
| Target hardware | Selected hardware target |

Build manifests are stored within the project database and are accessible from the Reports view.

---

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| **TRQ-BLD-NF-001** | Compilation of a 1,000-line C file must complete within 30 seconds on the reference hardware |
| **TRQ-BLD-NF-002** | A build failure must not leave partial artifacts in the project source directory |
| **TRQ-BLD-NF-003** | The build manifest must be recorded before the compile result is returned to the UI |
| **TRQ-BLD-NF-004** | Build manifests must be immutable after recording |

---

## Standards Support

| Standard | Relevance |
|---|---|
| **ISO 26262 Part 8 (TCL)** | Build manifests provide tool confidence level evidence |
| **ISO/SAE 21434 Clause 10** | SBOM export supports supply chain traceability requirements |
| **SPDX 2.3** | SBOM output format standard |

---

## Related Pages

- [Compile & Flash](../features/compile-and-flash) — User guide with workflow and examples
- [Reports & SBOM](../features/reports-and-sbom) — Build manifest and SBOM documentation
- [Safety Compliance Workflow](../automotive-workflows/safety-compliance) — How build evidence fits into the compliance process
