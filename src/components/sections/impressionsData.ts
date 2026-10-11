export interface MonthlyImpression {
  month: string;
  shortMonth: string;
  impressions: number;
}

export interface DailyImpression {
  date: string;
  impressions: number;
}

export const monthlyData: MonthlyImpression[] = [
  { month: 'Jan 2024', shortMonth: 'Jan', impressions: 42760 },
  { month: 'Feb 2024', shortMonth: 'Feb', impressions: 58229 },
  { month: 'Mar 2024', shortMonth: 'Mar', impressions: 76441 },
  { month: 'Apr 2024', shortMonth: 'Apr', impressions: 105320 },
  { month: 'May 2024', shortMonth: 'May', impressions: 138102 },
  { month: 'Jun 2024', shortMonth: 'Jun', impressions: 175421 },
];

const daysInMonth = (monthIndex: number): number => new Date(Date.UTC(2024, monthIndex + 1, 0)).getUTCDate();

const formatDate = (monthIndex: number, day: number): string => {
  const month = String(monthIndex + 1).padStart(2, '0');
  return `2024-${month}-${String(day).padStart(2, '0')}`;
};

const buildDailyMonth = (monthIndex: number, total: number): DailyImpression[] => {
  const dayCount = daysInMonth(monthIndex);
  const weights = Array.from({ length: dayCount }, (_, dayIndex) => {
    const weekday = new Date(Date.UTC(2024, monthIndex, dayIndex + 1)).getUTCDay();
    const weekendAdjustment = weekday === 0 || weekday === 6 ? -90 : 0;
    const variation = ((dayIndex * 17 + monthIndex * 29) % 141) - 70;
    const trend = dayIndex * 8;
    return 1000 + weekendAdjustment + variation + trend;
  });
  const weightTotal = weights.reduce((sum, weight) => sum + weight, 0);
  const allocations = weights.map((weight) => (total * weight) / weightTotal);
  const values = allocations.map(Math.floor);
  let remainder = total - values.reduce((sum, value) => sum + value, 0);

  allocations
    .map((value, index) => ({ index, fraction: value - values[index] }))
    .sort((a, b) => b.fraction - a.fraction || a.index - b.index)
    .forEach(({ index }) => {
      if (remainder > 0) {
        values[index] += 1;
        remainder -= 1;
      }
    });

  return values.map((impressions, dayIndex) => ({
    date: formatDate(monthIndex, dayIndex + 1),
    impressions,
  }));
};

export const dailyData: DailyImpression[] = monthlyData.flatMap((month, monthIndex) =>
  buildDailyMonth(monthIndex, month.impressions),
);

const monthlySumsFromDaily = monthlyData.map((_, monthIndex) => {
  const prefix = `2024-${String(monthIndex + 1).padStart(2, '0')}`;
  return dailyData
    .filter(({ date }) => date.startsWith(prefix))
    .reduce((sum, { impressions }) => sum + impressions, 0);
});

if (monthlySumsFromDaily.some((sum, index) => sum !== monthlyData[index].impressions)) {
  throw new Error('Daily impressions must reconcile to the monthly totals.');
}
