import { onBoardUser } from "@/modules/auth/actions";

import HeroSection from "@/modules/home/components/HeroSection";
import FeaturesSection from "@/modules/home/components/FeaturesSection";
import TimelineSection from "@/modules/home/components/TimelineSection";
import { Button } from "@/components/ui/button";
import Footer from "@/modules/home/components/Footer";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RoadmapFeature from "@/modules/home/components/RoadmapFeature";
import FloatingFeatures from "@/modules/home/components/FloatingFeatures";



export default async function Home() {
  await onBoardUser();

  const problemCategories = [
    {
      level: "Beginner",
      title: "Easy Problems",
      description:
        "Perfect for getting started with basic programming concepts and syntax.",
      count: "500+ Problems",
      color: "amber",
    },
    {
      level: "Intermediate",
      title: "Medium Problems",
      description:
        "Challenge yourself with data structures and algorithm problems.",
      count: "800+ Problems",
      color: "indigo",
    },
    {
      level: "Advanced",
      title: "Hard Problems",
      description:
        "Master complex algorithms and compete in programming contests.",
      count: "300+ Problems",
      color: "amber",
    },
  ];

  return (
    <main className="min-h-screen mt-24">

      {/* Hero */}
      <HeroSection />
      
  


      {/* Premium Features */}
      <FeaturesSection />
       <TimelineSection />

      {/* Problem Categories */}
      <section id="problems" className="py-24">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose your{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                challenge
              </span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From beginner-friendly puzzles to advanced algorithmic challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problemCategories.map((category) => (
              <Card
                key={category.title}
                className={`border-2 transition-all hover:shadow-xl ${
                  category.color === "amber"
                    ? "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800"
                    : "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800"
                }`}
              >
                <CardHeader>
                  <Badge
                    variant="secondary"
                    className={
                      category.color === "amber"
                        ? "bg-amber-100 dark:bg-amber-900 text-amber-700"
                        : "bg-indigo-100 dark:bg-indigo-900 text-indigo-700"
                    }
                  >
                    {category.level}
                  </Badge>

                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription>
                    {category.description}
                  </CardDescription>

                  <p
                    className={`mt-5 font-bold ${
                      category.color === "amber"
                        ? "text-amber-500"
                        : "text-indigo-500"
                    }`}
                  >
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-5xl font-black text-white">
            Ready to start your coding journey?
          </h2>

          <p className="text-xl text-white/80 mt-6">
            Join thousands of developers improving every day.
          </p>

          <Button
            size="lg"
            className="mt-10 bg-white text-black hover:bg-gray-100"
          >
            Get Started Free
          </Button>

        </div>
         
      </section>
 <Footer />
    </main>
  );
}