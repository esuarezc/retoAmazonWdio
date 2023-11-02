Feature: The Internet Guinea Pig Website


  Scenario Outline: El usuario crea una cuenta en Amazon
    Given que el usuario ingresa al login
    When se registra con sus datos "Tatiana" "3100000000" "prueba1*"
    Then vera la pagina de validacion de identidad "Confirma tu identidad"

@debug
Scenario Outline: prueba API
    Given que el usuario consulta la informacion
    When crea un nuevo post
  