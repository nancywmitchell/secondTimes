const rp = require('request-promise')
const $ = require('cheerio')
const url = 'https://en.wikipedia.org/wiki/List_of_members_of_the_United_States_Senate'

let senators = []

async function getAges() {
    try {

    //use request-promise to get the html from the page
    let html = await rp(url)
    //console.log(html)

    //use css selectors to select the part of the page you want
    let array = $("span.fn", html).get()
    console.log(array[0].attribs)

    console.log("length is", array.length)
    //console.log("name is", array)
    //array = array.toArray()

    // let array2 = array.map(object => ({
    //         title: object.firstChild.attribs.title,
    //         brand: object.attribs['data-post-brand'],
    //         price: object.attribs['data-post-price'],
    //         size: object.attribs['data-post-size'],
    //         url: object.children[0].attribs.href
    //     })
    // )
    return array
    
    }
    catch(err) {
        console.log(err)
    }

}

getAges()
// getAges().then(value => console.log(value))