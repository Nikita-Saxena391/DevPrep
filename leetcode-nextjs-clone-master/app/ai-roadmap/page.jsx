"use client";

import {
  useEffect,
  useRef,
  useState
} from "react";

import {
  useRouter
} from "next/navigation";

import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";


import {
  Route,
  Sparkles,
  Brain,
  Code2,
  Target,
  Rocket
} from "lucide-react";


gsap.registerPlugin(ScrollTrigger);



const goals=[
  "Job Preparation",
  "Interview Prep",
  "DSA Mastery",
  "Full Stack"
];


const stacks=[
  "MERN Stack",
  "Java Backend",
  "AI Engineer",
  "Data Science",
  "DevOps",
];


const skills=[
 "React",
 "Java",
 "DSA",
 "AI",
 "Spring",
 "SQL"
];



const features=[
{
 icon:<Brain/>,
 title:"AI Learning Path",
 desc:"Personalized roadmap from beginner to advanced."
},

{
 icon:<Code2/>,
 title:"Project Guidance",
 desc:"Industry based project recommendations."
},

{
 icon:<Target/>,
 title:"Interview Ready",
 desc:"DSA and interview preparation."
}

];





export default function AiRoadmapPage(){


const router=useRouter();


const pageRef=useRef(null);

const heroRef=useRef(null);

const cardRef=useRef(null);

const orbitRef=useRef([]);

const featureRef=useRef([]);



const [role,setRole]=useState("");

const [goal,setGoal]=useState(
"Job Preparation"
);

const [stack,setStack]=useState(
"MERN Stack"
);

const [level,setLevel]=useState(
"Beginner"
);

const [duration,setDuration]=useState(
"6 Months"
);


const [loading,setLoading]=useState(false);







useEffect(()=>{


const ctx=gsap.context(()=>{



// HERO TEXT

gsap.from(
heroRef.current.children,
{
 opacity:0,
 y:80,
 stagger:.15,
 duration:1,
 ease:"power4.out"
}
);




// FORM CARD 3D

gsap.from(
cardRef.current,
{
 opacity:0,
 y:100,
 rotateX:40,
 scale:.8,
 duration:1.2,
 delay:.4,
 ease:"back.out(1.7)"
}
);





// ORBITING SKILLS


orbitRef.current.forEach(
(item,index)=>{


gsap.to(
item,
{
 rotation:360,
 duration:10+index,
 repeat:-1,
 ease:"none"
}
);



gsap.to(
item,
{
 y:index%2===0?30:-30,
 duration:2+index,
 repeat:-1,
 yoyo:true,
 ease:"sine.inOut"
}
);



});






// FEATURES

gsap.from(
featureRef.current,
{

scrollTrigger:{
 trigger:featureRef.current[0],
 start:"top 85%"
},

opacity:0,
y:80,
stagger:.2,
duration:1,
ease:"power3.out"

}

);



},pageRef);



return ()=>ctx.revert();



},[]);








const generateRoadmap=async()=>{


if(!role.trim()){

alert(
"Please enter role"
);

return;

}



try{


setLoading(true);



const res=await fetch(
"/api/generate-roadmap",
{

method:"POST",

headers:{
"Content-Type":
"application/json"
},


body:JSON.stringify({

role,


level,

duration

})

}

);



const data=
await res.json();



if(!res.ok){

throw new Error(
data.error
);

}



router.push(
`/roadmap/${data.id}`
);



}

catch(err){

alert(
err.message
);

}

finally{

setLoading(false);

}


};








return (

<div

ref={pageRef}

className="
relative
min-h-screen
overflow-hidden

px-4
sm:px-6

pt-24

"

>





{/* BACKGROUND GLOW */}


<div
className="
absolute
top-20
left-1/2
-translate-x-1/2

w-[500px]
h-[500px]

bg-yellow-400/20

blur-[120px]

rounded-full

"
/>








{/* FLOATING SKILLS */}


{
skills.map(
(skill,index)=>(


<div

key={skill}

ref={
el=>orbitRef.current[index]=el
}


className={`

hidden
lg:flex


absolute

items-center
justify-center


w-24
h-24


rounded-full


border

border-yellow-400/30


bg-black/20


backdrop-blur-xl


text-yellow-400


font-semibold


${

index===0
?"top-40 left-20"

:index===1
?"top-52 right-32"

:index===2
?"bottom-40 left-32"

:index===3
?"bottom-52 right-24"

:index===4
?"top-96 left-1/2"

:"top-32 right-1/2"

}

`}

>

{skill}


</div>


)

)

}










<div

className="
relative
z-10

max-w-5xl

mx-auto

"

>




{/* HERO */}






<div className="fixed top-5 left-5 z-[100] flex gap-3">

  <button
    onClick={() => router.push("/")}
    className="
      flex items-center gap-2
      rounded-xl
      border border-yellow-400/30
      bg-black/40
      backdrop-blur-md
      px-4 py-2
      text-yellow-400
      hover:bg-yellow-400/10
      transition-all
    "
  >
    ← Home
  </button>

  <button
    onClick={() => router.push("/roadmap/history")}
    className="
      flex items-center gap-2
      rounded-xl
      border border-purple-500/30
      bg-black/40
      backdrop-blur-md
      px-4 py-2
      text-purple-400
      hover:bg-purple-500/10
      transition-all
    "
  >
    📜 History
  </button>

</div>
<div

ref={heroRef}

className="
text-center
"

>


<h1

className="
text-3xl
sm:text-4xl
lg:text-5xl
font-extrabold
bg-gradient-to-r
from-yellow-400
via-orange-400
to-purple-500
bg-clip-text
text-transparent
leading-tight
"

>
Roadmap Generator
</h1>



<p

className="

mt-5

text-muted-foreground

text-base
sm:text-lg

max-w-xl

mx-auto

"

>

From beginner fundamentals to advanced projects,
get a roadmap designed around your career goals.

</p>


</div>










{/* FORM */}


<div

ref={cardRef}

className="

max-w-xl

mx-auto


mt-12


rounded-3xl


border


bg-card/80


backdrop-blur-xl


p-5
sm:p-8


shadow-2xl


"

>






<input

value={role}

onChange={
e=>setRole(e.target.value)
}


placeholder="
Example: Full Stack Developer
"


className="

w-full

rounded-xl

border

px-4
py-3

bg-background

"

/>






<h3 className="mt-6 font-bold">
Choose Goal
</h3>


<div

className="
grid

grid-cols-2

gap-3

mt-3

"

>


{
goals.map(item=>(

<button

key={item}

onClick={()=>
setGoal(item)
}


className={`

rounded-xl

border

p-3

text-sm

transition


${
goal===item
?
"border-yellow-400 text-yellow-400 bg-yellow-400/10"
:
"hover:bg-muted"
}

`}

>

{item}


</button>

))

}


</div>








<h3 className="mt-6 font-bold">
Technology
</h3>


<div

className="
grid

grid-cols-2

sm:grid-cols-3

gap-3

mt-3

"

>


{
stacks.map(item=>(


<button

key={item}

onClick={()=>
setStack(item)
}

className={`

rounded-xl

border

p-3

text-sm


${
stack===item
?
"border-yellow-400 text-yellow-400"
:
""
}

`}

>


{item}


</button>


))

}


</div>








<div

className="
grid

sm:grid-cols-2

gap-4

mt-6

"

>


<select

value={level}

onChange={
e=>setLevel(e.target.value)
}

className="
rounded-xl
border
p-3
bg-background
"

>

<option>
Beginner
</option>

<option>
Intermediate
</option>

<option>
Advanced
</option>


</select>





<select

value={duration}

onChange={
e=>setDuration(e.target.value)
}


className="
rounded-xl
border
p-3
bg-background
"

>

<option>
3 Months
</option>

<option>
6 Months
</option>

<option>
1 Year
</option>


</select>


</div>









<button


onClick={generateRoadmap}


disabled={loading}


className="

mt-6

w-full

flex

items-center

justify-center

gap-2


rounded-xl


py-3


font-bold


bg-gradient-to-r

from-yellow-400

to-orange-500


text-black


hover:scale-105


transition


"


>





{

loading

?

<>

<Sparkles className="animate-spin"/>

Creating Roadmap...

</>


:

<>

<Route/>

Generate Roadmap

</>

}



</button>







</div>


















</div>


</div>


);


}