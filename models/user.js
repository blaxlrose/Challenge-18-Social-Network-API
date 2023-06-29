// const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
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
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  });
  
  

  userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', userSchema);

module.exports = User;
