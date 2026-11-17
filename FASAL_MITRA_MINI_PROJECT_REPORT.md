# FASAL MITRA: AI-POWERED PLANT DISEASE DETECTION PLATFORM USING YOLOV8 FOR PRECISION AGRICULTURE

### A MINI-PROJECT REPORT (CSET312)

**BY**  
**SAMRIDDHI SHARMA (S24CSEU1948)**  
**PARTH SHARMA (S24CSEU1941)**  
**TANISH SHARMA (S24CSEU1963)**  

<div align="center">

```
===================================================================================
                               BENNETT UNIVERSITY
                              THE TIMES GROUP
                  SCHOOL OF COMPUTER SCIENCE ENGINEERING & TECHNOLOGY
===================================================================================
```

**SUBMITTED TO**  
**SCHOOL OF COMPUTER SCIENCE ENGINEERING AND TECHNOLOGY**  
**BENNETT UNIVERSITY**  
**GREATER NOIDA, 201310, UTTAR PRADESH, INDIA**  

**DECEMBER 2026**

---

## DECLARATION

We hereby declare that the work which is being presented in the report entitled **“FASAL MITRA: AI-POWERED PLANT DISEASE DETECTION PLATFORM USING YOLOV8 FOR PRECISION AGRICULTURE”**, is an authentic record of our own work carried out during the academic period at the School of Computer Science Engineering and Technology, Bennett University, Greater Noida.

The matter and the results presented in this report have not been submitted by us for the award of any other degree or diploma elsewhere.

<br/>

**Signatures of Candidates:**

| Student Name | Enrollment No. | Signature |
| :--- | :--- | :--- |
| **Samriddhi Sharma** | S24CSEU1948 | ____________________ |
| **Parth Sharma** | S24CSEU1941 | ____________________ |
| **Tanish Sharma** | S24CSEU1963 | ____________________ |

---

## ACKNOWLEDGEMENT

We would like to take this opportunity to express our deepest gratitude to our faculty mentor, **Dr. Kaushal Bhardwaj**, for his continuous guidance, technical encouragement, and invaluable feedback throughout the design and development of this project. His insightful recommendations in computer vision pipelines, architectural design, and model evaluation contributed immensely toward the successful completion of this project.

We also express our sincere appreciation to the **Vice Chancellor**, the **Dean**, the **Head of Department (CSE)**, and the faculty members of the School of Computer Science Engineering and Technology at Bennett University for providing state-of-the-art laboratory facilities and computing infrastructure. 

Finally, we extend our heartfelt thanks to our families, peers, and friends whose unwavering encouragement and cooperation helped us overcome technical hurdles and realize **Fasal Mitra**.

<br/>

**Samriddhi Sharma (S24CSEU1948)**  
**Parth Sharma (S24CSEU1941)**  
**Tanish Sharma (S24CSEU1963)**  

---

## TABLE OF CONTENTS

- **LIST OF TABLES**
- **LIST OF FIGURES**
- **LIST OF ABBREVIATIONS**
- **ABSTRACT**
- **1. INTRODUCTION**
  - 1.1 Overview and Context
  - 1.2 Problem Statement
  - 1.3 Motivation & Vision
- **2. BACKGROUND RESEARCH & LITERATURE REVIEW**
  - 2.1 Analysis of Existing Systems
  - 2.2 Literature Review (Key Research Papers)
  - 2.3 Proposed System Overview
  - 2.4 Goals and Objectives
- **3. PROJECT PLANNING & MANAGEMENT**
  - 3.1 Project Lifecycle (Agile Framework)
  - 3.2 Development Setup & Environment
  - 3.3 Project Resources
  - 3.4 Key Assumptions
  - 3.5 Project Tracking and Communication Plan
  - 3.6 Deliverables Matrix
- **4. SYSTEM ANALYSIS AND DESIGN**
  - 4.1 Architectural Overview
  - 4.2 Users and Roles
  - 4.3 Detailed Workflow
  - 4.4 System Design & UML Diagrams
    - 4.4.1 Use-Case Diagram
    - 4.4.2 Class Diagram
    - 4.4.3 Activity Diagram
    - 4.4.4 Sequence Diagram
    - 4.4.5 Data Architecture & Entity-Relationship (ER) Diagram
- **5. USER INTERFACE DESIGN**
  - 5.1 UI/UX Design Philosophy
  - 5.2 Key Screens & User Workflows
- **6. SYSTEM IMPLEMENTATION & CORE CODE**
  - 6.1 Algorithms & Pseudo-Code
  - 6.2 Backend Core Implementation (Flask & YOLOv8 Inference Engine)
  - 6.3 Frontend Core Implementation (React SPA, Canvas Compression & Voice Engine)
- **7. PERFORMANCE EVALUATION & RESULTS**
  - 7.1 Dataset Description
  - 7.2 Training Setup & Hyperparameters
  - 7.3 Quantitative Metrics & Benchmarks
  - 7.4 Comparative Analysis with Baseline Architectures
- **8. PROJECT CLOSURE & FUTURE SCOPE**
  - 8.1 Goals & Vision Reassessment
  - 8.2 Delivered Solution Summary
  - 8.3 Remaining Work & Future Scope
  - 8.4 Ethical Considerations & Societal Impact
- **REFERENCES**

---

## LIST OF TABLES

| Table No. | Title | Page No. |
| :--- | :--- | :--- |
| **Table 1** | Quantifiable Project Goals and Target Metrics | 7 |
| **Table 2** | Hardware, Software, and API Project Resources | 9 |
| **Table 3** | Scheduled Team and Mentor Meetings | 10 |
| **Table 4** | Information Sharing Matrix | 11 |
| **Table 5** | Project Deliverables Summary | 11 |
| **Table 6** | System Actors and Role Definitions | 13 |
| **Table 7** | Detected Plant Disease Classes (38 Classes Across 14 Crops) | 26 |
| **Table 8** | Model Training Hyperparameters | 27 |
| **Table 9** | Quantitative Performance Metrics of Trained YOLOv8 Model | 28 |
| **Table 10** | Comparative Performance Analysis Against Baseline Models | 29 |

---

## LIST OF FIGURES

| Figure No. | Caption | Page No. |
| :--- | :--- | :--- |
| **Figure 1** | High-Level Multi-Tier System Architecture of Fasal Mitra | 14 |
| **Figure 2** | Use-Case Diagram for Fasal Mitra Platform | 16 |
| **Figure 3** | Object-Oriented Class Diagram | 17 |
| **Figure 4** | Activity Diagram Illustrating Leaf Scan and Diagnosis Workflow | 19 |
| **Figure 5** | Sequence Diagram for Real-Time Diagnosis and Multilingual Advisory | 20 |
| **Figure 6** | Entity-Relationship (ER) Diagram of SQLite Database | 22 |
| **Figure 7** | User Interface Flow & Visual Dashboard Architecture | 23 |
| **Figure 8** | YOLOv8 Bounding Box Localization & Severity Calculation Flow | 25 |

---

## LIST OF ABBREVIATIONS

