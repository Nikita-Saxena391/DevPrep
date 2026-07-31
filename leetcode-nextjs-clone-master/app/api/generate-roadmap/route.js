import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";


const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


export async function POST(req) {

  try {

    const { role, level, duration } = await req.json();


    if(!role){
      return NextResponse.json(
        {error:"Role is required"},
        {status:400}
      );
    }


    // Get logged in user
    const clerkUser = await currentUser();


    if(!clerkUser){
      return NextResponse.json(
        {error:"Unauthorized"},
        {status:401}
      );
    }


   const user = await db.user.findUnique({
  where:{
    clerkId: clerkUser.id
  }
});


    if(!user){
      return NextResponse.json(
        {error:"User not found"},
        {status:404}
      );
    }



    const prompt = `

You are an AI career roadmap generator.

Create a learning roadmap for:

Role:
${role}

Experience:
${level}

Duration:
${duration}


Return ONLY valid JSON.

Format:

{
"title":"",
"description":"",
"duration":"",
"nodes":[
{
"id":"1",
"data":{
"title":"",
"description":"",
"link":""
}
}
],

"edges":[
{
"id":"e1",
"source":"1",
"target":"2"
}
]
}


Rules:

- Generate 10-12 nodes.
- Flow from beginner to advanced.
- Each node must have unique id.
- Edges must connect existing nodes.
- Add useful documentation links.
- No markdown.
- No explanation.

`;



    const completion =
      await groq.chat.completions.create({

        model:"llama-3.1-8b-instant",

        messages:[
          {
            role:"user",
            content:prompt
          }
        ]

      });



    let response =
      completion
      .choices[0]
      .message
      .content;



    response=response
    .replace(/```json/g,"")
    .replace(/```/g,"")
    .trim();



    const roadmapJSON =
      JSON.parse(response);



    const savedRoadmap =
      await db.roadmap.create({

        data:{

          title:
          roadmapJSON.title || role,


          description:
          roadmapJSON.description,


          duration:
          roadmapJSON.duration || duration,


          nodes:
          roadmapJSON.nodes,


          edges:
          roadmapJSON.edges,


          userId:
          user.id

        }

      });



    return NextResponse.json({

      id:savedRoadmap.id

    });



  }
 catch(error){

  console.error(
    "ROADMAP ERROR:",
    error.message
  );


 
    return NextResponse.json(
      {
        error:"Failed to generate roadmap"
      },
      {
        status:500
      }
    );

  }

}