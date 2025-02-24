# EJS Partials in Express: Reusable Components Like ReactJS 🚀❤️‍🔥

### EJS Syntax - Include Partials

- Re-use common templates like headers, footers, etc., using include.

```ejs
<%- include("header")%>
<h1>Welcome to my status</h1>
<%- include("footer")%>

// Make sure header.ejs and footer.ejs are in your views folder.
// If they are inside a folder then use folder/header
```
