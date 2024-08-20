import ContactPage from "../pages/contact-page"
import { faker } from '@faker-js/faker'

describe('Contact page', () => {
    it('Fill all input fields, press submit button & assert the succes message', async () => {
        await ContactPage.open()

        /*await ContactPage.inputName.addValue('Pavlo')

        // addValue - add text in to the input field
        // setValue - clear input field and after add text

        await ContactPage.inputEmail.addValue('test@test.com')

        await ContactPage.inputPhone.addValue('+6666666666')

        await ContactPage.inputMsg.addValue('Message')

        // Printing elements out
        // console.log(await $('#evf-submit-27'))

        // Pause
        // browser.pause(5000)

        // Debug
        //await browser.debug()

        await ContactPage.btnSubmit.click()*/

        //await ContactPage.submitForm('Pavlo', 'test@test.com', '+6666666666', 'Message')
        await ContactPage.submitForm(faker.person.firstName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraphs(2))

        const successAlert = ContactPage.successMsg
        
        await expect(successAlert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly')



    })
})