var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.post('/juggling-balls-answer', function (req, res) {
  // make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']
// check
  if (jugglingBalls == "3 or More") {
    //send to next pages
    res.redirect('/juggling-trick')
  } else {
    res.redirect('/ineligible')
  }
})

module.exports = router
