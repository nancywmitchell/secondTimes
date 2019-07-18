const puppeteer = require('puppeteer')

const scrapeVC = async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox']})
  const page = await browser.newPage()
  await page.goto('https://us.vestiairecollective.com/search/?q=gucci%20pumps%20green%207')

  const scrapedData = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        ".productSnippet__infos"
      )
    )
    .map(item => ({
        title: item.children[2].innerText, 
        // url: item.children[0].href,
        brand: item.children[1].innerText,
        // price: item.children[1].children[1].innerText,
        // size: item.children[1].children[2].children[0].innerText,
        // imgSrc: item.children[0].children[0].src
      }))
  )

  await browser.close()
  return scrapedData
}

scrapeVC().then(value => console.log(value))

//document.querySelectorAll('.productSnippet a')