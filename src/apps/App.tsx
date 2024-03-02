import { useEffect } from "react";
import { Calendar, CalendarView, useCalendar } from "../lib";

function Today() {
  const { date, next, previous, selectToday, matrix, setView } = useCalendar();

  useEffect(() => {
    console.log(matrix);
  }, [matrix]);

  return (
    <div>
      <ul>
        <li>today: {date.toDateString()}</li>
        <button onClick={() => next()}>add</button>
        <button onClick={() => previous()}>sub</button>
        <button onClick={() => selectToday()}>today</button>
      </ul>
      <table border={2}>
        <thead>
          <tr>
            <th>Dom</th>
            <th>Seg</th>
            <th>Ter</th>
            <th>Qua</th>
            <th>Qui</th>
            <th>Sex</th>
            <th>Sab</th>
          </tr>
        </thead>
        <tbody>
          {matrix.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td key={j}>{day.getDate()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setView(CalendarView.Month)}>mes</button>
        <button onClick={() => setView(CalendarView.Week)}>semana</button>
      </div>
    </div>
  );
}

export function App() {
  return (
    <Calendar>
      <Today />
    </Calendar>
  );
}
