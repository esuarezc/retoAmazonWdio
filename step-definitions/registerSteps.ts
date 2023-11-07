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

Given("que el usuario ingreso a la pagina de registro de Amazon", async () => {
    await LoginPage.open() 
});

When("se registra con sus datos personales", async () => {
    await registroTask.crearCuenta()
});

Then("vera la pagina de validacion de identidad", async () => {
    await assertion.validateText("Confirma tu identidad");
});
