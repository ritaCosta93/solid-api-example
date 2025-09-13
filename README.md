# Solid API Example

This project is a **TypeScript + Express.js API** that demonstrates a modular architecture for building backend applications, including **user creation use cases**, email providers, repositories, and controllers. It serves as a scalable starting point for more advanced APIs.

---

## 📦 Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/ritaCosta93/solid-api-example.git
cd solid-api-example
npm install
```

Start the development server:

```bash
npm start
```

By default, the server listens on **port 3000**, configurable in `app.ts` or via environment variables.

---

## 🚀 Project Structure & Modules

```markdown
src/
├─ entities/
│  └─ User.ts                # User entity definition
├─ providers/
│  └─ implementations/
│     ├─ MailTrapProvider.ts  # Email sending provider
│     └─ IMailProvider.ts     # Email provider interface
├─ repositories/
│  └─ implementations/
│     ├─ PostgressUsersRepository.ts  # PostgreSQL user repository
│     └─ IUsersRepository.ts          # User repository interface
├─ useCases/
│  └─ CreateUser/
│     ├─ CreateUserController.ts  # Handles HTTP requests
│     ├─ CreateUserDTO.ts         # Data transfer object for user creation
│     ├─ CreateUserUseCase.ts     # Business logic for creating users
│     └─ index.ts                 # Exports for easy import
├─ app.ts            # Express app setup
├─ routes.ts         # API routes configuration
└─ server.ts         # Server bootstrap
```

---

## 🛠️ Tech Stack

* **Node.js** – JavaScript runtime for server-side code
* **Express.js** – Web framework for building REST APIs
* **TypeScript** – Type-safe development for entities, DTOs, and repositories
* **PostgreSQL** – Database backend for storing user data
* **MailTrap** – Email testing provider (via `MailTrapProvider`)

---

## ✅ Features

* **User creation use case** with validation and DTOs.
* **Modular architecture** following SOLID principles: entities, repositories, providers, and use cases.
* **Repository pattern** (`IUsersRepository` + `PostgressUsersRepository`) for database abstraction.
* **Provider pattern** (`IMailProvider` + `MailTrapProvider`) for email service abstraction.
* **Controller pattern** (`CreateUserController`) for request handling.
* Ready to extend with additional **use cases**, **middleware**, and **routes**.

---

## ⚡ Usage

1. **Create a user**

   * Send a POST request to `/users` (defined in `routes.ts`) with JSON payload following `CreateUserDTO`:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

2. **Email confirmation** (via `MailTrapProvider`) will simulate sending an email.

3. **Repository storage** uses PostgreSQL (ensure your database connection settings are configured in `PostgressUsersRepository.ts` or environment variables).

---

## 🔧 Notes

* Add additional **use cases** by following the `useCases` folder structure.
* Add new **providers** (e.g., SMTP, SendGrid) implementing `IMailProvider`.
* Use **interfaces** to abstract repository or provider implementations for testability.
* Environment variables for port, database, and email configuration are recommended.

---
