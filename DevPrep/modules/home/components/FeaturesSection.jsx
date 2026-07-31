"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import DashboardPreview from "./DashboardPreview";



export default function FeaturesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".dashboard", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const move = (e) => {
        const rect = containerRef.current.getBoundingClientRect();

        const x = (e.clientX - rect.left - rect.width / 2) / 35;
        const y = (e.clientY - rect.top - rect.height / 2) / 35;

        gsap.to(".dashboard", {
          x,
          y,
          duration: 0.8,
        });
      };

      containerRef.current.addEventListener("mousemove", move);

      return () =>
        containerRef.current?.removeEventListener("mousemove", move);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-36"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

      <div className="absolute -left-40 top-10 w-[450px] h-[450px] rounded-full bg-amber-500/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.3em] text-amber-500 font-semibold">
              Why DevPrep
            </p>

            <h2 className="mt-5 text-6xl font-black leading-tight">
              Everything
              <br />
              You Need
            </h2>

            <p className="mt-8 text-lg text-muted-foreground leading-8 max-w-xl">
             Master DSA step by step with an interactive roadmap designed for coding interviews.
            </p>

          </div>

          {/* RIGHT */}

          <div className="relative h-[700px] flex items-center justify-center">

            <div className="dashboard z-20 relative">
              <DashboardPreview />
            </div>

          
          </div>

        </div>

      </div>
    </section>
  );
}