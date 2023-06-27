const { Schema, model } = require('mongoose');//??
const assignmentSchema = require('./Assignment');//??

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 20
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Regular expression for email validation
    },
    thoughts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  });
  
const User = model('User', userSchema);

module.exports = User;
