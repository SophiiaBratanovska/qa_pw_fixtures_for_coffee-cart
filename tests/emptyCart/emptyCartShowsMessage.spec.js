import { test } from '../../tests/_fixtures/fixtures';

test('Assert empty cart shows correct message', async ({ cartPage }) => {
  await cartPage.open();

  await cartPage.assertNoCoffeeMessageIsVisible();
});
