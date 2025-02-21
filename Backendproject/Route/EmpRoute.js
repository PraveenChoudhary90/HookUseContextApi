const express = require("express");
const route = express.Router();
const EmpController = require("../Controller/EmpController") 

route.post("/insert", EmpController.Insertdata)
route.get("/display", EmpController.Displaydata)
route.post("/search", EmpController.Searchdata)
route.get("/Displaydata", EmpController.UpdateDisplaydata)
route.post("/delete", EmpController.Deletedata);
route.post("/Finddata", EmpController.Finddata)
route.post("/Editdatasave", EmpController.Editsavadata)


module.exports = route;