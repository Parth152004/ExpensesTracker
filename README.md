# Expense Tracker API

## Overview
The **Expense Tracker API** is a Spring Boot-based backend service that allows users to manage their expenses, budgets, transactions, and shared expenses. It is deployed on **Render** and uses **SQL Server** as the database.

## Features
- User Management (CRUD operations)
- Account Management
- Budgeting & Expense Tracking
- Expense Categories
- Transactions & Payment Management
- Friends & Shared Expenses

## Tech Stack
- **Backend**: Spring Boot, Spring Data JPA
- **Database**: Microsoft SQL Server
- **Security**: Spring Security (Upcoming Feature)
- **Deployment**: Render
- **Containerization**: Docker

## Setup Instructions

### Prerequisites
- Java 17+
- Maven
- Docker (optional for containerization)
- SQL Server Database

### Running Locally
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd expense-tracker
2. Update the `application.properties` file with your database credentials:
   ```properties
   spring.datasource.url=jdbc:sqlserver://den1.mssql8.gear.host;databaseName=ExpanceTracker;encrypt=true;trustServerCertificate=true
   spring.datasource.username=mssql57
   spring.datasource.password=@p7KKCHNe!i6UA7
   ```
3. Build the project:
   ```sh
   mvn clean install
   ```
4. Run the application:
   ```sh
   mvn spring-boot: run
   ```

## API Endpoints
| Resource         | Method  | Endpoint                   |
|-----------------|--------|---------------------------|
| User           | `POST`  | `/api/users`              |
| User           | `GET`   | `/api/users/{id}`         |
| User           | `DELETE`| `/api/users/{id}`         |
| Account        | `POST`  | `/api/accounts`           |
| Account        | `GET`   | `/api/accounts/{id}`      |
| Account        | `DELETE`| `/api/accounts/{id}`      |
| Budget         | `POST`  | `/api/budgets`            |
| Budget         | `GET`   | `/api/budgets/{id}`       |
| Budget         | `DELETE`| `/api/budgets/{id}`       |
| Categories     | `POST`  | `/api/categories`         |
| Categories     | `GET`   | `/api/categories/{id}`    |
| Categories     | `DELETE`| `/api/categories/{id}`    |
| Transactions   | `POST`  | `/api/transactions`       |
| Transactions   | `GET`   | `/api/transactions/{id}`  |
| Transactions   | `DELETE`| `/api/transactions/{id}`  |
| Friends       | `POST`  | `/api/friends`            |
| Friends       | `GET`   | `/api/friends/{id}`       |
| Friends       | `DELETE`| `/api/friends/{id}`       |
| Shared Expense | `POST`  | `/api/shared-expenses`    |
| Shared Expense | `GET`   | `/api/shared-expenses/{id}` |
| Shared Expense | `DELETE`| `/api/shared-expenses/{id}` |

## Deployment on Render
1. Push your code to GitHub.
2. Connect your repository to Render.
3. Use the following environment variables:
   - `SPRING_DATASOURCE_URL`
   - `SPRING_DATASOURCE_USERNAME`
   - `SPRING_DATASOURCE_PASSWORD`
4. Deploy and get the live service URL.

## Issues & Feature Requests
- 🚀 **Enhancements Needed**:
  - [ ] Implement authentication & authorization.
  - [ ] Improve database indexing for better performance.
  - [ ] Add pagination to list APIs.

## License
This project is licensed under the MIT License.

---
Contributions and suggestions are welcome! Open an issue to discuss improvements. 😊
