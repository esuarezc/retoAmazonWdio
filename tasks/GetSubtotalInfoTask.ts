import {CartPage} from "../userinterface/CartPage";

export class GetSubtotalInfoTask extends CartPage {

    public async getProductsAmount (){
        let message = await this.subtotalText.getText();
        return message.substring(10, 11);
    }

    public async getSubTotal (){
        let message = await this.priceSubTotal.getText();
        return message.substring(3, message.length+1);
    }

    public async calculateSubTotal (){
        let priceProduct1 = await this.price1.getText();
        let priceProduct2 = await this.price2.getText();
        let priceProduct3 = await this.price3.getText();
        let calculateSubTotal = parseFloat(priceProduct1.substring(3, priceProduct1.length+1)) + parseFloat(priceProduct2.substring(3, priceProduct2.length+1))
        + parseFloat(priceProduct3.substring(3, priceProduct2.length+1));
        return calculateSubTotal.toFixed(2);
    }


}