"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chai = require("chai");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreditCardForm = function () {
    function CreditCardForm(page) {
        _classCallCheck(this, CreditCardForm);

        this.page = page;
    }

    _createClass(CreditCardForm, [{
        key: "selectFromStation",
        value: async function selectFromStation() {

            await this.page.waitForXPathAndClick("//span[contains(text(),'From')]");
            await this.page.keyboard.press('ArrowDown');
            await this.page.keyboard.press('Enter');
        }
    }, {
        key: "selectToStation",
        value: async function selectToStation() {

            await this.page.waitForXPathAndClick("//span[contains(text(),'To')]");
            await this.page.keyboard.press('ArrowDown');
            await this.page.keyboard.press('ArrowDown');
            await this.page.keyboard.press('Enter');
        }
    }, {
        key: "clickSearchAndBuy",
        value: async function clickSearchAndBuy() {
            await this.page.waitForXPathAndClick("//button[contains(text(),'Search and Buy')]");
        }
    }, {
        key: "clickQuickBuyCTA",
        value: async function clickQuickBuyCTA() {
            await this.page.isXPathVisible("//span[contains(text(),'Total to pay:')]");
            await this.page.waitForXPathAndClick("//button[contains(text(),'Quick buy')]");
        }
    }, {
        key: "loginScreen",
        value: async function loginScreen() {
            await this.page.waitAndType("#login-form > div:nth-child(1) > input", "shadowwalker563@gmail.com");
            await this.page.waitAndType("#login-form > div:nth-child(2) > input", "Pa55w0rd!");
            await this.page.waitForXPathAndClick("//button[contains(text(),'Log in')]");
        }
    }, {
        key: "creditCardDropdown",
        value: async function creditCardDropdown() {
            await this.page.waitFor(2000);

            console.log('waiting for iframe with form to be ready.');
            await this.page.isElementVisible('iframe');
            console.log('iframe is ready. Loading iframe content');

            var elementHandle = await this.page.$("iframe[id='payment-form']");
            var frame = await elementHandle.contentFrame();
            // filling form in iframe
            console.log('filling form in iframe');

            var cardType = await frame.$('[data-elid="card-type"]');
            await cardType.type('Amer');

            // await this.page.scrollToBottom(page);
            // await this.page.waitFor(3000);
            // await this.page.waitAndClick("#root > div > div.css-16nplrt > form > div > div:nth-child(1) > div > div > div > select");

            // const selector = "//#root > div > div.css-16nplrt > form > div > div:nth-child(1) > div > div > div > select";

            // // scroll selector into view
            // await this.page.evaluate(selector => {
            //     const element = document.querySelector(selector);
            //     if ( element ) {
            //         element.scrollTop = element.offsetHeight;
            //         console.error(`Scrolled to selector ${selector}`);
            //     } else {
            //         console.error(`cannot find selector ${selector}`);
            //     }
            // }, selector);
        }
    }]);

    return CreditCardForm;
}();

exports.default = CreditCardForm;