const { Schema } = require("mongoose");
//npm install bcryptjs jsonwebtoken cookie-parser

// You'll use:

// bcryptjs → hash passwords
// jsonwebtoken → create JWT tokens
// cookie-parser → read cookies

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

module.exports = { UserSchema };

