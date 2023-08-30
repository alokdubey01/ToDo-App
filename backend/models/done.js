const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    date: {
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        required:true,
        default:false
    }
})

module.exports = new mongoose.model('Done',todoSchema)