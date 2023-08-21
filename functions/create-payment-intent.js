const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping, total_amount } = JSON.parse(event.body);
    const calculateOrderTotals = () => {
      return (shipping + total_amount) * 100 ;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderTotals(),
        currency: "inr",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "create payment",
  };
};
