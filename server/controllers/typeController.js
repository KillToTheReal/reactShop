const { Type } = require("../models/models");
const ApiError = require("../error/apiError");
class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json({ type });
  }

  async getAll(req, res) {
    const result = await Type.findAll();

    return res.json(result);
  }

  async delete(req, res) {
    const { id } = req.query;
    const type = await Type.findByPk(id);
    if (type) {
      await type.destroy();
      return res.json({ message: `Type with id=${id} deleted successfully!` });
    } else {
      return res.json({ message: `There's no type with id=${id}` });
    }
  }
}

module.exports = new TypeController();
