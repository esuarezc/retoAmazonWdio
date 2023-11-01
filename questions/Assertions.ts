import {expect as assert} from 'chai';
import {expect} from 'chai';
import { LoginPage } from '../userinterface/login.page';

export class Assertions extends LoginPage{

    public async validateText(msn:string){
        //console.log(this.registerMessage.getText())
        await expect(msn).to.equal(await browser.getTitle())
    }
    

}