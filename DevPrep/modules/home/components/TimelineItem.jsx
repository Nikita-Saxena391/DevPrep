"use client";

import { motion } from "framer-motion";

const colors = {
  amber: {
    bg: "from-amber-500/10 to-orange-500/10",
    border: "border-amber-500/20",
    icon: "bg-amber-500",
  },

  purple: {
    bg: "from-violet-500/10 to-purple-500/10",
    border: "border-violet-500/20",
    icon: "bg-violet-500",
  },

  blue: {
    bg: "from-sky-500/10 to-cyan-500/10",
    border: "border-sky-500/20",
    icon: "bg-sky-500",
  },

  green: {
    bg: "from-green-500/10 to-emerald-500/10",
    border: "border-green-500/20",
    icon: "bg-green-500",
  },

  orange: {
    bg: "from-orange-500/10 to-red-500/10",
    border: "border-orange-500/20",
    icon: "bg-orange-500",
  },
};

export default function TimelineItem({
  item,
  index,
}) {
  const Icon = item.icon;

  const theme = colors[item.color];

  return (
    <motion.div
      className={`timeline-card relative flex items-center mb-28 ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.8,
      }}
    >
      {/* Timeline Dot */}

      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        w-6
        h-6
        rounded-full
        bg-gradient-to-r
        from-amber-400
        to-indigo-500
        border-4
        border-background
        z-20
        shadow-[0_0_25px_rgba(245,158,11,.6)]
      "
      />

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.04,
        }}
        className={`
        w-full
        md:w-[42%]
        rounded-3xl
        p-7
        border
        ${theme.border}
        bg-gradient-to-br
        ${theme.bg}
        backdrop-blur-xl
        shadow-xl
        transition-all
      `}
      >
        <div
          className={`
          w-14
          h-14
          rounded-2xl
          ${theme.icon}
          flex
          items-center
          justify-center
          text-white
          mb-5
          shadow-lg
        `}
        >
          <Icon size={28} />
        </div>

        <h3 className="text-2xl font-bold mb-3">
          {item.title}
        </h3>

        <p className="text-muted-foreground leading-7">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
}