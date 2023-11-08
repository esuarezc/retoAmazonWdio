import { $ } from '@wdio/globals'
import Page from './Page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class BuyAgainPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get addToCartButton1 () {
        return $("(//*[@name='submit.addToCart'])[1]");
    }
    
    public get addToCartButton2 () {
        return $("(//*[@name='submit.addToCart'])[2]");
    }

    public get addToCartButton3 () {
        return $("(//*[@name='submit.addToCart'])[6]");
    }

    public get CartButton () {
        return $("//*[@id='nav-cart']");
    }
    
}

export default new BuyAgainPage();