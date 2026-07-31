import { db } from "@/lib/db";
import RoadmapViewer from "@/modules/home/components/RoadmapViewer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default async function RoadmapPage({ params }) {

  const { id } = await params;


  const roadmap = await db.roadmap.findUnique({
    where: {
      id
    }
  });



  if (!roadmap) {

    return (
      <div className="min-h-screen pt-32 text-center">

        <h1 className="text-3xl font-bold">
          Roadmap not found
        </h1>

      </div>
    );

  }



  return (

    <div className="min-h-screen pt-24 px-4 sm:px-6">


      {/* BACK BUTTON */}

      <Link
        href="/ai-roadmap"

        className="
          fixed

          top-4
          left-4

          sm:top-6
          sm:left-6

          z-50

          flex
          items-center
          gap-2

          rounded-xl

          px-3
          py-2

          sm:px-4
          sm:py-2

          text-sm
          sm:text-base

          text-yellow-400

          border
          border-yellow-400/30

          bg-black/40

          backdrop-blur-md

          transition-all

          hover:bg-yellow-400/10
          hover:scale-105
        "
      >

        <ArrowLeft size={18}/>

        <span>
          Back
        </span>

      </Link>





      {/* GENERATE NEW */}

      <Link

        href="/ai-roadmap"

        className="
          inline-block

          mt-4

          text-yellow-500

          hover:underline
        "

      >

        Generate New Roadmap

      </Link>





      <RoadmapViewer
        roadmap={roadmap}
      />


    </div>

  );

}