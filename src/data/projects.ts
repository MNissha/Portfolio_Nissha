import { projectSchema, type Project } from "../types/project.js";

const rawProjects: Project[] = [
  {
    slug: "e-commerce-website",
    title: "E-Commerce Website",
    desc: "Full-featured online store with shopping cart, user authentication, and payment integration.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    color: "from-purple-500 to-pink-500",
    icon: "🛒",
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
