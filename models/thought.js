const {Schema, model} = require('mongoose');
const reactionSchema = require('./reactions');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'Thought is required',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query
      get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: 'Username is required'
    },
    // Use ReplySchema to validate data for a reply
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true
    }
  }
);

model.exports = thoughtSchema;