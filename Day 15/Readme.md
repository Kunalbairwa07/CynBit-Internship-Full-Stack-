# 🔐 Day 15 – JWT Authentication in Node.js + Express + PostgreSQL

## 📌 Objective
Implement a secure authentication system using JWT tokens with protected routes.

---

## 🔧 Features Implemented

### 1. ✅ User Registration
- `POST /api/register`
- Accepts: `name`, `email`, `password`
- Password is hashed using bcrypt.
- Data is stored in PostgreSQL.

### 2. ✅ User Login
- `POST /api/login`
- Accepts: `email`, `password`
- Compares password using bcrypt.
- If valid, returns a **JWT token**.

### 3. ✅ Protected Route
- `GET /api/profile`
- Requires JWT token in header.
- Returns user info only if token is valid.

---