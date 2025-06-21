# Proyecto de Automatización de Pruebas con Playwright y Cucumber

Este repositorio contiene un framework de automatización de pruebas E2E (End-to-End) construido con Playwright, Cucumber y TypeScript. Está diseñado para ser robusto, escalable y fácil de mantener.

## Tabla de Contenidos

- [Proyecto de Automatización de Pruebas con Playwright y Cucumber](#proyecto-de-automatización-de-pruebas-con-playwright-y-cucumber)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación](#instalación)
  - [Configuración](#configuración)
  - [Ejecución de Pruebas](#ejecución-de-pruebas)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Licencia](#licencia)

## Prerrequisitos

Antes de empezar, asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/es/) (versión 16 o superior recomendada)
- [npm](https://www.npmjs.com/) (generalmente se instala con Node.js)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   cd ubicacion/deseada
   git clone https://github.com/marcundertest/playwright-cucumber.git
   cd playwright-cucumber
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Instala los navegadores que Playwright necesita:

   ```bash
   npx playwright install
   ```

## Configuración

Este proyecto utiliza variables de entorno para gestionar la configuración sensible o específica del entorno (como URLs, credenciales, etc.).

1. Crea un archivo `.env` en la raíz del proyecto, puedes usar el archivo `.env.example` como plantilla si existiera.
2. Añade las variables necesarias. Por ejemplo:

   ```plaintext
   BASE_URL=https://www.tu-aplicacion.com
   USER_EMAIL=test@example.com
   USER_PASSWORD=tu_contraseña_secreta
   ```

## Ejecución de Pruebas

Puedes ejecutar las pruebas utilizando los siguientes scripts definidos en `package.json`:

- **Para ejecutar todas las pruebas E2E:**

  ```bash
  npm run e2e
  ```

  o

  ```bash
  npm test
  ```

- **Para ejecutar las pruebas en modo "watch" (se re-ejecutan al detectar cambios):**

  ```bash
  npm run test:watch
  ```

- **Para depurar las pruebas:**

  ```bash
  npm run test:debug
  ```

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera para mantener una clara separación de responsabilidades:

```plaintext
├── tests/
│   ├── features/         # Archivos .feature con los escenarios de Gherkin
│   │   └── login.feature
│   ├── steps/            # Definiciones de pasos que implementan los escenarios
│   │   └── login.steps.ts
│   └── support/          # Código de soporte (hooks, world, etc.)
│       ├── hooks.ts
│       └── world.ts
├── .env                  # Archivo para variables de entorno (no versionado)
├── cucumber.js           # Configuración de Cucumber.js
├── package.json          # Dependencias y scripts del proyecto
├── playwright.config.ts  # Configuración de Playwright
└── tsconfig.json         # Configuración de TypeScript
```

- `tests/features`: Contiene los archivos de características (`.feature`) escritos en Gherkin. Aquí se describe el comportamiento de la aplicación en un lenguaje legible por humanos.
- `tests/steps`: Contiene los archivos TypeScript (`.ts`) con la implementación de los pasos definidos en los archivos `.feature`.
- `tests/support`: Contiene código auxiliar para las pruebas, como `hooks` (código que se ejecuta antes/después de los escenarios) y el `CustomWorld` para compartir estado entre los pasos.

## Tecnologías Utilizadas

- [Playwright](https://playwright.dev/): Framework de automatización de navegadores.
- [Cucumber.js](https://cucumber.io/docs/cucumber/api/?lang=javascript): Herramienta para BDD (Behavior-Driven Development).
- [TypeScript](https://www.typescriptlang.org/): Superset de JavaScript que añade tipado estático.
- [Node.js](https://nodejs.org/): Entorno de ejecución para JavaScript.
- [dotenv](https://www.npmjs.com/package/dotenv): Para cargar variables de entorno desde un archivo `.env`.

## Licencia

Este proyecto está bajo la licencia MIT.
