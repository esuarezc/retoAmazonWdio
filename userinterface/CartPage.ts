import { $ } from '@wdio/globals'
import Page from './Page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get price1 () {
        return $("(//*[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold'])[1]");
    }

    public get price2 () {
        return $("(//*[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold'])[2]");
    }

    public get price3 () {
        return $("(//*[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold'])[3]");
    }

    public get priceSubTotal () {
        return $("(//*[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap'])[2]");
    }
    

    public get subtotalText () {
        return $("//*[@id='sc-subtotal-label-activecart']");
    }
    
}

export default new CartPage();