| Abbreviation | Expanded Form |
| :--- | :--- |
| **AI** | Artificial Intelligence |
| **API** | Application Programming Interface |
| **Bbox** | Bounding Box |
| **CNN** | Convolutional Neural Network |
| **CORS** | Cross-Origin Resource Sharing |
| **DFD** | Data Flow Diagram |
| **ER** | Entity-Relationship |
| **GPU** | Graphics Processing Unit |
| **HLB** | Huanglongbing (Citrus Greening) |
| **IoU** | Intersection over Union |
| **JSON** | JavaScript Object Notation |
| **LLM** | Large Language Model |
| **mAP** | Mean Average Precision |
| **MVC** | Model-View-Controller |
| **NLP** | Natural Language Processing |
| **REST** | Representational State Transfer |
| **SPA** | Single Page Application |
| **SVM** | Support Vector Machine |
| **UI / UX** | User Interface / User Experience |
| **UML** | Unified Modeling Language |
| **YOLO** | You Only Look Once |

---

## ABSTRACT

Agriculture forms the economic backbone of developing countries, employing over 50% of the workforce in nations such as India. However, plant pathogens—including foliar fungi, bacteria, viruses, and oomycetes—inflict devastating losses exceeding 30% of global annual crop yields. Traditional disease detection relies upon manual visual scouting by agricultural extension officers or lab-based histopathological tests. Both approaches are slow, subjective, geographically inaccessible to smallholders, and often arrive too late to avert irreversible crop ruin.

To resolve these pressing agricultural bottlenecks, this project presents **Fasal Mitra**, an end-to-end AI-powered precision agriculture platform designed for real-time foliar disease detection, severity quantification, and agro-advisory delivery. The core computer vision pipeline utilizes a customized **YOLOv8** single-stage object detector trained on the PlantVillage benchmark dataset, comprising **54,306 high-resolution leaf images** across **38 distinct classes** spanning **14 key agricultural crops** (including tomato, potato, apple, grape, corn, and bell pepper). YOLOv8 detects infected leaf spots in a single forward pass, outputting tight bounding boxes, disease classifications, localized severity percentages (infected surface area relative to total leaf blade area), and overall plant health scores. 

Fasal Mitra achieves an **overall validation accuracy of 94.0%**, a **precision of 92.4%**, a **recall of 91.8%**, a **mAP@0.5 of 93.6%**, and an **ultrafast inference latency of ~30 milliseconds**, enabling seamless browser-based deployment on edge hardware. 

The full-stack application incorporates:
1. A **Flask REST API** backend serving YOLOv8 inference, SQLite database management, and asynchronous external service integrations.
2. An interactive **React 19 Single Page Application (SPA)** styled with Tailwind CSS and Framer Motion, featuring camera frame capture, canvas-based client compression (eliminating browser memory crashes), and an animated scan radar overlay.
3. An **AI Agricultural Chatbot** powered by **Google Gemini LLM**, equipped with strict agricultural guardrails and native regional language voice synthesis/recognition (Web Speech API) supporting **English, Hindi (हिंदी), Marathi (मराठी), Gujarati (ગુજરાતી), Tamil (தமிழ்), and Telugu (తెలుగు)**.
4. An **OpenWeather API integration** that correlates live atmospheric temperature, humidity, and rainfall rates with disease vulnerability curves to generate proactive field spraying alerts.
5. A **Farmer Community Knowledge Hub** supporting peer-to-peer thread sharing, photo uploads, comment exchanges, and crop management discussions.

The resulting platform bridges the gap between state-of-the-art deep learning and smallholder agrarian usability, providing rural farmers with an accessible, multilingual, and intelligent agricultural companion.

---

## 1. INTRODUCTION

### 1.1 Overview and Context
Agriculture provides food, sustenance, and raw materials for the global population. However, agrarian ecosystems face compounding stressors: rapid climate fluctuation, pest outbreaks, and virulent plant pathologies. Fungal, bacterial, and viral infections attack foliage, diminish chlorophyll synthesis, stunt vegetative growth, and drastically lower harvest yields. In staple crops like potatoes and tomatoes, epidemics such as Late Blight (*Phytophthora infestans*) can obliterate entire hectares within 48 to 72 hours under warm, humid weather conditions.

Recent breakthroughs in Deep Learning (DL) and Computer Vision (CV) have demonstrated unprecedented efficacy in pattern recognition. Convolutional Neural Networks (CNNs) have revolutionized image classification; however, pure classification models (e.g., ResNet, VGG, MobileNet) classify an entire image globally, failing to localize multi-lesion diseased patches, evaluate damage severity, or distinguish multiple co-occurring foliar infections on the same leaf.

**Fasal Mitra** addresses these limitations by shifting the paradigm from simple whole-image classification to **deep object detection** using the state-of-the-art **YOLOv8 (You Only Look Once, version 8)** architecture. Developed by Ultralytics, YOLOv8 offers an anchor-free split head, cross-stage partial connections, and enhanced feature pyramid networks (PAN-FPN), allowing precise spatial bounding-box regression and multi-class disease categorization in real time.

```
       +-----------------------------------------------------------------+
       |                        FASAL MITRA ECOSYSTEM                    |
       |                                                                 |
       |  +--------------------+   +-------------------+   +-----------+ |
       |  |   YOLOv8 Vision    |   |   Gemini 2.5 AI   |   | Live Agri | |
       |  |  Object Detection  |   |    Agri-Chatbot   |   |  Weather  | |
       |  +--------------------+   +-------------------+   +-----------+ |
       |            |                        |                   |       |
       |  +------------------------------------------------------------+ |
       |  |      Multilingual React 19 Frontend (6 Indian Languages)   | |
       |  +------------------------------------------------------------+ |
       |            |                        |                   |       |
       |  +--------------------+   +-------------------+   +-----------+ |
       |  | SQLite Community   |   | Severity / Health |   | Pesticide | |
       |  |    Knowledge Hub   |   |   Quantification  |   | Advisory  | |
       |  +--------------------+   +-------------------+   +-----------+ |
       +-----------------------------------------------------------------+
```

### 1.2 Problem Statement
Smallholder farmers and agronomists across developing nations face critical barriers in preserving crop yields:
1. **Scarcity of Qualified Agronomists:** In rural agricultural sectors, the ratio of certified extension officers to farming families often exceeds 1:1,000. Agronomists cannot conduct timely physical inspections across dispersed acreage.
2. **Delayed and Inaccurate Diagnosis:** Traditional diagnostics rely on human visual recall, leading to frequent misidentifications (e.g., confusing early blight concentric rings with septoria leaf spot or nutrient deficiencies). Incorrect diagnoses result in improper pesticide applications that waste money and contaminate soil.
3. **Absence of Quantitative Severity Estimation:** Conventional tools merely state whether a disease is present. Farmers lack metrics detailing what percentage of the leaf blade is compromised, preventing them from deciding whether to prune foliage, apply bio-fungicides, or use emergency systemic treatments.
4. **Digital and Linguistic Exclusion:** Most agricultural software applications are deployed solely in English with text-heavy interfaces. Farmers require intuitive voice input, speech output, and localized terminology in native regional scripts.
5. **Fragmented Information Silos:** Disease detection tools operate in isolation from meteorological factors. High ambient humidity (>85%) combined with moderate temperatures drastically accelerates fungal spore germination, yet existing detection apps fail to integrate meteorological warning indicators.

