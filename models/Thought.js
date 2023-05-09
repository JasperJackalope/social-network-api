// Require Mongoose package
const {Schema, model, Types} = require("mongoose");
// Require date format module
const dateFormat = require("../utils/dateFormat");

// Define Mongoose schema for a reaction
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(), // Generates new ID for each reaction
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal), // Format date when reading data
      },
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

// Define Mongoose schema for a thought
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal), // Format date when reading data
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema], // Embed reactions in thoughts
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false, // Exclude "id" virtual field
    }
  );

// Define virtual property "reactionCount" for thought schema
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });
  
// Create "Thought" model based on "thoughtSchema" and export it
const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
