# Real-Time Chat Application

## Overview

The Real-Time Chat Application is a full-stack messaging platform built using the **MERN stack** with real-time capabilities enabled through **Socket.io**. It supports user authentication, message exchange, and persistent chat history with a responsive, mobile-friendly frontend.

## Features

**User Authentication:** Signup, login, logout with JWT-based token system and secure cookies.
**Real-Time Messaging:** Instant message delivery using Socket.io with online/offline status indicators.
**User Management:** Get all users, fetch single user, update profile.
**Message History:** Stores all conversations and messages with timestamps in MongoDB.
**Responsive UI:** Built with Tailwind CSS and DaisyUI for a clean, mobile-first design.
**Basic File Sharing:** Users can exchange simple file formats within the chat.


## Technologies Used

### Backend

**Node.js**, **Express.js** – REST API and server setup
**MongoDB**, **Mongoose** – NoSQL database and schema modeling
**Socket.io** – Real-time, bidirectional communication
**JWT**, **bcryptjs**, **cookie-parser**, **dotenv** – Authentication and security
**Nodemon** – Auto-reloading during development

### Frontend

**React.js**, **Vite** – Component-based UI development
**Tailwind CSS**, **DaisyUI** – Utility-first styling and UI components
**Axios**, **React Router DOM** – HTTP communication and routing
**Zustand**, **Context API** – State management
**Framer Motion**, **Lucide React** – Animations and icons
**React Toastify** – Notification system

## Getting Started

### Prerequisites

Node.js & npm
Git
MongoDB (local or hosted)

### Installation

#### 1. Clone the repository:
```bash
git clone https://github.com/your-username/real-time-chat-app.git
cd real-time-chat-app
```

#### 2. Setup Frontend:
```bash
cd frontend
npm create vite@latest .
npm install
npm run dev
```

#### 3. Setup Backend:
```bash
cd ../
npm init -y
npm install express mongoose dotenv cookie-parser bcryptjs jsonwebtoken socket.io
npm install nodemon --save-dev
```

Edit `package.json` in root:

```json
"main": "backend/server.js",
"type": "module",
"scripts": {
  "server": "nodemon backend/server.js"
}
```

#### 4. Environment Variables
Create a `.env` file in the root directory and add:
```
MONGO_URL=your_mongodb_connection
PORT=5000
JWT_SECRET=your_generated_secret
```

To generate a secret key:
```bash
openssl rand -base64 32
```

## Project Structure
```
├── backend
│   ├── controllers
│   │   ├── authController.js
│   │   ├── messageController.js
│   │   └── userController.js
│   ├── models
│   │   ├── userModel.js
│   │   ├── messageModel.js
│   │   └── conversationModel.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── messageRoutes.js
│   │   └── userRoutes.js
│   ├── utils
│   │   └── generateToken.js
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── context (AuthContext.js)
│   │   ├── pages
│   │   └── App.js
├── .env
├── package.json
```

## Common Commands

### Backend
```bash
npm run server      # Start the server with nodemon
```

### Frontend
```bash
npm run dev         # Start Vite development server
```

## Routes & API Endpoints

### Authentication

`POST /api/auth/register` – Register new user
`POST /api/auth/login` – Login user
`GET /api/auth/logout` – Logout user

### Messages

`POST /api/messages` – Send a message
`GET /api/messages/:conversationId` – Get messages

### Users

`GET /api/users` – Get all users
`GET /api/users/:id` – Get a user by ID

## Future Enhancements

Group chat functionality
Media file sharing (images, videos)
Emoji support and read receipts
Notification system with sounds

## Contributing

Contributions are welcome! Please fork the repo and submit a pull request for review.

---

## Contact
Name: Abdullah Pathan
Email: abd.pathan812@gmail.com\
