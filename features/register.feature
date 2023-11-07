Feature: Registro en Amazon

  
  Scenario: El usuario visualiza la validacion de identidad tras intentar registrarse en Amazon
    Given que el usuario ingreso a la pagina de registro de Amazon
    When se registra con sus datos personales
    Then vera la pagina de validacion de identidad
    
    