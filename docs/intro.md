---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
---

# Welcome to TrinovaQ Studio

**TrinovaQ Studio** is a specialized Integrated Development Environment (IDE) built for automotive and embedded software developers. It provides a complete, safety-oriented development workflow — from writing and analyzing source code to building firmware and deploying it to embedded hardware targets.

TrinovaQ Studio is designed from the ground up to support the safety and cybersecurity standards used in the automotive industry, including **MISRA C:2012**, **ISO 26262** (Functional Safety), and **ISO/SAE 21434** (Automotive Cybersecurity). It is intended for teams targeting ASIL D compliance and similar high-integrity development contexts.

---

## Who Is This For?

TrinovaQ Studio is built for:

- **Embedded software engineers** developing firmware for automotive ECUs and microcontrollers
- **Safety engineers** managing MISRA deviations, compliance evidence, and risk assessments
- **Security engineers** working with threat analysis artifacts (TARA) and supply chain documentation
- **Team leads and architects** who need visibility into project-wide compliance posture

---

## Key Advantages

| Capability | Description |
|---|---|
| **Unified Development Environment** | Code, analyze, compile, and flash from a single tool |
| **Built-in MISRA C:2012 Analysis** | Static analysis with industry-standard rule enforcement |
| **ISO 26262 / ISO/SAE 21434 Alignment** | Deviation tracking, TARA integration, SBOM export |
| **Multi-Target Embedded Support** | Arduino Uno (AVR), STM32 F103 (ARM Cortex-M3), ESP32 |
| **Dual Language Support** | C (with GCC) and Rust (with rustc) in one workflow |
| **Compliance Evidence Generation** | Automated reports, audit logs, and SPDX SBOM export |
| **Role-Based Access Control** | Controlled approval workflows for deviations and safety decisions |
| **Integrated Serial Monitor** | Direct UART communication with connected hardware |

---

## Core Capabilities at a Glance

```
┌─────────────────────────────────────────────────────────────┐
│                     TrinovaQ Studio                         │
├──────────────┬──────────────┬───────────────┬──────────────┤
│ Code Editor  │Static Analysis│  Build & Flash │  Compliance  │
│  (C / Rust)  │(MISRA C:2012) │ (GCC / rustc) │  Evidence    │
├──────────────┴──────────────┴───────────────┴──────────────┤
│          Project Management · Configuration · Serial I/O    │
└─────────────────────────────────────────────────────────────┘
```

---

## Getting Started

If you are new to TrinovaQ Studio, follow this path:

1. **[Installation](getting-started/installation)** — Install the application and set up your account
2. **[Quick Start](getting-started/quick-start)** — Open a project, run your first analysis, and compile
3. **[Automotive Workflows](automotive-workflows/embedded-development)** — Understand the recommended development workflow
4. **[Configuration](configuration/settings)** — Customize the IDE for your project

---

## Standards Reference

TrinovaQ Studio is aligned with the following standards:

| Standard | Area | Role in Studio |
|---|---|---|
| **MISRA C:2012** | C Coding Rules | Static analysis enforcement and deviation tracking |
| **ISO 26262** | Functional Safety | Safety scoring, deviation approval workflow, build evidence |
| **ISO/SAE 21434** | Automotive Cybersecurity | TARA integration, SBOM export |
| **ASPICE** | Process Assessment | Deviation approval lifecycle, audit trail |

---

## Navigation

Use the sidebar to navigate to any section of the documentation. Key sections:

- **Getting Started** — Installation and first steps
- **Features** — In-depth documentation for every major feature
- **Automotive Workflows** — End-to-end workflow guides
- **Configuration** — Settings, policies, and customization
- **Best Practices** — Recommended patterns for compliance-focused teams
- **Troubleshooting** — Common issues and solutions
- **Technical Specifications** — Detailed specification tables

You can also type `docs` or `man` in the integrated terminal to open this documentation in your browser.
