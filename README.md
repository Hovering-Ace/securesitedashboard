# 🔒 SecureSight Dashboard

SecureSight is a fictional CCTV monitoring platform that connects up to 3 CCTV feeds and leverages computer vision to detect critical events such as unauthorized access, gun threats, suspicious activity, and more. This project is a technical assessment implementing the core dashboard functionalities using modern frontend and backend technologies.

## 📋 Features

### ✅ Mandatory Scope

- **Navbar**  
  A top navigation bar providing brand identity and easy access to global controls or navigation.

- **Incident Player (Left Side)**  
  A media player that displays CCTV footage or event snapshots along with metadata (timestamp, camera info, threat type).

- **Incident List (Right Side)**  
  A scrollable, filterable list of all detected incidents with information such as:
  - Type of incident
  - Timestamp
  - Camera name
  - Resolved/unresolved status

- **Incident Timeline (Bottom)**  
  A time-synced scrubber that visually represents when incidents occurred across all feeds. Clicking on a marker jumps to that point in the player.

## 🛠 Tech Stack

- **Frontend**: Next.js + TailwindCSS
- **State Management**: Zustand / Context API
- **Backend**: Next.js
- **Database (optional)**: SQLite or mock data
- **Time/Date Handling**: date-fns or Day.js

## 📦 Setup & Installation

```bash

#1. Create Database
npm db:push

#2. Seed Database
npm db:seed

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev



## 🧠 Tech Decisions

- **Next.js App Router** was chosen for its built-in support for file-based routing and API endpoints in one codebase.
- **Prisma ORM** was used for data modeling, migrations, and seeding because of its DX and type safety.
- **SQLite** was selected as the database for simplicity and ease of local development — perfect for quick iteration in small-scale apps.
- **TailwindCSS** allowed fast UI development with consistent utility classes and responsive design.
- **Zustand (or Context API)** was explored to manage app-wide state like current incident or player time.

---

## 💡 If I Had More Time…

- ✅ Implement advanced filtering (by date, threat type, resolved/unresolved).
- 🎥 Replace static video/image with real synced video playback.
- 🧭 Polish the timeline with snap-to-event markers and hover previews.
- 📈 Add analytics — incident frequency, most triggered camera, etc.
- 👮‍♂️ Add authentication and user role logic (e.g., Guard vs Admin).
- 📤 Webhooks or real-time updates (Socket.IO or polling) for new incidents.
