const rp = require('request-promise')
const jsdom = require("jsdom")
const { JSDOM } = jsdom
const url = 'https://us.vestiairecollective.com/search/?q=gucci%20pumps%20green%207'

async function getStuff() {
    try {

    let html = await rp(url)
    //console.log(html)
    const dom = new JSDOM(html)
    const {document} = dom.window
    console.log(document)
    // console.log(document.baseURI)
    // console.log(document.getElementsByClassName("tile")[0])
    
    }
    catch(err) {
        console.log(err)
    }

}

getStuff()