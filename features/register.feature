Feature: Registro en Amazon

  Background: 
  Given que el usuario ingreso a la pagina de registro de Amazon

  @debug
  Scenario: El usuario visualiza la validacion de identidad tras intentar registrarse en Amazon
    When se registra con sus datos personales
    Then vera la pagina de validacion de identidad

  
  Scenario Outline: El usuario visualiza el mensaje de advertencia tras ingresar una contraseña incorrecta
    When se registra con una contraseña <error>
    Then no podra avanzar a la pagina de validacion de identidad
    @debug
   Examples: 
   | error                                  | 
   | sin el numero de caracteres requeridos | 
   | sin un caracter especial               | 
   
    
    