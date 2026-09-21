# Portfolio — Nissha

A personal portfolio website built to showcase my full-stack development work, skills, and projects.

**Live Demo:** [portfolio-nissha.vercel.app](https://portfolio-nissha.vercel.app)

## 🛠️ Tech Stack

*   **Framework:** React 19 + Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4
*   **Routing:** react-router-dom v6
*   **Validation:** Zod
*   **Linting:** oxlint

## 📂 Project Structure

```
├── public/                  # Static assets (favicon, icons, project images)
├── src/
│   ├── assets/               # Images used within components
│   ├── components/
│   │   ├── common/            # Shared UI (Header, Footer, ScrollToHash)
│   │   └── sections/          # Page sections (Hero, About, Skills, Projects, Contact)
│   ├── data/                 # Static content (nav links, projects, skills)
│   ├── hooks/                 # Custom hooks (e.g. useSmoothScroll)
│   ├── layouts/               # Layout wrappers (MainLayout)
│   ├── pages/                 # Route views (Home, ProjectDetail, NotFound)
│   └── types/                  # Shared TypeScript types
├── .oxlintrc.json            # Linting configuration
└── tsconfig.json              # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/MNissha/Portfolio_Nissha.git
   ```
2. Navigate into the directory:
   ```
   cd Portfolio_Nissha
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

### Available Scripts

| Command            | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`       | Start the local development server        |
| `npm run build`     | Type-check and build for production        |
| `npm run preview`   | Preview the production build locally       |
| `npm run lint`       | Run oxlint against the codebase             |
| `npm run typecheck` | Run the TypeScript compiler in check mode  |

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
