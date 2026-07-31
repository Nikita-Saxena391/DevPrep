"use client";

import { Play, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  const stats = [
    { number: "50K+", label: "Problems Solved" },
    { number: "10K+", label: "Active Developers" },
    { number: "25+", label: "Programming Languages" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}

        <Badge
          variant="secondary"
          className="mb-8 bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800"
        >
          <Star className="w-4 h-4 mr-2" />
          Join 10,000+ developers already coding
        </Badge>

        {/* Heading */}

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight mb-8">
          Master{" "}
          <span className="relative inline-block">
            <span className="px-6 py-3 bg-amber-500 text-white rounded-2xl shadow-xl -rotate-1 inline-block">
              Problem
            </span>
          </span>{" "}
          Solving
          <br />
          with{" "}
          <span className="relative inline-block">
            <span className="px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow-xl rotate-1 inline-block">
              Code
            </span>
          </span>
        </h1>

        {/* Description */}

        <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Challenge yourself with thousands of coding problems, compete with
          developers worldwide, and accelerate your programming journey with
          instant feedback and detailed analytics.
        </p>

        {/* Buttons */}

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            <Play className="mr-2 w-5 h-5" />
            Start Coding
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>

          <Button variant="outline" size="lg">
            Browse Problems
          </Button>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-3xl md:text-4xl font-bold">
                {stat.number}
              </h2>

              <p className="text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}