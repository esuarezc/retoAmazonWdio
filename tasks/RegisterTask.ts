import { waitForClickable } from "webdriverio/build/commands/element";
import {RegisterPage} from "../userinterface/RegisterPage";
import { faker } from "@faker-js/faker";

export class RegisterTask extends RegisterPage {

    public async createAccount (){

        //const password = faker.internet.password().substring(0,11).concat("*")
        const password = Math.random().toString(12)
        await this.registerName.setValue(faker.person.firstName().concat(" ").concat(faker.person.lastName()));
        await this.registerNumber.setValue(faker.internet.email());
        await this.registerPassword.setValue(password);
        await this.registerPasswordCheck.setValue(password);
        await this.btnContinue.click();
    }

    public async createWrongAccount (errorType:string){
        let password = ""
        if(errorType==="sin el numero de caracteres requeridos"){
            password = "Amazon0711*023".substring(0,11)
        }else if(errorType==="sin un caracter especial") 
        { password = "Amazon0711023".substring(0,12)}
           
    
        await this.registerName.setValue(faker.person.firstName().concat(" ").concat(faker.person.lastName()));
        await this.registerNumber.setValue(faker.internet.email());
        await this.registerPassword.setValue(password);
        await this.registerPasswordCheck.setValue(password);
        await this.btnContinue.click();
    }

    public async getTitle (){

        return await browser.getTitle();
    }

}
function ifelse(arg0: boolean) {
    throw new Error("Function not implemented.");
}

