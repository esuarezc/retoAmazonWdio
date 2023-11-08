import {HomePage} from "../userinterface/HomePage";

export class ChooseOptionTask extends HomePage {
    
    public async selectListOptions (){
        if(!(await this.homeOption.isDisplayed())){
            await this.amazonLog.click()
        }
        await this.homeOption.click();
    }

    public async selectBuyAgainOption (){
        await this.buyAgainOption.click();
    }

}
