import { Research } from "@/db/models/research.model";
import { connectDB } from "@/db/index";

export async function POST(request: Request) {
  try {
    // Connect to MongoDB
    await connectDB();

    const { userId, userName, userImage, heading, description, fileUrl } =
      await request.json();

    console.log(request.json());
    const newResearch = new Research({
      userId,
      userName,
      userImage,
      heading,
      description,
      fileUrl,
    });

    const savedResearch = await newResearch.save();

    return new Response(JSON.stringify(savedResearch), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
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
