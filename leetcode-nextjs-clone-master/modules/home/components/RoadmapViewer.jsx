"use client";

import RoadmapCanvas from "./RoadmapCanvas";
import { useRouter } from "next/navigation";


export default function RoadmapViewer({
  roadmap
}) {


const router = useRouter();



return (

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">


{/* INFO CARD */}

<div className="
rounded-2xl
border
bg-card
p-6
h-fit
">


<h2 className="
text-3xl
font-bold
text-primary
">
{roadmap.title}
</h2>


<p className="
mt-4
text-muted-foreground
">
{roadmap.description}
</p>


<div className="
mt-5
font-semibold
">
Duration:
<span className="ml-2 text-yellow-500">
{roadmap.duration}
</span>
</div>


<button

onClick={async()=>{

await fetch(
`/api/delete-roadmap/${roadmap.id}`,
{
method:"DELETE"
}
);

router.push("/ai-roadmap");

}}

className="
mt-6
bg-red-500
text-white
px-4
py-2
rounded-xl
"
>
Delete Roadmap
</button>


</div>



{/* FLOW CANVAS */}

<div
className="
md:col-span-2
h-[75vh]
rounded-2xl
border
overflow-hidden
"
>


<RoadmapCanvas

initialNodes={
roadmap.nodes
}

initialEdges={
roadmap.edges
}

/>


</div>


</div>

)

}