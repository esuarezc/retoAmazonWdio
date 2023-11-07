Feature: The Internet Guinea Pig Website

@debug
  Scenario Outline: El usuario crea una cuenta en Amazon
    Given que el usuario ingreso a la pagina de registro de Amazon
    When se registra con sus datos personales
    Then vera la pagina de validacion de identidad
    
    