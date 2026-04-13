import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { techGroups } from "../data/tech-stack";

export default function TechStackPage() {
  return (
    <section className="mx-auto flex min-h-120 max-w-7xl flex-col px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-4xl text-foreground font-bold sm:text-5xl">
        Tech Stack
      </h1>

      <div className="mt-10 grid gap-10">
        {techGroups.map((group) => (
          <Card key={group.title} className="bg-white/85 p-5">
            <CardHeader>
              <CardTitle className="text-2xl">{group.title}</CardTitle>
              <div className="grid gap-3 pt-4 sm:grid-cols-3">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 px-1 py-2"
                    >
                      <div className="flex items-center justify-center rounded-xl bg-white/90">
                        <Icon className={`h-10 w-10 ${item.iconColor}`} />
                      </div>
                      <span className="text-md sm:text-xl">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
