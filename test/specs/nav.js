import HomePage from "../pages/home-page.js"
import allureReporter from '@wdio/allure-reporter'

describe('Navigation menu', () => {
    it('Get the text of all menu items & assert them', async () => {
        allureReporter.addFeature('Navigation')
        allureReporter.addSeverity('critical')
        
        await HomePage.open() // Go to base url

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ]

        const actualLinks = []

        //const navLinks = await $('#zak-primary-menu').$$('li[id*=menu')

        const navLinks = await HomePage.NavComponent.linksNavMenu 

        for (const link of navLinks) {
            actualLinks.push(await link.getText())
        }

        await expect(expectedLinks).toEqual(actualLinks)



    })

    it('Get the text of all menu items & assert them - using wait commands', async () => {
        
        //browser.pause(5000) Hardcode wait
        
        await HomePage.open() // Go to base url

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ]

        const actualLinks = []

        //const navLinks = await $('#zak-primary-menu').$$('li[id*=menu')

        //wait until the Home text displayed on navigation menu
        await browser.waitUntil( async function() {
            const hometext = await HomePage.NavComponent.firstNavMenuList.getText() //Home
            return hometext === 'Home' //true or false
        }, {
            timeout: 5000,
            timeoutMsg: 'Could not verfiy the Home text from #zak-primary-menu li'
        })

        await $('#menu-item-489').waitForClickable()

        await $('#zak-primary-menu').waitForDisplayed({ timeout: 1000})

        const navLinks = await HomePage.NavComponent.linksNavMenu

        for (const link of navLinks) {
            actualLinks.push(await link.getText())
        }

        await expect(actualLinks).toEqual(expectedLinks)



    })
})