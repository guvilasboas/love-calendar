import React, { createContext } from "react";

export enum CalendarView {
  Month = "month",
  Week = "week",
}

export type CalendarContextProps = {
  date: Date;
  startDate: Date;
  endDate: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  view: CalendarView;
  setView: React.Dispatch<React.SetStateAction<CalendarView>>;
};

export const CalendarContext = createContext<CalendarContextProps>({
  date: new Date(),
  startDate: new Date(),
  endDate: new Date(),
  setDate: () => {},
  setStartDate: () => {},
  setEndDate: () => {},
  view: CalendarView.Month,
  setView: () => {},
});
