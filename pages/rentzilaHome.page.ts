import { expect, type Locator, type Page } from '@playwright/test';
import { RENTZILA_BASE_URL, RENTZILA_PRODUCTS_URL, getAnnounceLink, getMenuButton, getPopupCloseButton } from '@constants/rentzila.constants';

export default class RentzilaHomePage {
  readonly page: Page;
  readonly announceLink: Locator;
  readonly menuButton: Locator;
  readonly popupCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.announceLink = getAnnounceLink(page);
    this.menuButton = getMenuButton(page);
    this.popupCloseButton = getPopupCloseButton(page);
  }

  async openSite() {
    await this.page.goto(RENTZILA_BASE_URL);
    await this.page.waitForLoadState('networkidle');
  }

  async closePopupIfVisible() {
    if (await this.popupCloseButton.first().isVisible()) {
      await this.popupCloseButton.first().click();
    }
  }

  async ensureAnnounceLinkVisible() {
    if (await this.announceLink.isVisible()) {
      return this.announceLink;
    }

    if (await this.menuButton.isVisible()) {
      await this.menuButton.click();
      await expect(this.announceLink).toBeVisible({ timeout: 5000 });
    }

    return this.announceLink;
  }

  async expectLinkHighlightedOnHover(link: Locator) {
    const before = await link.evaluate((element) => {
      const styles = getComputedStyle(element);
      return {
        color: styles.color,
        backgroundColor: styles.backgroundColor,
        textDecoration: styles.textDecoration,
        borderColor: styles.borderColor,
        fontWeight: styles.fontWeight,
        opacity: styles.opacity,
      };
    });

    await link.hover();

    const after = await link.evaluate((element) => {
      const styles = getComputedStyle(element);
      return {
        color: styles.color,
        backgroundColor: styles.backgroundColor,
        textDecoration: styles.textDecoration,
        borderColor: styles.borderColor,
        fontWeight: styles.fontWeight,
        opacity: styles.opacity,
      };
    });

    expect(after).not.toEqual(before);
  }

  async navigateToProducts(link: Locator) {
    await Promise.all([
      this.page.waitForURL(RENTZILA_PRODUCTS_URL),
      link.click(),
    ]);
  }
}
