import mongoose from "mongoose";

const ResearchSchema = new mongoose.Schema(
  {
    userId: {
      required: true,
      type: String,
    },
    userName: {
      required: true,
      type: String,
    },
    userImage: {
      required: true,
      type: String,
    },
    heading: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    fileUrl: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export const Research =
  mongoose.models.Research || mongoose.model("Research", ResearchSchema);

// mongoose.model.Research ||
