import { Research } from "@/db/models/research.model";
import { connectDB } from "@/db/index";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Connect to MongoDB
    await connectDB();

    const url = new URL(request.url);
    const query = url.searchParams.get("q");
    if (query !== null) {
      const data = await Research.find({
        heading: { $regex: new RegExp(query) },
      });
      return NextResponse.json(data);
    }
    return NextResponse.json({});
  } catch (error) {
    return new Response(JSON.stringify({ error: "something went wrong" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
