const { Brand } = require("../models/models");
const ApiError = require("../error/apiError");

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json({ brand });
  }

  async getAll(req, res) {
    const result = await Brand.findAll();

    return res.json(result);
  }
  async delete(req, res) {
    const { id } = req.query;
    const brand = await Brand.findByPk(id);
    if (brand) {
      await brand.destroy();
      return res.json({ message: `Brand with id=${id} deleted successfully!` });
    } else {
      return res.json({ message: `There's no brand with id=${id}` });
    }
  }
}

module.exports = new BrandController();
