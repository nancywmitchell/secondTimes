const puppeteer = require('puppeteer')

const scrapePM = async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox']})
  const page = await browser.newPage()
  await page.goto('https://poshmark.com/search?query=maryam+nassir+zadeh+7')

  const scrapedData = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        ".tile"
      ))
      .map(item => ({
        title: item.children[1].children[0].innerText, 
        url: item.children[0].href,
        brand: item.children[1].children[2].innerText,
        price: item.children[1].children[1].innerText,
        size: item.children[1].children[2].children[0].innerText,
        imgSrc: item.children[0].children[0].src
      }))
    
  )

  await browser.close()
  return scrapedData
}

scrapePM().then(value => console.log(value))