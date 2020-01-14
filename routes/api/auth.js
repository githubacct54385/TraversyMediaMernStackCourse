const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const auth = require("../../middleware/auth");

// @route       GET api/auth
// @desc        Test route
// @access      Public
router.get("/", auth, async (req, res) => {
  try {
    // get the user without the password
    const user = await User.findById(req.user.id).select("-password");

    // return the user
    res.json(user);
  } catch (err) {
    // return a 500
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
