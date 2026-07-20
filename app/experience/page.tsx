import Link from "next/link";
import { background } from "@/app/data/background";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  { key: "experience", label: "Experience" },
  { key: "certifications", label: "Certifications" },
  { key: "education", label: "Education" },
] as const;

export default function ExperiencePage() {
  return (
    <section className="mx-auto flex min-h-120 max-w-7xl flex-col px-4 py-10 sm:px-6 lg:px-8">
      <Accordion
        type="single"
        collapsible
        defaultValue="experience"
        className="mt-10"
      >
        {sections.map((section) => (
          <AccordionItem key={section.key} value={section.key}>
            <AccordionTrigger className="text-2xl font-semibold text-foreground sm:text-3xl">
              {section.label}
            </AccordionTrigger>
            <AccordionContent className="space-y-5">
              {background[section.key].map((item) => (
                <Card
                  key={`${item.title}-${item.organization || item.date}`}
                  className="overflow-hidden py-5"
                >
                  <CardHeader className="gap-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                          {item.organization
                            ? `${item.title} - ${item.organization}`
                            : item.title}
                        </CardTitle>
                      </div>
                      <div className="flex flex-col gap-2 text-base text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
                        {item.location ? <span>{item.location}</span> : null}
                        {item.location && item.date ? (
                          <span className="hidden h-1.5 w-1.5 rounded-full bg-border sm:block" />
                        ) : null}
                        {item.date ? <span>{item.date}</span> : null}
                      </div>
                    </div>
                    {item.links.length > 0 ? (
                      <CardAction className="flex flex-wrap items-center gap-2">
                        {item.links.map((link) => (
                          <Button
                            key={link.href}
                            asChild
                            variant="secondary"
                            size="lg"
                          >
                            <Link href={link.href} target="_blank">
                              {link.label}
                            </Link>
                          </Button>
                        ))}
                      </CardAction>
                    ) : null}
                  </CardHeader>
                </Card>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
