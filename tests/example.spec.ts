import { test, expect } from '../fixtures/fixtures';

test.describe('Glance Connect Tests', () => {
  test.beforeEach(async ({mainGlanceOperationsPage, loginGlancePage, page}) => {
    await mainGlanceOperationsPage.openSite();
    await page.waitForLoadState('networkidle');
    await loginGlancePage.clickGetStartedButton();
  });

  test('has title', async ({ page }) => {
    
  });
});