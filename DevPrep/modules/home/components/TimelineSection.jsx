"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Brain,
  Code2,
  Target,
  Trophy,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    title: "Analyze Your Profile",
    desc: "AI evaluates your current skills, DSA level, and target company requirements.",
    icon: Brain,
  },
  {
    title: "Generate DSA Roadmap",
    desc: "Get a personalized roadmap covering topics, patterns, and problem difficulty.",
    icon: Code2,
  },
  {
    title: "Practice Smart",
    desc: "Solve curated problems with AI recommendations and progress tracking.",
    icon: Target,
  },
  {
    title: "Track Improvement",
    desc: "Monitor your consistency, solved problems, and weak areas.",
    icon: Trophy,
  },
  {
    title: "Crack Interviews",
    desc: "Become interview-ready with company-focused preparation paths.",
    icon: Rocket,
  },
];

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        opacity: 0,
        y: 80,
        stagger: 0.25,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });


      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >

      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          Your AI DSA Journey
        </h2>

        <p className="text-muted-foreground mt-4">
          From beginner to interview-ready with a personalized roadmap
        </p>
      </div>


      <div className="relative max-w-5xl mx-auto">

        {/* vertical line */}
        <div
          ref={lineRef}
          className="
            absolute
            left-1/2
            top-0
            h-full
            w-[3px]
            bg-gradient-to-b
            from-primary
            via-purple-500
            to-transparent
            -translate-x-1/2
          "
        />


        <div className="space-y-24">

          {timelineData.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  timeline-item
                  relative
                  flex
                  items-center
                  ${
                    index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                  }
                `}
              >

                <div
                  className="
                    w-full
                    md:w-[42%]
                    rounded-2xl
                    border
                    bg-background/60
                    backdrop-blur-xl
                    p-6
                    shadow-xl
                    hover:scale-105
                    transition-transform
                  "
                >

                  <div className="
                    flex
                    items-center
                    gap-4
                  ">

                    <div
                      className="
                        p-3
                        rounded-xl
                        bg-primary/10
                      "
                    >
                      <Icon className="text-primary" />
                    </div>


                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                  </div>


                  <p className="
                    mt-4
                    text-muted-foreground
                    leading-relaxed
                  ">
                    {item.desc}
                  </p>

                </div>


                {/* center node */}

               <div
  className="
    absolute
    left-1/2
    -translate-x-1/2
    w-3
    h-3
    rounded-full
    bg-primary
    shadow-[0_0_15px_var(--primary)]
  "
/>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}