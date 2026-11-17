# 🌿 Fasal Mitra — AI Plant Disease Detection Platform

<div align="center">

![Fasal Mitra Banner](https://img.shields.io/badge/Fasal%20Mitra-Disease%20Detection-10B981?style=for-the-badge&logo=leaf&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![YOLOv8](https://img.shields.io/badge/YOLOv8-Ultralytics-FF5733?style=for-the-badge)
![Flask](https://img.shields.io/badge/Flask-3.0-000000?style=for-the-badge&logo=flask&logoColor=white)

**An end-to-end AI-powered web platform for detecting plant diseases in real time, providing treatment advice, weather insights, and a farmer community hub.**

</div>

---

## 📌 Overview

Fasal Mitra is a full-stack web application designed to help farmers and gardeners quickly identify plant diseases from leaf images. Upload a photo of a leaf, and the system uses a custom-trained **YOLOv8 object detection model** to diagnose the disease, calculate its severity, and recommend a pesticide or treatment. The platform also integrates live weather data, an AI farming chatbot, and a community forum — all in one place.

---

## 🧠 How the Model Works

```
User uploads leaf image
         │
         ▼
  Frontend (React)
  Converts image → base64 Data URL
         │
         ▼
  POST /api/predict  (Flask Backend)
         │
         ▼
  Image decoded → NumPy array (PIL)
         │
         ▼
  ┌─────────────────────────────────┐
  │   YOLOv8 Object Detection Model │
  │   (best.pt — custom trained)    │
  │                                 │
  │  • 38 plant disease classes     │
  │  • Trained on PlantVillage      │
  │    dataset (object detection)   │
  │  • Detects bounding boxes per   │
  │    diseased region on the leaf  │
  └─────────────────────────────────┘
         │
         ▼
  For each detection box:
  ├─ Disease class name extracted
  ├─ Confidence score (0–100%)
  ├─ Infected area % (bbox area / image area)
  └─ Severity score = avg(confidence + infected area)
         │
         ▼
  Best detection selected (highest confidence)
  + Pesticide recommendation mapped
  + Annotated image rendered with bounding boxes
         │
         ▼
  JSON response → Frontend Results page
```

### Detected Disease Classes (38 total)
The model covers diseases across **14 plant families**, including:

| Plant | Diseases Detected |
|---|---|
| 🍎 Apple | Apple Scab, Black Rot, Cedar Apple Rust, Healthy |
| 🍅 Tomato | Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Spider Mites, Target Spot, Mosaic Virus, Yellow Leaf Curl Virus, Bacterial Spot, Healthy |
| 🥔 Potato | Early Blight, Late Blight, Healthy |
| 🌽 Corn | Cercospora Leaf Spot, Common Rust, Northern Leaf Blight, Healthy |
| 🍇 Grape | Black Rot, Black Measles, Leaf Blight, Healthy |
| 🍑 Peach | Bacterial Spot, Healthy |
| 🫑 Bell Pepper | Bacterial Spot, Healthy |
| 🍓 Strawberry | Leaf Scorch, Healthy |
| 🍊 Orange | Citrus Greening (HLB) |
| + more | Blueberry, Raspberry, Soybean, Squash |

---

## 🏗️ Architecture

```
PlantDoc-Dataset/
├── app.py                          # Flask REST API (backend)
├── requirements.txt                # Python dependencies
├── data.yaml                       # YOLO dataset config
├── runs/                           # Trained model weights
│   └── runs/detect/plant_disease_runs/yolo_train/weights/
│       └── best.pt                 ← Custom YOLOv8 weights
│
└── DTI/                            # React frontend (Vite)
    └── src/
        ├── App.jsx                 # Root router
        └── layers/
            ├── ui/
            │   ├── pages/          # Landing, Scan, Results, Weather, Community, Login
            │   └── components/     # Navbar, BottomNav, Button, Card
            ├── services/
            │   └── api/            # API client & prediction calls
            └── ai/
                └── components/     # Floating AI chatbot, NLP console
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔬 **Leaf Scan** | Upload a photo or capture from camera; YOLO runs real-time object detection |
| 📊 **Results Dashboard** | Disease name, confidence %, severity %, plant health score, and treatment suggestion |
| 🤖 **AI Farming Chatbot** | Powered by **Google Gemini**; answers only plant & farming questions |
| 🌦️ **Weather Page** | Live weather via OpenWeather API with farming-specific tips |
| 👥 **Community Forum** | Farmers can post, like, comment, and follow each other |
| 🔐 **Auth System** | Sign up / login with SQLite-backed user accounts |
| 🕒 **Prediction History** | Last 25 scan results stored and viewable |
| 🌍 **Multi-language** | i18n support for Hindi, Marathi, Gujarati, Tamil, Telugu |

---

## 🚀 Running Locally

### Prerequisites
- Python 3.10+
- Node.js 18+
- The trained `best.pt` weights file placed at:  
  `runs/runs/detect/plant_disease_runs/yolo_train/weights/best.pt`

### 1. Backend (Flask)

```bash
# Create virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Create .env from example
cp .env.example .env
# Add your GEMINI_API_KEY and OPENWEATHER_API_KEY to .env

# Start the Flask server
python app.py
# Runs at: http://127.0.0.1:5000
```

### 2. Frontend (React + Vite)

```bash
cd DTI
npm install
npm run dev
# Runs at: http://localhost:5173
```

---

## 🔑 Environment Variables

Copy `.env.example` to `.env` and fill in your keys:

```env
GEMINI_API_KEY=your_google_gemini_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
```

| Variable | Purpose | Get it from |
|---|---|---|
| `GEMINI_API_KEY` | Powers the AI farming chatbot | [Google AI Studio](https://aistudio.google.com/app/apikey) |
| `OPENWEATHER_API_KEY` | Live weather & farming tips | [OpenWeather](https://home.openweathermap.org/api_keys) |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server health check + active model name |
| `POST` | `/api/predict` | Run disease detection on a leaf image |
| `GET` | `/api/history` | Fetch last 25 scan predictions |
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive user info |
| `GET` | `/api/posts` | Get community posts (filterable by topic) |
| `POST` | `/api/posts` | Create a new community post |
| `POST` | `/api/posts/:id/like` | Like / unlike a post |
| `GET` | `/api/posts/:id/comments` | Get comments for a post |
| `POST` | `/api/posts/:id/comments` | Add a comment |
| `GET` | `/weather` | Get live weather + farming tip for a city |
| `POST` | `/chat` | Send a message to the Gemini farming chatbot |

---

## 🛠️ Tech Stack

**Backend**
- [Flask](https://flask.palletsprojects.com/) — REST API server
- [Ultralytics YOLOv8](https://github.com/ultralytics/ultralytics) — Object detection model
- [Google Generative AI](https://ai.google.dev/) — Gemini chatbot
- [SQLite](https://www.sqlite.org/) — Lightweight database for users, posts, predictions
- [Pillow](https://python-pillow.org/) — Image processing
- [OpenWeather API](https://openweathermap.org/api) — Live weather

**Frontend**
- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) — Fast SPA framework
- [Tailwind CSS v3](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Smooth page transitions & animations
- [React Router v7](https://reactrouter.com/) — Client-side routing
- [i18next](https://www.i18next.com/) — Multi-language support

---


## 👨‍💻 Author

**Parth Sharma**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
