const rp = require('request-promise')
const $ = require('cheerio')

// we need to make this into a function that will accept things like brand, description, size
// the url will need to look something like this: 
// const url = 'https://poshmark.com/search?query=gucci+pumps+green+7'

module.exports = async function poshmark(brand, description, size) {
    // it needs to take in the brand, description, and size and replace any spaces in the 
    // descriptions with pluses
    // sounds like a job for a regular expression

    const url = `https://poshmark.com/search?query=${brand}+${description}`
    console.log('url is ', url)

    async function getStuff() {
        try {

        let html = await rp(url)
        // console.log(html)
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

    // getStuff().then(value => console.log(value))

    let data = await getStuff()
    return data

}