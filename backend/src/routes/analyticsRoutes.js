const router = require("express").Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getCountryAnalytics,
} = require("../controllers/analyticsController");

router.get(
  "/country",
  authMiddleware,
  getCountryAnalytics
);

module.exports = router;
