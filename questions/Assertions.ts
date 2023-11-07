import {expect as assert} from 'chai';
import {expect} from 'chai';
import { LoginPage } from '../userinterface/login.page';

export class Assertions extends LoginPage{

    public async validateText(msn:string){
        await expect(msn).to.equal(await browser.getTitle())
    }
    

}