import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  workers: 1,

  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }],
    ['allure-playwright']
  ],

  use: {
    baseURL: 'https://demowebshop.tricentis.com',
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    trace: 'on'
  },

  outputDir: 'test-results',

}); 
