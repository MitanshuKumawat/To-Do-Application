const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const schema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    completed:{type:Boolean}
});

const todo = mongoose.model("todo", schema);

module.exports = {todo};