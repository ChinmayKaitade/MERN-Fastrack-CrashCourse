# How to Handle a 404 Error Page in ExpressJS 🚀❤️‍🔥

### Handling 404 Page

- Use a middleware function with no specific route, like `app.use((req, res)=>{...})`, to handle unmatched routes.
- Inside the middleware, send a 404 status using res.status(404) and a custom message or HTML response.
- Place this middleware after all defined routes to catch only unhandled requests.

```javascript
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});
```
