import express from 'express';
const validator = require('validator');
import wdk from 'wikidata-sdk';
import request from 'request';



export default (search) => {
  return new Promise(async (resolve, reject) => {
    let titles = search.name;

    const sites = [];
    const languages = ['en', 'ru', 'de', 'pl', 'ua', 'by'];
    const props = ['labels'];
    const format = 'json';
    try {
    let url = wdk.getWikidataIdsFromWikipediaTitles(titles, sites, languages, props, format);
    console.log(url);

    let body = parseSearchUrl(url, function(result){
      let data = JSON.parse(result);
      let my_props='';
      for(let props in data.entities){
        if(/^Q[0-9]+/.test(props)) my_props=props;
      }

      let dataParse = data.entities[my_props].labels;
    })
    resolve(dataParse);

    } catch (error) {
      reject(error);
    }
    });


}
