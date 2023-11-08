import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import {LoginPage} from '../userinterface/LoginPage';
import { Assertions } from '../questions/Assertions';
import {HomePage} from '../userinterface/HomePage';
import {ChooseOptionTask} from '../tasks/ChooseOptionTask';
import { LoginTask } from '../tasks/LoginTask ';


const assertion = new Assertions();
const chooseOptionTask = new ChooseOptionTask();
const homePage = new HomePage();
const loginTask = new LoginTask();


Given("que el usuario selecciono el login luego de ingresar a la pagina principal de Amazon", async () => {
    await homePage.open() 
    await chooseOptionTask.selectListOptions() 
});


When("inicia sesion con los datos correspondientes", async () => {
    await loginTask.logIn()
    
});

Then("visualizara el saludo personalizado de Amazon", async () => {
    let obtainedText = await loginTask.getText();
    await assertion.validateMessage("Hola Tatiana", await obtainedText);
});

function Y(arg0: string, arg1: () => Promise<void>) {
    throw new Error('Function not implemented.');
}

