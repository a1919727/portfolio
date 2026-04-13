import { personalProjects } from "../data/project";
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
