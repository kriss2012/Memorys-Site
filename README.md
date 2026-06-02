<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&height=200&color=gradient&customColorList=12,20,24&text=BCA%20Memories&fontSize=70&fontColor=ffffff&stroke=8a2be2&strokeWidth=2&animation=fadeIn&fontAlignY=55&desc=2023%20%E2%80%94%202026%20%C2%B7%20G.H.%20Raisoni%20College%2C%20Jalgaon&descSize=18&descAlignY=78&descColor=a1a1b5" width="100%"/>

<br/>

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-kriss2012.github.io-8a2be2?style=for-the-badge&labelColor=050509&color=8a2be2)](https://kriss2012.github.io/Memorys-Site/)
&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-kriss2012-ff2a85?style=for-the-badge&logo=github&logoColor=white&labelColor=050509)](https://github.com/kriss2012/Memorys-Site)
&nbsp;
[![Made With Love](https://img.shields.io/badge/Made_with-❤️-ff2a85?style=for-the-badge&labelColor=050509)](https://kriss2012.github.io/Memorys-Site/)

<br/>

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║      🎓  BCA BATCH  ·  2023 — 2026  ·  JALGAON             ║
║           Three Years · One Batch · Forever                  ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

</div>

---

## 🔗 Live Demo

<div align="center">

### 👉 [**https://kriss2012.github.io/Memorys-Site/**](https://kriss2012.github.io/Memorys-Site/) 👈

</div>

> A premium, immersive memory website built for the **BCA Batch of 2023–2026** from G.H. Raisoni College of Engineering & Management, Jalgaon — preserving three years of friendship, laughter, and unforgettable moments.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎬 Video Player
- Custom-built modal video player
- Canvas-based thumbnail capture from actual video frames
- Play / Pause · Mute · Seek bar · Time display
- Fullscreen support
- Auto-stops on close, ESC, or Android back

</td>
<td width="50%">

### 🖼️ Photo Gallery
- **54 photos** in a masonry grid layout
- Filter by: All · Group · Fun · Campus
- Full-screen lightbox with keyboard navigation
- Smooth transitions & hover effects

</td>
</tr>
<tr>
<td width="50%">

### 🎡 3D Carousel
- CSS 3D `preserve-3d` rotating showcase
- 9 featured photos on a circular stage
- Prev / Next controls
- Click any card to open in lightbox

</td>
<td width="50%">

### 📜 Memory Lane
- Horizontal scroll mosaic with **15 highlights**
- Drag-to-scroll on desktop
- Native touch swipe on mobile
- Animated progress bar

</td>
</tr>
</table>

---

## 🚀 Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

</div>

| Category | Details |
|---|---|
| **Core** | Vanilla HTML · CSS · JavaScript — zero frameworks |
| **Fonts** | Cinzel Decorative · Playfair Display · Inter · Space Grotesk |
| **Design** | Glassmorphism · Dark Cyber-Luxury · Neon Accents |
| **Animations** | CSS keyframes · `requestAnimationFrame` · IntersectionObserver |
| **Media** | Canvas API for thumbnail extraction · `preload="none"` lazy video |
| **Hosting** | GitHub Pages (free, CDN-backed) |

---

## 🎨 Design System

```
Color Palette
─────────────────────────────────────────────────
  Background   ████  #050509   Deep Space Black
  Secondary    ████  #0a0a14   Midnight Blue
  Accent 1     ████  #8a2be2   Electric Violet
  Accent 2     ████  #ff2a85   Cyber Pink
  Accent 3     ████  #00f5d4   Neon Cyan
  Gold         ████  #ffbe0b   Warm Gold
─────────────────────────────────────────────────
```

---

## 📁 Project Structure

```
Memorys-Site/
│
├── 📄 index.html          # Main HTML — sections, nav, lightbox
├── 🎨 style.css           # Full design system (1900+ lines)
├── ⚡ script.js           # All JS logic (850+ lines)
│
├── 📦 public/
│   ├── 🖼️  photo_*.jpg   # 54 photos (EXIF auto-rotated)
│   └── 🎬  video_*.mp4   # 8 video memories
│
├── 🔧 fix-rotation.js     # Node.js EXIF rotation utility
└── 📘 README.md           # You are here
```

---

## 📱 Responsive & Performance

| Feature | Implementation |
|---|---|
| **Mobile Nav** | Hamburger menu with full-screen overlay |
| **Touch Swipe** | Native `touchstart/touchmove` on mosaic |
| **Lazy Images** | `loading="lazy"` + `decoding="async"` |
| **Lazy Videos** | `preload="none"` — loads only on tap |
| **No rAF on Mobile** | Cursor animation skipped on touch devices |
| **EXIF Rotation** | All 54 images auto-rotated via `sharp` |
| **GPU Compositing** | `will-change: transform` on scroll tracks |

---

## 🛠️ Run Locally

```bash
# Clone the repository
git clone https://github.com/kriss2012/Memorys-Site.git

# Navigate to project
cd Memorys-Site

# Open in browser (no build step needed)
start index.html

# Or serve with any static server
npx serve .
```

---

## 📸 Sections Overview

```
┌─────────────────────────────────────────────────────┐
│  🏠  HERO          — Animated intro with 3D cards   │
│  ✦   MARQUEE       — Scrolling text strip           │
│  🌟  SHOWCASE      — Featured 4-photo grid          │
│  🖼️  GALLERY       — 54-photo masonry (filterable)  │
│  🎬  VIDEOS        — 8 memories with modal player   │
│  📜  MEMORY LANE   — Horizontal scroll mosaic       │
│  🎡  3D CAROUSEL   — Rotating showcase              │
│  🔗  FOOTER        — Year badges & credits          │
└─────────────────────────────────────────────────────┘
```

---

## 👥 About

<div align="center">

This site was built to **celebrate and preserve** the memories of the **BCA Batch 2023–2026** from G.H. Raisoni College of Engineering & Management, Jalgaon.

Three years of lectures, labs, laughter, late nights, and lifelong friendships —  
all in one place, **forever**.

<br/>

```
  2023 ──────────── 2024 ──────────── 2025 ──────────── 2026
   🌱 Freshers       📚 Growing        🎯 Focused        🎓 Alumni
```

<br/>

**Made with ❤️ for BCA Batch 2023–2026**

[![Live Site](https://img.shields.io/badge/Visit_the_Site-8a2be2?style=for-the-badge&logo=googlechrome&logoColor=white)](https://kriss2012.github.io/Memorys-Site/)

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=100&section=footer&text=BCA%20%C2%B7%202023%20%E2%80%94%202026&fontSize=24&fontColor=a1a1b5&animation=twinkling" width="100%"/>

*© 2026 BCA Batch · G.H. Raisoni College, Jalgaon · All rights reserved*

</div>