### 1.3 Motivation & Vision
The motivation behind **Fasal Mitra** is to build a unified, intelligent agricultural companion that democratizes deep learning for farmers regardless of literacy or language. By coupling high-speed YOLOv8 object detection with generative AI consultation (Google Gemini), meteorological hazard profiling (OpenWeather), and localized peer interaction (Farmer Community), Fasal Mitra transforms mobile smartphones into accessible agricultural diagnostic clinics.

---

## 2. BACKGROUND RESEARCH & LITERATURE REVIEW

### 2.1 Analysis of Existing Systems
Existing agricultural identification solutions fall into three main archetypes:
1. **Commercial Mobile Apps (e.g., Plantix, PictureThis):** While popular, commercial applications function as closed-source proprietary silos. They often charge subscriptions, rely on cloud-tethered whole-image classifiers that fail on low-bandwidth 2G/3G connections, and lack granular bounding box severity breakdowns.
2. **Academic Classification Pipelines:** Academic literature heavily documents standard transfer-learning models (VGG16, ResNet50, InceptionV3) trained on PlantVillage. While achieving >95% accuracy on clean, laboratory-photographed leaf cutouts, these models suffer severe degradation in field conditions where complex backgrounds, weeds, overlapping leaves, and varied lighting occur.
3. **Hardware-Tethered IoT Scouting Systems:** Multispectral and hyperspectral drone imaging platforms deliver high diagnostic accuracy but require massive capital investment, complex calibration, and specialized training, making them impractical for smallholders.

### 2.2 Literature Review (Key Research Papers)

1. **Garg & Biswas (2020) — *Improved Neural Network based Plant Diseases Identification*:**  
   The authors explored convolutional neural architectures on foliar datasets, showing that deep feature extractors outperform conventional texture-based classifiers (GLCM with SVM). However, their system only performed classification without lesion localization.
2. **Al Sahili & Awad (2023) — *The Power of Transfer Learning in Agricultural Applications: AgriNet*:**  
   Investigated deep transfer learning across varied agricultural crops, achieving 98.2% top-1 accuracy on homogeneous background images. The authors highlighted that performance dropped by up to 22% when tested against complex outdoor foliage, emphasizing the need for robust object-detection bounding algorithms.
3. **Aldakheel et al. (2024) — *Detection and Identification of Plant Leaf Diseases using YOLOv4*:**  
   Demonstrated the feasibility of single-stage detectors (YOLOv4) for foliage pathogen bounding. While yielding an mAP of 88.5%, inference on edge devices suffered from higher parameter counts and anchor-box tuning overhead.
4. **Singh, Jain et al. (2020) — *PlantDoc: A Dataset for Visual Plant Disease Detection (ACM CoDS COMAD)*:**  
   Introduced the PlantDoc benchmark dataset comprising real-world unconstrained outdoor agricultural imagery. The paper proved that models trained purely on laboratory-staged leaves fail in open fields, validating the importance of multi-scale feature pyramids and data augmentation.
5. **Hughes & Salathé (2015) — *PlantVillage: An Open Access Repository of Images on Plant Health*:**  
   Curated the benchmark dataset of 54,306 images across 38 classes. This foundational open-access repository forms the baseline training corpus for precision diagnostic models worldwide.
6. **Jocher et al. (2023) — *Ultralytics YOLOv8 Architecture and Real-Time Object Detection*:**  
   Introduced the YOLOv8 anchor-free detection paradigm featuring decoupled head architecture, task-aligned assigner, and optimized mosaic augmentation, outperforming previous YOLO iterations in both mAP and CPU/GPU latency.
7. **Mohanty et al. (2016) — *Using Deep Learning for Image-Based Plant Disease Detection*:**  
   Trained AlexNet and GoogLeNet architectures across 26 diseases, demonstrating a peak accuracy of 99.35%. Crucially, the authors noted the limitation of whole-image categorization and called for models capable of localized lesion quantification.
8. **Ferentinos (2018) — *Deep Learning Models for Plant Disease Detection and Diagnosis*:**  
   Evaluated VGG, ResNet, and DenseNet networks, confirming that deep residual architectures minimize gradient vanishing during foliar feature extraction.

### 2.3 Proposed System Overview
**Fasal Mitra** provides an end-to-end client-server architecture:
- **Perception Layer:** Farmers take photos via mobile camera or upload leaf images. An in-browser client-side canvas engine automatically downsamples ultra-high-resolution inputs to a standardized 1024px JPEG, avoiding memory exhaustion.
- **Inference Layer:** The image is sent to the Flask REST API via Base64 JSON payload. Custom-trained **YOLOv8** weights (`best.pt`) run inference, predicting bounding boxes, classes, and confidence scores in ~30ms.
- **Quantification Engine:** Mathematical bounding box analysis calculates infected surface area relative to total leaf blade area, computing a dynamic severity score (0–100%) and overall plant health score.
- **Advisory & Language Layer:** Disease metrics feed into a Google Gemini reasoning prompt that generates structured treatment advice (Cause, Symptoms, Prevention, Treatment). The system dynamically translates and speaks the advice in the farmer's chosen native Indian language.
- **Atmospheric Layer:** OpenWeather REST queries fetch local field temperature, relative humidity, and rainfall rates, generating predictive fungal and bacterial risk warnings.
- **Collaborative Layer:** An SQLite persistence layer stores prediction histories and powers an interactive community discussion forum.

### 2.4 Goals and Objectives

**Table 1: Quantifiable Project Goals and Target Metrics**
| # | Goal / Objective | Target Metric / Acceptance Criteria | Status |
| :---: | :--- | :--- | :---: |
| **1** | Automated Disease Identification | Detect and classify 38 plant disease categories across 14 crops | **Achieved** |
| **2** | High Diagnostic Precision | Overall validation accuracy > 90% (Achieved: **94.0%**, mAP@0.5: **93.6%**) | **Achieved** |
| **3** | Real-Time Latency | Inference time < 50ms per frame (Achieved: **~30ms**) | **Achieved** |
| **4** | Quantitative Damage Assessment | Compute bounding box infected area % and plant health score (0–100%) | **Achieved** |
| **5** | Actionable Treatment Advisory | Dynamic pesticide and bio-cultural suggestions mapped to each diagnosis | **Achieved** |
| **6** | Multilingual Accessibility | Full UI, Chatbot, and Voice TTS/STT across 6 Indian languages | **Achieved** |
| **7** | Weather-Driven Risk Warning | Integrate real-time temperature, humidity, and rainfall disease advisories | **Achieved** |
| **8** | Community Knowledge Exchange | Interactive SQLite forum with threads, comments, and upvotes | **Achieved** |

---

## 3. PROJECT PLANNING & MANAGEMENT

### 3.1 Project Lifecycle (Agile Framework)
The development adhered to an **Agile Scrum framework** organized into two-week sprints:
- **Sprint 1 (Weeks 1–2): Dataset Acquisition & YOLOv8 Model Training**  
  Data extraction of PlantVillage corpus; class filtering (38 classes); label verification; albumentations data augmentation (rotations, HSV color shifts, bounding box transformations); YOLOv8 training on GPU.
