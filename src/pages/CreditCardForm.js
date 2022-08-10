import { expect } from "chai";

export default class CreditCardForm {
    constructor(page) {
        this.page = page;
    }


    async selectFromStation() {

        await this.page.waitForXPathAndClick("//span[contains(text(),'From')]");
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

    }


    async selectToStation() {

        await this.page.waitForXPathAndClick("//span[contains(text(),'To')]");
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

    }

    async clickSearchAndBuy() {
        await this.page.waitForXPathAndClick("//button[contains(text(),'Search and Buy')]");

    }

    async clickQuickBuyCTA() {
        await this.page.isXPathVisible("//span[contains(text(),'Total to pay:')]");
        await this.page.waitForXPathAndClick("//button[contains(text(),'Quick buy')]")
    }

    async loginScreen() {
        await this.page.waitAndType("#login-form > div:nth-child(1) > input", "shadowwalker563@gmail.com")
        await this.page.waitAndType("#login-form > div:nth-child(2) > input", "Pa55w0rd!");
        await this.page.waitForXPathAndClick("//button[contains(text(),'Log in')]");
    }

    async creditCardDropdown() {
        await this.page.waitFor(2000);

        console.log('waiting for iframe with form to be ready.');
        await this.page.isElementVisible('iframe');
        console.log('iframe is ready. Loading iframe content');

        const elementHandle = await this.page.$("iframe[id='payment-form']");
        const frame = await elementHandle.contentFrame();
        // filling form in iframe
        console.log('filling form in iframe');

        const cardType = await frame.$('[data-elid="card-type"]');
        await cardType.type('Amer');































        await this.page.scrollToBottom(page);
        await this.page.waitFor(3000);
        await this.page.waitAndClick("#root > div > div.css-16nplrt > form > div > div:nth-child(1) > div > div > div > select");

        const selector = "//#root > div > div.css-16nplrt > form > div > div:nth-child(1) > div > div > div > select";

        // scroll selector into view
        await this.page.evaluate(selector => {
            const element = document.querySelector(selector);
            if ( element ) {
                element.scrollTop = element.offsetHeight;
                console.error(`Scrolled to selector ${selector}`);
            } else {
                console.error(`cannot find selector ${selector}`);
            }
        }, selector);

    }

}