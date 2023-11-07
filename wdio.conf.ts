import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './tsconfig.json',
      transpileOnly: true,
    },
  },
  specs: [
    './features/**/*.feature',
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--incognito']
    }
    },
  ],

  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec', '@wdio/allure-reporter'],
  cucumberOpts: {
    require: ['./step-definitions/**/*.ts'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '@debug',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

 
  afterTest(test, context, { error, result, duration, passed, retries }) {
    if (error) {
      browser.takeScreenshot(); // Captura una captura de pantalla en caso de error
    }
  },
  onComplete() {
    // Genera informes Allure después de la ejecución
    const allure = require('allure-commandline');
    const generation = allure(['generate', 'allure-results']);
    generation.on('exit', function (exitCode: any) {
      console.log('Se han generado los informes Allure con éxito');
    });
  },
};