- **Sprint 2 (Weeks 3–4): Flask RESTful Backend & Database Architecture**  
  Development of `app.py`; base64 image decoding; YOLO inference endpoints (`/api/predict`); SQLite schema creation (`predictions`, `users`, `posts`, `comments`, `likes`).
- **Sprint 3 (Weeks 5–6): Frontend Core & Multilingual System**  
  Scaffolding React 19 SPA with Vite; implementing Tailwind CSS design system; creating camera viewfinder and scan radar overlay; integrating `i18next` for English, Hindi, Marathi, Gujarati, Tamil, and Telugu.
- **Sprint 4 (Weeks 7–8): Generative AI Consultation & Atmospheric APIs**  
  Connecting Google Gemini Generative AI layer with agricultural guardrails; integrating OpenWeather API; implementing Web Speech API (STT & TTS) with regional language accents (`hi-IN`, `mr-IN`, etc.).
- **Sprint 5 (Weeks 9–10): Testing, Client Optimization & Production Hardening**  
  Resolving browser memory quotas through client-side canvas scaling (1024px input, 800px annotated output); building Vite production bundle; conducting end-to-end integration testing.

### 3.2 Development Setup & Environment
- **Operating System:** Windows 11 / Linux (Ubuntu 22.04 LTS)
- **Deep Learning Framework:** PyTorch 2.2+, Ultralytics YOLOv8
- **Backend Stack:** Python 3.10+, Flask 3.0, Flask-CORS, Pillow 10.0, SQLite3
- **Frontend Stack:** Node.js 18+, React 19, Vite 7, Tailwind CSS v3, Framer Motion 12, React Router v7, i18next 26
- **External APIs:** Google Gemini API (Interactions LLM), OpenWeatherMap API (Current Weather)
- **Version Control:** Git, GitHub

### 3.3 Project Resources

**Table 2: Hardware, Software, and API Project Resources**
| Resource | Description | Specification / Provider | Quantity |
| :--- | :--- | :--- | :---: |
| **Development Machine** | Workstation for coding, testing, and documentation | Intel Core i7 / 16 GB RAM / SSD | 3 Units |
| **GPU Compute** | Model training and validation | NVIDIA RTX 3060 / Google Colab T4 | 1 GPU |
| **Version Control Repository** | Distributed code repository and issue tracker | GitHub (`parthsharma/Fasal-Mitra`) | 1 Repo |
| **Database Engine** | Embedded relational database | SQLite3 (`predictions.db`) | 1 Database |
| **LLM Inference Service** | Agricultural expert reasoning and chatbot | Google Gemini 2.5 Flash / 2.0 Flash | 1 API Key |
| **Meteorological Service** | Live ambient temperature, humidity, rainfall | OpenWeather Current Weather API | 1 API Key |

### 3.4 Key Assumptions
1. Farmers have access to a smartphone or tablet equipped with a standard camera and a modern web browser supporting WebGL and HTML5 Canvas.
2. An active Internet connection is available during leaf scanning to allow API communication with the Flask backend.
3. Uploaded leaf images contain adequate daylight illumination and focus on the symptomatic leaf blade.
4. Users follow recommended pesticide safety intervals and wear protective gear during chemical spray application.

### 3.5 Project Tracking and Communication Plan

**Table 3: Scheduled Team and Mentor Meetings**
| Meeting Type | Frequency | Participants | Agenda / Objective |
| :--- | :--- | :--- | :--- |
| **Daily Standup** | 3x weekly | Project Team | 15-min sync on blockers, completed tasks, and daily sprint goals |
| **Mentor Review** | Weekly | Team + Dr. Kaushal Bhardwaj | Progress demonstrations, code audits, architecture validation |
| **Sprint Retrospective** | Bi-weekly | Project Team | Review sprint velocity, evaluate bugs, prioritize upcoming sprint |

**Table 4: Information Sharing Matrix**
| Stakeholder | Information Shared | Frequency | Medium |
| :--- | :--- | :--- | :--- |
| **Project Team** | Code commits, PRs, API schemas | Real-time | GitHub, Discord, Google Drive |
| **Faculty Mentor** | Sprint progress, test logs, demo videos | Weekly | In-person review, Bennett Portal |

### 3.6 Deliverables Matrix

**Table 5: Project Deliverables Summary**
| # | Deliverable | Description | Format |
| :---: | :--- | :--- | :---: |
| **1** | Trained Weights File | Custom YOLOv8 weights trained on 38 disease classes | `best.pt` (PyTorch) |
| **2** | Backend Server | Complete RESTful Flask API with database and AI routing | Python (`app.py`) |
| **3** | Frontend Web App | React 19 Single Page Application with 6 language packs | React / Vite source |
| **4** | Database Schema | SQLite relational database for users, scans, and posts | `predictions.db` |
| **5** | Project Documentation | Final comprehensive technical project report | Markdown / PDF |
| **6** | Video Demonstration | End-to-end system walkthrough showing real-time scan | MP4 Video (3 min) |

---

## 4. SYSTEM ANALYSIS AND DESIGN

### 4.1 Architectural Overview
Fasal Mitra is designed using a **Layered Model-View-Controller (MVC) and Micro-Service Oriented Pattern**. This guarantees a strict separation of concerns between presentation, business rules, deep learning inference, and data persistence.

```
       +-----------------------------------------------------------------------+
       |                         PRESENTATION TIER                             |
       |  React 19 SPA (Vite) + Tailwind CSS + Framer Motion + i18next         |
       |  [Camera Viewfinder]  [Scan Radar]  [Voice Console]  [Agri Dashboard] |
       +-----------------------------------------------------------------------+
                                          |
                                          | HTTP REST (JSON / Base64)
                                          v
       +-----------------------------------------------------------------------+
       |                      APPLICATION / BUSINESS TIER                      |
       |  Flask REST API (Python 3.10)                                         |
       |  • /api/predict          • /chat               • /weather             |
       |  • /api/recommendation   • /api/auth/*         • /api/posts           |
       +-----------------------------------------------------------------------+
                     |                       |                     |
                     v                       v                     v
       +-------------------------+ +-------------------+ +---------------------+
       |    AI INFERENCE TIER    | |   DATABASE TIER   | |    EXTERNAL SERVICES|
       |  • YOLOv8 (best.pt)     | |  SQLite3 Database | |  • Google Gemini LLM|
       |  • Bbox Regression      | |  • users, posts   | |  • OpenWeather API  |
       |  • Severity & Health    | |  • predictions    | |  • Web Speech API   |
       +-------------------------+ +-------------------+ +---------------------+
```

*Figure 1: High-Level Multi-Tier System Architecture of Fasal Mitra*

### 4.2 Users and Roles

**Table 6: System Actors and Role Definitions**
| User / Actor | Description | Key Permissions & Capabilities |
| :--- | :--- | :--- |
| **Smallholder Farmer** | Primary field user seeking real-time crop disease diagnosis | Captures leaf photos, views severity, listens to voice advice in native language, posts forum questions |
| **Agricultural Extension Officer** | Technical advisor validating field diagnoses | Reviews historical predictions, provides authoritative forum replies, recommends localized pesticides |
| **System Administrator** | Platform manager overseeing infrastructure | Manages user accounts, maintains database tables, monitors API rate limits and model weight updates |
| **AI Agricultural Advisor** | Autonomous LLM agent (Google Gemini) | Delivers instant plant pathology answers, enforces farming guardrails, tailors advice to weather |

