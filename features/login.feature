Feature: The Internet Guinea Pig Website

@debug
  Scenario Outline: El usuario crea una cuenta en Amazon
    Given que el usuario ingresa al login
    When se registra con sus datos "Tatiana" "3100000000" "prueba1*"
    Then vera la pagina de validacion de identidad "Confirma tu identidad"
    
    