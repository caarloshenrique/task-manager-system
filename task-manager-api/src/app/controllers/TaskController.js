const Task = require("../models/Task");

class TaskController {
  async index(req, res) {
    const filters = {};

    const tasks = await Task.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      populate: ["author"],
      sort: "-createdAt"
    });

    return res.json(tasks);
  }

  async show(req, res) {
    const task = await Task.findById(req.params.id);

    return res.json(task);
  }

  async store(req, res) {
    const task = await Task.create({ ...req.body, author: req.userId });

    return res.json(task);
  }

  async update(req, res) {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(task);
  }

  async destroy(req, res) {
    await Task.findByIdAndDelete(req.params.id);

    return res.send();
  }
}

module.exports = new TaskController();
