
// AgcRyeHarvestLoss: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-rye-harvest-loss.core.js';
import {
  AgcRyeHarvestLoss,
  AgcRyeHarvestLossInputs,
  AgcRyeHarvestLossProgress,
  AgcRyeHarvestLossResults,
  AgcRyeHarvestLossResultsPlaceholder
} from './agc-rye-harvest-loss.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcRyeHarvestLoss,
    AgcRyeHarvestLossInputs,
    AgcRyeHarvestLossProgress,
    AgcRyeHarvestLossResults,
    AgcRyeHarvestLossResultsPlaceholder
  ], opts);
}
