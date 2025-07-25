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

### ⚙️ Optional Scope (if implemented)

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
