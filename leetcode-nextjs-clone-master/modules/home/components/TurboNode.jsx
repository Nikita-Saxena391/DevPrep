"use client";

import { Handle, Position } from "@xyflow/react";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { useState } from "react";


const TurboNode = ({ data }) => {

  const [completed, setCompleted] = useState(false);

  if (!data) return null;


  return (

    <div
      className={`
        w-[260px]
        sm:w-[340px]
        lg:w-[450px]

        min-h-[180px]
        sm:min-h-[220px]
        lg:min-h-[240px]

        rounded-3xl
        border

        p-4
        sm:p-6
        lg:p-8

        shadow-2xl

        transition-all
        duration-300

        hover:scale-105

        ${
          completed
          ? "bg-green-500/10 border-green-500"
          : "bg-card border-border"
        }
      `}
    >


      {/* TOP */}

      <div
        className="
        flex
        justify-between
        items-start
        gap-3
        "
      >


        <h3
          className="
          text-lg
          sm:text-2xl
          lg:text-3xl

          font-bold

          text-yellow-400

          leading-tight

          break-words
          "
        >
          {data.title}
        </h3>



        <button
          onClick={() => setCompleted(!completed)}
          className="shrink-0"
        >

          <CheckCircle2

            size={24}

            className={

              completed

              ? "text-green-500"

              : "text-muted-foreground"

            }

          />

        </button>


      </div>





      {/* DESCRIPTION */}

      <p
        className="
        mt-3
        sm:mt-5

        text-sm
        sm:text-base
        lg:text-lg

        text-muted-foreground

        leading-relaxed

        break-words
        "
      >

        {data.description}

      </p>







      {/* RESOURCE */}

      {
        data.link && (

          <a
            href={data.link}

            target="_blank"

            rel="noopener noreferrer"


            onClick={(e)=>e.stopPropagation()}


            className="
            mt-4
            sm:mt-6

            inline-flex

            items-center

            gap-2

            text-sm
            sm:text-base

            font-medium

            text-yellow-400

            hover:underline
            "
          >

            Learn Resource

            <ExternalLink
              size={16}
              className="sm:w-5 sm:h-5"
            />

          </a>

        )
      }







      {/* HANDLES */}


      <Handle

        type="target"

        position={Position.Top}

        className="
          !w-3
          !h-3

          sm:!w-4
          sm:!h-4

          !bg-yellow-400
        "

      />



      <Handle

        type="source"

        position={Position.Bottom}

        className="
          !w-3
          !h-3

          sm:!w-4
          sm:!h-4

          !bg-yellow-400
        "

      />



    </div>

  );
};


export default TurboNode;