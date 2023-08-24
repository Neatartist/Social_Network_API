const {Schema, model} = require('mongoose');

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent thought _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: 'Reaction is required',
      maxlength: 280
    },
    username: {
      type: String,
      required: 'Username is required'
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;
