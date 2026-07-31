"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const colors = {
  amber: {
    bg: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-400/20",
    icon: "bg-amber-500",
    glow: "shadow-amber-500/20",
  },

  purple: {
    bg: "from-violet-500/20 to-purple-600/20",
    border: "border-purple-400/20",
    icon: "bg-purple-500",
    glow: "shadow-purple-500/20",
  },

  blue: {
    bg: "from-sky-500/20 to-cyan-500/20",
    border: "border-sky-400/20",
    icon: "bg-sky-500",
    glow: "shadow-sky-500/20",
  },

  green: {
    bg: "from-green-500/20 to-emerald-500/20",
    border: "border-green-400/20",
    icon: "bg-green-500",
    glow: "shadow-green-500/20",
  },

  orange: {
    bg: "from-orange-500/20 to-red-500/20",
    border: "border-orange-400/20",
    icon: "bg-orange-500",
    glow: "shadow-orange-500/20",
  },

  red: {
    bg: "from-red-500/20 to-pink-500/20",
    border: "border-red-400/20",
    icon: "bg-red-500",
    glow: "shadow-red-500/20",
  },
};

export default function FloatingFeatureCard({
  icon: Icon,
  title,
  description,
  color,
  x,
  y,
}) {
  const theme = colors[color];

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      animate={{
        y: [0, -12, 0],
      }}
      whileHover={{
        scale: 1.08,
        rotate: 2,
      }}
      style={{
        left: "50%",
        top: "50%",
        x,
        y,
      }}
      className={`
absolute
w-64
rounded-3xl
border
${theme.border}
bg-gradient-to-br
${theme.bg}
backdrop-blur-xl
p-6
shadow-2xl
${theme.glow}
cursor-pointer
overflow-hidden
`}
    >
      {/* Glow */}

      <div
        className="
absolute
inset-0
opacity-0
hover:opacity-100
transition
duration-500
bg-white/5
"
      />

      {/* Icon */}

      <div
        className={`
w-14
h-14
rounded-2xl
${theme.icon}
flex
items-center
justify-center
shadow-lg
mb-5
`}
      >
        <Icon className="text-white" size={28} />
      </div>

      {/* Title */}

      <h3
        className="
text-xl
font-bold
mb-2
text-white
"
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
text-sm
text-gray-300
leading-6
"
      >
        {description}
      </p>

      {/* Bottom */}

      <div
        className="
mt-6
flex
items-center
justify-between
"
      >
        <span
          className="
text-xs
text-gray-400
"
        >
          Learn More
        </span>

        <ArrowUpRight
          className="
text-white
group-hover:translate-x-1
transition
"
          size={18}
        />
      </div>
    </motion.div>
  );
}