const User = require("../modules/user");


exports.addUser = async (req, res, next) => {
  const name = req.body.name;


    const user = new User({
      name: name,
    });
    await user.save();
    res
      .status(200)
      .json({ message: "created", user: user });
  

};



