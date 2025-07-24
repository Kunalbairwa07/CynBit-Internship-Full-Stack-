# 🎓 Day 14: Student Management UI + PostgreSQL Integration

## 📌 Objective

To build a frontend UI using HTML, CSS, and JavaScript that:
- Allows adding a new student via a form
- Displays all students from the PostgreSQL database in a table
- Uses Fetch API for communication with the backend
- Shows SweetAlert popups for feedback

---

## 🗃️ Database Schema

```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  course TEXT NOT NULL
);