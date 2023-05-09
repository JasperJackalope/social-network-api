// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const reactionSchema = new Schema({
//   reactionId: {
//     type: Schema.Types.ObjectId,
//     default: () => new mongoose.Types.ObjectId(),
//   },
//   reactionBody: {
//     type: String,
//     required: true,
//     maxlength: 280,
//   },
//   username: {
//     type: String,
//     required: true,
//     ref: 'User', // add a reference to the User model
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => new Date(timestamp).toISOString(),
//   },
// });

// const Reaction = mongoose.model('Reaction', reactionSchema);

// module.exports = Reaction;