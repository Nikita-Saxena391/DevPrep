"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  Code2,
  Trophy,
  Users,
  Zap,
  Brain,
  Target,
} from "lucide-react";


const features = [
  {
    title: "DSA Practice",
    desc: "Solve 2000+ algorithm problems",
    icon: Code2,
  },
  {
    title: "Leaderboard",
    desc: "Compete worldwide",
    icon: Trophy,
  },
  {
    title: "Community",
    desc: "Learn with developers",
    icon: Users,
  },
  {
    title: "Instant Judge",
    desc: "Real-time code evaluation",
    icon: Zap,
  },
  {
    title: "AI Mentor",
    desc: "Personal coding assistant",
    icon: Brain,
  },
  {
    title: "Interview Prep",
    desc: "Crack top companies",
    icon: Target,
  },
];


export default function OrbitFeatures() {

  const container = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {


      gsap.to(".orbit-wrapper", {
        rotate: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });


      gsap.to(".orbit-card", {
        rotate: -360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });


    }, container);


    return () => ctx.revert();

  }, []);



  return (

    <section
      ref={container}
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        bg-indigo-500/30
        blur-[150px]
        rounded-full
        "
      />



      <div
        className="
        relative
        w-[650px]
        h-[650px]
        "
      >



        {/* Center Core */}

        <div
          className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          w-56
          h-56

          rounded-full

          bg-gradient-to-br
          from-amber-400
          to-indigo-600

          flex
          items-center
          justify-center

          shadow-2xl
          "
        >

          <div className="text-white text-center">

            <h1 className="text-4xl font-black">
              CODE
            </h1>

            <p>
              Mastery
            </p>

          </div>

        </div>




        {/* Orbit */}

        <div
          className="
          orbit-wrapper
          absolute
          inset-0
          "
        >


        {
          features.map((feature,index)=>{


            const angle =
            (index/features.length)*360;


            const radius=270;


            const x =
            Math.cos(angle*Math.PI/180)*radius;


            const y =
            Math.sin(angle*Math.PI/180)*radius;



            const Icon = feature.icon;



            return (

              <div

              key={feature.title}

              className="
              orbit-card
              absolute

              w-52

              p-5

              rounded-2xl

              bg-white/10
              dark:bg-black/30

              backdrop-blur-xl

              border
              border-white/20

              shadow-xl

              hover:scale-110

              transition

              "

              style={{
                left:`calc(50% + ${x}px)`,
                top:`calc(50% + ${y}px)`,
                transform:
                "translate(-50%,-50%)"
              }}

              >


                <div
                className="
                w-12
                h-12

                rounded-xl

                bg-amber-500

                flex
                items-center
                justify-center

                mb-3
                "
                >

                  <Icon
                  className="text-white"
                  />

                </div>



                <h3
                className="
                font-bold
                text-lg
                "
                >
                  {feature.title}
                </h3>


                <p
                className="
                text-sm
                text-gray-500
                "
                >
                  {feature.desc}
                </p>


              </div>

            )

          })
        }


        </div>


      </div>


    </section>

  );
}