import {BuyAgainPage} from "../userinterface/BuyAgainPage";

export class ShoppingTask extends BuyAgainPage {
    
    public async addProducts (){
        await this.addToCartButton1.click();
        await this.addToCartButton2.click();
        //await this.addToCartButton3.click();
    }

}