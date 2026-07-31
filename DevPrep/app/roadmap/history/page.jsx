"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, ArrowRight, Trash2 } from "lucide-react";

export default function RoadmapHistoryPage() {
  const router = useRouter();

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    try {
      const res = await fetch("/api/roadmap/history");
      const data = await res.json();

      setHistory(data);
    } finally {
      setLoading(false);
    }
  }

  async function deleteRoadmap(id) {
    await fetch(`/api/roadmap/${id}`, {
      method: "DELETE",
    });

    loadHistory();
  }

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen px-6 py-24">

      <h1 className="text-4xl font-bold mb-8">
        Your Roadmaps
      </h1>

      {history.length === 0 ? (
        <div className="text-muted-foreground">
          No roadmaps generated yet.
        </div>
      ) : (
        <div className="grid gap-6">

          {history.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border p-6 bg-card flex justify-between items-center"
            >
              <div>

                <h2 className="text-xl font-semibold">
                  {item.role}
                </h2>

                <p className="text-muted-foreground mt-1">
                  {item.level} • {item.duration}
                </p>

                <div className="flex items-center gap-2 mt-3 text-sm text-yellow-500">
                  <Clock size={16} />
                  {new Date(item.createdAt).toLocaleDateString()}
                </div>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={() => router.push(`/roadmap/${item.id}`)}
                  className="rounded-lg bg-yellow-400 text-black px-4 py-2 flex items-center gap-2"
                >
                  Open
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => deleteRoadmap(item.id)}
                  className="rounded-lg border p-2"
                >
                  <Trash2 />
                </button>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}