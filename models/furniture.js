const { Double } = require("mongodb")
const mongoose = require("mongoose")
const furnitureSchema = mongoose.Schema({
    //item_type: String,
    //material: String,
    //price: Number,
    item_type: {
        type:String,
        required:true
        
    },
    material: {
        type:String,
        required:true
        
    },
    price: {
        type:Number,
        required:true,
        min: 0,
        max:100000
        
    },

})
module.exports = mongoose.model("furniture", furnitureSchema)