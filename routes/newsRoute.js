const express = require("express")
const NewsAPI = require('newsapi');
const router = new express()

module.exports = router

API_KEY = process.env.NEWS_API_KEY
const newsapi = new NewsAPI(API_KEY);

router.get("/getNews", (req, res) => {
    newsapi.v2.everything({
        q: 'bitcoin',
        from: '2022-10-23',
        to: '2022-10-24',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
      }).then(response => {
        console.log(response);
        res.send(response)
      });
})