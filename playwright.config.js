const env = require('./config/env');

module.exports = {
  testDir: './tests',
  timeout: 30000,
  retries: 1,

  use: {
    baseURL: env.qa.baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};