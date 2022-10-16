const express = require("express");
const passport =require( "passport");
const {
  getAdminStats,
  getAdminUsers,
  logout,
  myProfile,
} =("../controllers/user.js");
const { authorizeAdmin, isAuthenticated } =require("../middlewares/auth.js");

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/login",
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_URL,
  })
);

router.get("/me", isAuthenticated, myProfile);

router.get("/logout", logout);

// Admin Routes
router.get("/admin/users", isAuthenticated, authorizeAdmin, getAdminUsers);

router.get("/admin/stats", isAuthenticated, authorizeAdmin, getAdminStats);

export default router;