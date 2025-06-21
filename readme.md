# FineRender

<p align="center">
  <img src="https://github.com/Jyotiraditya077/FineRender/blob/main/frontend/src/assets/inverted-logo.png" alt="FineRender Logo" width="170px">
</p>

**FineRender** is a modern AI SaaS platform that transforms text prompts into high-quality visuals using the ClipDrop API. Designed with performance and simplicity in mind, it enables users to generate, preview, and download AI-generated images in seconds.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

✔️ AI-based image generation using ClipDrop API  
✔️ Seamless authentication with JWT  
✔️ Fully responsive SaaS interface with animations via Framer Motion  
✔️ **Stripe** and **Razorpay** integration for secure payments  
✔️ Dynamic prompt-based rendering with interactive UI  
✔️ MongoDB database for persistent user & generation data  
✔️ Clean, user-friendly UX for all device sizes  

---

## Demo

🔗 **Live App**: [FineRender Live](https://finerender.vercel.app)

## Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- Framer Motion  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication
- Razorpay Payment Gateway    
- Stripe Payment Gateway  

---

## Installation

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Jyotiraditya077/finerender.git
cd finerender
```

### 2️⃣ Install Dependencies  
#### Frontend  
```bash
cd frontend
npm install
```

#### Backend  
```bash
cd ../backend
npm install
```

---

## Usage

### 1️⃣ Start the Backend Server  
```bash
cd backend
npm run server
```
The backend runs at `http://localhost:4000`.

### 2️⃣ Start the Frontend Application  
```bash
cd ../frontend
npm run dev
```
The frontend runs at `http://localhost:5173`.

---

## Environment Variables

Create a `.env` file inside the `backend/` directory and add the following variables:

```env

# JWT Secret (Required)
JWT_SECRET=your_jwt_secret_key

# MongoDB URI (Required)
MONGODB_URI=your_mongodb_connection_uri

# ClipDrop API Key (Required)
CLIPDROP_API=your_clipdrop_api_key

# Razorpay Payment Integration
CURRENCY=INR
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Stripe Payment Integration
STRIPE_SECRET_KEY=your_stripe_secret_key

```
(Replace placeholders with actual values.)

---

Create a `.env` file inside the `frontend/` directory and add the following variables:

```env

# Backend API Base URL
VITE_BACKEND_URL=your_backend_api_url

# Razorpay Public Key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

```
(Replace placeholders with actual values.)


---

## Contributing

We welcome contributions! Follow these steps:

1️⃣ Fork the repository  
   Click the Fork button on the top right of the repository page.

2️⃣ Create a new branch  
```bash
git checkout -b feature/your-feature-name
```

3️⃣ Commit your changes  
```bash
git commit -m "Added a new feature"
```

4️⃣ Push to the branch  
```bash
git push origin feature/your-feature-name
```

5️⃣ Create a Pull Request 🎉  

---

## License

This project is open-source and available under the MIT License.

---

## Contact

👤 **Jyotiraditya Swain**  
📍 **GitHub**: [Jyotiraditya077](https://github.com/Jyotiraditya077)  
📧 **Email**: jyotiradityaswain123@gmail.com  
🌐 **Portfolio**: [Know more](https://jyotiradityaportfolio.netlify.app/)