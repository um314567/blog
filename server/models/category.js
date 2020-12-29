import mongoose from "mongoose";

// Create Schema
const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    default: "미분류",
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

const Category = mongoose.model("category", categorySchema);

export default Category;
