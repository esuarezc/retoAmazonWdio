Feature: Inicio de sesion en Amazon
  
  @debug
  Scenario: El usuario inicia sesion en Amazon exitosamente
    Given que el usuario selecciono el login luego de ingresar a la pagina principal de Amazon
    When inicia sesion con los datos correspondientes 
    Then visualizara el saludo personalizado de Amazon
    
    