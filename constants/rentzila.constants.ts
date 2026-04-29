import { type Page } from '@playwright/test';

export const RENTZILA_BASE_URL = 'https://dev.rentzila.com.ua/';
export const RENTZILA_PRODUCTS_URL = 'https://dev.rentzila.com.ua/products/';
export const ANNOUNCE_LINK_TEXT = 'Оголошення';
export const MENU_BUTTON_SELECTOR = '[class*=NavbarCatalog_wrapper]';
export const POPUP_CLOSE_SELECTORS = 'button[aria-label*="close" i], button[aria-label*="закрити" i], button:has-text("×"), button:has-text("Закрити"), button:has-text("Accept"), button:has-text("OK")';

export const getAnnounceLink = (page: Page) => page.locator('a.Navbar_link__UhyJF', { hasText: ANNOUNCE_LINK_TEXT });
export const getMenuButton = (page: Page) => page.locator(MENU_BUTTON_SELECTOR);
export const getPopupCloseButton = (page: Page) => page.locator(POPUP_CLOSE_SELECTORS);