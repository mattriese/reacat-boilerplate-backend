const express = require("express");
const router = express.Router();

const quotes = [
  'Great Scott!',
  'If you put your mind to it, you can achieve anything.',
  '1.21 Gigawats!',
  'May the force be with you.',
  'This is heavy, Doc.',
  "There's a rythmic ceremonial ritual coming up!",
];
/** GET request route returns list of all quotes */
router.get('/', function sendQuotes(req, res) {
  // If this was a real database query, this would be wrapped in a try/catch
  return res.json({ quotes });
});

/** POST request route takes a string and returns that string after prepending it to quotes array. */
router.post('/', function updateQuotes(req, res) {
  const newQuote = req.body.newQuote;
  // If this was a real database query, this would be wrapped in a try/catch
  quotes.unshift(newQuote);
  console.log('POST req.body ===', req.body);
  // console.log('PATCH req ===', req);
  return res.json({ savedQuote: newQuote });
});

module.exports = router;

// /** GET / => [item, ...] */

// router.get("", (req, res, next) => {
//   return res.json({ items: Item.findAll() });
// });

// /** POST / {name, price} => new-item */

// router.post("", (req, res, next) => {
//   let newItem = new Item(req.body.name, req.body.price);
//   return res.json({ item: newItem });
// });
