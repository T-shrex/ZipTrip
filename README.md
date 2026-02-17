🚀 ZIPTRIP AI

Context-Aware AI Travel Planning Engine

Hyper-personalized itinerary generation using Gemini + Google Maps + Intelligent Ranking

---

🌍 What Is ZIPTRIP AI?

ZIPTRIP AI is a next-generation travel intelligence engine that:

✔ Understands user preferences
✔ Learns from reviews & experiences
✔ Ranks hotels, activities & food spots intelligently
✔ Generates optimized day-wise itineraries
✔ Computes real routes via Google Maps
✔ Allows real-time conversational itinerary edits
✔ Exports downloadable plans

Built for **high-end hackathons**, scalability, and production-level AI systems.

---

🧠 Architecture Overview

```
Frontend (Lovable.dev)
        |
        |
     REST API
        |
        v
Backend (FastAPI)
 ├── Gemini AI Engine
 ├── Google Places API
 ├── Google Directions API
 ├── Ranking Engine
 ├── Personalization Engine
 ├── Route Optimizer
 └── PDF Export Engine
```

---

# ⚙️ Tech Stack

| Layer      | Tech                       |
| ---------- | -------------------------- |
| Backend    | FastAPI                    |
| AI Engine  | Gemini 1.5 Pro             |
| Maps       | Google Places + Directions |
| Ranking    | Custom Weighted Scoring    |
| PDF        | ReportLab                  |
| Deployment | Render / Railway           |
| Language   | Python 3.10+               |

---

📦 PROJECT STRUCTURE

```
ziptrip-ai/
│
├── main.py
├── ai_engine.py
├── ranking_engine.py
├── maps_engine.py
├── itinerary_engine.py
├── chat_engine.py
├── pdf_engine.py
├── requirements.txt
├── .env
└── README.md
```

---

🔐 STEP 1 — GET API KEYS

1️⃣ Gemini API

Get from:
[https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

2️⃣ Google Maps API

Enable:

* Places API
* Directions API
* Maps JavaScript API

From:
[https://console.cloud.google.com](https://console.cloud.google.com)

---

🛠 STEP 2 — INSTALL

```bash
git clone <your_repo>
cd ziptrip-ai
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

---

📄 requirements.txt

```txt
fastapi
uvicorn
google-generativeai
python-dotenv
requests
reportlab
pydantic
```

---

🔑 STEP 3 — CREATE .env

```env
GEMINI_API_KEY=your_gemini_key_here
GOOGLE_MAPS_API_KEY=your_maps_key_here
```

---

🚀 STEP 4 — RUN

```bash
uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

🧠 HOW THE AI WORKS

1️⃣ User submits:

* Location
* Budget
* Preferences
* Dietary restrictions
* Selected hotels/activities/food

2️⃣ System does:

 🔎 Data Retrieval

* Fetch hotels via Google Places
* Fetch attractions
* Fetch food spots

📊 Ranking Engine

Custom weighted scoring:

```
score = 
  (rating × 0.4)
+ (review_count_weight × 0.2)
+ (distance_weight × 0.2)
+ (preference_match × 0.2)
```

🤖 AI Personalization (Gemini)

* Analyzes reviews
* Extracts sentiment
* Filters by user vibe
* Builds structured itinerary

🗺 Route Optimization

Google Directions API:

* Computes best routes
* Gets duration + polyline
* Orders locations efficiently

💬 Chat Re-Planning

User: “I don’t eat fish”
System:

* Re-ranks restaurants
* Re-generates food section
* Keeps rest intact

---

📡 API ENDPOINTS

---

🔹 1. Generate Hotels

POST `/hotels`

```json
{
  "location": "Paris",
  "budget": "mid",
  "preferences": ["romantic", "walkable"]
}
```

---

🔹 2. Generate Attractions

POST `/activities`

```json
{
  "location": "Paris",
  "selected_hotel": "Hotel Le Meurice"
}
```

---

🔹 3. Generate Food Spots

POST `/restaurants`

```json
{
  "location": "Paris",
  "diet": "vegetarian"
}
```

---

🔹 4. Build Final Itinerary

POST `/itinerary`

```json
{
  "hotel": {...},
  "activities": [...],
  "restaurants": [...]
}
```

Returns:

* Day-wise schedule
* Travel time
* Route polylines
* Google Maps links

---

🔹 5. Chat Modification

POST `/chat`

```json
{
  "itinerary": {...},
  "message": "I don't eat fish"
}
```

Returns:
Updated itinerary JSON

---

🔹 6. Download PDF

GET `/download/{itinerary_id}`

Returns:
📄 Downloadable itinerary

---

🏆 WHY THIS WINS HACKATHONS

✔ Real AI integration
✔ Real Maps routing
✔ Intelligent ranking
✔ Personalization
✔ Dynamic modification
✔ Clean architecture
✔ Scalable microservices structure
✔ Production-ready deployment

---

🚀 DEPLOY TO RENDER

1. Push to GitHub
2. Go to [https://render.com](https://render.com)
3. New Web Service
4. Connect repo
5. Build Command:

```bash
pip install -r requirements.txt
```

6. Start Command:

```bash
uvicorn main:app --host 0.0.0.0 --port 10000
```

7. Add Environment Variables:

* GEMINI_API_KEY
* GOOGLE_MAPS_API_KEY

---

# 🔥 FUTURE IMPROVEMENTS

* User memory system
* Vector DB for review embeddings
* Collaborative filtering
* Reinforcement learning ranking
* Multi-day trip optimization
* Real-time event API integration
* Weather-aware planning
* Live booking integration

---

# 🛡 Production Considerations

* Rate limiting
* API key protection
* Caching maps results
* Database persistence
* User auth (JWT)
* Monitoring
* Error fallback logic




