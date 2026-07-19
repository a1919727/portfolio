import movieImage from "@/app/public/movie.jpeg";
import railBreakImage from "@/app/public/rail-break.jpeg";
import fullStackMovieImage from "@/app/public/full-stack-movie.jpeg";
import jobTrackerImage from "@/app/public/job-tracker.png";
import jobSearchWorkImage from "@/app/public/job-search.jpeg";

export const personalProjects = [
  {
    title: "Full stack movie review platform",
    summary:
      "A full-stack movie review platform for discovering movies, browsing movie details, saving favorites, tracking watch list, and writing reviews",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Cloudinary",
      "Figma",
      "Vercel",
      "Railway",
    ],
    demoHref: "https://movie-1zmkb8af8-di-zhus-projects.vercel.app",
    image: fullStackMovieImage,
  },
  {
    title: "Movie.ai",
    summary:
      "A full-stack movie discovery and review platform, enabling users to search and discover movies, submit ratings and reviews, and report inappropriate reviews.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "TMDB API",
      "Gemini API",
    ],
    demoHref: "https://main.d65imgxp8iknh.amplifyapp.com",
    image: movieImage,
  },
  {
    title: "Job Search Work",
    summary:
      "Job Search Work is a AI platform to help users to track applications and recommend jobs",
    stack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "GCP"],
    demoHref: "https://jobsearch.works",
    image: jobSearchWorkImage,
  },
  {
    title: "Rail Break Prediction ML",
    summary:
      "Railway track prediction project is to predict whether railway will break within the next 30 days",
    stack: ["Python", "PySpark", "SQL", "scikit-learn", "Databricks"],
    demoHref: "https://github.com/a1919727/RAIL-PG-2",
    image: railBreakImage,
  },
];
