import Page from '../builder';
import CreditCardForm from '../pages/CreditCardForm';

describe('Credit card form test:', () => {
    let page;
    let creditCardForm;

    before(async () => {
        page = await Page.build('Desktop');
        creditCardForm = await new CreditCardForm(page);
    })
    after(async function () {
        await page.close();
    })

    it('should go to form page', async () => {
        await page.goto('https://buy.chilternrailways.co.uk/');

        await creditCardForm.selectFromStation();
        await creditCardForm.selectToStation();
        await creditCardForm.clickSearchAndBuy();
        
        await page.waitFor(2000);
        await creditCardForm.clickQuickBuyCTA();
        await creditCardForm.loginScreen();
        await page.waitFor(2000);
        // await creditCardForm.creditCardDropdown();


        console.log('waiting for iframe with form to be ready.');

        await page.isElementVisible('iframe');
        console.log('iframe is ready. Loading iframe content');
        const elementHandle = await page.waitForSelector("iframe[id='payment-form']");
        const frame = await elementHandle.contentFrame();

        console.log('filling form in iframe');
        await page.waitFor(6000);
        
        
        // const cardType = await frame.$x(`//div[contains(@class, 'css-12kbcej')]//select[@data-elid="card-type"]`);
        // await page.waitForXPathAndClick('//div[contains(@class, "css-12kbcej")]//select[@data-elid="card-type"]');


        // page.switch_to_frame("iframe[id='payment-form']");



        // const elements = await page.$x('//div[contains(@class, "css-12kbcej")]//select[@data-elid="card-type"]')
        // await elements[0].click(); 
        
        // await page.waitFor(2000);

    });

});
