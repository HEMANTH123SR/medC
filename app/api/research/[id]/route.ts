import { connectDB } from "@/db/index";
import { Research } from "@/db/models/research.model";
export async function GET(request: Request) {
  try {
    await connectDB();
    const url = new URL(request.url);
    const id = url.pathname.split("/")[3];
    console.log(id);
    const researches = await Research.findById({ _id: id });
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
