const bcrypt = require("bcryptjs");
const User = require('../models/User');

exports.post_login = async function(req, res, next){
  email = req.body.email.toLowerCase();
  password = req.body.password

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        res.status(404).json({ 
          message: "Email or Password is incorrect",
          success: false
        });
      }else {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            res.status(200).json({ 
              message: "Successfully logged in", 
              success: true
            });
          } else {
            res.status(404).json({
              message: 'Email or Password is incorrect',
              success: false
            })
          }
        })
      }
    }).catch(() => {
      res.status(404).json({
        message: 'Error Invalid Credentials',
        success: false
      })
    })
}

exports.post_register = (req, res, next) => {
  var body = req.body

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email.toLowerCase();
  var password = req.body.password;

  const newUser = new User({
    firstName,
    lastName,
    email,
    password
  })

  User.findOne({ email: email }) 
    .then(user => {
      if (!user) {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash
            newUser.save().then(() => {
              res.status(200).json({
                message: "Successfully registered", 
                success: true
              })
              console.log("I passed jackpot!")
            }).catch((error) => {
              return res.status(404).send('Error registering')
            });
          });
        })
      }else {
        return res.status(200).json({
          success: false,
          message: "There's a user registered with this email already"
        })
      }
    });
}

exports.post_forgot_password = async function(req, res, next){

}

exports.post_reset_password = async function(req, res, next){

}