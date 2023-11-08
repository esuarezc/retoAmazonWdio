Feature: Inicio de sesion en Amazon
  
  
  Scenario: El usuario inicia sesion en Amazon exitosamente
    Given que el usuario selecciono el login luego de ingresar a la pagina principal de Amazon
    When inicia sesion con los datos correspondientes 
    Then visualizara el saludo personalizado de Amazon
    
    