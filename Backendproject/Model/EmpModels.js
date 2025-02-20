const mongoose = require("mongoose");
const EmpSchema = new mongoose.Schema({
    name:String,
    empno:String,
    designation:String,
    city:String,
    salary:Number
})

module.exports = mongoose.model("Employeedatanew", EmpSchema)