# Salary Management System

## Overview

The Salary Management System is a full-stack web application designed to help HR managers efficiently manage employee records and analyze salary data for large organizations.

The application focuses on handling employee information, performing CRUD operations, and generating salary insights across different countries and job titles.

---

# Objective

Build a scalable salary management system capable of handling employee data for up to 10,000 employees while maintaining simplicity, performance, and usability.

---

# Tech Stack

## Frontend

* React.js
* React Router
* Axios
* Vite

## Backend

* Node.js
* Express.js
* Prisma ORM

## Database

* PostgreSQL (Neon DB)

## Deployment

* Frontend Deployment using Vercel
* Backend Deployment using Render

---

# Features

## Employee Management

* Add new employees
* View employee records
* Update employee details
* Delete employees

## Salary Insights

* Minimum salary analysis
* Maximum salary analysis
* Average salary calculation
* Salary insights based on country
* Salary insights based on job title

## User Experience

* Responsive user interface
* API integration with real-time updates
* Loading states for better user interaction
* Clean and simple dashboard design

---

# Product Thinking

This application is designed specifically for HR managers who need quick access to employee and salary information.

Key focus areas include:

* Simple employee management workflow
* Fast salary visibility
* Easy-to-understand analytics
* Scalable backend architecture
* Maintainable project structure

---

# Project Structure

```bash
salary-management-system/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── package.json
│
├── backend/
│   ├── prisma/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

# API Endpoints

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| GET    | /api/employees     | Fetch all employees |
| POST   | /api/employees     | Add employee        |
| PUT    | /api/employees/:id | Update employee     |
| DELETE | /api/employees/:id | Delete employee     |

---

# Future Improvements

* Authentication & Authorization
* Pagination for large datasets
* Search and filtering functionality
* Dashboard charts and analytics
* CSV export functionality
* Improved UI/UX enhancements
* Toast notifications
* Advanced loading indicators

---

# Learning Outcomes

Through this project, I gained practical experience in:

* Building REST APIs
* Frontend and backend integration
* Database management using Prisma ORM
* CRUD operations
* Deployment workflows
* Environment variable configuration
* Full-stack application development

---

# Author

Developed by Nikitha S.
