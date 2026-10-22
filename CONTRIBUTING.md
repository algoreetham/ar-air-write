# Contributing to Spatial Paint 🌸🎨

Thank you for your interest in contributing to Spatial Paint! We welcome contributions to expand botanical flower types, refine gesture recognition accuracy, or add physics behaviors.

## Development Workflow

1. **Fork and clone** this repository:
   ```bash
   git clone https://github.com/algoreetham/ar-air-write.git
   cd ar-air-write
   ```
2. **Launch a local static server**:
   ```bash
   python3 -m http.server 8081
   ```
3. Open `http://localhost:8081` in your browser.

## Adding New Flower Types
To add a new flower:
1. Add an entry into `flowerSwatches` in `index.html`.
2. Add a rendering branch in `drawProceduralFlower(ctx, type, size)`.

## Code Style
- Use clean modern ES6+ JavaScript.
- Avoid external runtime libraries beyond MediaPipe CDN.
- Keep dependencies zero-setup.
