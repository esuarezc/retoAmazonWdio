Feature: The Internet Guinea Pig Website


  Scenario Outline: El usuario crea una cuenta en Amazon
    Given que el usuario ingresa al login
    When se registra con sus datos
    Then vera la pagina de validacion de identidad
    
    