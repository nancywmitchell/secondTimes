const rp = require('request-promise')
const $ = require('cheerio')
const url = 'https://us.vestiairecollective.com/search/?q=gucci%20pumps%20green%207'
const fs = require('fs')

let stuff = []

async function getStuff() {
    try {

    let html = await rp(url)
    console.log(html)
    fs.writeFileSync('./VC.html', html)
    let array = $(".productSnippet__infos", html).get()
    console.log(array[0].children[2].innerText)

    //console.log(array.isArray())
    //array = array.toArray()

    // let array2 = array.map(object => ({
    //         title: object.firstChild.attribs.title,
    //         brand: object.attribs['data-post-brand'],
    //         price: object.attribs['data-post-price'],
    //         size: object.attribs['data-post-size'],
    //         url: object.children[0].attribs.href
    //     })
    // )
    // return array2
    
    }
    catch(err) {
        console.log(err)
    }

}

getStuff()
//getStuff().then(value => console.log(value))