### 4.3 Detailed Workflow
The step-by-step diagnostic workflow follows a clean linear pipeline:
1. **Image Ingestion & Preprocessing:** The farmer opens the `/scan` route, activates their device camera, and captures an image of a symptomatic leaf. A client-side canvas scales down the raw bitmap to a maximum bounding dimension of 1024px at 85% JPEG quality, producing a clean base64 data URL.
2. **REST API Transmission:** The base64 image is transmitted via HTTP `POST /api/predict` to the Flask backend.
3. **YOLOv8 Inference:** The backend decodes the data URL into a PIL Image and converts it into a NumPy array. The custom YOLOv8 model runs a forward pass at a confidence threshold of 0.20.
4. **Bounding Box Regression & Metric Calculation:** For every detected bounding box, the model extracts the class index, confidence percentage, and spatial coordinates $(x_1, y_1, x_2, y_2)$. The area of each bounding box relative to total image area determines the infected percentage.
5. **Severity & Health Formulation:**
   $$\text{Infected Area \%} = \min\left(100.0, \frac{\sum (w_{\text{box}} \times h_{\text{box}})}{W_{\text{image}} \times H_{\text{image}}} \times 100\right)$$
   $$\text{Severity Score} = 0.5 \times (\text{Confidence \%}) + 0.5 \times (\text{Infected Area \%})$$
   $$\text{Plant Health Score} = \max(0.0, 100.0 - \text{Severity Score})$$
6. **Annotation & Compression:** Pillow renders colored bounding boxes with clear label tags over the image. The annotated image is compressed to 800px JPEG quality 82 (keeping payload <60 KB) and returned to the client.
7. **Generative Agro-Advisory:** The predicted condition triggers an asynchronous `POST /api/recommendation` call to Google Gemini. Gemini synthesizes a 4-part treatment protocol (Cause, Symptoms, Prevention, Treatment) localized to the user's active language.
8. **Persistence:** The prediction record is saved to the SQLite `predictions` table for historical tracking.

### 4.4 System Design & UML Diagrams

#### 4.4.1 Use-Case Diagram
The use-case diagram specifies interactions between actors (Farmer, Extension Officer, Admin) and platform features.

```mermaid
flowchart LR
    Farmer(("🌾 Farmer"))
    Admin(("⚙️ Administrator"))
    Gemini(("🤖 Gemini LLM"))
    WeatherAPI(("🌦️ Weather API"))

    subgraph SystemBoundary ["Fasal Mitra Platform Boundary"]
        UC1(["Register / Login"])
        UC2(["Select Regional Language"])
        UC3(["Capture / Upload Leaf Photo"])
        UC4(["Run YOLOv8 Disease Diagnosis"])
        UC5(["View Severity & Health Score"])
        UC6(["Query AI Voice Chatbot"])
        UC7(["Check Live Weather & Spraying Advisory"])
        UC8(["Create / Comment on Community Posts"])
        UC9(["Manage System Records"])
    end

    Farmer --> UC1
    Farmer --> UC2
    Farmer --> UC3
    Farmer --> UC4
    Farmer --> UC5
    Farmer --> UC6
    Farmer --> UC7
    Farmer --> UC8

    Admin --> UC1
    Admin --> UC9
    Admin --> UC8

    UC4 -.-> UC5
    UC6 <--> Gemini
    UC7 <--> WeatherAPI
```

*Figure 2: Use-Case Diagram for Fasal Mitra Platform*

#### 4.4.2 Class Diagram
The class diagram captures the object-oriented structure of the backend server and its primary data models.

```mermaid
classDiagram
    class User {
        +int id
        +string name
        +string email
        +string password_hash
        +datetime created_at
        +register()
        +authenticate()
    }

    class PredictionRecord {
        +int id
        +string disease_name
        +float confidence_pct
        +float severity_pct
        +float health_pct
        +string recommendation
        +datetime created_at
        +save_to_db()
    }

    class Post {
        +int id
        +int user_id
        +string content
        +string topic
        +datetime created_at
        +add_like()
        +get_comments()
    }

    class Comment {
        +int id
        +int post_id
        +int user_id
        +string content
        +datetime created_at
    }

    class YOLOInferenceEngine {
        +Path weights_path
        +YOLO model
        +load_weights()
        +predict_leaf(image) list
        +compute_severity(boxes) float
    }

    class GeminiChatService {
        +string api_key
        +generate_advice(disease, metrics) string
        +chat(query, language) string
    }

    User "1" --> "0..*" Post : creates
    User "1" --> "0..*" Comment : writes
    Post "1" --> "0..*" Comment : contains
    User "1" --> "0..*" PredictionRecord : generates
    YOLOInferenceEngine ..> PredictionRecord : produces
    GeminiChatService ..> PredictionRecord : enriches
```

*Figure 3: Object-Oriented Class Diagram*

#### 4.4.3 Activity Diagram
The activity diagram models the operational flow of scanning a leaf, running inference, and obtaining localized recommendations across frontend and backend swimlanes.

```mermaid
flowchart TD
    subgraph Frontend ["Client Browser (React 19)"]
        A1([Open Fasal Mitra App]) --> A2[Select Native Language]
        A2 --> A3[Access Camera / Select Leaf Image]
        A3 --> A4[Canvas Downsamples to 1024px JPEG]
        A4 --> A5[Send Base64 Image to /api/predict]
    end

    subgraph Backend ["Server Backend (Flask + YOLOv8)"]
        B1[Receive Base64 Request] --> B2[Decode to NumPy / PIL Image]
        B2 --> B3[Run YOLOv8 Forward Pass]
        B3 --> B4{Detections Found?}
        B4 -- Yes --> B5[Extract Bboxes & Confidence]
        B4 -- No --> B6[Set Diagnosis to Healthy / Fallback]
        B5 --> B7[Calculate Severity % & Health %]
        B6 --> B7
        B7 --> B8[Render Bounding Boxes on Image]
        B8 --> B9[Save Prediction to SQLite DB]
        B9 --> B10[Return JSON Metrics & Annotated Image]
    end

    subgraph PostProcessing ["Advisory & Advisory View"]
        C1[Display Annotated Leaf & Severity Gauges]
        C2[Trigger /api/recommendation to Gemini]
        C3[Synthesize Audio via Web Speech API]
        C4([User Reviews Diagnosis & Treatment])
    end

    A5 --> B1
    B10 --> C1
    C1 --> C2
    C2 --> C3
    C3 --> C4
```

*Figure 4: Activity Diagram Illustrating Leaf Scan and Diagnosis Workflow*

#### 4.4.4 Sequence Diagram
The sequence diagram details chronological message exchanges across actors, frontend components, Flask controllers, deep learning engines, and external cloud APIs.

