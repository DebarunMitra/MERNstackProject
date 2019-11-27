const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  adhaarNo: {
    type: Number,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = UserProfile = mongoose.model("userprofile", UserProfileSchema);
