const { Schema, model } = require('mongoose');//??
const assignmentSchema = require('./Assignment');//??

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    assignments: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
