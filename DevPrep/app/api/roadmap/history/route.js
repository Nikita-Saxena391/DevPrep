import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const user = await db.user.findUnique({
    where: {
      clerkId: clerkUser.id,
    },
  });

  if (!user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  const roadmaps = await db.roadmap.findMany({
    where: {
      userId: user.id, // ✅ Database User ID
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(roadmaps);
}