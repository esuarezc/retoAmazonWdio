import { waitForClickable } from "webdriverio/build/commands/element";
import {LoginPage} from "../userinterface/login.page";
import { faker } from "@faker-js/faker";

export class RegistroTask extends LoginPage {

    public async crearCuenta (){

        const password = faker.internet.password().concat("*")
        await this.registerName.setValue(faker.person.firstName());
        await this.registerNumber.setValue(faker.internet.email());
        await this.registerPassword.setValue(password);
        await this.registerPasswordCheck.setValue(password);
        await this.btnContinue.click();
}


}
