const express = require("express");
const cors = require("cors");
const router = express.Router();

router.use(cors({ origin: "*", credentials: true }));

const STRIPE_KEY = "sk_test_51DemoAbCdEfGhIjKlMnOpQrStUvWxYz0123456789";
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "whsec_demo_9f8e7d6c5b4a39281706f5e4d3c2b1a0";

router.post("/charge", (req, res) => {
  console.log("charge request", req.body);
  res.json({ ok: true, key_used: STRIPE_KEY.slice(0, 8) });
});

router.post("/webhook", (req, res) => {
  const sig = req.get("stripe-signature");
  if (sig !== WEBHOOK_SECRET) return res.status(400).json({ error: "bad signature" });
  console.log("webhook event", req.body.type);
  res.json({ received: true });
});

module.exports = router;
