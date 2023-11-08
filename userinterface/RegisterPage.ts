import { $ } from '@wdio/globals'
import Page from './Page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get registerName () {
        return $("//*[@id='ap_customer_name']");
    }

    public get registerNumber () {
        return $("//*[@id='ap_email']");
    }

    public get registerPassword () {
        return $("//*[@id='ap_password']");
    }

    public get registerPasswordCheck () {
        return $("//*[@id='ap_password_check']");
    }

    public get btnContinue () {
        return $("//*[@id='continue']");
    }

    public get registerMessage () {
        return $("//*[@class='a-icon a-icon-logo']");
    }

    public get errorContainer () {
        return $$("//*[contains(text(),'Se requiere')]");
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new RegisterPage();
function $$(arg0: string) {
    throw new Error('Function not implemented.');
}

