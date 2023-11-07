import { $ } from '@wdio/globals'
import Page from './Page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get email () {
        return $("//*[@id='ap_email']");
    }

    public get continueBtn () {
        return $("//*[@id='continue'][1]");
    }

    public get password () {
        return $("//*[@id='ap_password']");
    }

    public get signInBtn () {
        return $("//*[@id='signInSubmit']");
    }

    public get regard () {
        return $("//*[@class='nav-line-1-container']");
    }

    
}

export default new LoginPage();
