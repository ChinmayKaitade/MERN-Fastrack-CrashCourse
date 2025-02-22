# Serve HTML CSS & JavaScript in ExpressJS | express.static Explained 🚀❤️‍🔥

- Static files as name mentions are files which don't change, these can be assets like images, css, html, font, etc.
- Express has middleware named `express.static("public")` which we can use to serve static files.
  - We will learn about middleware in details later.
- Files in the static directory are accessible via their URL for instance, if you have an image logo.png in the public folder, you can access it in the browser `http://localhost:3000/logo.png`.
- It will handle all files inside the directory provided.
