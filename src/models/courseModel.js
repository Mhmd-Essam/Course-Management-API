const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please enter the title , the title is required"],
    },
    description: {
      type: String,
      required: [
        true,
        "please enter the description, the description is required ",
      ],
    },
    image: {
      type: String,
      default: "image.png",
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    price: {
      type: Number,
      required: [true, "the price is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
