import Link from "next/link";
import { Route } from "lucide-react";

export default function RoadmapFeature(){

return (

<section className="py-24 px-6">

<div
className="
max-w-5xl mx-auto
rounded-3xl
border
bg-card
p-10
text-center
shadow-xl
"
>

<h2 className="
text-4xl
font-bold
">
Build Your AI Career Roadmap 🚀
</h2>


<p className="
mt-4
text-muted-foreground
max-w-xl
mx-auto
">
Generate a personalized roadmap based on your target role,
skills, and experience level.
</p>


<Link href="/ai-roadmap">

<button
className="
mt-8
px-8
py-3
rounded-xl
bg-gradient-to-r
from-blue-500
to-purple-600
text-white
font-semibold
flex
gap-2
mx-auto
"
>

<Route/>
Generate Roadmap

</button>

</Link>


</div>

</section>

)

}