import { waitForClickable } from "webdriverio/build/commands/element";
import {RegisterPage} from "../userinterface/RegisterPage";
import { faker } from "@faker-js/faker";
import { browser } from '@wdio/globals'

export class RegisterTask extends RegisterPage {

    public async crearCuenta (){

        const password = faker.internet.password().concat("*")
        await this.registerName.setValue(faker.person.firstName().concat(" ").concat(faker.person.lastName()));
        await this.registerNumber.setValue(faker.internet.email());
        await this.registerPassword.setValue(password);
        await this.registerPasswordCheck.setValue(password);
        await this.btnContinue.click();
    }

    public async getTitle (){

        return browser.getTitle();
    }

}
