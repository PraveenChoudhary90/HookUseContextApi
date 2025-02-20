
const EmpModel = require("../Model/EmpModels");

const Insertdata =async (req,res)=>{
    const {name,empno, designation , city,salary}= req.body;
    const mydata = await EmpModel.create({
        name:name,
        empno:empno,
        designation:designation,
        city:city,
        salary:salary
    })
    console.log("data is okk");
    res.send(mydata);

}


const Displaydata = async(req,res)=>{
    const display = await EmpModel.find();
    res.send(display)
    console.log("Data is okk")

}

const Searchdata =async (req,res)=>{
    const {empno} = req.body;
    const search = await EmpModel.find({empno:empno});
    console.log("data is okk");
    res.send(search);
}

const UpdateDisplaydata = async(req,res)=>{
    const update = await EmpModel.find();
    res.send(update);
    console.log("data okk data");
}

const Deletedata = async(req,res)=>{
    const {id}= req.body;
    const deletedata = await EmpModel.findByIdAndDelete(id);
    console.log("data delete");
    res.send(deletedata)
}

module.exports = {
    Insertdata,
    Displaydata,
    Searchdata,
    UpdateDisplaydata,
    Deletedata
}