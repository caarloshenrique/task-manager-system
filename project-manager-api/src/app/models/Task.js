const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const Task = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  estimate: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

Task.plugin(mongoosePaginate);

module.exports = mongoose.model("Task", Task);
