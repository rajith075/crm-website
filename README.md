# 🚀 Client Lead Management System (Mini CRM)

A modern, full-stack **Client Lead Management System** built using
**Next.js, TypeScript, MongoDB, and Tailwind CSS**.

This system allows businesses, agencies, and freelancers to manage
incoming leads, track deal stages, monitor analytics, and streamline
client conversions — similar to real-world SaaS CRM platforms.

------------------------------------------------------------------------

## 📌 Overview

Whenever a potential client fills out a contact form, businesses need
to:

-   Store lead information
-   Track status (New → Qualified → Won/Lost)
-   Add follow-up notes
-   Monitor performance analytics

This Mini CRM replicates a production-ready dashboard used in real
companies.

------------------------------------------------------------------------

## ✨ Features

### 🧑‍💼 Lead & Deal Management

-   Create new deals
-   Update deal stages (Won / Lost / Qualified)
-   Delete deals
-   Search deals
-   Filter & sort interface

### 📊 Dashboard Analytics

-   Income tracking
-   Activity Sales overview
-   Total Deals counter
-   Reply Rate monitoring
-   Monthly analytics bar chart
-   Revenue donut visualization

### 🎨 Premium UI/UX

-   Glassmorphism dashboard design
-   Ambient orange/yellow glow background
-   Soft shadow depth system
-   Responsive layout
-   Smooth hover transitions
-   Production-level dark SaaS aesthetic

### 🔐 Backend Architecture

-   RESTful API routes (Next.js App Router)
-   MongoDB integration (Mongoose)
-   Full CRUD operations
-   Search filtering via query params
-   Scalable folder structure

------------------------------------------------------------------------

## 🛠 Tech Stack

### Frontend

-   Next.js (App Router)
-   TypeScript
-   Tailwind CSS
-   Recharts
-   Lucide React

### Backend

-   Next.js API Routes
-   MongoDB Atlas
-   Mongoose

------------------------------------------------------------------------

## 📂 Project Structure

app/ ├── api/ │ ├── deals/ │ ├── dashboard/ │ ├── page.tsx ├──
globals.css

components/ ├── layout/ │ ├── Sidebar.tsx │ ├── Dashboard/ │ ├──
AnalyticsChart.tsx │ ├── RevenueChart.tsx │ ├── temp/ │ ├──
StatsCards.tsx

lib/ ├── db.ts

models/ ├── Deal.ts

------------------------------------------------------------------------

## ⚙️ Installation

### 1️⃣ Clone Repository

git clone https://github.com/your-username/mini-crm.git cd mini-crm

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Setup Environment Variables

Create a `.env.local` file:

MONGODB_URI=your_mongodb_connection_string

### 4️⃣ Run Development Server

npm run dev

Application will run at: http://localhost:3000

------------------------------------------------------------------------

## 🔌 API Endpoints

### Deals

| Method | Endpoint                | Description     |
|--------|-------------------------|-----------------|
| GET    | /api/deals              | Get all deals   |
| GET    | /api/deals?search=value | Search deals    |
| POST   | /api/deals              | Create new deal |
| PUT    | /api/deals/:id          | Update deal     |
| DELETE | /api/deals/:id          | Delete deal     |

------------------------------------------------------------------------

## 📊 Future Enhancements

-   Authentication & Role-Based Access
-   Pagination
-   Real-time updates
-   Email follow-up reminders
-   Notifications system
-   SaaS subscription model

------------------------------------------------------------------------

## 💼 Real-World Use Case

This project demonstrates how agencies, freelancers, and startups manage
client leads efficiently and convert prospects into paying customers.

------------------------------------------------------------------------

## 👨‍💻 Author

Rajith Shetty  
Full Stack Developer

------------------------------------------------------------------------

## 📜 License

This project is built for educational and portfolio purposes.
