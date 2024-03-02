import { endOfWeek, startOfWeek } from "date-fns";

export function getWeekRange(date: Date) {
  return [startOfWeek(date), endOfWeek(date)];
}
