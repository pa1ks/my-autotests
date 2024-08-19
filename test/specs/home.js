// Practice E-Commerce Site – SDET Unicorns
// https://practice.sdetunicorns.com/

import HomePage from '../pages/home-page.js'

describe('Home', () => {

    before(async () => {
        console.log('THIS COULD BE USED FOR TEST SETUP')
    })

    beforeEach(async () => {
        console.log('THIS RUNS BEFORE EACH TEST')

        // Open Home page
        await HomePage.open()
    })

    after(async () => {
        console.log('THIS COULD BE USED FOR TEST CLEANUP')
    })

    afterEach(async () => {
        console.log('THIS RUNS AFTER EACH TEST')
    })

    it('Open URL & assert title', async () => {
        //Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })

    it('Open About & assert URL', async () => {
        // Open About page
        await browser.url('https://practice.sdetunicorns.com/about/')

        //Assert URL
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/')
    })

    it('Click Get Started button & assert URL contains get started text', async () => {
        //Click get started button

        //await $('#get-started').click()
        await HomePage.btnGetStarted.click()

        //Assert URL contains get started text
        //await expect(browser).toHaveUrlContaining('get-started')

        expect(browser).toHaveUrl(expect.stringContaining('get-started'))
    })

    it('Click on logo button & assert URL doesnt contains get started text', async () => {
        // Open get started page
        await browser.url('https://practice.sdetunicorns.com/#get-started')

        //Click on logo

        //await $('//img[@alt="Practice E-Commerce Site"]').click()
        await HomePage.imageLogo.click()

        //Assert URL doesnt contains get started text
        //await expect(browser).not.toHaveUrlContaining('get-started')
        expect(browser).toHaveUrl(expect.not.stringContaining('get-started'))
    })

    it('Find heading element & assert the text', async () => {
        // Open get started page
        await browser.url('https://practice.sdetunicorns.com/#get-started')

        //Find heading element
        const headingElement = await HomePage.txtHeading

        //get the text
        const headingText = await headingElement.getText()

        //Assert the text
        //await expect(headingText).toEqual('Think different. Make different.')
        await expect(headingElement).toHaveText('Think different. Make different.')
    })

    
})

