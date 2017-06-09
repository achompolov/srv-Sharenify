const mongoose = require('mongoose')
const User     = mongoose.model('User')

exports.listUsers = function(req, res) {
  User.find({}, function(err, task) {
    if (err)
      res.send(err)
    res.json(task)
  })
}

exports.createUser = function(req, res) {
  var newUser = new User(req.body)
  newUser.save(function(err, user) {
    if (err)
      res.send(err)
    res.json(user)
  })
}

exports.deleteUser = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, task) {
    if (err)
      res.send(err)
    res.json({ message: 'User successfully deleted' })
  })
}

exports.updateUser = function(req, res) {
  User.findOneAndUpdate(req.params.userId, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err)
    res.json(user)
  })
}
