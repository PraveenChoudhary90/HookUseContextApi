const UserModel = require("../Model/UserModel");
const ProfileModel = require("../Model/ProfileModel");

const DataInsert = async (req, res) => {
  const { username, email, firstname, lastname } = req.body;
  const User = await UserModel.create({
    username: username,
    email: email,
  });

  const Profile = await ProfileModel.create({
    firstname: firstname,
    lastname: lastname,
    userid: User._id,
  });
  console.log(Profile);
  res.send("kkkk");
};

const DataDisplay = async (req, res) => {
  console.log("okkkk");
  const mydata = await ProfileModel.find().populate("userid");
  res.send(mydata);
};

module.exports = {
  DataInsert,
  DataDisplay,
};
