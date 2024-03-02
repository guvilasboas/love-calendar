import { CalendarProvider } from "../../providers";

export type CalendarProps = {
  children: React.ReactNode;
};

export function Calendar({ children }: CalendarProps) {
  return <CalendarProvider>{children}</CalendarProvider>;
}
