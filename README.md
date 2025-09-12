# 🏅 AthleteHub – AI-Powered Sports Leaderboard & Performance Tracker

<div align="center">

![GitHub license](https://img.shields.io/github/license/dineshit27/SportsAI?style=flat-square&color=blue)  ![Contributions](https://img.shields.io/badge/Contributions-Welcome-orange?style=flat-square)  ![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile%20%7C%20AI-yellow?style=flat-square)  ![Status](https://img.shields.io/badge/Status-Prototype-success?style=flat-square)  

</div>

---

## 🚀 Introduction
**AthleteHub** is a **community-driven AI-powered sports platform** designed for athletes to **showcase achievements, upload performance videos, and track progress**. Unlike random video platforms, AthleteHub functions like a **sports library + leaderboard system**, ensuring structured recognition at **zonal, district, state, and national levels**.  

The platform leverages **AI video analysis** to validate performances, categorize skills (stamina, power, techniques), and maintain **fair leaderboards** across multiple sports. It empowers athletes with **transparent recognition, performance tracking, and community engagement**, while enabling coaches and federations to discover hidden talent across India.  

---

## ✨ Features  

| Feature | Description |
|---------|-------------|
| 👤 **Athlete Profiles** | Every athlete has a verified profile to upload certificates, achievements, and training videos. |
| 🏆 **Leaderboards** | Rankings by sport, zone, district, state, and national level with multiple performance categories. |
| 🎥 **AI Video Analysis** | Detects authenticity of videos, analyzes skills (e.g., sprint type, stamina, punching style). |
| 📊 **Performance Categories** | Separate rankings for stamina, technique, power, strategies, etc. |
| 🔔 **Smart Notifications** | Alerts on leaderboard changes, milestones, or performance improvements. |
| 🌍 **Community Hub** | Like Reddit/YouTube hybrid – athletes can share insights, progress, and training updates. |
| 🔒 **Trust & Fairness** | AI-based fraud detection + multi-step verification for video authenticity and profiles. |

---

## 🛠️ Tech Stack  

**Frontend:**  
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)  ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)  ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)  ![Next.js](https://img.shields.io/badge/-Next.js-000000?logo=nextdotjs&logoColor=white)  

**Backend:**  
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white)  ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)  ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)  ![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white)  

