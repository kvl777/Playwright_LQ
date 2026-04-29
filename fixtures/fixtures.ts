import { test as base } from '@playwright/test';
 
import BasePage from '@pages/base.page';
import MainGlanceConnectPage from '@pages/mainGlanceConnect.page';
import MainGlanceOperationsPage from '@pages/mainGlanceOperations.page';
import LoginGlancePage from '@pages/loginGlance.page';
import ClaimGlanceConnectPage from '@pages/claimGlanceConnect.page';
import ClaimGlanceOperationsPage from '@pages/claimGlanceOperations.page';
import BulkGlanceOperationsPage from '@pages/bulkGlanceOperations.page';
import PaymentGlanceOperationsPage from '@pages/paymentGlanceOps.page';
 
export const test = base.extend<{
    basePage: BasePage;
    mainGlanceConnectPage: MainGlanceConnectPage;
    mainGlanceOperationsPage: MainGlanceOperationsPage;
    loginGlancePage: LoginGlancePage;
    claimGlanceConnectPage: ClaimGlanceConnectPage;
    claimGlanceOperationsPage: ClaimGlanceOperationsPage;
    bulkGlanceOperationsPage: BulkGlanceOperationsPage;
    paymentGlanceOperationsPage: PaymentGlanceOperationsPage;
}>({
    basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
    mainGlanceConnectPage: async ({ page }, use) => {
        await use(new MainGlanceConnectPage(page));
    },
    mainGlanceOperationsPage: async ({ page }, use) => {
        await use(new MainGlanceOperationsPage(page));
    },
    loginGlancePage: async ({ page }, use) => {
        await use(new LoginGlancePage(page));
    },
    claimGlanceConnectPage: async ({ page }, use) => {
        await use(new ClaimGlanceConnectPage(page));
    },
    claimGlanceOperationsPage: async ({ page }, use) => {
        await use(new ClaimGlanceOperationsPage(page));
    },
    bulkGlanceOperationsPage: async ({ page }, use) => {
        await use(new BulkGlanceOperationsPage(page));
    },
    paymentGlanceOperationsPage: async ({ page }, use) => {
        await use(new PaymentGlanceOperationsPage(page));
    }
});
 
export { expect, type Page, type Download, type Locator, type TestInfo } from '@playwright/test';
 