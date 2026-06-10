# 💼 JobPortal

A full-stack job portal web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). The platform connects job seekers with employers through a clean, role-based interface supporting job listings, applications, and resume submissions.

> 🚧 **Status:** Currently under active development.

---

## ✨ Features

### 👤 Job Seekers
- Register and log in securely
- Browse available job listings
- Apply for jobs directly through the platform
- Upload and attach a resume (CV) to applications

### 🛠️ Admin / Employers
- Admin dashboard for managing job listings
- Create, update, and delete job postings
- View and manage submitted applications

### 🔐 Authentication & Security
- JWT-based authentication with protected routes
- Password hashing with **bcryptjs**
- Middleware-enforced role-based access control

---

## 🧰 Tech Stack

| Layer | Technology |
|------------|--------------------------------------|
| Frontend | React.js |
| Backend | Node.js, Express.js 5 |
| Database | MongoDB (via Mongoose ODM) |
| Auth | JSON Web Tokens (JWT), bcryptjs |
| File Upload | Multer |
| Config | dotenv, cors |
| Dev Tools | Nodemon |

---

## 📁 Project Structure

```
JobPortal/
├── config/           # Database connection and environment config
├── controllers/      # Route handler logic (users, jobs, applications)
├── middlewares/      # Auth middleware, error handling
├── models/           # Mongoose schemas (User, Job, Application)
├── routes/           # Express API route definitions
├── uploads/          # Uploaded resume files
├── job-portal/       # React frontend
├── server.js         # Entry point — Express app setup
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or MongoDB Atlas)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/BSammel/JobPortal.git
cd JobPortal

# Install backend dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Running the App

```bash
# Run backend in development mode
npm run dev

# Run backend in production
npm start
```

For the frontend, navigate to the `job-portal/` directory and follow its own setup instructions.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|-------------------------|-------------------------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |
| GET | `/api/jobs` | Get all job listings |
| POST | `/api/jobs` | Create a new job (admin) |
| PUT | `/api/jobs/:id` | Update a job listing (admin) |
| DELETE | `/api/jobs/:id` | Delete a job listing (admin) |
| POST | `/api/applications` | Apply for a job with resume |
| GET | `/api/applications` | Get all applications (admin) |

---

## 📌 Roadmap

- [x] User authentication (register/login)
- [x] JWT-based protected routes
- [x] Job listing CRUD (admin)
- [x] Resume upload with Multer
- [x] Job application submission
- [ ] Application status tracking
- [ ] Email notifications
- [ ] Candidate profile pages
- [ ] Search and filter for job listings
- [ ] Full frontend integration

---

## 👨‍💻 Author

**Sammel Bempong**
Computer Engineering Student — University of Mines and Technology (UMaT), Ghana
GitHub: [@BSammel](https://github.com/BSammel)

---

