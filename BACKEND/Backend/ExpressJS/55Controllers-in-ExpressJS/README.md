# Controllers in Express.js: Simplify Your URL Shortener Project 🚀❤️‍🔥

### Model View Controller (MVC)

- MVC is a Software Design pattern that separates an application into three distinct layers: Model, View, and Controller, each with a specific responsibility.
- Model: Manages Data and Logic
  - Represents the data of the application, handles business logic, and interacts with the database(e.g. CRUD Operations).
- View: Handles User Interface
  - Displays the data to the user. It's responsible for rendering the presentation (HTML, CSS, JavaScript) based on the data provided by the Controller.
- Controller: The Mediator
  - Acts as the intermediary between the Model and View. It handles user input, interacts with the Model to fetch or update data and passes the data to the View for display.

## MVC Analogy Explanation

### Model (Warehouse)

- The Model represents the data and the logic to handle it. Think of it as the warehouse where all the goods (data) are stored.
- It's responsible for managing and updating data. For example:
- What items are available?
- What's the stock quantity?
- Adding or removing items based on demand.

### View (Shop or Customer)

- The View is the final interface where the customer (end-user) interacts.
- It could be the shop displaying the products (e.g., HTML/CSS on a webpage), or the person who ordered who sees the delivered product.
- The View only knows how to present the data but doesn't handle or process it directly.

### Controller (Delivery Person)

- The Controller is the middleman or mediator, like the delivery boy, who:
- Gets the order from the customer (View).
- Fetches the right products (data) from the warehouse (Model).
- Delivers the goods back to the customer (View).
