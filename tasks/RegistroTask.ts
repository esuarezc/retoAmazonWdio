import { waitForClickable } from "webdriverio/build/commands/element";
import {LoginPage} from "../userinterface/login.page";


export class RegistroTask extends LoginPage {

    public async crearCuenta (name:string, numberPhone:string, password:string){

        await this.registerName.setValue(name);
        await this.registerNumber.setValue(numberPhone);
        await this.registerPassword.setValue(password);
        await this.registerPasswordCheck.setValue(password);
        (await this.btnContinue).moveTo();
        await this.btnContinue.click;
}


}
