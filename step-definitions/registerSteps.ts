import { Given, When, Then } from '@wdio/cucumber-framework';
import { RegisterTask } from '../tasks/RegisterTask';
import { Assertions } from '../questions/Assertions';
import {HomePage} from '../userinterface/HomePage';
import {ChooseOptionTask} from '../tasks/ChooseOptionTask';
import { $$ } from 'webdriverio/build/commands/browser';

const registerTask = new RegisterTask();
const assertion = new Assertions();
const chooseOptionTask = new ChooseOptionTask();
const homePage = new HomePage();


Given("que el usuario ingreso a la pagina de registro de Amazon", async () => {
    await homePage.openRegisterPage() 
});

When("se registra con sus datos personales", async () => {
    await registerTask.createAccount()
});

Then("vera la pagina de validacion de identidad", async () => {
    const obtainedMsn = await registerTask.getTitle();
    await assertion.validateMessage("Confirma tu identidad", obtainedMsn);
});

When(/^se registra con una contraseña (.*)$/, async (errorType) => {
    await registerTask.createWrongAccount(errorType)
});

Then("no podra avanzar a la pagina de validacion de identidad", async () => {
    await assertion.validateTitlePage("Registro de Amazon")
});

function Y(arg0: string, arg1: () => Promise<void>) {
    throw new Error('Function not implemented.');
}

