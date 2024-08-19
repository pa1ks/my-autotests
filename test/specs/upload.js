import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Определение __filename и __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('Upload tests ', () => {
    it('Simple upload test', async () => {
        // Open url
        await browser.url('https://the-internet.herokuapp.com/upload')

        // store test file path
        const filePath = path.join(__dirname, '../data/logotitle.png') // C:\Project\my-autotests\test\data\logotitle.png

        // upload test file to the browser
        const remoteFilePath = await browser.uploadFile(filePath)

        // set my file path value in the input field
        await $('#file-upload').setValue(remoteFilePath)
        await $('#file-submit').click() // click the submit button

        //asertion
        await expect($('h3')).toHaveText('File Uploaded!')



    })

    it('Upload on a hidden input field', async () => {
        // Open url
        await browser.url('/cart/')

        // store test file path
        const filePath = path.join(__dirname, '../data/logotitle.png') // C:\Project\my-autotests\test\data\logotitle.png

        // upload test file to the browser
        const remoteFilePath = await browser.uploadFile(filePath)

        //Remove  hidden class

        await browser.execute("document.querySelector('#upfile_1').className = ''")

        // set my file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath)
        await $('#upload_1').click() // click the submit button

        //asertion
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully')



       



    })
})