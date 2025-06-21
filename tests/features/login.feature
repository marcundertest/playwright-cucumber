Feature: Inicio de sesión
  Como usuario de la aplicación
  Quiero iniciar sesión con credenciales válidas o inválidas según mi perfil
  Para acceder —o ser informado— de mi estado de autenticación

  Background: Acceso a la aplicación
    Given que el usuario accede a la página de inicio
    And el formulario de login es visible

  Scenario Outline: Intento de inicio de sesión
    When el usuario ingresa sus credenciales "<alias>"
    Then el resultado mostrado debe ser "<alias>"

    Examples:
      | alias                 | resultado                    |
      | standardUser          | inventario visible           |
      | lockedOutUser         | mensaje de usuario bloqueado |
      | problemUser           | inventario visible           |
      | performanceGlitchUser | inventario visible           |
      | errorUser             | inventario visible           |
      | visualUser            | inventario visible           |
