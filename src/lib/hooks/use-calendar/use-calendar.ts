import { useCallback, useContext, useEffect, useMemo } from "react";
import { CalendarContext } from "../..";
import { add, sub, Duration } from "date-fns";
import { createMonthMatrix } from "../../helpers";
import { DurationInterval, RangeGenerators } from "./ranges";

function isDurationType(x: string): x is keyof Duration {
  return ["years", "months", "weeks", "days"].includes(x);
}

export function useCalendar() {
  const {
    date,
    setDate,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    view,
    setView,
  } = useContext(CalendarContext);

  /**
   * Split year, month and day from the date
   *
   */
  const [year, month, day] = useMemo(() => {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  }, [date]);

  /**
   * Adds a duration to the current date
   *
   */
  const addDate = useCallback(
    (toAdd: number, duration: keyof Duration) => {
      setDate((date: Date) => {
        return add(date, { [duration]: toAdd });
      });
    },
    [setDate]
  );

  /**
   * Subtracts a duration from the current date
   *
   */
  const subDate = useCallback(
    (toSub: number, duration: keyof Duration) => {
      setDate((date: Date) => {
        return sub(date, { [duration]: toSub });
      });
    },
    [setDate]
  );

  /**
   * Selects today's date
   *
   */
  const selectToday = useCallback(() => {
    setDate(new Date());
  }, [setDate]);

  const next = useCallback(() => {
    const durationInterval = DurationInterval[view];

    if (isDurationType(durationInterval)) {
      addDate(1, durationInterval);
    }
  }, [addDate, view]);

  const previous = useCallback(() => {
    const durationInterval = DurationInterval[view];

    if (isDurationType(durationInterval)) {
      subDate(1, durationInterval);
    }
  }, [subDate, view]);

  /**
   * Create the month matrix
   *
   */
  const matrix = useMemo(() => {
    return createMonthMatrix(startDate, endDate);
  }, [startDate, endDate]);

  const rangeGenerator = useCallback(() => {
    return RangeGenerators[view](date);
  }, [view, date]);

  /**
   * Handle range start/end update
   *
   */
  useEffect(() => {
    const [start, end] = rangeGenerator();

    setStartDate(start);
    setEndDate(end);
  }, [rangeGenerator]);

  return {
    date,
    year,
    month,
    day,
    startDate,
    endDate,
    matrix,
    view,
    addDate,
    subDate,
    selectToday,
    setStartDate,
    setEndDate,
    setView,
    next,
    previous,
  };
}
