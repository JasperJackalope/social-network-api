const {Schema, model} = require("mongoose");

// Define the user schema with the required fields
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // Regex pattern for email validation
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Your email was Wrong,please enter a valid email address",]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    ]
}, {
    // Include virtual properties when calling toJSON
    toJSON: {
        virtuals: true,
        getters: true
    },
    // Exclude the id field from the returned object
    id: false
});

// Add a virtual property to count the number of friends
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

// Create the User model using the userSchema
const User = model("User", userSchema);

// Export the User model
module.exports = User;
