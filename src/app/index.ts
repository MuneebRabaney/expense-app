import { default as hooks } from "./hooks";
import { default as models } from "./models";
import { default as store } from "./store";

export type { hooks, models, store };

export interface IApplication {
  hooks?: () => void | [] | undefined;
  store?: () => void | [] | undefined;
  models?: () => void | [] | undefined;
}

export { default as Application };
