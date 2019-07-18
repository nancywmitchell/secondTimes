const rp = require('request-promise')
const $ = require('cheerio')
const url = 'https://poshmark.com/search?query=gucci+pumps+green+7'

//const express = require('express')
//const app = express()

// rp(url)
//   .then(function(html){
//     //success!
//     console.log($(".tile", html)[5]);
//   })
//   .catch(function(err){
//     //handle error
//   })

//app.get()

let stuff = []

async function getStuff() {
    try {

    let html = await rp(url)
    console.log(html)
    let array = $(".tile", html).get()
    //console.log(array[0].children[0])

    //console.log(array.isArray())
    //array = array.toArray()

    let array2 = array.map(object => ({
            title: object.firstChild.attribs.title,
            brand: object.attribs['data-post-brand'],
            price: object.attribs['data-post-price'],
            size: object.attribs['data-post-size'],
            url: object.children[0].attribs.href
        })
    )
    return array2
    
    }
    catch(err) {
        console.log(err)
    }

}


getStuff().then(value => console.log(value))