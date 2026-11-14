let express = require('express');
let router = express.Router();

// ADD: car listings array, sample cars
let listings = [
  { make: 'Toyota', model: 'Corolla', year: 2018, mileage: 85000, price: 14500, condition: 'Good', location: 'Oshawa, ON' },
  { make: 'Honda', model: 'Civic', year: 2020, mileage: 42000, price: 21900, condition: 'Excellent', location: 'Whitby, ON' },
  { make: 'Ford', model: 'F-150', year: 2015, mileage: 160000, price: 17000, condition: 'Fair', location: 'Ajax, ON' }
];

/* GET home page. */                                        // ← your existing route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wheel Trader', listings: listings });  // ← CHANGE: add listings: listings
});

// ADD: GET list_car page - shows the form
router.get('/list_car', function(req, res, next) {
  res.render('list_car', { title: 'Sell Your Car' });
});

// ADD: POST list_car page - saves the form (external code, cited in README)
router.post('/list_car', function(req, res, next) {
  let newCar = {
    make: req.body.make,
    model: req.body.model,
    year: parseInt(req.body.year),
    mileage: parseInt(req.body.mileage),
    price: parseFloat(req.body.price),
    condition: req.body.condition,
    location: req.body.location
  };
  listings.push(newCar);
  res.redirect('/');
});

module.exports = router;                                     // ← existing, keep at the bottom