const { Product } = require("../models");

class ProductRepository {
  static async list() {
    const list = await Product.findAll();
    return list;
  }
}

module.exports = ProductRepository;
