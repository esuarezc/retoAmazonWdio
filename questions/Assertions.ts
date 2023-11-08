import {expect as assert} from 'chai';
import {expect} from 'chai';
import { RegisterPage } from '../userinterface/RegisterPage';

export class Assertions extends RegisterPage{

    public async validateMessage(expecteMsn:string, obtainedMsn:string){
        await expect(expecteMsn).to.equal(obtainedMsn)
    }
    
    public async validateProductsAmount(obtainedAmount:string){
        var amount = await parseInt(obtainedAmount)
        await expect(amount).to.be.above(2)
    }

    public async validateSubtotal(obtainedSubtotal:string, calculateSubTotal:Number){
        var subTotal = await parseFloat(obtainedSubtotal)
        await expect(calculateSubTotal).to.equal(subTotal)
    }
}