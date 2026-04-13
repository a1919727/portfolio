import bookingImage from "@/app/public/booking.jpeg";
import jobTrackerImage from "@/app/public/job-tracker.png";
import movieImage from "@/app/public/movie.jpeg";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Playfair_Display } from "next/font/google";

const titleFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const personalProjects = [
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

export default function ProjectsPage() {
  return (
    <section className="mx-auto flex min-h-120 max-w-7xl flex-col px-4 py-10 sm:px-6 lg:px-8">
      <h1
        className={`${titleFont.className} text-4xl text-foreground sm:text-5xl`}
      >
        Projects
      </h1>
      <div className="mx-auto mt-10 grid w-full gap-10 lg:grid-cols-2">
        {personalProjects.map((project, index) => (
          <Card
            key={project.title}
            className="group relative overflow-hidden pt-0 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-800"
              />
            </div>

            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-lg">
                {project.summary}
              </CardDescription>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="normal-case text-sm font-bold"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardFooter>
              <Button asChild className="w-full">
                <Link href={project.demoHref}>View Demo</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
