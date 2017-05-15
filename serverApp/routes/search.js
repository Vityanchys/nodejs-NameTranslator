const express = require('express');
const validator = require('validator');
const wdk = require('wikidata-sdk');
const request = require('request');

let router = express.Router();

let wiki = require('../module/wiki');

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

function parseSearchUrl(url, callback) {
  request(url, function(error, response, body) {
    //  var info = response.jsonText;
      return callback(body);
      //console.log(info);
      //console.log(response.headers['x-client-ip']);
})
}

function wikiData(search, callback) {
try{
  let titles = search.name;
  const sites = [];
  const languages = ['en', 'ru'];
  const props = ['labels'];
  const format = 'json';

    let url = wdk.getWikidataIdsFromWikipediaTitles(titles, sites, languages, props, format);
      console.log(url);

      let body = parseSearchUrl(url, function(result){
        console.log('b:', result);

      return callback({
          response: true,
          result: result
      });
    });

  } catch(e){
    return console.log('Err' + e);
  }
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

      console.log('Good validate! Respon is '+ req.body.name);
      let wikiDataResult = wikiData(req.body, function(result){
        console.log(result);


      return res.status(200).json({
      success: true,
      body: result,
        });
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
