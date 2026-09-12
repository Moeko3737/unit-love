import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 15_000,
  expect: {
    timeout: 5_000
  },
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "retain-on-failure",
    screenshot: "only-on-failure"
  },
  webServer: {
    command: "PLAYWRIGHT_TEST=1 node server.js",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: true,
    timeout: 15_000
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "mobile-chrome",
      use: { ...devices["iPhone 13"], browserName: "chromium" }
    }
  ]
});
