const express = require("express");
const route = express.Router();
const EMpController = require("../Controller/EmpController")


route.post("/insert", EMpController.DataInsert);
route.get("/display", EMpController.DataDisplay);




module.exports = route;