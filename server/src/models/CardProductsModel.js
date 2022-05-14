const monggose = require("mongoose"); // use library mongoose
const Schema = monggose.Schema; // use Schema of mongoose

// init Schema CardProduct
const CardProduct = Schema({
    nameCard: {
        type: String,
        require: true,
    },
    imgCard: {
        type: String,
        require: true,
        trim: true,
    },
    descriptionCard: {
        type: String,
        require: true,
    },
    Price: {
        type: Number,
        require: true
    },
    vote: {
        type: Number,
    },

});

module.exports = monggose.model('cardsProduct', CardProduct)
