import { test, expect } from '../fixtures/fixtures';
import { RENTZILA_PRODUCTS_URL } from '@constants/rentzila.constants';

test.describe('Rentzila navigation', () => {
  test('Оголошення link is highlighted on hover and opens products page', async ({ rentzilaHomePage }) => {
    await rentzilaHomePage.openSite();
    await rentzilaHomePage.closePopupIfVisible();

    const announceLink = await rentzilaHomePage.ensureAnnounceLinkVisible();
    await rentzilaHomePage.expectLinkHighlightedOnHover(announceLink);

    await rentzilaHomePage.navigateToProducts(announceLink);
    await expect(rentzilaHomePage.page).toHaveURL(RENTZILA_PRODUCTS_URL);
  });
});
