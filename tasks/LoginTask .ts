import {LoginPage} from "../userinterface/LoginPage";

export class LoginTask extends LoginPage {
    

    public async logIn (){

        const email = process.env.EMAIL
        const password = process.env.PASSWORD

        await this.email.setValue(email);
        await this.continueBtn.click();
        await this.password.setValue(password);
        await this.signInBtn.click()
        
    }

    public async getText (){

        return await this.regard.getText();
        
    }

}
