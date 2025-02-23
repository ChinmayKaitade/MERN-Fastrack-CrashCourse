# How to Handle Form Submission in Express.js | GET & POST Methods Explained 🚀❤️‍🔥

### Form Submission in Express.js

- You can use the `<form>` tag with the `action` attribute to specify the URL to which the form data is submitted.
- By default, a form will use the `GET` request, and you can handle it with `app.get` to access form data via `req.query`, as the data is sent through the URL as `query strings`.
- Since URLs have a length limit, you can use the `POST` methods for form submissions, which sends the data in the request body, allowing for larger amounts of data.
- To access data from a POST request, you must first use the `express.urlencoded()` middleware to parse the request body.
  - The urlencoded option `{extended:true}` uses the `qs` library to parse the query string, allowing for more complex structures like nested objects, which the default parser cannot handle.
- Use `req.body` in `app.post` to access the form data sent in the body of a `POST` request.
