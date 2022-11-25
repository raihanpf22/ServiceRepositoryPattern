const productService = require("../services/ProductService");

const findAll = async (req, res) => {
  console.log("Contorller masuk")
  const { status_code, message } = await productService.list();
  console.log(status_code)
  console.log(message);

  res.status(200).send({
    status:status_code,
    message:message
  });
};

module.exports = { findAll };
