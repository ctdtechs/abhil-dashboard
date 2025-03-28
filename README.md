# ABHIL Dasboard

This project consists of:
- **Flask Backend**: API to fetch file details from MySQL.
- **React.js Frontend**: Displays data in a table with search and filter functionality.

## 🚀 Setup Instructions

### 1️⃣ Backend (Flask + MySQL)
#### Prerequisites:
- Python 3
- MySQL Server

#### Steps:
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Set up MySQL database:
   ```sql
   CREATE DATABASE abhil_aadhar_masking;
   ```
3. Run the Flask server:
   ```bash
   python app.py
   ```
   - API runs at `http://127.0.0.1:5000/api/files`

### 2️⃣ Frontend (React + Vite)
#### Prerequisites:
- Node.js

#### Steps:
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the React app:
   ```bash
   npm run dev
   ```
   - Open `http://localhost:5173` in a browser.

### ✅ Tech Stack
- **Backend:** Flask, MySQL
- **Frontend:** React.js, Ant Design, Axios
