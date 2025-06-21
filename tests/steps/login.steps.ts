import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { PlaywrightWorld } from "../support/world";
import { testData } from "../support/testData";

/**
 * Paso: acceso a la URL (Background)
 */
Given(
  /^que el usuario accede a la página de inicio$/,
  async function (this: PlaywrightWorld) {
    await this.page.goto(testData.url);
  }
);

/**
 * Paso: el formulario de login es visible (Background y fallback)
 */
Given(
  /^el formulario de login es visible$/,
  async function (this: PlaywrightWorld) {
    await expect(this.page.locator("#login_button_container")).toBeVisible();
  }
);

/**
 * Paso: ingresar credenciales
 */
When(
  /^el usuario ingresa sus credenciales "([^"]+)"$/,
  async function (this: PlaywrightWorld, alias: string) {
    const creds = (testData.users as any)[alias];
    if (!creds)
      throw new Error(`Credenciales no encontradas para alias: ${alias}`);

    await this.page.fill('[data-test="username"]', creds.username);
    await this.page.fill('[data-test="password"]', creds.password);
    await this.page.click('[data-test="login-button"]');
  }
);

/**
 * Paso: verificar resultado
 */
Then(
  /^el resultado mostrado debe ser "([^"]+)"$/,
  async function (this: PlaywrightWorld, resultado: string) {
    if (resultado === "inventario visible") {
      await expect(this.page.locator(".inventory_list")).toBeVisible();
    } else if (resultado === "mensaje de usuario bloqueado") {
      await expect(this.page.locator('[data-test="error"]')).toContainText(
        "Sorry, this user has been locked out"
      );
    } else {
      throw new Error(`Resultado esperado desconocido: ${resultado}`);
    }
  }
);
