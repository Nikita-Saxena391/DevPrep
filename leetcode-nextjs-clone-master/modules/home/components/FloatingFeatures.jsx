"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Brain } from "lucide-react";

export default function FloatingFeatures() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
        y: 30,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      whileHover={{
        x: -20,
        y: -10,
        scale: 1.05,
      }}
      className="
        absolute
        right-10
        top-20
        w-[360px]
        rounded-3xl
        border
        border-indigo-500/30
        bg-black/70
        backdrop-blur-xl
        shadow-2xl
        p-6
        cursor-pointer
      "
    >

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="
          flex 
          items-center 
          gap-3
        ">
          <div className="
            h-12
            w-12
            rounded-xl
            bg-indigo-600
            flex
            items-center
            justify-center
          ">
            <Brain className="text-white"/>
          </div>


          <div>
            <h3 className="text-white font-bold">
              DevPrep AI
            </h3>

            <p className="text-sm text-gray-400">
              Career Intelligence
            </p>
          </div>

        </div>


        <Sparkles 
          className="text-purple-400"
        />

      </div>


      {/* Content */}

      <div className="mt-6">

        <h2 className="
          text-xl
          font-bold
          text-white
        ">
          Generate your DSA Roadmap 🚀
        </h2>


        <p className="
          text-gray-400
          mt-3
        ">
          AI analyzes your skills and creates
          a personalized preparation path.
        </p>


      </div>



      {/* Progress */}

      <div className="mt-6">

        <div className="
          flex
          justify-between
          text-sm
          text-gray-400
        ">
          <span>
            Progress
          </span>

          <span>
            72%
          </span>

        </div>


        <div className="
          h-2
          bg-gray-800
          rounded-full
          mt-2
        ">

          <div
            className="
              h-full
              w-[72%]
              rounded-full
              bg-gradient-to-r
              from-purple-500
              to-indigo-500
            "
          />

        </div>

      </div>



      {/* Button */}

      <button
        className="
          mt-6
          w-full
          py-3
          rounded-xl
          bg-indigo-600
          text-white
          font-semibold
          hover:bg-indigo-500
        "
      >
        Continue Learning
      </button>


    </motion.div>
  );
}