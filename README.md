# BhuSetu

BhuSetu is a GIS-enabled National Land Acquisition & Management System. The five-day MVP will support the land-acquisition lifecycle from project and parcel registration through verification, proposal approval, and progress tracking.

## Technology stack

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB Atlas with Mongoose
- Authentication: JWT and bcryptjs
- Mapping: Leaflet with OpenStreetMap
- Document storage: Cloudinary

## Folder structure

```text
BhuSetu/
  client/                 # React + Vite frontend
    src/
    .env.example
  server/                 # Express API
    src/
      config/
    .env.example
  AGENTS.md               # Project-specific engineering rules
  README.md
```

## Installation

The required packages are already installed. For a fresh clone, install each application separately:

```bash
cd client
npm install
```

```bash
cd server
npm install
```

Copy the environment templates before adding any private configuration:

```powershell
Copy-Item client/.env.example client/.env
Copy-Item server/.env.example server/.env
```

`client/.env` defines `VITE_API_URL`. `server/.env` contains placeholders for MongoDB, JWT, and Cloudinary configuration. Do not put real secrets in `.env.example`. MongoDB is not connected by the current server implementation.

## Run the applications

Use separate terminals:

```bash
cd client
npm run dev
```

```bash
cd server
npm run dev
```

The Vite frontend is normally available at `http://localhost:5173`. The API normally runs at `http://localhost:5000`; check it with `GET http://localhost:5000/api/health`.
