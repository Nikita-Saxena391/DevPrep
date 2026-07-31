import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req) {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const data = await req.json();

    const problem = await db.problem.create({
      data: {
        title: data.title,
        description: data.description,
        difficulty: data.difficulty,
        tags: data.tags,
        examples: data.examples,
        constraints: data.constraints,
        testCases: data.testCases,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: problem,
      },
      {
        status: 201,
      }
    );

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to create problem",
      },
      {
        status: 500,
      }
    );
  }
}