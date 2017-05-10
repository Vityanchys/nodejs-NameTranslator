const express = require('express');
const validator = require('validator');

var router = express.Router();


/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSearch(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';
  console.log(payload.name);
  if (!payload || typeof payload.name !== 'string' || payload.name === '') {
    isFormValid = false;
    errors.name = 'Укажите имя корректно!';
  }

  if (!isFormValid) {
    message = 'Ошибка запроса.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

router.post('/translate', (req, res, next) => {
  console.log(req.body);
  const validationResult = validateSearch(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
}
      console.log('Good validate! '+ req.body);
      return res.status(200).json({
      success: true,
});
})



router.get('/common', function(req, res, next) {
  // Comment out this line:
 //res.send('respond with a resource');

 // And insert something like this instead:
 res.json([{
     id: 1,
     username: "samsepi0l"
 }, {
     id: 2,
     username: "D0loresH4ze"
 }]);
});

module.exports = router;
