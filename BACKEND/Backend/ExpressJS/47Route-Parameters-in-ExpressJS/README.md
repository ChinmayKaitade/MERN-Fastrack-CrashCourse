# Route Parameters in Express.js | Dynamic Routes, URL Params & Handling Spaces 🚀❤️‍🔥

### Route Parameters in Express.js

- `Route Parameters` in Express.js are dynamic parts of the URL that can be accessed using `req.params`.
- They are defined in the route path with a colon(:), e.g., `/user/:id/view/:article` where `id` is a route parameter.
- You can access the value of a route parameter via `req.params.id`, `req.params.article` in the route handler.
- Route Parameters are used to capture values from the URL and pass them to the route handler for processing , like user IDs, product names, etc.
- Express automatically parses and makes the values available in `req.params` as an object where the parameter name is the key.

```
https://x.com/vb55chinmay/status/16278364755857
https://x.com/:username/status/:userId
```
