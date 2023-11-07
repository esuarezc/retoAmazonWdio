import { $ } from '@wdio/globals'
import Page from './Page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get homeOption () {
        return $("//*[@class='nav-a nav-a-2   nav-progressive-attribute']");
    }

    public get registerOption () {
        return $("//*[@id='nav-flyout-ya-newCust']/a");
    }

    public get loginOption () {
        return $("//*[@class='nav-action-inner']");
    }

    public get amazonLog () {
        return $("//*[@id='nav-logo-sprites']");
    }

    
}

export default new HomePage();
