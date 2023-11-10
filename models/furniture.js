const mongoose = require("mongoose")
const furnitureSchema = mongoose.Schema({
    item_type: String,
    material: String,
    price: Number,
})
module.exports = mongoose.model("furniture", furnitureSchema)