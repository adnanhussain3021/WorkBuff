# 🏢 Workbuff — Employee Management System

A full-stack **Employee Management System** built with React, Node.js, Express, and MongoDB. Manage employees, departments, attendance, leaves, salaries, and more — with a premium modern UI.


---

## ✨ Features

### Admin Dashboard
- 📊 **Dashboard** with charts (department distribution, salary stats, leave breakdown) and **Birthday Reminders**
- 📢 **Announcements** — Broadcast company-wide announcements with priority levels
- 📅 **Holiday Calendar** — Manage national, regional, and company holidays
- 👤 **Employee CRUD** — Add, Edit, View, Delete employees with profile photos
- 🏬 **Department Management** — Create, edit, delete departments
- 📅 **Attendance Management** — Track attendance with filters, search, and PDF export
- 🏖️ **Leave Management** — Approve/reject leaves with filters and PDF export
- 💰 **Salary Management** — View/edit salaries, export payroll PDF
- 🔔 **Notifications** — Auto-notifications for leave requests, approvals, new employees

### Employee Dashboard
- 👤 **Profile** — View personal info and edit phone/address
- 📢 **Company Announcements** — View active broadcasts from admins
- 📅 **Attendance & Holidays** — Visual monthly calendar and upcoming holiday countdown
- 🏖️ **Apply Leave & Balance Tracker** — Submit requests and track remaining leave limits (Casual, Sick, Earned, Maternity)
- 💰 **Salary & Payslips** — View salary breakdown and download PDF payslips
- 🔔 **Notifications** — Personal notifications for leave updates and new announcements

### General
- 🌙 **Dark Mode** — Toggle between light and dark themes
- 📱 **Responsive** — Works on desktop and mobile
- 🔐 **Authentication** — Powered by Clerk (Google OAuth + Email)
- 📄 **PDF Export** — Export attendance, leaves, and salary reports

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Auth** | Clerk |
| **Charts** | Recharts |
| **PDF** | jsPDF + jspdf-autotable |
| **Icons** | React Icons |
| **Hosting** | Vercel (frontend) + Render (backend) |

---

## 📁 Project Structure

```
employee-management-system/
├── ems/                    # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── context/        # Auth & Theme context
│   │   ├── pages/          # Page layouts
│   │   └── utils/          # API config
│
├── server/                 # Backend (Express)
│   ├── controllers/        # Route handlers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── db/                 # Database connection
│   └── public/uploads/     # Uploaded files
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+
- **MongoDB** (local or Atlas)
- **Clerk Account** — [clerk.com](https://clerk.com) (free)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

