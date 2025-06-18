# 📚 Topic Service

A lightweight **Node.js + TypeScript** microservice to manage topics in MongoDB. Provides RESTful CRUD operations via Express.js and is ideal for use as a backend for topic-based applications.

---

## 🚀 Features

- CRUD endpoints for topics (`id`, `name`, `content`, `version`, `parentTopicId`)
- Clean project structure:
  ```
  /src
    /controllers — HTTP handlers
    /services    — business logic
    /repositories — MongoDB data access
    /routes      — Express routes
    /middleware  — auth, validation, error handling
    /models      — TypeScript interfaces
    /utils       — helpers, constants
  ```
- MongoDB integration with a centralized connection manager
- REST conventions and versioned API routes (e.g., `/api/v1/topics`)
- Centralized error handling using custom `ApiError`
- Environment configuration using `dotenv` + `zod` for type-safe validation
- Ready to be extended with authentication, authorization, validation, and docs

---

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 18
- npm (or Yarn)
- MongoDB running locally or via Docker

### 📦 Install

```bash
git clone https://github.com/calbertofmf/topic-service.git
cd topic-service
npm install
cp .env.example .env
```

Edit the `.env` file:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017
DB_NAME=topicdb
```

### 🔧 Run Locally

```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/v1/topics`.

---

## ⚙️ Docker (Optional)

To run with MongoDB in Docker:

```yaml
# Example docker-compose.yml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongo
    environment:
      - MONGO_URI=mongodb://mongo:27017
      - DB_NAME=topicdb

  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
volumes:
  mongo-data:
```

Then:

```bash
docker-compose up --build
```

---

## 📚 API Endpoints

| Method | Path                      | Description              |
|--------|---------------------------|--------------------------|
| GET    | `/api/v1/topics`          | List all topics by filters |
| POST   | `/api/v1/topics`          | Create a new topic       |
| PUT    | `/api/v1/topics/:id`      | Update an existing topic |

---

## 🔧 Configuration

- Environment variables validated via `dotenv + zod`
- `.env.example` provided for easy setup

---

## 👥 Contributing

1. Fork the repo  
2. Create a feature branch  
3. Run `npm install && npm run dev`  
4. Write code & tests  
5. Submit a pull request

---

## 📝 License

*(Add license here — MIT, Apache, etc.)*

---

## ✅ Next Improvements

- **Jest** for unit and integration tests
- **Supertest** for HTTP endpoint validation
- Use DI (interfaces & repository) for testable code
- Coverage reports and linting
- Authentication/Authorization (Role-based access)
- Input validation middleware for all endpoints
- Swagger/OpenAPI docs
- CI/CD integration (GitHub Actions)
- Docker production image

---

Happy coding! 💡