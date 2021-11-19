
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('"Draw button" displays choices', async () => {
    let drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    await driver.sleep(2000)

    let choicesDiv = await driver.findElement(By.id('choices'))
    let displayedChoices = await choicesDiv.isDisplayed()
    expect(displayedChoices).toBe(true)
})

test('"Add to Duo" button adds bots to Duo', async () => {
    let drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    await driver.sleep(2000)

    let firstBotButton = await driver.findElement(By.xpath('//div/button'))
    await firstBotButton.click()
    await driver.sleep(2000)

    let playerCard = await driver.findElement(By.id('player-duo'))
    let displayedCard = await playerCard.isDisplayed()
    expect(displayedCard).toBe(true)

})