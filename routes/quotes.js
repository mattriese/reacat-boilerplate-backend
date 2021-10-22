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

router.get('/', function sendQuotes(req, res) {
  return res.json({ quotes });
});

router.post('/', function updateQuotes(req, res) {
  quotes.unshift(req.body.newQuote);
  console.log('POST req.body ===', req.body);
  // console.log('PATCH req ===', req);
  return res.json({ quotes });
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
