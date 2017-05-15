const express = require('express');
const router = express.Router();
const wdk = require('wikidata-sdk');
const request = require('request');


function wikiData(name) {
  let titles = name;
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
}
