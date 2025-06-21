// This file contains the World object, which is used to share data between steps

import {
  chromium,
  firefox,
  webkit,
  Browser,
  BrowserContext,
  BrowserType,
  Page,
} from "@playwright/test";
import {
  setWorldConstructor,
  IWorldOptions,
  World,
  setDefaultTimeout,
  Before,
  After,
} from "@cucumber/cucumber";
import { testData } from "./testData";

// Opcional: saca el tipo de navegador de una variable de entorno (útil en CI)
const BROWSER = process.env.BROWSER ?? "chromium";
const TIMEOUT = 60_000; // 60 s para cada paso lento

export class PlaywrightWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  parameters: any;

  constructor(options: IWorldOptions) {
    this.parameters = options.parameters; // por si un día lanzas cucumber-js --world-parameters
  }

  /** Arranca el navegador elegido */
  async launchBrowser() {
    const browsers: Record<string, BrowserType> = {
      chromium,
      firefox,
      webkit,
    } as unknown as Record<string, BrowserType>;

    const browserType = browsers[BROWSER] ?? chromium;
    this.browser = await browserType.launch({
      headless: true, // false para ver el navegador
      slowMo: 0, // 100 añade un pequeño retraso entre acciones para mejor visibilidad
      devtools: false, // true para abrir las herramientas de desarrollo
    });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  /** Atajo para ir a una URL del testData (o la que sea) */
  async goto(path = "") {
    await this.page.goto(`${testData.url}${path}`);
  }

  /** Cierra recursos */
  async closeBrowser() {
    await this.browser?.close();
  }
}

// Registra la clase como World
setWorldConstructor(PlaywrightWorld);
setDefaultTimeout(TIMEOUT);

// Hooks: uno antes y otro después de cada escenario
Before(async function (this: PlaywrightWorld) {
  await this.launchBrowser();
});

After(async function (this: PlaywrightWorld) {
  await this.closeBrowser();
});
