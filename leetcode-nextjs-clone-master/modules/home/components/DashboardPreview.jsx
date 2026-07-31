"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Trophy,
  Flame,
  Brain,
  Target,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: .9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
    >
      <div className="w-[430px] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(99,102,241,.25)] overflow-hidden">

        {/* Header */}

        <div className="flex items-center justify-between px-7 py-6 border-b border-white/10">

          <div>
            <h2 className="text-2xl font-bold text-white">
              DevPrep
            </h2>

            <p className="text-sm text-gray-400">
              Coding Dashboard
            </p>
          </div>

          <div className="rounded-xl bg-indigo-500/20 p-3">
            <Sparkles className="text-indigo-400" />
          </div>

        </div>

        {/* Weekly Goal */}

        <div className="px-7 mt-6">

          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>Weekly Goal</span>
            <span>72%</span>
          </div>

          <div className="h-3 rounded-full bg-white/10 overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "72%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
            />

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-4 px-7 mt-8">

          <Stat title="Easy" value="245" color="text-green-400" />
          <Stat title="Medium" value="182" color="text-amber-400" />
          <Stat title="Hard" value="47" color="text-red-400" />

        </div>

        {/* Skills */}

        <div className="space-y-4 px-7 py-8">

          <Skill title="Java" percent={88} />

          <Skill title="React" percent={76} />

          <Skill title="SQL" percent={82} />

        </div>

      </div>

      {/* Floating Widgets */}

      <MiniWidget
        className="-left-28 top-16"
        icon={<Flame className="text-orange-400" />}
        title="34 Day"
        subtitle="Streak"
      />

      <MiniWidget
        className="-right-28 top-12"
        icon={<Trophy className="text-yellow-400" />}
        title="Top 5%"
        subtitle="Rank"
      />

      <MiniWidget
        className="-left-32 bottom-20"
        icon={<Brain className="text-violet-400" />}
        title="AI Coach"
        subtitle="Active"
      />

      <MiniWidget
        className="-right-32 bottom-20"
        icon={<Code2 className="text-cyan-400" />}
        title="820"
        subtitle="Solved"
      />

      <MiniWidget
        className="left-1/2 -translate-x-1/2 -bottom-24"
        icon={<Target className="text-green-400" />}
        title="Weekly"
        subtitle="Contest"
      />

      <MiniWidget
        className="left-1/2 -translate-x-1/2 -top-24"
        icon={<BarChart3 className="text-indigo-400" />}
        title="1842"
        subtitle="Rating"
      />

    </motion.div>
  );
}

function Stat({ title, value, color }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 text-center border border-white/10">
      <div className={`text-2xl font-bold ${color}`}>
        {value}
      </div>
      <div className="text-xs text-gray-400 mt-1">
        {title}
      </div>
    </div>
  );
}

function Skill({ title, percent }) {
  return (
    <div>
      <div className="flex justify-between text-sm text-gray-300 mb-2">
        <span>{title}</span>
        <span>{percent}%</span>
      </div>

      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
    </div>
  );
}

function MiniWidget({ icon, title, subtitle, className }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className={`absolute ${className}`}
    >
      <div className="w-40 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-4">
        <div className="flex items-center gap-3">
          {icon}

          <div>
            <h4 className="font-bold text-white">
              {title}
            </h4>

            <p className="text-xs text-gray-400">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}