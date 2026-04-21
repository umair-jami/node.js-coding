# 🌐 Web Fundamentals

## 📝 HTML (HyperText Markup Language)
The standard markup language for creating web pages. HTML defines the structure and content using elements like `<h1>`, `<p>`, `<div>`, etc.

## 🎨 CSS (Cascading Style Sheets)
A stylesheet language that controls the visual presentation of HTML elements, including colors, fonts, spacing, layout, and overall appearance.

---

# ⚡ JavaScript and Its Ecosystem

## 🤔 What is JavaScript?
JavaScript is a dynamic, interpreted programming language primarily used for:
- 🌐 Creating interactive web pages
- 💻 Building web applications
- 🖥️ Server-side development (Node.js)
- 📱 Mobile app development
- 🖥️ Desktop applications

## 📱 Mobile JavaScript Frameworks
- **React Native**: Build native mobile apps using JavaScript and React
- **Ionic**: Cross-platform mobile apps using web technologies (HTML, CSS, JS)
- **NativeScript**: Native mobile apps with Vue.js, Angular, or plain JavaScript

---

# 🟢 Understanding Node.js

## 🤔 What is Node.js?
Node.js is a **runtime environment** (not a framework or library) that allows JavaScript to run outside the browser. It's built on:
- **V8 JavaScript Engine** ⚡ (Chrome's JS engine)
- **C++** 🔧 for system-level operations
- Created by **Ryan Dahl** 👨‍💻 in 2009

## 🔑 Key Characteristics
- 🖥️ Server-side JavaScript execution
- ⚡ Event-driven, non-blocking I/O
- 🧵 Single-threaded with event loop
- 🌍 Cross-platform compatibility

---

# 🚀 JavaScript Engines

Different browsers use different JavaScript engines:

| Browser | Engine | Description |
|---------|---------|-------------|
| Chrome 🟢 | V8 | High-performance engine that compiles JS to machine code |
| Firefox 🦊 | SpiderMonkey | Mozilla's JavaScript engine |
| Safari 🧭 | Nitro (JavaScriptCore) | Apple's optimized JS engine |
| Edge 🔵 | V8 | Microsoft Edge uses Chrome's V8 engine |

---

# 🚀 Getting Started with Node.js

## 📦 Installation
1. Visit [Node.js official website](https://nodejs.org/) 🌐
2. Download the **LTS** (Long-Term Support) version ✅
3. Install following the setup wizard 🎯

## ✅ Verification
Check if Node.js is installed:
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Access Node.js REPL
node
```

## 👋 Your First Node.js Program
Create `hello.js`:
```javascript
console.log('Hello, World!');
```

Run it:
```bash
node hello.js
```

## 🛠️ Useful Commands
```bash
# Get help
node --help

# Watch for file changes (Node.js 18+)
node --watch hello.js

# Run with specific Node.js flags
node --inspect hello.js
```

## 📦 What is npm?
**npm (Node Package Manager)** is the default package manager for Node.js, used to:
- 📥 Install third-party packages
- 🔧 Manage project dependencies
- 📤 Publish your own packages
- ▶️ Run scripts

---

# 🌐 Node.js vs Browser Environment

## 🌍 Browser-Specific Features (Not available in Node.js)
```javascript
// These don't work in Node.js ❌
alert('Hello');           // Web API
window.location;          // Browser object
document.getElementById(); // DOM API
fetch('url');            // Web API (use node-fetch or built-in fetch in Node 18+)
```

## 🖥️ Node.js-Specific Features (Not available in browsers)
```javascript
// These don't work in browsers ❌
const fs = require('fs');        // File system access
const path = require('path');    // Path utilities
process.exit(0);                 // Process control
__dirname, __filename;           // File/directory info
```

## ✅ Common Features (Available in both)
```javascript
// These work in both environments ✅
console.log('Hello');
setTimeout(() => {}, 1000);
setInterval(() => {}, 1000);
JSON.parse(), JSON.stringify();
```

**📝 Note**: While `setTimeout` exists in both, it's implemented differently:
- **Browser** 🌐: Part of Web API
- **Node.js** 🟢: Re-implemented using the timers module

---

# 📦 Node.js Modules System

## 🎁 Module Wrapper Function
Every Node.js file is wrapped in a function:
```javascript
(function(exports, require, module, __filename, __dirname) {
    // Your code here
});
```

## 📚 Three Types of Modules

### 1️⃣ Built-in Modules
Come with Node.js installation:
```javascript
const fs = require('fs');           // 📁 File system
const path = require('path');       // 🛤️ Path utilities
const http = require('http');       // 🌐 HTTP server/client
const crypto = require('crypto');   // 🔐 Cryptographic functions
```

### 2️⃣ Third-party Modules
Installed via npm:
```javascript
const express = require('express'); // 🚀 Web framework
const lodash = require('lodash');   // 🧰 Utility library
const axios = require('axios');     // 📡 HTTP client
```

### 3️⃣ Custom Modules
Your own modules:
```javascript
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;

// main.js
const math = require('./math.js');
console.log(math.add(5, 3)); // 8
```

## 🔍 Module Resolution Order
When using `require()`:
1. Check for **relative/absolute path** (`./`, `../`, `/`) 📍
2. Check **node_modules** for third-party modules 📦
3. Check **built-in modules** 🏠
4. Throw error if not found ❌

---

# ⭐ Best Practices

1. **Use LTS Node.js versions** 🏷️ for production
2. **Prefer asynchronous methods** ⚡ to avoid blocking
3. **Always handle errors** 🛡️ in async operations
4. **Use `path` module** 🛤️ for cross-platform path handling
5. **Follow semantic versioning** 📝 for your packages
6. **Use `.gitignore`** 🙈 to exclude `node_modules`
7. **Initialize projects with `npm init`** 🎯