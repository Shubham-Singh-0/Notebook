const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    tag:{
        type: String,
       default: "General"
       
    },
    discription:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default : Date.now
    },

});

module.exports = mongoose.model('User', NotesSchema);