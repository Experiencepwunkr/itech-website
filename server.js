// server.js
import express from "express";
import fetch from "node-fetch";   // install with: npm install express node-fetch
import dotenv from "dotenv";      // install with: npm install dotenv

dotenv.config();
const app = express();
app.use(express.json());

app.post("/api/pay", async (req, res) => {
  try {
    const { email, amount } = req.body;

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Paystack works in kobo (₦1000 = 100000)
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Payment initialization failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
