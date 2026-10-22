# Spatial Paint — AR Physics, Flower Garden & Hand Tracking 🌸🎨

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?logo=github)](https://algoreetham.github.io/ar-air-write/)
[![HTML5](https://img.shields.io/badge/HTML5-Canvas%202D-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MediaPipe](https://img.shields.io/badge/MediaPipe-Hands%200.4-0078D7?logo=google&logoColor=white)](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker)

**Spatial Paint** is an interactive augmented reality web application that transforms your standard webcam into a touchless spatial computing canvas. Draw neon rigid bodies that tumble and collide, stamp blooming Dahlia flowers in mid-air, and pop floating bubbles—all driven by real-time computer vision and single-hand tracking.

🌐 **Try the Live Demo:** [https://algoreetham.github.io/ar-air-write/](https://algoreetham.github.io/ar-air-write/)

---

## 🌟 Key Features

### 🔒 1. Single-Hand Sticky Locking Engine
- **No Hand Jitter:** Standard hand-tracking models often flicker erratically when two hands or background bystanders enter the camera view. Spatial Paint features a proprietary sticky locking algorithm (`selectLockedHand`).
- **Euclidean & Handedness Weighting:** Tracks the distance of the hand's wrist between frames while applying a heavy penalty if handedness flips, locking firmly onto your primary hand.
- **Visual Feedback:** A neon lock halo circles your wrist on-screen, and a dedicated `🔒 Lock Hand` HUD button lets you release and re-lock at any moment.

### 🌸 2. Flower Garden Mode (Dahlia, Clover & Procedural Blooms)
- **Mid-Air Flower Stamping:** Pinch your thumb and index finger together to plant blooming flowers in space.
- **Dahlia Flower Asset (`dahlia.jpg`):** Built-in support for realistic Dahlia blooms with automatic background luminance transparency clipping.
- **Procedural Botanicals:** Includes hand-crafted vector Dahlias, Cherry Blossoms, Sunflowers, Roses, and Emerald Clovers (`🍀`) with multi-layered petal shading.
- **Micro-Physics Settling:** Flowers gently drift downward and settle onto the floor with realistic ground restitution and rotational friction.

### 🎨 3. Physics Paint (Rigid-Body 2D Dynamics)
- **Living Strokes:** Your drawings aren't static pixels—every stroke is converted into a physical rigid body with calculated mass, center of gravity, and moment of inertia.
- **Collision & Bounce:** Strokes bounce off the floor and collide against one another using impulse-based polyline collision resolution.
- **Dynamic vs Anchor Mode:** Toggle between **Dynamic Mode** (strokes fall and tumble) and **Anchor Mode** (strokes stay frozen in mid-air).
- **Emerald & Neon Palettes:** Draw with vibrant neon cyan, electric pink, emerald green, forest dark green, purple, and gold.

### 🔊 4. Web Audio Procedural Sound Synthesizer
- **Tactile Audio Feedback:** Procedural chimes, harp sparkles, and pops generated in real-time via the Web Audio API without needing external sound files.
- **Sound Toggle:** Easily mute or un-mute audio effects directly from the top HUD pill.

### 🫧 5. Bubble Pop Mini-Game
- **Floating Bubbles:** Iridescent bubbles rise with sine-wave fluid buoyancy.
- **Finger Poking:** Extend your index finger (`👆 Point gesture`) to pop bubbles on contact.
- **Haptic Particle Bursts:** Popping bubbles triggers colorful particle explosions and increments your live score.

### 💎 6. Spatial Glassmorphism UI & Touchless Hover
- **Spatial UI Dock:** Designed with frosted glass acrylic panels, glowing neon accents, and smooth physics transitions.
- **Touchless Dwell Selection:** Hover your fingertip over any button or swatch for 900ms to trigger it automatically without touching your keyboard or mouse.
- **Mouse Fallback:** Full desktop mouse support when a webcam is unavailable or permissions are denied.

---

## 🖐️ Gesture Reference Guide

| Gesture | Action | How to Perform |
|---|---|---|
| **Wave** 👋 | **Start / Wake Up** | Wave your hand horizontally across the screen |
| **Pinch** 🤏 | **Draw / Stamp** | Pinch thumb and index fingertips together |
| **Point** 👆 | **Interact / Poke** | Extend index finger while keeping other fingers curled |
| **Hover** ⏱️ | **Touchless Select** | Hold index finger over UI element for 0.9s |
| **Click / Tap** 🔒 | **Switch Locked Hand** | Click the Lock Hand button to target another hand |
| **Sound Toggle** 🔊 | **Toggle FX** | Click the Sound button in the top HUD |

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser: **Google Chrome**, **Microsoft Edge**, **Brave**, or **Safari**.
- A webcam (built-in FaceTime camera or external USB webcam).
- No Node.js build steps required—pure zero-dependency client-side code!

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/algoreetham/ar-air-write.git
   cd ar-air-write
   ```

2. **Start a local HTTP server:**
   - **Using Python 3:**
     ```bash
     python3 -m http.server 8081
     ```
   - **Or using Node `npx serve`:**
     ```bash
     npx serve -l 8081
     ```

3. **Open the application:**
   Navigate to `http://localhost:8081` in your browser.
   *When prompted, click **Allow** for Camera permissions.*

---

## 📂 Project Architecture

```
ar-air-write/
├── .github/workflows/deploy.yml  # Automated GitHub Pages CI/CD workflow
├── favicon.svg                   # Custom neon spatial SVG icon
├── index.html                    # Complete unified application (UI, Vision loop, Audio & Physics engine)
├── dahlia.jpg                    # Dahlia flower texture asset for Flower Garden mode
├── LICENSE                       # MIT License
└── README.md                     # Comprehensive project documentation
```

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

*Created with ❤️ by [@algoreetham](https://github.com/algoreetham)*
