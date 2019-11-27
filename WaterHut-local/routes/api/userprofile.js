const express = require("express");
const router = express.Router();
const UserProfile = require("../../models/UserProfile");
const User = require("../../models/User");
const auth = require("../../middleware/auth");

//@route  GET api/userprofile/me
//@desctiption Get current user's profile
//@access Public

router.get("/me", auth, async (req, res) => {
  try {
    const userprofile = await UserProfile.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]);
    if (!userprofile) {
      return res.status(400).json({ msg: "User profile not found" });
    }
    res.json(userprofile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
