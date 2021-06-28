'use strict';

var _builder = require('../builder');

var _builder2 = _interopRequireDefault(_builder);

var _CreditCardForm = require('../pages/CreditCardForm');

var _CreditCardForm2 = _interopRequireDefault(_CreditCardForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Credit card form test:', function () {
        var page = void 0;
        var creditCardForm = void 0;

        before(async function () {
                page = await _builder2.default.build('Desktop');
                creditCardForm = await new _CreditCardForm2.default(page);
        });
        after(async function () {
                await page.close();
        });

        it('should go to form page', async function () {
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

                // await page.isElementVisible('iframe');
                // console.log('iframe is ready. Loading iframe content');
                // const elementHandle = await page.waitForSelector("iframe[id='payment-form']");
                // const frame = await elementHandle.contentFrame();

                // console.log('filling form in iframe');
                // await page.waitFor(6000);


                // const cardType = await frame.$x(`//div[contains(@class, 'css-12kbcej')]//select[@data-elid="card-type"]`);
                // await page.waitForXPathAndClick('//div[contains(@class, "css-12kbcej")]//select[@data-elid="card-type"]');


                // page.switch_to_frame("iframe[id='payment-form']");


                // const elements = await page.$x('//div[contains(@class, "css-12kbcej")]//select[@data-elid="card-type"]')
                // await elements[0].click(); 

                // await page.waitFor(2000);
        });
});