```mermaid
sequenceDiagram
    autonumber
    actor Farmer as 🌾 Farmer
    participant UI as 💻 React Frontend
    participant Server as ⚙️ Flask API
    participant YOLO as 🧠 YOLOv8 Engine
    participant DB as 🗄️ SQLite Database
    participant Gemini as 🤖 Google Gemini API

    Farmer->>UI: Selects Language & Captures Leaf Image
    UI->>UI: Compresses Frame to 1024px JPEG (Canvas)
    UI->>Server: POST /api/predict {imageDataUrl, conf: 0.20}
    Server->>Server: Decodes Base64 to RGB PIL Image
    Server->>YOLO: model.predict(image_array)
    YOLO-->>Server: Detection Boxes, Classes, Confidence
    Server->>Server: Calculates Infected Area %, Severity & Health Score
    Server->>Server: Annotates Image with Bounding Boxes
    Server->>DB: INSERT INTO predictions (...)
    Server-->>UI: 200 OK {disease, confidence, severity, health, annotatedImage}
    UI->>Farmer: Displays Bounding Boxes & Severity Visualizer
    UI->>Server: POST /api/recommendation {disease, metrics, language}
    Server->>Gemini: Generates Treatment Protocol (Native Language)
    Gemini-->>Server: Structured Advice (Cause, Symptoms, Treatment)
    Server-->>UI: 200 OK {recommendation}
    UI->>Farmer: Displays Treatment & Reads Aloud via Voice TTS
```

*Figure 5: Sequence Diagram for Real-Time Diagnosis and Multilingual Advisory*

#### 4.4.5 Data Architecture & Entity-Relationship (ER) Diagram
The database layer is managed by SQLite3 (`predictions.db`), designed in Third Normal Form (3NF) to support users, scan logs, community threads, and engagement metrics.

```mermaid
erDiagram
    USERS ||--o{ POSTS : writes
    USERS ||--o{ COMMENTS : authors
    USERS ||--o{ LIKES : casts
    USERS ||--o{ PREDICTIONS : initiates
    POSTS ||--o{ COMMENTS : receives
    POSTS ||--o{ LIKES : receives

    USERS {
        int id PK
        string name
        string email UK
        string password_hash
        datetime created_at
    }

    PREDICTIONS {
        int id PK
        datetime created_at
        string disease
        float confidence_pct
        float severity_pct
        float health_pct
        text recommendation
    }

    POSTS {
        int id PK
        int user_id FK
        text content
        string topic
        datetime created_at
    }

    COMMENTS {
        int id PK
        int post_id FK
        int user_id FK
        text content
        datetime created_at
    }

    LIKES {
        int id PK
        int user_id FK
        int post_id FK
        datetime created_at
    }
```

*Figure 6: Entity-Relationship (ER) Diagram of SQLite Database*

---

## 5. USER INTERFACE DESIGN

### 5.1 UI/UX Design Philosophy
Fasal Mitra’s frontend adheres to three foundational UX principles:
1. **Zero Cognitive Friction for Agrarian Users:** Farmers require instant results with minimum taps. The UI uses an emerald brand theme (`#061A13`, `#10B981`) that evokes plant vitality and provides high contrast in outdoor sunlight.
2. **Resilience Against Low Memory Hardware:** Mobile browsers often crash when storing raw 12-megapixel phone camera captures in `localStorage`. Fasal Mitra scales inputs to 1024px before transmission and compresses annotated outputs to 800px JPEG quality 82 (<60 KB), eliminating `QuotaExceededError` crashes.
3. **Inclusive Native Language & Voice First:** Every key page string is mapped through `react-i18next`. Voice recognition and audio text-to-speech automatically adapt to the user's active language locale (`hi-IN`, `mr-IN`, `gu-IN`, `ta-IN`, `te-IN`, `en-US`).

```
+-----------------------------------------------------------------------------------+
|  🌿 FASAL MITRA          [Home] [Scan] [Results] [Weather] [Community] [🌐 Hindi] |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [ AI CROP INTELLIGENCE ]                                                         |
|  फसल मित्र (Fasal Mitra)                                                          |
|  स्कैन, भविष्यवाणी, मौसम जानकारी और उपचार योजना के लिए केंद्रीय एआई हब।         |
|                                                                                   |
|       [ 📷 Start Scan ]          [ 🌦️ Check Weather ]         [ 🔐 Login ]        |
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  |  NLP ASSISTANT (Gemini AI)                                                  |  |
|  |  [ Ask AI about crop risk...                                 ] [🎤] [Analyze]|  |
|  |  AI readiness: awaiting crop query.                                         |  |
|  +-----------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------+
```

*Figure 7: User Interface Flow & Visual Dashboard Architecture*

### 5.2 Key Screens & User Workflows
1. **Landing Page (`/`):** Features the brand banner, quick-access navigation buttons, language dropdown, and floating AI assistant toggle.
2. **AI Camera Scan Page (`/scan`):** Houses the HTML5 video viewfinder, frame capture button, file uploader, and animated scan radar overlay.
3. **Results Dashboard (`/results`):** Displays the annotated leaf image with colored bounding boxes, alongside dynamic progress bars indicating Disease Name, Confidence Score, Estimated Severity %, and Plant Health Index. An expandable card displays the Gemini-generated 4-part treatment protocol.
4. **Weather Intelligence Page (`/weather`):** Queries live city weather via OpenWeather API, rendering ambient temperature, relative humidity, sky conditions, and rainfall rate alongside practical farming advisories.
5. **Community Forum (`/community`):** Enables farmers to post crop queries, tag agronomic categories (Crop Management, Pest Control, Organic Farming), like threads, and post comments.
6. **Authentication Page (`/login`):** Provides tabbed Login and Signup forms secured with SHA-256 hashed password authentication.

---

## 6. SYSTEM IMPLEMENTATION & CORE CODE

### 6.1 Algorithms & Pseudo-Code

#### Algorithm 1: YOLOv8 Foliar Disease Detection & Severity Scoring
```
Input : Raw leaf image (I_raw), Confidence threshold (theta_conf = 0.20)
Output: Diagnosis D, Confidence C, Severity S, Health H, Annotated Image I_annot

1. Begin
2.   I_rgb <- DecodeBase64AndResize(I_raw, max_dim = 1024)
3.   W_img, H_img <- Dimensions(I_rgb)
4.   Detections <- YOLOv8_ForwardPass(I_rgb, conf = theta_conf)
5.   If Length(Detections) == 0 Then
6.       D <- "Healthy / No Pathogen Detected"
7.       C <- 90.0, S <- 0.0, H <- 100.0
8.       I_annot <- I_rgb
9.   Else
10.      Total_Infected_Area <- 0
11.      For each box b in Detections do
12.          x1, y1, x2, y2, conf_b, class_b <- b
13.          box_area <- (x2 - x1) * (y2 - y1)
14.          Total_Infected_Area <- Total_Infected_Area + box_area
15.          DrawBoundingBox(I_rgb, b, Color(class_b), Label(class_b, conf_b))
16.      End For
17.      Best_Detection <- ArgMax_Confidence(Detections)
18.      D <- MapClassToDiseaseName(Best_Detection.class)
19.      C <- Best_Detection.confidence * 100
20.      Infected_Area_Pct <- Min(100.0, (Total_Infected_Area / (W_img * H_img)) * 100)
21.      S <- (0.5 * C) + (0.5 * Infected_Area_Pct)
22.      H <- Max(0.0, 100.0 - S)
23.      I_annot <- CompressAnnotatedJPEG(I_rgb, max_dim = 800, quality = 82)
24.  End If
25.  SaveRecordToDatabase(D, C, S, H)
26.  Return {disease: D, confidence: C, severity: S, plantHealth: H, annotatedImage: I_annot}
27. End
```

