describe('IFrame', () => {
    it('Working with iframe', async () => {
        //Open URL
        await browser.url('/iframe-sample/')

        // acces the iframe

        const iframe = await $('#advanced_iframe')
        await browser.switchToFrame(iframe)

        // verfiy logo exist
        // await expect($('//img[@alt = "Automated testing"]')).toExist() By Xpath

        await expect($('img[alt="Automated testing"]')).toExist()

        //switch to parent frame
        await browser.switchToParentFrame()

        // verify page title
        await expect($('h1.zak-page-title')).toHaveText("IFrame Sample")



    })
})