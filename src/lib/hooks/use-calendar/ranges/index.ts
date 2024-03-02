import { CalendarView } from "../../..";
import { getMonthRange } from "./get-month-range";
import { getWeekRange } from "./get-week-range";

export const RangeGenerators = {
  [CalendarView.Month]: getMonthRange,
  [CalendarView.Week]: getWeekRange,
};

export const DurationInterval = {
  [CalendarView.Month]: "months",
  [CalendarView.Week]: "weeks",
};