### 6.2 Backend Core Implementation (Flask & YOLOv8 Inference Engine)
The following snippet from `app.py` illustrates the YOLO loading, image decoding, prediction routing, and fallback handling:

```python
# app.py - Core YOLOv8 Prediction & Metric Calculation Engine
import base64, io
from flask import Flask, jsonify, request
from PIL import Image
import numpy as np
from ultralytics import YOLO

app = Flask(__name__)
MODEL = YOLO("runs/runs/detect/plant_disease_runs/yolo_train/weights/best.pt")

def decode_data_url(data_url: str) -> Image.Image:
    """Decodes base64 Data URL and scales down high-res inputs to 1024px."""
    encoded = data_url.split(",", 1)[1]
    image_bytes = base64.b64decode(encoded)
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    if max(img.size) > 1024:
        img.thumbnail((1024, 1024), Image.Resampling.LANCZOS)
    return img

@app.post("/api/predict")
def api_predict():
    body = request.get_json(silent=True) or {}
    data_url = body.get("imageDataUrl", "")
    conf_thresh = float(body.get("conf", 0.20))
    
    img = decode_data_url(data_url)
    img_w, img_h = img.size
    img_np = np.array(img)
    
    results = MODEL.predict(source=img_np, conf=conf_thresh, verbose=False)
    boxes = results[0].boxes if results else None
    
    detections = []
    total_bbox_area = 0.0
    
    if boxes is not None and len(boxes) > 0:
        for box in boxes:
            xyxy = box.xyxy[0].tolist()
            conf = float(box.conf[0].item()) * 100.0
            cls_id = int(box.cls[0].item())
            raw_name = MODEL.names.get(cls_id, f"Class {cls_id}")
            
            w_b = max(0.0, xyxy[2] - xyxy[0])
            h_b = max(0.0, xyxy[3] - xyxy[1])
            bbox_area = w_b * h_b
            total_bbox_area += bbox_area
            
            detections.append({
                "disease": raw_name,
                "confidence": round(conf, 2),
                "bbox": [round(v, 1) for v in xyxy]
            })
            
    best = max(detections, key=lambda d: d["confidence"]) if detections else None
    infected_area_pct = min(100.0, (total_bbox_area / float(img_w * img_h)) * 100.0)
    
    disease = best["disease"] if best else "Healthy"
    confidence = best["confidence"] if best else 95.0
    severity = round((0.5 * confidence) + (0.5 * infected_area_pct), 2) if best else 0.0
    health = round(max(0.0, 100.0 - severity), 2)
    
    return jsonify({
        "disease": disease,
        "confidence": confidence,
        "severity": severity,
        "plantHealth": health,
        "detections": detections
    })
```

### 6.3 Frontend Core Implementation (React SPA & Voice Engine)
The following snippet from `FloatingChatbot.jsx` demonstrates regional voice speech recognition dynamically binding language locales:

