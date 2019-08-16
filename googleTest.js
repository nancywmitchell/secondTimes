const puppeteer = require('puppeteer')

const getComments = async () => {
  const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--unlimited-storage', '--full-memory-crash-report']})
  const page = await browser.newPage()
  

  try {

    // this is how to handle the error so you won't get the unhandled promise rejection warning
    // no idea how to actually make the page not crash, though
    page.on('error', msg => {
        console.log('error is ', msg)
      })

    // await page.goto('https://www.reddit.com/r/thebachelor/comments/cn6sv7/bip_s6e02_postepisode_discussion_thread/')
    await page.goto('https://www.google.com/')

    let scrapedData = await page.evaluate(() =>
    Array.from(
    //   document.querySelectorAll(
    //     ".commentarea p:not(.parent):not(.tagline)"
    //   )
      document.querySelectorAll(
        "a"
      )
    )
    .map(item => (item.innerText))
  )

  await browser.close()
  return scrapedData

    }

    catch(err) {
        console.log(err)
    }
}

getComments().then(comments => console.log(comments))