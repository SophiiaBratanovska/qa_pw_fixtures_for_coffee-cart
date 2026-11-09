import { mergeTests } from '@playwright/test';
import { test as menuPage } from './fixturesMenuPage';
import { test as cartPage } from './fixturesCartPage';

export const test = mergeTests(menuPage, cartPage);
