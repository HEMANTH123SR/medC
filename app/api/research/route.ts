import { connectDB } from "@/db/index";
import { Research } from "@/db/models/research.model";
export async function GET() {
  try {
    await connectDB();
    const researches = await Research.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(researches), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "something went wrong" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
