# 🚀 Express.js Practice Crash Course

Welcome to the **Express.js Masterclass**! This comprehensive course is designed to give you a deep understanding of Express.js and enable you to build powerful web applications and APIs.

---

## Table of Contents

1. [Introduction to Express.js](#1-introduction-to-expressjs)
2. [Setting Up the Development Environment](#2-setting-up-the-development-environment)
3. [Core Concepts of Express.js](#3-core-concepts-of-expressjs)
4. [Routing in Express](#4-routing-in-express)
5. [Handling Requests and Responses](#5-handling-requests-and-responses)
6. [Template Engines](#6-template-engines)
7. [Working with Static Files](#7-working-with-static-files)
8. [Express with Databases](#8-express-with-databases)
9. [Authentication and Authorization](#9-authentication-and-authorization)
10. [Error Handling and Debugging](#10-error-handling-and-debugging)
11. [Building RESTful APIs](#11-building-restful-apis)
12. [Real-Time Communication](#12-real-time-communication)
13. [Advanced Topics](#13-advanced-topics)
14. [Testing and Deployment](#14-testing-and-deployment)

---

## 1. Introduction to Express.js

### Topics Covered:

- **What is Express.js?**
  - A lightweight web framework for Node.js
  - Simplifies server-side development
- **Benefits of Express.js:**
  - Minimalist and fast
  - Middleware support
  - Scalable for small to large projects
- **Installing Node.js and Setting up Express**
  - Install Node.js: [Node.js Download](https://nodejs.org/)
  - Install Express: `npm install express`
- **Understanding Node.js Modules and npm**
  - Modules are reusable JavaScript code files
  - npm (Node Package Manager) helps manage dependencies

---

## 2. Setting Up the Development Environment

### Topics Covered:

- **Installing and Configuring Express**
  - Create a new project: `npm init -y`
  - Install Express: `npm install express`
- **Setting Up a Basic Express Server**

  ```javascript
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello, World!");
  });

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
  ```

- **Overview of Development Tools:**
  - Postman for API testing
  - VS Code for coding
- **Project Folder Structure**
  ```plaintext
  /project-root
  ├── /node_modules
  ├── /routes
  ├── /controllers
  ├── /models
  ├── /middlewares
  ├── server.js
  └── package.json
  ```

---

## 3. Core Concepts of Express.js

### Topics Covered:

- **Understanding Middleware in Express**
  - Functions that process requests between the client and the server
  - Example:
    ```javascript
    app.use((req, res, next) => {
      console.log("Middleware executed");
      next();
    });
    ```
- **Types of Middleware:**

  1. **Application-Level Middleware:**

     - Attached to the app instance using `app.use()` or `app.METHOD()`.
     - Example:
       ```javascript
       app.use((req, res, next) => {
         console.log("Request Time:", Date.now());
         next();
       });
       ```

  2. **Router-Level Middleware:**

     - Works only with specific routes using `express.Router()`.
     - Example:

       ```javascript
       const router = express.Router();

       router.use("/user", (req, res, next) => {
         console.log("User Middleware triggered");
         next();
       });

       app.use(router);
       ```

  3. **Built-in Middleware:**

     - Provided by Express for common tasks.

     - Examples:

       - `express.json()`: Parse JSON payloads.

       ```
       for eg : {
       "name" : "Chinmay Kaitade",
       "channel Name" : "Coder Canvas"
       }
       ```

     - `express.urlencoded()`: Parse URL-encoded payloads.

     ```
     for eg : name=John%20Doe&age=30
     ```

     - `express.static()`: Serve static files.

  4. **Error-Handling Middleware:**
     - Handles errors in the app using four arguments: `(err, req, res, next)`.
     - Example:
       ```javascript
       app.use((err, req, res, next) => {
         console.error("Error Stack:", err.stack);
         res.status(500).send("Something broke!");
       });
       ```

- **Creating and Using Custom Middleware:**

  - Custom middleware can add headers, validate inputs, or log requests.
  - Example:

    ```javascript
    function validateApiKey(req, res, next) {
      console.log("Validating API Key...");
      if (req.headers["api-key"] !== "my-secret-key") {
        console.log("Invalid API Key");
        return res.status(403).send("Forbidden");
      }
      console.log("API Key validated successfully");
      next();
    }

    app.use(validateApiKey);
    ```

---

## 4. Routing in Express

### Topics Covered:

### Basic Routing

Routing in Express.js is how you define how your app responds to client requests for specific endpoints using HTTP methods like `GET`, `POST`, `PUT`, and `DELETE`.

### HTTP Methods:

- **GET**: Retrieves data from the server.
- **POST**: Sends data to the server (commonly used for form submissions).
- **PUT**: Updates existing data on the server.
- **DELETE**: Deletes data from the server.

### Example Routes:

```javascript
// Handling a GET request to the homepage
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Handling a POST request
app.post("/submit", (req, res) => {
  res.send("Form submitted!");
});

// Handling a PUT request
app.put("/update", (req, res) => {
  res.send("Data updated!");
});

// Handling a DELETE request
app.delete("/delete", (req, res) => {
  res.send("Data deleted!");
});
```

- **Route Parameters and Query Strings**

  - Route parameters:
    ```javascript
    app.get("/user/:id", (req, res) => {
      console.log(`Fetching details for user ID: ${req.params.id}`);
      res.send(`User ID: ${req.params.id}`);
    });
    ```
  - Query strings:
    ```javascript
    app.get("/search", (req, res) => {
      console.log(`Search query: ${req.query.q}`);
      res.send(`Query: ${req.query.q}`);
    });
    ```

- **Express Router for Modular Route Handling**

  - Use `express.Router()` to organize routes by feature.
  - Example:

    ```javascript
    const userRouter = express.Router();

    userRouter.get("/profile", (req, res) => {
      console.log("Accessing user profile");
      res.send("User Profile");
    });

    app.use("/user", userRouter);
    ```

- **Handling Dynamic and Nested Routes**
  - Nested routes:
    ```javascript
    app.get("/user/:userId/orders/:orderId", (req, res) => {
      console.log(
        `User ID: ${req.params.userId}, Order ID: ${req.params.orderId}`
      );
      res.send(`User ${req.params.userId}, Order ${req.params.orderId}`);
    });
    ```

---

## Status Codes

HTTP status codes are grouped into categories based on the first digit, which represents the general nature of the response. Here's what the different categories mean:

---

### **1xx – Informational Responses**

- **Meaning**: The request was received, and the server is continuing to process it.
- **Common Codes**:
  - **100 Continue**: Indicates that the initial part of the request has been received, and the client should continue sending the rest of the request.
  - **101 Switching Protocols**: Informs the client that the server is switching to a different protocol as requested.

---

### **2xx – Success**

- **Meaning**: The request was successfully received, understood, and processed.
- **Common Codes**:
  - **200 OK**: The request was successful, and the response contains the expected data.
  - **201 Created**: A new resource was successfully created.
  - **204 No Content**: The server successfully processed the request but is not returning any content.

---

### **3xx – Redirection**

- **Meaning**: The client must take additional action to complete the request, often involving a new location.
- **Common Codes**:
  - **301 Moved Permanently**: The resource has been permanently moved to a new URL.
  - **302 Found**: The resource is temporarily located at a different URL.
  - **304 Not Modified**: The cached version of the requested resource is still valid, so no new data is sent.

---

### **4xx – Client Errors**

- **Meaning**: There was an issue with the request, often caused by the client.
- **Common Codes**:
  - **400 Bad Request**: The server couldn't understand the request due to invalid syntax.
  - **401 Unauthorized**: Authentication is required, but it is either missing or invalid.
  - **403 Forbidden**: The client does not have permission to access the resource.
  - **404 Not Found**: The requested resource could not be found on the server.

---

### **5xx – Server Errors**

- **Meaning**: The server failed to fulfill a valid request due to an error on its side.
- **Common Codes**:
  - **500 Internal Server Error**: The server encountered an unexpected error.
  - **502 Bad Gateway**: The server received an invalid response from an upstream server.
  - **503 Service Unavailable**: The server is temporarily unavailable, often due to maintenance or overload.
  - **504 Gateway Timeout**: The server didn’t receive a timely response from an upstream server.

---

### Summary Table

| **Category** | **Range** | **Meaning**   | **Example**                                        |
| ------------ | --------- | ------------- | -------------------------------------------------- |
| **1xx**      | 100–199   | Informational | 100 Continue                                       |
| **2xx**      | 200–299   | Success       | 200 OK, 201 Created                                |
| **3xx**      | 300–399   | Redirection   | 301 Moved Permanently, 304 Not Modified            |
| **4xx**      | 400–499   | Client Errors | 400 Bad Request, 404 Not Found                     |
| **5xx**      | 500–599   | Server Errors | 500 Internal Server Error, 503 Service Unavailable |

Each category serves a distinct purpose, helping both clients and servers understand the state of a request or response.

## 5. Handling Requests and Responses

### Topics Covered:

- **Understanding Request and Response Objects**
  - Request (`req`): Data sent from the client
  - Response (`res`): Data sent back to the client
- **Parsing Incoming Requests**
  - Use `body-parser` for parsing JSON and URL-encoded data
- **Sending Responses**
  - Send JSON:
    ```javascript
    res.json({ message: "Success" });
    ```
  - Send files:
    ```javascript
    res.sendFile("/path/to/file");
    ```

---

## 6. Template Engines

### Topics Covered:

- **What are Template Engines?**
  - Tools to dynamically render HTML with data
- **Using Pug and EJS with Express**
  - Install: `npm install pug` or `npm install ejs`
  - Set view engine:
    ```javascript
    app.set("view engine", "pug");
    ```
- **Layouts and Partials**
  Here's a detailed explanation of **Layouts and Partials** in Express.js using Markdown format:

# Layouts and Partials in Express.js

## What Are Layouts and Partials?

When building web applications, it's common to have sections of a webpage that are repeated across multiple pages, such as headers, footers, and navigation bars. Using **Layouts** and **Partials** helps to avoid redundancy by breaking down these common sections into reusable components.

- **Layouts**: Define the overall structure of the webpage, such as the `<html>`, `<head>`, and `<body>` tags, and placeholders for dynamic content.
- **Partials**: Represent smaller reusable pieces of HTML, like a header, footer, or sidebar.

These concepts are typically used with template engines like **EJS**, **Handlebars**, or **Pug**.

---

## Setting Up a Template Engine

To use layouts and partials in an Express.js app, you first need to set up a template engine.

### Example with EJS:

1. **Install EJS**:

   ```bash
   npm install ejs
   ```

2. **Configure EJS in Express**:

   ```javascript
   const express = require("express");
   const app = express();

   // Set EJS as the template engine
   app.set("view engine", "ejs");
   app.set("views", "./views"); // Optional: Customize the views directory
   ```

---

## Using Layouts

A **Layout** acts as a skeleton for your web pages, where you define the common structure and placeholders for dynamic content.

### Example Layout (`views/layout.ejs`):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= title %></title>
  </head>
  <body>
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    <main>
      <%- body %>
      <!-- Placeholder for dynamic content -->
    </main>
    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  </body>
</html>
```

---

## Using Partials

**Partials** are smaller reusable components that can be included in multiple layouts or views.

### Example Header Partial (`views/partials/header.ejs`):

```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
```

### Example Footer Partial (`views/partials/footer.ejs`):

```html
<footer>
  <p>&copy; 2024 My Website</p>
</footer>
```

---

## Integrating Layouts and Partials

You can use the `include` directive in EJS to incorporate partials into layouts or individual pages.

### Example of a Page Using Partials (`views/home.ejs`):

```html
<%- include('partials/header') %>
<main>
  <h2>Welcome to the Home Page!</h2>
  <p>This is the main content of the home page.</p>
</main>
<%- include('partials/footer') %>
```

---

## Rendering Views with Data

You can pass data to your views using the `render` method in Express.

### Example:

```javascript
app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});
```

In this case:

- `title` is passed as dynamic data to the layout or view.
- The layout can use `<%= title %>` to display the page title dynamically.

---

## Layout Management Using Middleware

To streamline the process of integrating layouts, you can use middleware to automatically wrap views in a layout.

### Middleware Example:

```javascript
const expressLayouts = require("express-ejs-layouts");

// Use express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "layout"); // Default layout file (views/layout.ejs)
```

Now, you can simply render your views, and they will automatically be wrapped in the specified layout.

### Example:

```javascript
app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});
```

---

## Advantages of Layouts and Partials

1. **Code Reusability**: Define common components (like headers and footers) once and reuse them across pages.
2. **Separation of Concerns**: Keep your HTML structure modular and maintainable.
3. **Efficiency**: Reduce duplication, making the codebase cleaner and easier to update.
4. **Consistency**: Ensure a uniform structure and design across all pages.

---

## Conclusion

Using layouts and partials in Express.js simplifies the process of managing the structure and design of your web application. By combining a template engine like EJS with reusable components, you can create a maintainable and efficient codebase for your projects.

---

### Resources

- [EJS Documentation](https://ejs.co/)
- [Express.js Guide](https://expressjs.com/)
- [Middleware for Layouts (express-ejs-layouts)](https://www.npmjs.com/package/express-ejs-layouts)

---

## 7. Working with Static Files

Here's a detailed explanation of **Working with Static Files** in Express.js, written in Markdown format:

# Working with Static Files in Express.js

## Overview

Static files are assets that do not change dynamically and are directly served to the client. These include files such as:

- HTML
- CSS
- JavaScript
- Images
- Fonts

Express.js provides a built-in middleware, `express.static()`, to serve static files from a directory.

---

## Setting Up Static Files in Express.js

1. **Create a Static Directory**:
   Place your static assets (e.g., CSS, images, JS) in a directory in your project (commonly named `public`).

   ```plaintext
   project/
   ├── public/
   │   ├── css/
   │   │   └── styles.css
   │   ├── js/
   │   │   └── app.js
   │   └── images/
   │       └── logo.png
   └── app.js
   ```

2. **Serve Static Files Using `express.static`**:
   Use the `express.static()` middleware to serve files from the `public` directory.

   ```javascript
   const express = require("express");
   const app = express();

   // Serve static files from the 'public' directory
   app.use(express.static("public"));

   // Define routes
   app.get("/", (req, res) => {
     res.send(
       '<h1>Welcome to the Home Page</h1><link rel="stylesheet" href="/css/styles.css">'
     );
   });

   // Start the server
   app.listen(3000, () => {
     console.log("Server running on http://localhost:3000");
   });
   ```

   In this example:

   - CSS can be accessed via `/css/styles.css`
   - JavaScript can be accessed via `/js/app.js`
   - Images can be accessed via `/images/logo.png`

---

## Example: Accessing Static Files

### Folder Structure:

```plaintext
public/
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── images/
│   └── logo.png
```

### Example of `styles.css`:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}
```

### Example of an HTML Page:

```javascript
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/css/styles.css">
      </head>
      <body>
        <h1>Static Files in Express.js</h1>
        <img src="/images/logo.png" alt="Logo">
        <script src="/js/app.js"></script>
      </body>
    </html>
  `);
});
```

When the page is loaded:

- The `styles.css` file styles the page.
- The `app.js` file runs any JavaScript logic.
- The `logo.png` image is displayed on the page.

---

## Specifying a Virtual Path Prefix

You can use a virtual path prefix to make your static files appear to be served from a different location.

### Example:

```javascript
app.use("/static", express.static("public"));
```

Now:

- CSS files will be available at `/static/css/styles.css`
- Images will be available at `/static/images/logo.png`

---

## Middleware Order Matters

Ensure `express.static` is added before any route handlers that could potentially conflict.

### Example:

```javascript
// Serve static files first
app.use(express.static("public"));

// Route handlers
app.get("/about", (req, res) => {
  res.send("About Page");
});
```

If `/about` is requested, the `app.get` handler will execute because there is no `/about` file in the `public` directory.

---

## Best Practices for Serving Static Files

1. **Organize Files by Type**:

   - Use subdirectories like `css/`, `js/`, `images/`, etc., to keep files organized.

2. **Caching**:

   - Enable caching headers to improve performance for frequently accessed files. Express sets appropriate caching headers by default.

3. **Security**:

   - Ensure that sensitive files (like `.env` or server-side code) are not accidentally exposed in the public directory.

4. **Use CDN for Large Assets**:

   - For heavy files like videos or libraries, consider hosting them on a CDN for faster delivery.

5. **Minify and Compress**:
   - Use tools like Gzip or Brotli to compress static files and reduce bandwidth usage.

---

## Debugging Static File Issues

1. **Check the Directory Path**:
   Ensure the path specified in `express.static` matches your directory structure.

2. **Inspect HTTP Responses**:
   Use browser developer tools to inspect network requests and ensure static files are being served.

3. **File Permissions**:
   Verify that your static files have the necessary read permissions.

4. **Check Middleware Order**:
   Confirm that `express.static` is added before conflicting route handlers.

---

## Conclusion

Static files are essential for building web applications with styling, interactivity, and multimedia content. Express.js simplifies serving these files using the `express.static` middleware, allowing developers to focus on building dynamic features without worrying about asset delivery.

---

### Resources

- [Express.js Static Middleware Documentation](https://expressjs.com/en/starter/static-files.html)
- [MDN Web Docs: Serving Static Files](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Serving_static_files)

## 8. Express with Databases

### Topics Covered:

- **Connecting to Databases**
  - Example with MongoDB:
    ```javascript
    const mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
    ```
- **Performing CRUD Operations**

---

## 9. Authentication and Authorization

### Topics Covered:

- **Authentication vs. Authorization**
  - Authentication: Verifying the user's identity
  - Authorization: Granting permissions based on roles
- **Implementing User Authentication with JWT**

  - Install dependencies: `npm install jsonwebtoken bcryptjs`
  - Example:

    ```javascript
    const jwt = require("jsonwebtoken");

    app.post("/login", (req, res) => {
      const token = jwt.sign({ userId: req.body.id }, "secretKey");
      res.json({ token });
    });
    ```

- **Securing APIs with Middleware**
  - Verify JWT tokens in requests
- **Role-Based Access Control**
  - Example middleware for roles:
    ```javascript
    function authorizeRole(role) {
      return (req, res, next) => {
        if (req.user.role !== role) {
          return res.status(403).send("Access Denied");
        }
        next();
      };
    }
    ```

---

## 10. Error Handling and Debugging

## 1. Built-in Error-Handling Middleware

Express provides built-in error-handling middleware to manage errors that occur during the request-response cycle.

### Key Features:

- Automatically captures errors passed via `next(err)` or thrown in middleware/route handlers.
- Sends appropriate responses to the client.
- Should always be placed at the end of all middleware and routes.

### Example:

```javascript
const express = require("express");
const app = express();

// Example route throwing an error
app.get("/", (req, res, next) => {
  const error = new Error("Something went wrong!");
  error.status = 500;
  next(error); // Forward the error to the error handler
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Logs the error stack
  res.status(err.status || 500).send({ message: err.message }); // Sends the error message
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## 2. Custom Error Handlers

Custom error-handling middleware allows developers to define specific logic for handling errors in a structured way.

### Advantages:

- Centralized error management.
- Flexibility to handle different error types.
- Consistent response formats.

### Example: Centralized Error Handling

```javascript
function errorHandler(err, req, res, next) {
  if (err.type === "validation") {
    res.status(400).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Example route
app.get("/example", (req, res, next) => {
  const error = new Error("Validation failed!");
  error.type = "validation";
  next(error);
});

// Register the custom error handler
app.use(errorHandler);
```

### Throwing Custom Errors:

```javascript
app.get("/throw-error", (req, res, next) => {
  const error = new Error("Custom error!");
  error.type = "custom";
  next(error);
});
```

---

## 3. Debugging Express Applications

Debugging is essential to identify and resolve issues efficiently during development and production.

### Using the `debug` Package

`debug` is a lightweight package for conditional logging.

#### Installation:

```bash
npm install debug
```

#### Usage:

1. Import the `debug` package and define a namespace.
2. Use the namespace for logging debug information.
3. Enable the logs by setting the `DEBUG` environment variable.

#### Example:

```javascript
const debug = require("debug")("app:server");

app.get("/debug", (req, res) => {
  debug("This is a debug message");
  res.send("Check the debug logs!");
});

// Run with DEBUG=app:server node server.js
```

### Run with Debug Logs:

```bash
DEBUG=app:* node server.js
```

---

## 4. Logging Errors with Winston or Morgan

Logging is crucial for monitoring and debugging applications. Popular tools include **Winston** and **Morgan**.

### Using Morgan for HTTP Request Logging

Morgan is a middleware for logging HTTP requests.

#### Installation:

```bash
npm install morgan
```

#### Setup:

```javascript
const morgan = require("morgan");

// Use Morgan middleware
app.use(morgan("combined"));
```

### Using Winston for General Logging

Winston is a comprehensive logging library for capturing application-level logs.

#### Installation:

```bash
npm install winston
```

#### Setup:

```javascript
const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log" }), // Logs errors to a file
  ],
});

// Log errors using Winston
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).send("An error occurred");
});
```

---

## 5. Best Practices

1. **Use Built-in Middleware for General Error Handling**:
   - Always include a catch-all error-handling middleware.
2. **Create Custom Handlers for Specific Scenarios**:
   - Example: Validation errors or API-specific errors.
3. **Employ Debugging Tools**:
   - Use `debug` to selectively enable and disable logs.
4. **Implement Logging Libraries**:
   - Use tools like Morgan for request-level logging.
   - Employ Winston for application-level logging.
5. **Avoid Exposing Internal Error Details**:
   - Always sanitize error responses to prevent leaking sensitive information.
6. **Test Error Cases Regularly**:
   - Write test cases to ensure proper error handling and responses.

---

## 11. # Building RESTful APIs in Express.js

## 11. Building RESTful APIs

This section covers the principles, design, and implementation of RESTful APIs using Express.js, complete with examples for each concept.

---

### Principles of REST Architecture

REST (Representational State Transfer) is a set of architectural principles for designing networked applications. Key principles include:

1. **Statelessness**

   - Each request from a client must contain all the necessary information to process it.
   - No client context is stored on the server.
   - Example:
     ```javascript
     app.get("/api/user/:id", (req, res) => {
       const userId = req.params.id; // The server uses this ID to fetch the user
       res.json({ userId, name: "John Doe" });
     });
     ```

2. **Resource-Based Design**

   - Resources are identified by URIs (e.g., `/api/products`).
   - Use HTTP methods to perform actions on resources:
     - GET: Retrieve a resource
     - POST: Create a new resource
     - PUT: Update an existing resource
     - DELETE: Remove a resource

   Example:

   ```javascript
   // Retrieve a product
   app.get("/api/products/:id", (req, res) => {
     const product = { id: req.params.id, name: "Laptop", price: 1200 };
     res.json(product);
   });

   // Create a new product
   app.post("/api/products", (req, res) => {
     const newProduct = req.body;
     res.status(201).json({ message: "Product created", product: newProduct });
   });
   ```

---

### Designing RESTful Endpoints

#### Best Practices for RESTful Endpoints:

- Use nouns for resources (e.g., `/users`, `/orders`).
- Avoid verbs in endpoint names.
- Use plural names for collections (e.g., `/products` for a list of products).
- Use path parameters for resource identification and query parameters for filters.

Example:

```javascript
// Fetch all products
app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" },
  ];
  res.json(products);
});

// Fetch a specific product
app.get("/api/products/:id", (req, res) => {
  const product = { id: req.params.id, name: "Laptop" };
  res.json(product);
});

// Update a product
app.put("/api/products/:id", (req, res) => {
  const updatedProduct = req.body;
  res.json({ message: "Product updated", product: updatedProduct });
});

// Delete a product
app.delete("/api/products/:id", (req, res) => {
  res.json({ message: `Product with ID ${req.params.id} deleted` });
});
```

---

### Versioning APIs

API versioning ensures backward compatibility when making changes to an API. Common strategies:

1. **Version in URL**

   ```javascript
   app.get("/api/v1/products", (req, res) => {
     res.json({ version: "v1", products: [] });
   });
   ```

2. **Version in Headers**
   ```javascript
   app.get("/api/products", (req, res) => {
     const version = req.headers["api-version"] || "v1";
     res.json({ version, products: [] });
   });
   ```

---

### Pagination and Filtering

Large datasets should be paginated and allow filtering to improve usability and performance.

#### Pagination Example:

```javascript
app.get("/api/products", (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Default values
  const products = [
    /* Array of products */
  ];

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + Number(limit);

  const paginatedProducts = products.slice(startIndex, endIndex);
  res.json({ page, limit, products: paginatedProducts });
});
```

#### Filtering Example:

```javascript
app.get("/api/products", (req, res) => {
  const { category, priceRange } = req.query;
  let products = [
    /* Array of products */
  ];

  if (category) {
    products = products.filter((product) => product.category === category);
  }

  if (priceRange) {
    const [min, max] = priceRange.split("-").map(Number);
    products = products.filter(
      (product) => product.price >= min && product.price <= max
    );
  }

  res.json(products);
});
```

---

## 12. Real-Time Communication

### Topics Covered:

- **Introduction to WebSockets**
  - Real-time bi-directional communication
- **Integrating Socket.io with Express**

  - Install: `npm install socket.io`
  - Example:

    ```javascript
    const http = require("http");
    const socketIo = require("socket.io");

    const server = http.createServer(app);
    const io = socketIo(server);

    io.on("connection", (socket) => {
      console.log("New client connected");
      socket.on("message", (msg) => {
        io.emit("message", msg);
      });
    });

    server.listen(3000);
    ```

---

## 13. Advanced Topics

Here’s a detailed explanation of **Advanced Topics** in Express.js:

# Advanced Topics in Express.js

This section covers advanced topics for optimizing and securing your Express.js applications, scaling them for high traffic, and understanding how middleware and reverse proxies play a role.

---

## 1. Middleware Chaining and Request Lifecycle

### **Request Lifecycle in Express**

1. **Incoming Request**: A client sends an HTTP request to the server.
2. **Middleware Processing**: Middleware functions handle the request sequentially, performing tasks such as logging, authentication, validation, etc.
3. **Route Handler**: The request reaches the route handler, which processes it and sends back a response.
4. **Response**: The server sends the response back to the client.

### **Middleware Chaining**

Middleware chaining refers to the process of passing control from one middleware function to another in sequence.

#### **Example: Chaining Middleware**

```javascript
const express = require("express");
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log("Middleware 1");
  req.customProperty = "Hello from Middleware 1";
  next(); // Pass control to the next middleware
});

// Middleware 2
app.use((req, res, next) => {
  console.log("Middleware 2");
  console.log(req.customProperty); // Access property set by Middleware 1
  next();
});

// Route Handler
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## 2. Rate Limiting and Security Enhancements

Protect your application from abuse and security threats by implementing rate limiting and security headers.

### **Rate Limiting**

Rate limiting restricts the number of requests a client can make in a given time.

#### **Using `express-rate-limit`**

1. Install the package:

   ```bash
   npm install express-rate-limit
   ```

2. Apply rate limiting:

   ```javascript
   const rateLimit = require("express-rate-limit");

   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100, // Limit each IP to 100 requests per window
     message: "Too many requests, please try again later.",
   });

   app.use(limiter);
   ```

---

### **Security Enhancements**

#### **Using `helmet`**

`helmet` helps secure Express apps by setting various HTTP headers.

1. Install the package:

   ```bash
   npm install helmet
   ```

2. Apply it to your app:

   ```javascript
   const helmet = require("helmet");
   app.use(helmet());
   ```

3. Features provided by `helmet`:
   - Content Security Policy
   - XSS Filter
   - Frameguard
   - Hide X-Powered-By Header

---

## 3. Scaling Express Applications

When your application handles high traffic, you need to scale it effectively.

### **Load Balancing**

Distribute incoming traffic across multiple server instances to improve performance and reliability.

#### **Using PM2 for Load Balancing**

PM2 is a process manager for Node.js.

1. Install PM2:

   ```bash
   npm install pm2 -g
   ```

2. Start your application in cluster mode:
   ```bash
   pm2 start app.js -i max
   ```
   - `-i max`: Starts one instance per CPU core.

---

### **Clustering**

Node.js supports clustering natively via the `cluster` module.

#### **Example: Clustering in Express**

```javascript
const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process is running on PID: ${process.pid}`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Worker ${process.pid} is handling this request`);
  });

  app.listen(3000, () =>
    console.log(`Server running on port 3000 with PID: ${process.pid}`)
  );
}
```

---

## 4. Using Reverse Proxies

A reverse proxy sits between clients and your server to manage requests, improve performance, and add an additional layer of security.

### **Benefits of Reverse Proxies**

- **Load Distribution**: Distribute traffic among multiple server instances.
- **SSL Termination**: Handle SSL encryption at the proxy level.
- **Caching**: Cache static files or responses to reduce server load.

### **Setting Up a Reverse Proxy with Nginx**

1. **Install Nginx**:

   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. **Configure Nginx**:
   Edit the Nginx configuration file:

   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```

   Add the following:

   ```nginx
   server {
       listen 80;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Restart Nginx**:
   ```bash
   sudo systemctl restart nginx
   ```

---

## Conclusion

Understanding and implementing these advanced techniques helps improve the performance, scalability, and security of your Express.js applications. With tools like middleware chaining, rate limiting, clustering, and reverse proxies, you can build robust and production-ready applications.

---

### Resources

- [Express.js Middleware Documentation](https://expressjs.com/en/guide/using-middleware.html)
- [express-rate-limit GitHub](https://github.com/nfriedly/express-rate-limit)
- [helmet GitHub](https://github.com/helmetjs/helmet)
- [PM2 Documentation](https://pm2.keymetrics.io/)
- [Nginx Documentation](https://www.nginx.com/resources/)

# 14. Testing and Deployment in Express.js

Testing and deployment are critical steps in ensuring the reliability and scalability of your Express.js applications. This section covers how to write tests, implement CI/CD pipelines, and deploy applications on cloud platforms.

---

## 1. Writing Unit and Integration Tests

Testing helps ensure your application works as expected, even after introducing changes.

### **Types of Tests**

1. **Unit Tests**:

   - Test individual functions or modules in isolation.
   - Example: Testing a utility function.

2. **Integration Tests**:
   - Test interactions between different modules, such as route handlers and middleware.

---

### **Using Mocha, Chai, and Supertest**

#### **Setup**

Install the necessary libraries:

```bash
npm install --save-dev mocha chai supertest
```

- **Mocha**: A test runner to execute test cases.
- **Chai**: An assertion library for expressive assertions.
- **Supertest**: A library for testing HTTP requests.

---

#### **Example: Testing a GET Route**

Here’s an example of testing an Express route:

**App Code (`app.js`):**

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

module.exports = app;
```

**Test Code (`test/app.test.js`):**

```javascript
const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return Hello, World!", (done) => {
    request(app).get("/").expect(200, "Hello, World!", done);
  });
});
```

#### **Running the Tests**

Add a test script to your `package.json`:

```json
"scripts": {
    "test": "mocha"
}
```

Run the tests:

```bash
npm test
```

---

#### **Example: Testing POST Route with Validation**

**App Code:**

```javascript
app.post("/user", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Name is required");
  }
  res.status(201).send(`User ${name} created`);
});
```

**Test Code:**

```javascript
describe("POST /user", () => {
  it("should create a user with valid data", (done) => {
    request(app)
      .post("/user")
      .send({ name: "John" })
      .expect(201, "User John created", done);
  });

  it("should return 400 if name is missing", (done) => {
    request(app).post("/user").send({}).expect(400, "Name is required", done);
  });
});
```

---

## 2. CI/CD for Express Applications

### **Continuous Integration (CI)**

CI ensures that code changes are tested and integrated into the main branch frequently.

#### **Steps to Set Up CI with GitHub Actions**

1. **Create a `.github/workflows/ci.yml` file:**

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm install
      - run: npm test
```

2. **Push Changes**:
   - Push your code to GitHub. The CI pipeline will run tests automatically.

---

### **Continuous Deployment (CD)**

CD automates the deployment process to ensure the application is always in a releasable state.

#### **Example: Heroku Deployment via GitHub Actions**

1. **Add a Deployment Job:**

   ```yaml
   deploy:
     needs: test
     runs-on: ubuntu-latest
     steps:
       - uses: actions/checkout@v3
       - uses: actions/setup-node@v3
         with:
           node-version: 16
       - run: npm install
       - run: npm run build
       - name: Deploy to Heroku
         uses: akhileshns/heroku-deploy@v3.12.12
         with:
           heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
           heroku_app_name: your-app-name
           heroku_email: your-email@example.com
   ```

2. **Set Secrets in GitHub**:
   - Add `HEROKU_API_KEY`, `HEROKU_APP_NAME`, and `HEROKU_EMAIL` in your GitHub repository secrets.

---

## 3. Deploying on Cloud Platforms

### **Heroku Deployment**

1. **Install Heroku CLI**:

   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**:

   ```bash
   heroku login
   ```

3. **Create a Heroku App**:

   ```bash
   heroku create
   ```

4. **Deploy the App**:

   - Add a `Procfile` in the root of your project:
     ```
     web: node app.js
     ```
   - Push to Heroku:
     ```bash
     git push heroku main
     ```

5. **Access Your App**:
   - Visit the Heroku app URL provided after deployment.

---

### **AWS Deployment**

1. **Set Up an EC2 Instance**:

   - Launch an EC2 instance and configure security groups.

2. **Install Node.js on the Instance**:

   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

3. **Clone Your Repository**:

   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo
   ```

4. **Install Dependencies and Start the App**:

   ```bash
   npm install
   node app.js
   ```

5. **Access the App**:
   - Use the public IP address of the EC2 instance.

---

### **DigitalOcean Deployment**

1. **Create a Droplet**:

   - Set up a Ubuntu droplet.

2. **Set Up the Server**:

   - Install Node.js and clone your repository as described for AWS.

3. **Set Up a Reverse Proxy with Nginx**:

   - Install Nginx:
     ```bash
     sudo apt install nginx
     ```
   - Configure Nginx to forward requests to your Node.js app.

4. **Access Your Application**:
   - Use the domain or droplet IP.

---

## Conclusion

Testing and deployment are crucial for creating reliable, scalable Express.js applications. By writing tests, automating processes with CI/CD pipelines, and deploying to cloud platforms like Heroku, AWS, or DigitalOcean, you ensure your application is robust and always ready for users.

---

### Resources

- [Mocha Documentation](https://mochajs.org/)
- [Chai Documentation](https://www.chaijs.com/)
- [Supertest GitHub](https://github.com/visionmedia/supertest)
- [Heroku Documentation](https://devcenter.heroku.com/)
- [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/)
- [DigitalOcean Node.js Guide](https://www.digitalocean.com/community/tutorials)

```

This Markdown document provides a complete guide on testing and deploying Express.js applications, covering testing frameworks, CI/CD pipelines, and deployment strategies.

```
