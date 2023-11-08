import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import { ApiTask } from '../tasks/apiTask';

const apiTask = new ApiTask()
let apiResponse: any;

Given(/^el usuario tiene un punto de conexión API válido$/, async () => {
    const expectedEndpoint = 'https://jsonplaceholder.typicode.com/posts';
    const actualEndpoint = apiTask.apiURL

    expect(actualEndpoint).to.equal(expectedEndpoint);
})

When(/^el usuario realiza una solicitud GET a la API$/, async () => {
    apiResponse = await apiTask.getResults();

    console.log("Response status", apiResponse.status)
})

Then(/^la API GET responde con un código de estado 200$/, async () => {
    await expect(apiResponse.status).to.equal(200);
})

Then(/^la respuesta contiene datos JSON válidos$/, async () => {
    await expect(apiResponse.data[0].title).to.equal("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
})


When(/^el usuario realiza una solicitud POST a la API con datos válidos$/, async () => {
    apiResponse = await apiTask.createPost()
})

Then(/^la API responde con un código de estado 201$/, async () => {
    await expect(apiResponse.status).to.equal(201);
})

Then(/^la respuesta contiene el recurso recién creado$/, async () => {
    await expect(apiResponse.data.title).to.equal("Soy un titulo");
})


Given(/^el usuario tiene un recurso existente$/, async () => {
    apiResponse = await apiTask.getResults();
    await expect(apiResponse.data).to.not.be.empty;
})

When(/^el usuario realiza una solicitud PUT a la API con datos actualizados$/, async () => {
    apiResponse = await apiTask.updatePost()
})

Then(/^la API PUT responde con un código de estado 200$/, async () => {
    await expect(apiResponse.status).to.equal(200);
})

Then(/^la respuesta contiene el recurso actualizado$/, async () => {
    await expect(apiResponse.data.title).to.equal("Soy otro titulo de prueba");
})


When(/^el usuario realiza una solicitud DELETE a la API$/, async () => {
    apiResponse = await apiTask.deletePost()
})

Then(/^la API DELETE responde con un código de estado 200$/, async () => {
    await expect(apiResponse.status).to.equal(200);
})