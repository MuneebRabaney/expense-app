

import { default as hooks } from "./hooks";
import { default as models } from "./models";
import { default as store } from "./store";

export declare namespace Application {
  store: [],
  models?: T[{}] | [],
  hooks: () => void | undefined
}

export { store, models, hooks };
