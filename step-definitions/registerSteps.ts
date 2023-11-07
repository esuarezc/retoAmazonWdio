import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../userinterface/RegisterPage';
import Page from '../userinterface/Page';
import { RegisterTask } from '../tasks/RegisterTask';
import { Assertions } from '../questions/Assertions';
import {HomePage} from '../userinterface/HomePage';
import {ChooseOptionTask} from '../tasks/ChooseOptionTask';
import RegisterPage from '../userinterface/RegisterPage';

const registerTask = new RegisterTask();
const assertion = new Assertions();
const chooseOptionTask = new ChooseOptionTask();
const homePage = new HomePage();


Given("que el usuario ingreso a la pagina de registro de Amazon", async () => {
    await homePage.openRegisterPage() 
});

When("se registra con sus datos personales", async () => {
    await registerTask.crearCuenta()
});

Then("vera la pagina de validacion de identidad", async () => {
    const obtainedMsn = registerTask.getTitle();
    await assertion.validateMessage("Confirma tu identidad", obtainedMsn);
});

function Y(arg0: string, arg1: () => Promise<void>) {
    throw new Error('Function not implemented.');
}

