import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import {LoginPage} from '../userinterface/LoginPage';
import { Assertions } from '../questions/Assertions';
import {HomePage} from '../userinterface/HomePage';
import {ChooseOptionTask} from '../tasks/ChooseOptionTask';
import { LoginTask } from '../tasks/LoginTask ';
import { ShoppingTask } from '../tasks/ShoppingTask';
import {BuyAgainPage} from '../userinterface/BuyAgainPage';
import { GoToCartTask } from '../tasks/GoToCartTask';
import { GetSubtotalInfoTask } from '../tasks/GetSubtotalInfoTask';


const assertion = new Assertions();
const chooseOptionTask = new ChooseOptionTask();
const homePage = new HomePage();
const loginTask = new LoginTask();
const shoppingTaks = new ShoppingTask();
const goToCarTaks = new GoToCartTask();
const getSubtotalInfoTask = new GetSubtotalInfoTask();


Given("que el usuario agrego productos a su carrito de compras", async () => {
    await homePage.open();
    await chooseOptionTask.selectListOptions() 
    await browser.pause(8000);
    await loginTask.logIn();
    await chooseOptionTask.selectBuyAgainOption();
    await shoppingTaks.addProducts();
});


When("ingresa a la seccion del carrito de compras de Amazon", async () => {
    await goToCarTaks.selectCartOption();
});

Then("visualizara por lo menos 3 productos agregados", async () => {
    const amount = await getSubtotalInfoTask.getProductsAmount();
    await assertion.validateProductsAmount(amount)
});

Then("el subtotal corresponde a la suma de los productos agregados", async () => {
    const obtainedSubtotal = await getSubtotalInfoTask.getSubTotal();
    const calculateSubTotal = await getSubtotalInfoTask.calculateSubTotal();
    await assertion.validateSubtotal(obtainedSubtotal, calculateSubTotal);
});