import {expect as assert} from 'chai';
import {expect} from 'chai';
import { RegisterPage } from '../userinterface/RegisterPage';

export class Assertions extends RegisterPage{

    public async validateMessage(expecteMsn:string, obtainedMsn:string){
        await expect(expecteMsn).to.equal(obtainedMsn)
    }
    
}