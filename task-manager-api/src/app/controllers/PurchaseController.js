const Task = require("../models/Task");
const User = require("../models/User");

class PurchaseController {
  async store(req, res) {
    const { task, content } = req.body;

    const purchaseTask = await Task.findById(task).populate("author");
    const user = await User.findById(req.userId);
  }
}

module.exports = new PurchaseController();
