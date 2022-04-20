const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio');
const PORT = 8000

const app = express()
axios("https://www.theguardian.com")
    .then(resp => {
        const html = resp.data
        const $ = cheerio.load(html)
        const articles = []

        $('.fc-item__title', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({ title, url })
        })
        console.log(articles)
    }).catch(err => console.log(err))


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))