import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test("本番タイトル画面は提出用の導線を表示する", async ({ page }) => {
  await expect(page).toHaveTitle("単位に恋して。");
  await expect(page.locator(".game-logo img")).toBeVisible();
  await expect(page.locator("#start-button")).toBeVisible();
  await expect(page.locator("#continue-button")).toBeDisabled();
  await expect(page.locator("#ending-album-button")).toBeVisible();
  await expect(page.locator("#chapter-select-button")).toBeHidden();
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute("href", /favicon\.png$/);
});

test("はじめからで会話を開始し、次へ進んで戻れる", async ({ page }) => {
  await page.locator("#start-button").click();

  await expect(page.locator("#game-screen")).toHaveClass(/screen--active/);
  await expect(page.locator("#title-screen")).not.toHaveClass(/screen--active/);
  await expect(page.locator("#dialogue-text")).toContainText("寝坊した");
  await expect(page.locator("#back-button")).toBeDisabled();

  await page.locator("#next-button").click();
  await expect(page.locator("#dialogue-text")).toContainText("着替えて");
  await expect(page.locator("#back-button")).toBeEnabled();

  await page.locator("#back-button").click();
  await expect(page.locator("#dialogue-text")).toContainText("寝坊した");
});

test("タイトルへ戻る確認とサウンド設定を操作できる", async ({ page }) => {
  await page.locator("#title-sound-button").click();
  await expect(page.locator("#title-sound-button")).toHaveAttribute("aria-pressed", "false");

  await page.locator("#start-button").click();
  await page.locator("#title-button").click();
  await expect(page.locator("#title-return-dialog")).toBeVisible();
  await expect(page.locator("#title-return-message")).toContainText("自動保存");

  await page.locator("#title-return-confirm").click();
  await expect(page.locator("#title-screen")).toHaveClass(/screen--active/);
  await expect(page.locator("#continue-button")).toBeEnabled();
});
