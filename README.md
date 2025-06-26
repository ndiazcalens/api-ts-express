# REST API with Express and TypeScript

This is a starter project for building a RESTful API using **Node.js**, **Express**, and **TypeScript**. It includes a modular folder structure with controllers, routes, middlewares, configuration, and utility functions.

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Cors](https://www.npmjs.com/package/cors)
- [Nodemon](https://www.npmjs.com/package/nodemon) (for development)

## 📁 Project Structure

```
api-ts-express/
├── src/
│   ├── controllers/       # Request logic
│   ├── routes/            # API endpoints
│   ├── middlewares/       # Express middlewares
│   ├── config/            # App configuration
│   ├── utils/             # Helper functions
│   └── index.ts           # Entry point
├── .env                   # Environment variables
├── tsconfig.json          # TypeScript configuration
├── package.json           # NPM configuration
└── README.md
```

## 🚀 Scripts

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Compile TypeScript to JavaScript
npm run build

# Run the compiled app
npm start
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
```

You can extend this file depending on your app's needs (e.g., database URL, API keys, etc.).

## 📡 Example Endpoints

Some example routes included in the project (depending on your implementation):

- `POST /auth/login` – Log in a user
- `POST /auth/register` – Register a new user
- `GET /products` – Fetch all products
- `POST /products` – Create a new product

You can customize these in the `src/routes` and implement the logic in `src/controllers`.

## 🧪 Future Improvements

- Input validation (Joi, Zod)
- API documentation with Swagger
- Database integration (MongoDB, PostgreSQL, etc.)
- Unit tests (Jest)

## 👨‍💻 Author

- **Nicolás Díaz Calens** – [@ndiazcalens](https://github.com/ndiazcalens)

---

This project can serve as a boilerplate for building scalable and maintainable TypeScript APIs.
