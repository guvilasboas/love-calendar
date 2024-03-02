import { useState } from "react";
import { CalendarContext, CalendarView } from "./calendar-context";
import { startOfMonth, endOfMonth } from "date-fns";

export type CalendarProviderProps = {
  children: React.ReactNode;
};

export function CalendarProvider({ children }: CalendarProviderProps) {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(startOfMonth(date));
  const [endDate, setEndDate] = useState(endOfMonth(date));
  const [view, setView] = useState(CalendarView.Month);

  return (
    <CalendarContext.Provider
      value={{
        date,
        setDate,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        view,
        setView,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
