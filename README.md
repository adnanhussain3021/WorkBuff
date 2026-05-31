# 🏢 WorkSphere — Employee Management System

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
| **Frontend** | React 18, Vite, Tailwind CSS |
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
│
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+
- **MongoDB** (local or Atlas)
- **Clerk Account** — [clerk.com](https://clerk.com) (free)

### 1. Clone the repo
```bash
git clone https://github.com/iamasmigupta/employee-management-system.git
cd employee-management-system
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create a `.env` file in the `server/` folder:
```env
PORT=5001
MONGODB_URL=mongodb://localhost:27017/ems
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Start the server:
```bash
node index.js
```

### 3. Setup Frontend
```bash
cd ems
npm install
```

Create a `.env` file in the `ems/` folder:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5001
```

Start the dev server:
```bash
npm run dev
```

### 4. Get Clerk Keys
1. Go to [dashboard.clerk.com](https://dashboard.clerk.com)
2. Create a new application
3. Enable **Email** and **Google** sign-in methods
4. Go to **API Keys** — copy your Publishable Key and Secret Key
5. Paste them in the `.env` files above

---


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

