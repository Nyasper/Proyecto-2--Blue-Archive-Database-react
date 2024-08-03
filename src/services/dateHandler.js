import { lastUpdateLS } from "./localStorage";

const today = new Date();
const lastFetchedDate = lastUpdateLS.exists() ? new Date(lastUpdateLS.value) : new Date();

const dateMSDiff = today - lastFetchedDate;
export const DaysPassed = Math.abs(Math.floor(dateMSDiff / (1000 * 3600 * 24)));
