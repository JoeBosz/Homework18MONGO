const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      max_length: 50,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
    type: Date,
    default: Date.now,
    },
   reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;

});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
