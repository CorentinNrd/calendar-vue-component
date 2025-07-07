// src/utils/dateHelpers.ts
export function getDaysForMonthView(date: Date): Date[] {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startOfWeek = (firstDay.getDay() + 6) % 7;
  const totalDays = startOfWeek + lastDay.getDate();
  const totalCells = Math.ceil(totalDays / 7) * 7;

  const days: Date[] = [];
  const startDate = new Date(firstDay);
  startDate.setDate(firstDay.getDate() - startOfWeek);

  for (let i = 0; i < totalCells; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    days.push(d);
  }

  return days;
}
