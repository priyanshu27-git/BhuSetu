# BhuSetu Project Instructions

## Project

**BhuSetu: GIS-Enabled National Land Acquisition & Management System.**

## Objective

Digitize and monitor the land acquisition lifecycle, from project creation and parcel registration to verification, proposal approval, and acquisition progress tracking.

## Technology Stack

- Frontend: React + Vite
- Styling: Tailwind CSS
- Backend: Node.js + Express.js
- Database: MongoDB Atlas + Mongoose
- Authentication: JWT + bcrypt
- Maps: Leaflet + OpenStreetMap
- Document storage: Cloudinary

## User Roles

- Admin
- Agency Officer
- District Officer
- Approver
- Finance Officer
- Viewer

## MVP Workflow

Agency Officer creates a project → registers land parcels → District Officer verifies parcels → Agency Officer submits proposal → Approver reviews proposal → project progress is tracked.

## MVP Scope

Authentication, project management, parcel management, basic GIS mapping, document uploads, parcel verification, proposal approval, and dashboard.

Finance management, detailed R&R, advanced GIS, AI/ML, and external government integrations are future scope.

## Engineering Rules

1. Use MongoDB-native modelling with Mongoose.
2. Do not introduce unnecessary abstractions or repository layers.
3. Keep frontend and backend separate.
4. Enforce authentication and role permissions on the backend.
5. Never hardcode secrets.
6. Use environment variables for configuration.
7. Validate inputs and handle errors properly.
8. Do not claim integration with actual government systems.
9. Use clearly labelled illustrative demo data.
10. Avoid unnecessary dependencies and overengineering.

## Development Rules

- Five-day MVP deadline.
- Implement one feature at a time.
- Inspect existing files before modifying them.
- Avoid changing unrelated files.
- Explain important technical decisions.
- Run relevant checks after implementation.
