Feature: Carrito de compras de Amazon
  
  @cantidadproductos
  Scenario: El usuario visualiza los productos agregados al carrito de compras
    Given que el usuario agrego productos a su carrito de compras
    When ingresa a la seccion del carrito de compras de Amazon
    Then visualizara por lo menos 3 productos agregados

  @subtotalproductos
  Scenario: El usuario visualiza correctamente el subtotal en el carrito de compras
    Given que el usuario agrego productos a su carrito de compras
    When ingresa a la seccion del carrito de compras de Amazon
    Then el subtotal corresponde a la suma de los productos agregados