**AI/ML:**  
![OpenCV](https://img.shields.io/badge/-OpenCV-5C3EE8?logo=opencv&logoColor=white)  ![TensorFlow](https://img.shields.io/badge/-TensorFlow-FF6F00?logo=tensorflow&logoColor=white)  ![PyTorch](https://img.shields.io/badge/-PyTorch-EE4C2C?logo=pytorch&logoColor=white)  

---

## 🔧 AthleteHub — Flow Diagram  

```mermaid
graph TD
    A[Player Uploads Video 🎥] --> B[AI Video Validation 🤖]
    B --> C[Skill & Category Analysis 📊]
    C --> D[Leaderboard Update 🏆]
    D --> E[Community Feed 📲]
    E --> F[Coaches / Scouts 👨‍🏫]
    D --> G[Athlete Profiles 👤]
    G --> H[Notifications 🔔]
```

---

## 📸 Screenshots  

<p align="center">
  <!-- Replace these image paths with your actual project screenshots -->
  <img src="images/saih.png" alt="Home Page" width="45%"/>
  <img src="images/sail.png" alt="Prototype Model" width="45%"/>
</p>

<p align="center">
  <!-- Replace these image paths with your actual project screenshots -->
  <img src="images/saic.png" alt="Block & Wiring Diagram" width="45%"/>
  <img src="images/said.png" alt="Water" width="45%"/>
</p>

---

## 📂 Resources  

<p align="center">
  <!-- Project Abstract -->
  <a href="Documents/SportsAI_PPT.pdf" target="blank">
    <img src="https://img.shields.io/badge/📑%20Project%20Abstract-Download-blue?style=for-the-badge"/>
  </a>
</p>

---

# File Tree: SportsAI - AI powered Sports Talent Assessment Website

```
├── 📁 .firebase/ 🚫 (auto-hidden)
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 dist/ 🚫 (auto-hidden)
├── 📁 node_modules/ 🚫 (auto-hidden)
├── 📁 public/
│   └── 🌐 index.html
├── 📁 react-firebase-leaderboard-app/
│   ├── 📁 src/
│   │   ├── 📁 assets/
│   │   │   └── 📄 .gitkeep
│   │   ├── 📁 components/
│   │   │   └── 📁 ui/
│   │   │       ├── 📄 avatar.tsx
│   │   │       ├── 📄 badge.tsx
│   │   │       ├── 📄 button.tsx
│   │   │       ├── 📄 card.tsx
│   │   │       └── 📄 tabs.tsx
│   │   ├── 📁 pages/
│   │   │   └── 📄 LeaderboardPage.tsx
│   │   ├── 📄 App.tsx
│   │   └── 📄 main.tsx
│   ├── 📄 .env.example
│   ├── 📄 .firebaserc
│   ├── 📖 README.md
│   ├── 📄 firebase.json
│   ├── 🌐 index.html
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   ├── 📄 tsconfig.node.json
│   └── 📄 vite.config.ts
├── 📁 sportspark-india-main/
│   ├── 📁 dist/ 🚫 (auto-hidden)
│   ├── 📁 node_modules/ 🚫 (auto-hidden)
│   ├── 📁 public/
│   │   ├── 📄 README-icons.txt
│   │   ├── 🖼️ favicon.ico
│   │   ├── 🖼️ placeholder.svg
│   │   ├── 📄 robots.txt
│   │   └── 📄 site.webmanifest
│   ├── 📁 src/
│   │   ├── 📁 assets/
│   │   │   ├── 🖼️ ai-analysis.jpg
│   │   │   ├── 🖼️ badminton-thumbnail.jpg
│   │   │   ├── 🖼️ basketball-thumbnail.jpg
│   │   │   ├── 🖼️ community.jpg
│   │   │   ├── 🖼️ cricket-thumbnail.jpg
│   │   │   ├── 🖼️ football-thumbnail.jpg
│   │   │   ├── 🖼️ hero-sports.jpg
│   │   │   ├── 🖼️ leaderboard.jpg
│   │   │   ├── 🖼️ profile1.jpg
│   │   │   ├── 🖼️ profile2.jpg
│   │   │   ├── 🖼️ profile3.jpg
│   │   │   ├── 🖼️ profile4.jpg
│   │   │   └── 🖼️ profile5.jpg
│   │   ├── 📁 components/
│   │   │   ├── 📁 ui/
│   │   │   │   ├── 📄 accordion.tsx
│   │   │   │   ├── 📄 alert-dialog.tsx
│   │   │   │   ├── 📄 alert.tsx
│   │   │   │   ├── 📄 aspect-ratio.tsx
│   │   │   │   ├── 📄 avatar.tsx
│   │   │   │   ├── 📄 badge.tsx
│   │   │   │   ├── 📄 breadcrumb.tsx
│   │   │   │   ├── 📄 button.tsx
│   │   │   │   ├── 📄 calendar.tsx
│   │   │   │   ├── 📄 card.tsx
│   │   │   │   ├── 📄 carousel.tsx
│   │   │   │   ├── 📄 chart.tsx
│   │   │   │   ├── 📄 checkbox.tsx
│   │   │   │   ├── 📄 collapsible.tsx
│   │   │   │   ├── 📄 command.tsx
│   │   │   │   ├── 📄 context-menu.tsx
│   │   │   │   ├── 📄 dialog.tsx
│   │   │   │   ├── 📄 drawer.tsx
│   │   │   │   ├── 📄 dropdown-menu.tsx
│   │   │   │   ├── 📄 form.tsx
│   │   │   │   ├── 📄 hover-card.tsx
│   │   │   │   ├── 📄 input-otp.tsx
│   │   │   │   ├── 📄 input.tsx
│   │   │   │   ├── 📄 label.tsx
│   │   │   │   ├── 📄 menubar.tsx
│   │   │   │   ├── 📄 navigation-menu.tsx
│   │   │   │   ├── 📄 pagination.tsx
│   │   │   │   ├── 📄 popover.tsx
│   │   │   │   ├── 📄 progress.tsx
│   │   │   │   ├── 📄 radio-group.tsx
│   │   │   │   ├── 📄 resizable.tsx
│   │   │   │   ├── 📄 scroll-area.tsx
│   │   │   │   ├── 📄 select.tsx
│   │   │   │   ├── 📄 separator.tsx
│   │   │   │   ├── 📄 sheet.tsx
│   │   │   │   ├── 📄 sidebar.tsx
│   │   │   │   ├── 📄 skeleton.tsx
│   │   │   │   ├── 📄 slider.tsx
│   │   │   │   ├── 📄 sonner.tsx
│   │   │   │   ├── 📄 switch.tsx
│   │   │   │   ├── 📄 table.tsx
│   │   │   │   ├── 📄 tabs.tsx
│   │   │   │   ├── 📄 textarea.tsx
│   │   │   │   ├── 📄 toast.tsx
│   │   │   │   ├── 📄 toaster.tsx
│   │   │   │   ├── 📄 toggle-group.tsx
│   │   │   │   ├── 📄 toggle.tsx
│   │   │   │   ├── 📄 tooltip.tsx
│   │   │   │   └── 📄 use-toast.ts
│   │   │   ├── 📄 Navigation.tsx
│   │   │   └── 📄 theme-provider.tsx
│   │   ├── 📁 hooks/
│   │   │   ├── 📄 use-mobile.tsx
│   │   │   └── 📄 use-toast.ts
│   │   ├── 📁 integrations/
│   │   │   └── 📁 supabase/
│   │   │       ├── 📄 client.ts
│   │   │       └── 📄 types.ts
│   │   ├── 📁 lib/
│   │   │   └── 📄 utils.ts
│   │   ├── 📁 pages/
│   │   │   ├── 📄 AboutPage.tsx
│   │   │   ├── 📄 CommunityPage.tsx
│   │   │   ├── 📄 ContactPage.tsx
│   │   │   ├── 📄 DashboardPage.tsx
│   │   │   ├── 📄 FeaturesPage.tsx
│   │   │   ├── 📄 HomePage.tsx
│   │   │   ├── 📄 Index.tsx
│   │   │   ├── 📄 LeaderboardPage.tsx
│   │   │   ├── 📄 LoginPage.tsx
│   │   │   ├── 📄 NotFound.tsx
│   │   │   ├── 📄 PrivacySecurityPage.tsx
│   │   │   └── 📄 SendReportPage.tsx
│   │   ├── 🎨 App.css
│   │   ├── 📄 App.tsx
│   │   ├── 🎨 index.css
│   │   ├── 📄 main.tsx
│   │   └── 📄 vite-env.d.ts
│   ├── 📁 supabase/
│   │   └── ⚙️ config.toml
│   ├── 🔒 .env 🚫 (auto-hidden)
│   ├── 🚫 .gitignore
│   ├── 📖 README.md
│   ├── 📄 bun.lockb
│   ├── 📄 components.json
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   ├── 📄 postcss.config.js
│   ├── 📄 tailwind.config.ts
│   ├── 📄 tsconfig.app.json
│   ├── 📄 tsconfig.json
│   ├── 📄 tsconfig.node.json
│   └── 📄 vite.config.ts
├── 📄 .firebaserc
├── 🚫 .gitignore
├── 📄 firebase.json
├── 📄 package-lock.json
└── 📄 package.json
```

---

## Contributing 🤝

Contributions are welcome! If you’d like to improve this project or add features, feel free to:

1. Fork the repo.
2. Create a new branch.
3. Submit a pull request.

I appreciate all suggestions for enhancement! 🙏

---

## Contact Me 📬

Let’s connect:

[![m.dinesh.it27@gmail.com](https://img.shields.io/badge/Contact%20me-m.dinesh.it27@gmail.com-red)](mailto:m.dinesh.it27@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Dinesh.M-blue)](https://www.linkedin.com/in/m-dinesh-d30/)
[![Instagram](https://img.shields.io/badge/Instagram-dinx_pvt_430-darkpink)](https://www.instagram.com/_dinx_pvt_430)
[![GitHub](https://img.shields.io/badge/GitHub-dineshit27-yellow)](https://github.com/dineshit27)

Thanks for stopping by! 👋

---

### Made with ❤️ by **Dinesh M**
