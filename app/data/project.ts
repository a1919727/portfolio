import bookingImage from "@/app/public/booking.jpeg";
import jobTrackerImage from "@/app/public/job-tracker.png";
import movieImage from "@/app/public/movie.jpeg";

export const personalProjects = [
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
    demoHref: "https://main.d65imgxp8iknh.amplifyapp.com/",
    image: movieImage,
  },
  {
    title: "Study Room Booking System",
    summary:
      "A study room booking system supports user authentication, study room booking, and booking history.",
    stack: ["React", "ASP.NET Core Web API", "SQL Server", "Azure", "Docker"],
    demoHref: "https://zealous-flower-0f2eb1800.6.azurestaticapps.net",
    image: bookingImage,
  },
  {
    title: "Job Tracker",
    summary:
      "A practical project designed around real-world usability, clean visual language, and thoughtful engineering decisions.",
    stack: ["React", "Node.js", "MongoDB", "Azure"],
    demoHref: "https://jolly-island-0b465a000.7.azurestaticapps.net",
    image: jobTrackerImage,
  },
];
