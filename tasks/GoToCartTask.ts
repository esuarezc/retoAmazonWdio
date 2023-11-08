import {BuyAgainPage} from "../userinterface/BuyAgainPage";

export class GoToCartTask extends BuyAgainPage {

    public async selectCartOption (){
        await this.CartButton.click();
    }

}