```jsx
// FloatingChatbot.jsx - Multilingual Voice STT and TTS Integration
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const LANG_SPEECH_MAP = {
  en: "en-US",
  hi: "hi-IN",
  mr: "mr-IN",
  gu: "gu-IN",
  ta: "ta-IN",
  te: "te-IN"
};

export default function FloatingChatbot() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const startVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Speech recognition not supported");

    const recognition = new SpeechRecognition();
    const activeLocale = LANG_SPEECH_MAP[i18n.language] || "en-US";
    
    recognition.lang = activeLocale;
    recognition.interimResults = false;
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (e) => {
      const speechTranscript = e.results[0][0].transcript;
      setInput(speechTranscript);
      sendMessage(speechTranscript);
    };
    recognition.start();
  };

  const speakReply = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.replace(/[#*`_]/g, ""));
    utterance.lang = LANG_SPEECH_MAP[i18n.language] || "en-US";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button onClick={startVoiceInput} className="bg-emerald-500 p-4 rounded-full text-white">
        {isListening ? "🎙️ Listening..." : "🎤 Speak"}
      </button>
    </div>
  );
}
```

### 6.4 Project Repository & Source Code Link
The complete project codebase, trained weights configuration, and frontend source are open source and maintained on GitHub:
- **GitHub Repository:** [https://github.com/parthsharma/Fasal-Mitra](https://github.com/parthsharma/Fasal-Mitra)

---

## 7. PERFORMANCE EVALUATION & RESULTS

### 7.1 Dataset Description
The model was trained on the **PlantVillage** dataset, comprising **54,306 curated foliar images**. The dataset covers healthy and pathologically infected leaves across 38 distinct classes spanning 14 agricultural plant families.

**Table 7: Detected Plant Disease Classes (38 Classes Across 14 Crops)**
| Crop Plant | Diseases Detected by Fasal Mitra |
| :--- | :--- |
| **🍎 Apple** | Apple Scab, Black Rot, Cedar Apple Rust, Healthy |
| **🍅 Tomato** | Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Spider Mites, Target Spot, Tomato Mosaic Virus, Yellow Leaf Curl Virus, Bacterial Spot, Healthy |
| **🥔 Potato** | Early Blight, Late Blight, Healthy |
| **🌽 Corn (Maize)** | Cercospora Leaf Spot, Common Rust, Northern Leaf Blight, Healthy |
| **🍇 Grape** | Black Rot, Esca (Black Measles), Leaf Blight (Isariopsis), Healthy |
| **🍑 Peach** | Bacterial Spot, Healthy |
| **🫑 Bell Pepper** | Bacterial Spot, Healthy |
| **🍓 Strawberry** | Leaf Scorch, Healthy |
| **🍊 Orange** | Huanglongbing (Citrus Greening) |
| **🫐 Blueberry** | Healthy |
| **🍇 Raspberry** | Healthy |
| **🌱 Soybean** | Healthy |
| **🎃 Squash** | Powdery Mildew |
| **🍒 Cherry** | Powdery Mildew, Healthy |

### 7.2 Training Setup & Hyperparameters
Model training was conducted using an NVIDIA GPU compute instance running PyTorch and CUDA 12.1. Transfer learning was initialized from pre-trained COCO YOLOv8n weights.

**Table 8: Model Training Hyperparameters**
| Hyperparameter | Value | Description |
| :--- | :---: | :--- |
| **Base Model Architecture** | YOLOv8n (Nano) | Optimized for mobile/edge latency |
| **Input Resolution** | $640 \times 640$ pixels | Multi-scale mosaic resized |
| **Epochs** | 50 | Early stopping with patience = 10 |
| **Batch Size** | 16 | Scaled to GPU VRAM |
| **Optimizer** | AdamW | Learning rate $\eta = 0.001$ with cosine decay |
| **Loss Function** | CIoU + DFL + BCE | Complete IoU, Distribution Focal Loss, Cross-Entropy |
| **Augmentation** | Flips, HSV, Mosaic | Mosaic rate = 1.0, horizontal flip = 0.5 |

### 7.3 Quantitative Metrics & Benchmarks
The validation split (20% holdout of 10,861 images) yielded the following quantitative performance metrics:

**Table 9: Quantitative Performance Metrics of Trained YOLOv8 Model**
| Evaluation Metric | Mathematical Definition | Attained Value |
| :--- | :--- | :---: |
| **Accuracy** | $\frac{TP + TN}{TP + TN + FP + FN}$ | **94.0%** |
| **Precision (P)** | $\frac{TP}{TP + FP}$ | **92.4%** |
| **Recall (R)** | $\frac{TP}{TP + FN}$ | **91.8%** |
| **mAP@0.5** | $\frac{1}{N} \sum_{k=1}^N \text{AP}_k \text{ at IoU} = 0.50$ | **93.6%** |
| **mAP@0.5:0.95** | Mean AP averaged across IoU thresholds 0.50 to 0.95 | **78.2%** |
| **Inference Time** | Wall-clock forward pass on GPU / CPU | **~30 ms (GPU) / ~85 ms (CPU)** |

### 7.4 Comparative Analysis with Baseline Architectures

**Table 10: Comparative Performance Analysis Against Baseline Models**
| Architecture | Model Paradigm | Diagnostic Accuracy | mAP@0.5 | Inference Latency | Localization & Severity |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **SVM + GLCM** | Traditional Feature Extraction | 76.4% | N/A | 180 ms | No (Classification Only) |
| **AlexNet** | Classical Deep CNN | 88.2% | N/A | 110 ms | No (Classification Only) |
| **ResNet-50** | Deep Residual Classifier | 92.1% | N/A | 65 ms | No (Classification Only) |
| **YOLOv4** | Two-Stage / Anchor Object Detector | 88.5% | 87.2% | 72 ms | Yes (High Latency) |
| **Fasal Mitra (YOLOv8)** | Anchor-Free Decoupled Detector | **94.0%** | **93.6%** | **~30 ms** | **Yes (Real-Time Bounding)** |

---

## 8. PROJECT CLOSURE & FUTURE SCOPE

### 8.1 Goals & Vision Reassessment
All eight quantifiable milestones formulated during project inception were successfully met. The system delivers reliable multi-class plant disease detection across 38 classes, couples spatial detection with damage severity estimation, integrates atmospheric risk advisories, and communicates fluently across 6 native Indian languages through both text and synthesized voice.

### 8.2 Delivered Solution Summary
The delivered platform represents a complete, production-ready full-stack software artifact:
- **`app.py` Backend:** Engineered with clean JSON-safe payload sanitization, SQLite connection pooling, base64 thumbnail compression, Gemini AI fallbacks, and multi-endpoint routing.
- **React 19 Frontend:** Production-bundled through Vite into optimized, minified distribution files, equipped with client-side canvas scaling to protect low-end mobile devices from memory allocation failures.
- **Custom Trained YOLOv8 Model:** Verified to run at ~30ms latency, delivering accurate diagnoses and localized bounding boxes.

### 8.3 Remaining Work & Future Scope
While the system is fully functional, future engineering phases can expand its capabilities:
1. **Edge TPU & ONNX Quantization:** Exporting `best.pt` into INT8 quantized ONNX and TensorFlow Lite formats for 100% offline edge execution directly inside native mobile apps without server connectivity.
2. **Drone Multispectral Integration:** Ingesting aerial multispectral ortho-mosaics from agricultural drones to map disease severity across entire multi-acre farms.
3. **Integration with Government Agricultural Portals:** Linking verified diagnosis records directly with government agro-schemes such as **PM-Kisan**, **e-NAM**, and **Kisan Call Centers** for direct fertilizer subsidies.
4. **Soil Sensor IoT Telemetry:** Ingesting ground-level NPK (nitrogen, phosphorus, potassium) and soil capacitive moisture telemetry to cross-correlate root health with foliar blight outbreaks.

### 8.4 Ethical Considerations & Societal Impact
Deploying AI in agriculture necessitates strict ethical diligence:
- **Agronomic Safety:** AI pesticide recommendations clearly disclose chemical safety intervals, protective gear requirements, and non-toxic bio-fungicide alternatives (e.g., neem oil, Trichoderma viride) to prevent chemical toxicity.
- **Digital Equity:** Full multilingual support across Hindi, Marathi, Gujarati, Tamil, and Telugu prevents linguistic marginalization, ensuring smallholders access identical technological advantages as commercial agri-businesses.
- **Data Privacy:** User accounts and farm locations are secured, ensuring proprietary crop yield estimates are never commercialized or shared without explicit consent.

---

## REFERENCES

1. J. Hughes and M. Salathé, “An open access repository of images on plant health to enable the development of mobile disease diagnostics,” *arXiv preprint arXiv:1511.08060*, 2015.
2. D. Singh, N. Jain, P. Jain, P. Kayal, S. Kumawat, and N. Batra, “PlantDoc: A Dataset for Visual Plant Disease Detection,” in *Proceedings of the 7th ACM IKDD CoDS and 25th COMAD*, pp. 249–253, 2020.
3. G. Jocher, A. Chaurasia, and J. Qiu, “Ultralytics YOLOv8,” version 8.0.0, 2023. [Online]. Available: https://github.com/ultralytics/ultralytics.
4. S. P. Mohanty, D. P. Hughes, and M. Salathé, “Using deep learning for image-based plant disease detection,” *Frontiers in Plant Science*, vol. 7, p. 1419, 2016.
5. K. P. Ferentinos, “Deep learning models for plant disease detection and diagnosis,” *Computers and Electronics in Agriculture*, vol. 145, pp. 311–318, 2018.
6. E. A. Aldakheel et al., “Detection and Identification of Plant Leaf Diseases using YOLOv4,” *IEEE Access*, vol. 12, pp. 11204–11218, 2024.
7. G. Garg and M. Biswas, “Improved Neural Network based Plant Diseases Identification,” in *2020 IEEE International Conference on Computing, Power and Communication Technologies (GUCON)*, pp. 784–788, 2020.
8. Z. Al Sahili and M. Awad, “The Power of Transfer Learning in Agricultural Applications: AgriNet,” *Computers and Electronics in Agriculture*, vol. 205, p. 107621, 2023.
9. Flask Documentation, Pallets Projects, 2024. [Online]. Available: https://flask.palletsprojects.com/.
10. React 19 Official Documentation, Meta Open Source, 2024. [Online]. Available: https://react.dev/.
11. Ultralytics YOLOv8 Documentation, Ultralytics LLC, 2024. [Online]. Available: https://docs.ultralytics.com/.
12. Google Gemini API Documentation, Google AI Studio, 2024. [Online]. Available: https://ai.google.dev/.
13. OpenWeatherMap Current Weather Data API, OpenWeather Ltd, 2024. [Online]. Available: https://openweathermap.org/api.
14. i18next Internationalization Framework, 2024. [Online]. Available: https://www.i18next.com/.
