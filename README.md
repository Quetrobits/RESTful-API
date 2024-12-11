# RESTful API Project

This is a RESTful API built with **Node.js** and **Express**. It provides basic CRUD operations for managing users and products, as well as authentication with JWT.

---

## Table of Contents
- [Installation](#installation)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Routes](#routes)
- [Testing](#testing)
- [License](#license)

---

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Quetrobits/RESTful-API.git
   cd RESTful-API
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

---

## Setup

### 1. Create `.env` File

You need to create a `.env` file in the root of the project to store environment-specific variables. This file will not be committed to version control.

Example `.env` file:
```env
# .env file (example)

PORT=5000
MONGO_URI=mongodb://localhost:27017/restful-api
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1h
```

### 2. Modify Environment Variables
- **PORT**: Port number on which the server will run. Default is `5000`.
- **MONGO_URI**: Connection string for your MongoDB instance (use your local or cloud MongoDB URI).
- **JWT_SECRET**: Secret key for JWT token generation.
- **JWT_EXPIRES_IN**: Expiration time for JWT tokens (default is `1h`).

---

## Running the Application

Once the `.env` file is created and the necessary variables are set, run the application:

1. Start the server:
   ```bash
   npm start
   ```

   This will start the API on the port specified in `.env` (default is `5000`).

2. You should see output indicating the server is running:
   ```bash
   Server running on port 5000
   ```

---

## Routes

### User Routes
- **GET `/api/users`**: Get all users.
- **POST `/api/users`**: Create a new user.
- **GET `/api/users/:id`**: Get a user by ID.
- **DELETE `/api/users/:id`**: Delete a user by ID.

### Product Routes
- **GET `/api/products`**: Get all products.
- **POST `/api/products`**: Create a new product.
- **GET `/api/products/:id`**: Get a product by ID.
- **DELETE `/api/products/:id`**: Delete a product by ID.

### Protected Route
- **GET `/api/secure-data`**: Requires a valid JWT token in the `Authorization` header (`Bearer token`).

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
