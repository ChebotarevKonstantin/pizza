const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pizzaSchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, unique: true, required: true },
  price: { type: Number, required: true },
  picture: {type: String}
})

module.exports = mongoose.model('Pizza', pizzaSchema)
