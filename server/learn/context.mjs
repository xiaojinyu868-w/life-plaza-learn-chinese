/**
 * Which learner a request is for. The page sends X-Learn-Level (1–9) and X-Learn-UI (en | zh) with every call; with a
 * level, whatever a host or the guide writes for the visitor is Chinese at that level (rules.mjs, added in llm.mjs).
 */
import { AsyncLocalStorage } from "node:async_hooks";
import { saneLevel } from "./hsk.mjs";

const store = new AsyncLocalStorage();

export const learnNow = () => store.getStore() || null;

export function learnOf(req) {
  const level = saneLevel(req.headers["x-learn-level"]);
  if (!level) return null;
  return { level, ui: String(req.headers["x-learn-ui"] || "").toLowerCase().startsWith("en") ? "en" : "zh" };
}

export const withLearn = (learn, fn) => store.run(learn, fn);
