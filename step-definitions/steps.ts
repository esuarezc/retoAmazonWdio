import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../userinterface/login.page';
import Page from '../userinterface/page';
import { RegistroTask } from '../tasks/RegistroTask';
import { Assertions } from '../questions/Assertions';

const registroTask = new RegistroTask();
const assertion = new Assertions();

const pages = {
    login: LoginPage
}

Given("que el usuario ingresa al login", async () => {
    await LoginPage.open() 
});

When("se registra con sus datos {string} {string} {string}", async (name, phoneNumber, password) => {
    await registroTask.crearCuenta(name, phoneNumber, password)
});

Then("vera la pagina de validacion de identidad {string}", async (message) => {
    await assertion.validateText(message);
});

Given("que el usuario consulta la informacion", async () => {
    let response = await registroTask.getResult();

});

When("crea un nuevo post", async () => {
    let response = await registroTask.crearPost();
    
});
