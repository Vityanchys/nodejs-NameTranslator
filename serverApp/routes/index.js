const express = require('express');
const router = express.Router();
const wdk = require('wikidata-sdk');
const cheerio = require('cheerio');
const request = require('request');

var search = require('./search');

router.use('/search', search);
/*
/* GET home page.
router.get('/', function(req, res, next) {



let titles = 'John';
const sites = [];
const languages = ['en', 'ru'];
const props = ['labels'];
const format = 'json';

const url = wdk.getWikidataIdsFromWikipediaTitles(titles, sites, languages, props, format);
  console.log(url);

request
    .get(url)
    .on('response', function(response) {
    var info = response.json;
        console.log(response.headers['content-type']); // 'image/png'
  })

*/
module.exports = router;
