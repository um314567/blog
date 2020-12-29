import Mongoose from "mongoose";
import moment from "moment";

const ComponentSchema = new mongoose.Schema({
  contents: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Component = mongoose.model("component", ComponentSchema);

export default Comment;
