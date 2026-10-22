# Spatial Paint 🌸🎨

An interactive augmented reality web application powered by **MediaPipe Hand Tracking**, featuring real-time **single-hand gesture locking**, **Dahlia flower painting**, **rigid-body physics paint**, and **bubble popping**.

![HTML5](https://img.shields.io/badge/HTML5-Canvas-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![MediaPipe](https://img.shields.io/badge/MediaPipe-Hands-0078D7)

---

## ✨ Features

- **🔒 Single-Hand Sticky Locking**: Automatically locks onto one active hand using Euclidean tracking and handedness filtering. Eliminates erratic jumping between multiple hands in the camera view.
- **🌺 Dahlia Flower Garden**: Stamp and paint blooming Dahlias and flowers directly in mid-air using pinch gestures with physics bouncing.
- **🎨 Physics Paint**: Draw neon strokes that act as rigid bodies with gravity, momentum, bounce, and rotational dynamics.
- **🫧 Bubble Pop Activity**: Poke and pop floating iridescent bubbles with particle explosion effects and score tracking.
- **💎 Spatial Glass UI**: Modern, responsive glassmorphism HUD with real-time status indicators.
- **🖱️ Mouse Mode Fallback**: Full mouse support when a webcam is not available or disabled.

---

## 🚀 Quick Start

1. **Serve locally using Python:**
   ```bash
   python3 -m http.server 8081
   ```

2. **Open in your browser:**
   ```
   http://localhost:8081
   ```
   *Make sure to allow camera permissions when prompted!*

---

## 🖐️ Hand Gestures

| Gesture | Action |
|---|---|
| **Wave Hand** 👋 | Unlock & start from calibration screen |
| **Pinch** 🤏 *(Thumb + Index)* | Draw physics strokes or stamp flowers |
| **Point** 👆 *(Index finger extended)* | Poke bubbles or select UI buttons |
| **Lock Hand Button** 🔒 | Switch or re-lock active hand |

---

## 🛠️ Tech Stack

- **MediaPipe Hands** (Google)
- **HTML5 Canvas 2D** (Rigid-body physics & collision engine)
- **Vanilla JavaScript (ES6+)**
