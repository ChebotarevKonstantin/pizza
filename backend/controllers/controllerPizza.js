const Pizza = require('../models/Pizza')


module.exports.gets = async function (req, res) {
  try {
    const pizzas = await Pizza.find();
    if (!pizzas) {
      return res.status(404).json({
        success: false,
        message: 'Товаров нет!'
      })
    }
    return res.status(200).json(pizzas)
  } catch (e) {
    res.send({ message: "Server error" })
  }
}
