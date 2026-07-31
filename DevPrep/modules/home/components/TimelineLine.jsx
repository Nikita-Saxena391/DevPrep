"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineLine() {
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      {
        scaleY: 0,
        transformOrigin: "top center",
      },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      {/* Background Line */}

      <div
        className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        w-[4px]
        h-full
        rounded-full
        bg-gray-700/30
        "
      />

      {/* Animated Line */}

      <div
        ref={lineRef}
        className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        w-[4px]
        h-full
        rounded-full

        bg-gradient-to-b
        from-amber-400
        via-purple-500
        to-indigo-500

        shadow-[0_0_40px_rgba(168,85,247,.8)]
        "
      />
    </>
  );
}