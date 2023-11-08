import {BuyAgainPage} from "../userinterface/BuyAgainPage";

export class ShoppingTask extends BuyAgainPage {
    
    public async addProducts (){
        let numberElements: number = 0
        var index = 0
        let addToCartButton = await this.addToCartButtonList
        while(numberElements<3){
            if(await addToCartButton[index].isEnabled()){
                try {
                    await addToCartButton[index].click()
                    numberElements++
                } catch (error:any) {
                    console.log(error.message)
                }
            }
            index++
        }    
    }

    public async deleteProducts (){
        var index = 0
        let deleteButtons = await this.deleteBtnList
        if(!(await this.productsNumber.getText()==="0")){
            
        }
          
    }

}