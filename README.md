## 🧪 MERN Machine Test – In Development

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-blueviolet?logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens)
![Status](https://img.shields.io/badge/Status-In_Development-yellow)
![License](https://img.shields.io/badge/License-MIT-lightgrey)
![Vite](https://img.shields.io/badge/Bundler-Vite-646cff?logo=vite)
![pnpm](https://img.shields.io/badge/Package_Manager-pnpm-f69220?logo=pnpm)

This is a full-stack MERN application designed for a machine test scenario. It includes secure admin login, agent management, CSV/XLSX upload, and round-robin distribution of leads.

---

### 🚀 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS v4
- **Backend**: Node.js + Express
- **Database**: MongoDB (via Mongoose)
- **Auth**: JWT + bcrypt
- **File Handling**: Multer + fast-csv + xlsx

---

### 📦 Installation

#### 1. Clone the repo

```bash
git clone https://github.com/your-username/mern-machine-test.git
cd mern-machine-test
```

#### 2. Install dependencies

```bash
pnpm install
cd client && pnpm install
cd ../server && pnpm install
```

---

### ⚙️ Environment Setup

Create a `.env` file inside `server/` with:

```
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

---

### 🧑‍💻 Run in Development

```bash
pnpm run dev
```

This uses `concurrently` to run both client and server.

---

### 📁 Folder Structure

- `client/` → React frontend (Vite + Tailwind 4)
- `server/` → Express backend (routes, controllers, services)
- `tests/` → Unit + integration tests
- `uploads/` → Temporary file storage (ignored in git)

---

### ✅ Features (WIP)

- Admin login with JWT
- Agent CRUD (admin-only)
- CSV/XLSX upload with schema validation
- Round-robin distribution to agents
- Per-agent item views
- Error handling and validation feedback

---

### 📌 Notes

This project is actively being developed. Folder structure, APIs, and UI may evolve. Final README will include demo video, seed scripts, and deployment instructions.
