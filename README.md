# Fynora 🚀


**Fynora is a modern personal cloud workspace to upload, organize, search, and protect files.**  
It combines clean file management with smart features like **Magic Lens summaries**, **Voice Search**, and **folder lock protection**.

---

## Project Overview

Fynora solves a common problem: files get scattered across devices and are hard to manage securely.

With Fynora, users can:
- Sign up and log in securely (JWT auth)
- Create folders and manage files from a dashboard-style UI
- Search faster with voice input
- Lock sensitive folders with a separate lock password
- Use AI-powered Magic Lens to summarize supported files

In simple words: **Fynora is an AI-assisted cloud file manager with a clean UX and security-first workflow.**

---

## Architecture / System Design

Fynora is built as a full-stack app with clear frontend/backend separation.

### Frontend (Next.js App Router)
- Handles UI, routing, auth screens, dashboard, and interactions
- Calls backend APIs for auth, files, folders, categories, and Magic Lens

### Backend (Express API)
- Provides REST APIs and business logic
- Handles authentication, authorization, uploads, CRUD operations, and AI routes

### Database (PostgreSQL via Prisma)
- Stores users, folders, files, metadata, and app entities
- Accessed through Prisma ORM in backend services

### Request Flow (High level)
1. User action from Next.js UI
2. API request to Express backend
3. JWT validation + business logic
4. Prisma query to PostgreSQL
5. Response returned and UI updated

---

## Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- lucide-react
- fuse.js
- mammoth (DOCX parsing)

### Backend
- Node.js
- Express.js
- Prisma ORM
- jsonwebtoken (JWT)
- bcryptjs
- cors, dotenv

### Database
- PostgreSQL

### Deployment (recommended)
- Frontend: Vercel
- Backend: Render
- Database: PostgreSQL (managed)

---

## Core Features

- **Authentication**: secure signup/login with hashed passwords and JWT
- **File & Folder Management**: create folders, upload/manage files, organize workspace
- **Magic Lens – Summarize**: AI-powered extraction/summarization for supported files
- **Voice Search**: find files/folders with spoken commands
- **Locked Folders**: password-protect sensitive folders
- **Dashboard UX**: clean, responsive, app-like interface

---

## Folder Structure

```text
Fynora/
├── backend/
│   ├── prisma/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── services/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── next.config.*
│   └── .env.local
└── README.md
```

---

## API Endpoints

> Base URL: `http://localhost:5000`

### Health
- `GET /api/test` — Backend health check
- `GET /api/test2` — Secondary test route

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Workspace APIs
- `GET /api/folders`
- `POST /api/folders`
- `GET /api/files`
- `POST /api/files`
- `GET /api/items`
- `POST /api/items`
- `GET /api/categories`
- `POST /api/categories`
- `POST /api/magic-lens` — Analyze/summarize supported files

---

## Environment Variables

### Backend (`backend/.env`)
```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
JWT_SECRET=your-jwt-secret
FRONTEND_URL=http://localhost:3000
PORT=5000
```

### Frontend (`frontend/.env.local`)
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

---

## Local Setup

### 1) Clone
```bash
git clone <your-repo-url>
cd Fynora
```

### 2) Backend setup
```bash
cd backend
npm install
npx prisma migrate dev
npx prisma generate
npm start
```

### 3) Frontend setup
```bash
cd ../frontend
npm install
npm run dev
```

### 4) Run
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

---


## Deployment Strategy

- Frontend → **Vercel**
- Backend → **Render**
- Database → **Managed PostgreSQL**

---

## Future Improvements

- Refresh + rotation token strategy
- Advanced RBAC for teams/workspaces
- Rate limiting + stronger API security middleware
- Background processing for heavy Magic Lens jobs
- Full test coverage (unit/integration/e2e)

---

## Author

Ramandeep Kaur
