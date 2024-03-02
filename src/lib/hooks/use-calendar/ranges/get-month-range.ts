import { endOfMonth, startOfMonth } from "date-fns";

export function getMonthRange(date: Date) {
  return [startOfMonth(date), endOfMonth(date)];
}
