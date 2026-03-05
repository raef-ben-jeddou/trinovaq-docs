---
title: Code Editor
sidebar_label: Code Editor
---

# Code Editor

TrinovaQ Studio's code editor provides a professional, feature-rich editing experience purpose-built for automotive embedded software development. It supports both **C** and **Rust** source files and includes a curated library of automotive-specific code templates.

---

## Language Support

The editor automatically detects whether you are working with C or Rust code and applies the appropriate:

- **Syntax highlighting**
- **Auto-completion and IntelliSense**
- **Code formatting**
- **Static analysis markers**

| Language | File Extensions | Compiler |
|---|---|---|
| **C** | `.c`, `.h` | GCC (bundled) |
| **Rust** | `.rs` | rustc (system install required) |

Language detection is instantaneous — no configuration required. Simply open a file and begin coding.

---

## Editor Features

### Tab Management

You can open multiple files simultaneously as tabs:

- Click a file in the **Explorer** panel to open it as a new tab
- Switch between open files by clicking their tabs
- Close a tab with the `×` button on the tab
- Tabs with unsaved changes are indicated with a dot (●) marker

### Syntax Highlighting

Full syntax highlighting is provided for both C and Rust, including:

- Keywords, types, and operators
- String literals and comments
- Preprocessor directives (C)
- Macros and attributes (Rust)

### Code Intelligence

The editor provides:

- **Auto-completion**: Context-aware suggestions as you type
- **Bracket matching**: Automatic highlight of matching brackets and braces
- **Code folding**: Collapse functions, structs, and blocks for better navigation
- **Find and Replace**: `Ctrl+H` opens the find/replace panel; `Ctrl+F` for find-only

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+S` | Save the active file |
| `Ctrl+O` | Open a file or folder |
| `Ctrl+B` | Compile the active file |
| `Ctrl+Shift+I` | Run static analysis (Scan Quality) |
| `Ctrl+F` | Find in file |
| `Ctrl+H` | Find and replace |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| `Ctrl+Q` | Toggle line comment |
| `Ctrl+G` | Go to line |
| `Alt+Up` / `Alt+Down` | Move line up/down |

For the full keyboard shortcut reference, see [Keyboard Shortcuts](keyboard-shortcuts).

---

## Automotive Snippets Library

TrinovaQ Studio includes a curated library of code snippets for common automotive embedded patterns. Snippets reduce boilerplate and promote safe, standards-aligned coding practices.

### Using Snippets

1. Place your cursor in the editor
2. Type the **trigger word** (listed below)
3. Press `Tab` to expand the snippet
4. Use `Tab` to navigate between editable fields within the snippet

### Available Snippets

#### `header_guard`
Generates a standard include guard to prevent recursive header inclusion:

```c
#ifndef MODULE_NAME_H
#define MODULE_NAME_H

/* Your declarations here */

#endif /* MODULE_NAME_H */
```

#### `for_safe`
A defensive loop with explicit bounds checking — recommended for safety-critical code:

```c
uint32_t i;
for (i = 0U; i < SIZE; i++) {
    if (i >= SIZE) { break; } /* defensive bound */
    /* loop body */
}
```

#### `fsm_secure`
A secure Finite State Machine (FSM) skeleton with a defensive default case:

```c
typedef enum {
    STATE_INIT,
    STATE_RUNNING,
    STATE_ERROR,
    STATE_SHUTDOWN
} AppState_t;

AppState_t current_state = STATE_INIT;

switch (current_state) {
    case STATE_INIT:     /* initialization logic */ break;
    case STATE_RUNNING:  /* main logic */           break;
    case STATE_ERROR:    /* error handling */       break;
    case STATE_SHUTDOWN: /* cleanup */              break;
    default:             /* defensive default */    break;
}
```

---

## Viewing Static Analysis Results in the Editor

When you run a static analysis scan (`Ctrl+Shift+I`), the results are overlaid directly in the editor:

- **Inline markers**: Red or yellow underlines on problematic code
- **Gutter icons**: Warning/error icons in the line number gutter
- **Hover tooltips**: Hover over a marker to see the rule ID and description

This integration allows you to address issues without switching away from the editor.

---

## Auto-Save

The editor supports automatic saving to prevent data loss:

- Enable or configure auto-save in **Settings → Editor → Auto-Save**
- The default auto-save delay is 3 seconds after the last keystroke
- A dot indicator in the tab shows unsaved changes
- You are warned before closing a tab or the application if unsaved changes exist

---

## Theme Support

The editor inherits the application theme:

- **Dark Theme** (default): Optimized for extended development sessions
- **Light Theme**: Available via **Settings → Appearance → Theme**

The active theme applies consistently across the editor, sidebar, and panels.
