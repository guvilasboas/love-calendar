import { startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns";

// Função para criar a matriz do mês
export function createDateMatrix(startDay: Date, endDay: Date) {
  const startWeek = startOfWeek(startDay);
  const endWeek = endOfWeek(endDay);

  // Cria um array de todos os dias do intervalo visível no calendário
  const days = eachDayOfInterval({ start: startWeek, end: endWeek });

  // Cria a matriz da semana
  const matrix: Date[][] = [];
  let week: Date[] = [];

  days.forEach((day) => {
    week.push(day);

    // A cada 7 dias, começa uma nova semana
    if (week.length === 7) {
      matrix.push(week);
      week = []; // Reinicia para a próxima semana
    }
  });

  return matrix;
}
