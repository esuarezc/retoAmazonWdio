import {expect as assert} from 'chai';
import {expect} from 'chai';
import { RegisterPage } from '../userinterface/RegisterPage';

export class Assertions extends RegisterPage{

    public async validateTitlePage(msn:string){
        try {
            await expect(msn).to.equal(await browser.getTitle())
        } catch (error) {
            console.log("No se obtuvo la pagina esperada")
            throw new Error(`Error getting the information: ${error.message}`
        )}
    }
    
    public async validateMessage(expecteMsn:string, obtainedMsn:string){
        await expect(expecteMsn).to.equal(obtainedMsn)
    }
    
    public async validateProductsAmount(obtainedAmount:string){
        var amount = await parseInt(obtainedAmount)
        await expect(amount).to.be.equal(3)
    }

    public async validateSubtotal(obtainedSubtotal:string, calculateSubTotal:string){
        var subTotal = await parseFloat(obtainedSubtotal)
        await expect(calculateSubTotal.toString()).to.equal(subTotal.toString())
    }
}