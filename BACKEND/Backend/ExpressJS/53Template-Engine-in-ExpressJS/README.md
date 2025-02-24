# EJS Template Engine in Express.js | Dynamic Content Made Easy 🚀❤️‍🔥

### Template Engines

- A template engine in Express.js is used to render dynamic HTML by injecting data into templates.
- Popular engines like EJS, Pug, or Handlebars can be integrated with Express.
- All engines have different syntax similar to HTML, but it helps to pass down dynamic values from express to HTML.
- Set tge engine using `app.set("view engine", "ejs")` and specify the template folder with `app.set("views", "./views")`.
- Render templates using `res.render("templateName", {key:value}).`
  - `res.ender("index", {title:"Welcome", message:"Hello World"})`
- Install the engine using npm (e.g. `npm install ejs`) and create templates with placeholders like `<%= title %>` for data insertion.

### EJS

- We will be using EJS in this course.
- EJS(Embedded JavaScript) is a simple templating engine for generating dynamic HTML pages.
- It integrates JavaScript logic into HTML using special tags like <%= %>.
- Supports JavaScript features like loops, conditionals, and partials.
- Escapes HTML by default to prevent injection, with options for unescaped output.
- Widely used with Express.js for rendering views dynamically.

### EJS Syntax - Comments

- Add comments in your templates using `<%#...%>`. These are not included in the output.

```ejs
<%# This is a comment%>
<p>Visible Content</p>
```

### EJS Syntax - Outputting Values

- Escaped Output(<%...%>)
  - Used to print dynamic content, escaping any special HTML characters to prevent injection.

```ejs
<h1><% title %></h1> <!-- Prints: Welcome -->

// Express
res.render("index",{title:"<Welcome>"})

// Output
<h1>&lt;Welcome&gt;</h1>
```

- Unescaped Output(<%-...%>)
  - Prints raw HTML without escaping.
  - It's dangerous, make sure to sanitize data before using it.

```
// EJS
<div><%- content %></h1> <!-- Inserts raw HTML -->

// Express
res.render("index",{content:"<strong>Bold Text</strong>"})

// Output
<div><strong>Bold Text</strong></div>
```
