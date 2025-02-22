# ES Modules in Node.js - Caveats, `__dirname` & `__filename` Fixes | Top-Level Await Explained 🚀❤️‍🔥

### ES Modules -Caveats

**_ES Modules_**

1. ES Modules (import/export) are an alternatives to CommonJS(require/module.exports)
2. In newer versions of Node.js(14.8+), you can use top-level await without needing to wrap in an async function.

**_Top-Level await Example_**
**_`__dirname` and `__filename` Issue_**

1. In CommonJS, **dirname(current directory) and **filename(current file path) are available by default.
2. In ES Modules, they don't exist.
3. This can be problematic when you need to get the directory or file path.

**_Solution (Node.js 20.11.0+)_**

1. console.log(import.meta.dirname);
2. console.log(import.meta.filename);
3. In Node.js 20.11.0 and above, **dirname and **filename can be accessed using import.meta

**_Solution for Older Versions (Before 20.11.0)_**

```javascript
import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

console.log({ __dirname, __filename });
```
