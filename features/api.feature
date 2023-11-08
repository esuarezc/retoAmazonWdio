@api
Feature: API
    Scenario: El usuario recupera información de una API
        Given el usuario tiene un punto de conexión API válido
        When el usuario realiza una solicitud GET a la API
        Then la API GET responde con un código de estado 200
        And  la respuesta contiene datos JSON válidos

    Scenario: El usuario crea un nuevo recurso a través de la API
        Given el usuario tiene un punto de conexión API válido
        When el usuario realiza una solicitud POST a la API con datos válidos
        Then la API responde con un código de estado 201
        And la respuesta contiene el recurso recién creado

    Scenario: El usuario actualiza un recurso existente a través de la API
        Given el usuario tiene un punto de conexión API válido
        And el usuario tiene un recurso existente
        When el usuario realiza una solicitud PUT a la API con datos actualizados
        Then la API PUT responde con un código de estado 200
        And la respuesta contiene el recurso actualizado

    Scenario: El usuario elimina un recurso a través de la API
        Given el usuario tiene un punto de conexión API válido
        And el usuario tiene un recurso existente
        When el usuario realiza una solicitud DELETE a la API
        Then la API DELETE responde con un código de estado 200