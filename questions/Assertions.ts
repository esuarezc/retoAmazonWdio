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
}