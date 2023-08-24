const {Schema, model} = require('mongoose');
const ThoughtSchema = require('./thought');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'Username is required',
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: 'Email is required',
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [ThoughtSchema],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
  }
  ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

const User = model('User', UserSchema);

model.exports = User;