const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post(
  "/process",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { amount } = req.body;

      // Validate the amount
      if (!amount || amount <= 0) {
        return res.status(400).json({ success: false, message: "Invalid amount" });
      }

      // Create a payment intent
      const myPayment = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd", // Change to a supported currency
        metadata: {
          company: "Laziz_Web",
        },
      });

      res.status(200).json({
        success: true,
        client_secret: myPayment.client_secret,
      });
    } catch (error) {
      // Log error and respond with a proper message
      console.error("Stripe Error:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  })
);

router.get(
  "/stripeapikey",
  catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({ stripeApikey: process.env.STRIPE_API_KEY });
  })
);


module.exports = router;