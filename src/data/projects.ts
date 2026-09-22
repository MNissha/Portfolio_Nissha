import { projectSchema, type Project } from "../types/project.js";

const rawProjects: Project[] = [
  {
    slug: "jomdekan",
    title: "JomDekan — Campus Platform",
    desc: "Full-stack campus platform for Malaysian university students: academic resource sharing, a discussion forum, a tutoring/freelance marketplace, and a complete admin moderation portal with audit logging.",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "JWT", "Zod"],
    color: "from-indigo-500 to-purple-600",
    icon: "🎓",
    details: {
      overview:
        "JomDekan ('Let's go to Dean's List') is a student-facing platform for Malaysian university students. It combines academic resource sharing, a discussion forum with voting, a tutoring and freelance marketplace, and a full admin moderation portal with audit logging. Built as a 5-person team project at KADA Academy Cohort II using a production-grade layered architecture: a TypeScript REST API with JWT auth and refresh-token rotation, PostgreSQL with 31 versioned migrations, and signed-URL file uploads across pluggable storage backends.",
      role: "Full-stack developer — team of 5",
      year: "2026",
      duration: "Cohort II @ KADA Academy",
      highlights: [
        "JWT authentication with refresh-token rotation and reuse detection",
        "31 versioned SQL migrations, PostgreSQL with raw SQL (no ORM)",
        "Signed-URL file uploads across pluggable storage backends (S3 / Supabase / local-fs)",
        "Discussion forum with polymorphic voting, solved-state, and comment reporting",
        "Tutoring and freelance marketplace with application tracking and CV uploads",
        "Full admin portal: user management, moderation queue, taxonomy editor, audit logs",
        "Zod-validated request schemas on every endpoint",
        "Swagger/OpenAPI docs generated from route JSDoc",
      ],
      stack: [
        {
          label: "Frontend",
          items: [
            "React 18",
            "TypeScript",
            "Vite",
            "TanStack Query",
            "Zustand",
            "react-hook-form",
            "Tailwind CSS",
          ],
        },
        {
          label: "Backend",
          items: ["Node.js", "Express", "TypeScript", "Zod", "JWT", "bcrypt", "pino"],
        },
        { label: "Database", items: ["PostgreSQL", "Raw SQL migrations"] },
        {
          label: "Storage & Infra",
          items: ["AWS S3 SDK", "Supabase", "Multer"],
        },
        {
          label: "Testing",
          items: ["Jest", "Supertest", "Vitest", "Testing Library", "Playwright"],
        },
      ],
      gallery: [
        {
          src: "/projects/jomdekan/gallery-1-resources.png",
          caption:
            "Academic resource sharing — browse, filter, upload with signed-URL storage",
        },
        {
          src: "/projects/jomdekan/gallery-2-forum.png",
          caption: "Discussion forum — posts, votes, solved-state, comments",
        },
        {
          src: "/projects/jomdekan/gallery-3-marketplace.png",
          caption:
            "Tutoring / freelance marketplace — listings and applications with CV uploads",
        },
        {
          src: "/projects/jomdekan/gallery-4-admin.png",
          caption:
            "Admin moderation queue — content reports and audit-logged decisions",
        },
        {
          src: "/projects/jomdekan/gallery-5-audit.png",
          caption: "Audit log — append-only record of user and admin actions",
        },
      ],
      learnings:
        "Working on JomDekan taught me how to build a real product with a team — not just features in isolation, but the parts that don't show in a demo: layered architecture, versioned migrations, request validation at the boundary, and audit logging. The biggest lesson was around auth: implementing refresh-token rotation with reuse detection forced me to think adversarially about what a stolen token could do, a mindset I now bring to every backend I touch.",
    },
  },
  {
    slug: "bean-and-leaf",
    title: "Bean & Leaf — Full-Stack E-Commerce Platform",
    desc: "Containerized e-commerce platform for a coffee, matcha, and brewing-gear shop: a React SPA + Express/PostgreSQL REST API with JWT auth, a persistent server-side cart, and a 4-service Docker Compose stack for one-command local orchestration.",
    tech: ["React", "Express", "PostgreSQL", "Docker", "JWT", "Zustand", "Tailwind CSS"],
    color: "from-amber-600 to-orange-600",
    icon: "☕",
    details: {
      overview:
        "Bean & Leaf is a containerized e-commerce application for a coffee, matcha, and brewing-gear shop, built as a decoupled React 19 SPA and Express/PostgreSQL REST API. A 4-service Docker Compose stack handles one-command local orchestration. It demonstrates end-to-end product browsing, user authentication, and a persistent server-side cart.",
      role: "Solo Full-Stack Developer — 3 repositories (frontend, backend, orchestration)",
      highlights: [
        "JWT authentication with bcrypt password hashing (cost 12), Bearer token middleware, and Axios interceptors that auto-attach tokens and force logout on 401",
        "Persistent server-side cart backed by PostgreSQL (rows keyed by user_id + product_id), synced to the frontend via a Zustand store with live total recalculation",
        "Relational schema with foreign-key constraints (ON DELETE CASCADE), indexed lookups (idx_carts_user_id), and GENERATED ... AS IDENTITY primary keys",
        "REST-driven product listing, search, and detail views consumed by a React Router SPA styled with Tailwind CSS",
        "4-service Docker Compose stack (Postgres 16, Redis 7, Express API, Nginx-served frontend) with healthchecks and depends_on: service_healthy ordering",
        "Multi-stage Docker builds — a Node 20 + Vite build stage outputs only static assets into a final nginx:1.27-alpine image, with no Node runtime or source shipped to production",
        "Nginx SPA routing with a try_files fallback, and an auto-seeding database via docker-entrypoint-initdb.d/ (init.sql plus an idempotent seed.sql guarded by WHERE NOT EXISTS)",
        "Config-driven CORS allow-list via a FRONTEND_ORIGIN env var, so the same backend image works across local dev and containerized setups without code changes",
        "Diagnosed and fixed two production-style bugs: env vars silently not loading because dotenv was never wired up, and a Docker build failure caused by dependencies that only resolved locally through Node's parent-directory node_modules walk",
      ],
      stack: [
        {
          label: "Frontend",
          items: ["React 19", "Vite 8", "React Router 7", "Tailwind CSS 4", "Zustand 5", "Axios 1.20"],
        },
        {
          label: "Backend",
          items: ["Node.js", "Express 5", "JWT (jsonwebtoken)", "bcryptjs"],
        },
        { label: "Database", items: ["PostgreSQL 16"] },
        {
          label: "Infrastructure",
          items: ["Docker", "Docker Compose", "Nginx 1.27", "Redis 7 (provisioned)"],
        },
      ],
      gallery: [
        {
          src: "/projects/bean-and-leaf/gallery-1-home.png",
          caption: "Home page — product browsing for coffee, matcha, and brewing gear",
        },
        {
          src: "/projects/bean-and-leaf/gallery-2-login.png",
          caption: "Login — JWT authentication with bcrypt-hashed passwords",
        },
        {
          src: "/projects/bean-and-leaf/gallery-3-product-detail.png",
          caption: "Product detail view",
        },
        {
          src: "/projects/bean-and-leaf/gallery-4-cart.png",
          caption: "Persistent server-side cart, synced via Zustand",
        },
        {
          src: "/projects/bean-and-leaf/gallery-5-docker-compose.png",
          caption: "4-service Docker Compose stack — Postgres, Redis, API, Nginx",
        },
      ],
      links: {
        repos: [
          { label: "Orchestration", url: "https://github.com/MNissha/bean-and-leaf" },
          { label: "Frontend", url: "https://github.com/MNissha/bean-and-leaf-frontend" },
          { label: "Backend", url: "https://github.com/MNissha/bean-and-leaf-backend" },
        ],
      },
    },
  },
  {
    slug: "pawsar-ar-pet-adoption-app",
    title: "PawsAR: AR Pet Adoption App",
    desc: "Marker-based AR application allowing users to view 3D pets in real-world environments for adoption.",
    tech: ["Unity", "C#", "Vuforia", "AR Foundation", "ARCore"],
    color: "from-blue-500 to-cyan-500",
    icon: "🐾",
    details: {
      overview:
        "PawsAR is an interactive Android augmented-reality app that bridges the emotional disconnect in traditional pet adoption listings across Malaysia. Instead of scrolling past static web cards, users scan physical adoption posters to bring 3D shelter pets to life in their own space, watch realistic pet-to-pet behaviours unfold, and interact with them using natural voice commands. This was my Final Year Project.",
      role: "Final Year Project — solo developer",
      year: "2024",
      duration: "2 semesters",
      highlights: [
        "Marker-based AR using Vuforia Engine (10cm fiducial targets, calibrated for 5-star tracking stability)",
        "Voice User Interface: Meta XR Voice SDK + Wit.ai NLP for flexible intent-based commands (sit, paw, treats, go for a walk)",
        "Dynamic proximity zones — Euclidean distance between two tracked markers drives autonomous pet-to-pet behaviour across Discovery, Curious, and Playtime modes",
        "Context-aware UI that updates commands and pet biographies based on how many pets are visible",
        "Interactive voice-narrated storybook contextualising Malaysia's stray crisis (6M strays, 40% adoption support)",
        "Direct shelter handoff — in-app calls, emails, web links, and Google Maps directions",
        "Modular 5-layer architecture (User Input → Front-End → Game Logic Core → Asset Layer → Output Layer) with a Singleton Audio Manager",
      ],
      stack: [
        { label: "Engine", items: ["Unity 2022.3 LTS", "C#"] },
        {
          label: "AR & Tracking",
          items: ["Vuforia Engine v10.19", "Marker-based image targets"],
        },
        { label: "Voice & NLP", items: ["Meta XR Voice SDK", "Wit.ai"] },
        { label: "Platform", items: ["Android 7.0+"] },
        {
          label: "Validation",
          items: ["Black-box testing", "User Acceptance Testing"],
        },
      ],
      video: {
        thumbnail: "/projects/pawsar/video-thumb.png",
        url: "/projects/pawsar/demo.mp4",
        caption: "AR demo — scanning markers to trigger pet behaviours",
      },
      gallery: [
        {
          src: "/projects/pawsar/gallery-1-proximity.png",
          caption:
            "Two pets on separate markers — Discovery, Curious, and Playtime proximity zones",
        },
        {
          src: "/projects/pawsar/gallery-2-voice.png",
          caption:
            "Voice User Interface — 'Sit', 'Paw', 'Treats', 'Let's Go', 'Run Boy'",
        },
        {
          src: "/projects/pawsar/gallery-3-storybook.png",
          caption:
            "Interactive storybook — Malaysia's stray animal crisis by the numbers",
        },
        {
          src: "/projects/pawsar/gallery-4-nlp.png",
          caption:
            "Wit.ai intent training data — flexible utterance-to-intent mapping",
        },
      ],
      learnings:
        "Building PawsAR taught me how to design an interaction model that lives in the physical world — where the user's space, not a screen, is the canvas. The biggest challenge was making autonomous behaviours feel natural rather than scripted: proximity zones had to be forgiving enough to hide tracking jitter but precise enough to feel responsive. It also deepened my understanding of NLP-based voice interfaces and the gap between what users say and what the intent classifier needs to hear.",
    },
  },
  {
    slug: "carlo-rino-website-redesign-ui-ux",
    title: "Carlo Rino Website Redesign – UI/UX",
    desc: "Complete UI/UX redesign of Carlo Rino website with improved user experience and modern visual design.",
    tech: ["User Research", "Wireframing", "Prototyping", "UI/UX", "Visual Design"],
    color: "from-green-500 to-teal-500",
    icon: "🎨",
    details: {
      overview:
        "Complete UI/UX redesign of the Carlo Rino e-commerce website. The original site felt dated and cluttered — crowded navigation, inconsistent product imagery, and a color palette that didn't match the brand's premium positioning. I redesigned the homepage and category pages with a cleaner layout, larger product focus, modern typography, and a more refined visual hierarchy that better reflects the brand.",
      role: "UI/UX Designer — solo",
      year: "2024",
      highlights: [
        "Modernised homepage hero with clearer brand focus and prominent CTA",
        "Cleaned up navigation and category structure for easier browsing",
        "Larger, more consistent product thumbnails across category pages",
        "Refined typography and spacing for a premium feel",
      ],
      stack: [
        {
          label: "Design",
          items: ["Figma", "User Research", "Wireframing", "Prototyping", "Visual Design"],
        },
      ],
      beforeAfter: [
        {
          before: "/projects/carlo-rino-redesign/before-home.png",
          after: "/projects/carlo-rino-redesign/after-home.png",
          caption: "Homepage",
        },
        {
          before: "/projects/carlo-rino-redesign/before-newarrivals.png",
          after: "/projects/carlo-rino-redesign/after-newarrivals.png",
          caption: "New Arrivals / Category page",
        },
      ],
    },
  },
];

export const projects: Project[] = projectSchema.array().parse(rawProjects);
