const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
"sk_test_51LbcLVIfko2Bv7cqETjrREQCqYDcyMmfNnMGVOM4aE27iOqFBfCU41v39DG4LgWTQosKBSvvH2mxxFOFjI2iwnIS00rW7HOKGr"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async(request, response) =>{
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subumits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});



exports.api = functions.https.onRequest(app);


// (http://localhost:5001/snit-37e48/us-central1/api)