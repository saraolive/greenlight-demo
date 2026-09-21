const express = require("express");
const cors = require("cors");
const router = express.Router();

router.use(cors({ origin: "*", credentials: true }));

const STRIPE_KEY = "sk_test_51DemoAbCdEfGhIjKlMnOpQrStUvWxYz0123456789";

router.post("/charge", (req, res) => {
  console.log("charge request", req.body);
  res.json({ ok: true, key_used: STRIPE_KEY.slice(0, 8) });
});

module.exports = router;
