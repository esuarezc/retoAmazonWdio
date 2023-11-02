import { waitForClickable } from "webdriverio/build/commands/element";
import {LoginPage} from "../userinterface/login.page";
import axios from 'axios';


export class RegistroTask extends LoginPage {

    public async crearCuenta (name:string, numberPhone:string, password:string){

        await this.registerName.setValue(name);
        await this.registerNumber.setValue(numberPhone);
        await this.registerPassword.setValue(password);
        await this.registerPasswordCheck.setValue(password);
        await this.btnContinue.click();
}

public async getResult():Promise<any>{

    let url = "https://jsonplaceholder.typicode.com/posts/"

    let response = await axios.get(url)
        .catch((error: {message: any; response: any;}) =>{
            throw new Error(`Error getting the information: ${error.message}`)
        })
        return response.data[0].title;
}

public async crearPost():Promise<any>{

    let url = "https://jsonplaceholder.typicode.com/posts/"

    const payload:any ={
        title: "Nuevo Post",
        body:"Este es un post de prueba 2",
        author:"bootcamp automatización 2"
    }

    let response = await axios.post(url, payload)
        .catch((error: {message: any; response: any;}) =>{
            throw new Error(`Error creating post: ${error.message}`)
        })
        return response.data[0].title;
}


}
