interface Time {
  seconds: number | null;
  minutes: number | null;
  hours: number | null;
  days: number | null;
}

export const getTimeBetweenDates = (
  startDate: Date | undefined,
  endDate: Date | undefined
): Time => {
  if (endDate && startDate) {
    const seconds: number = Math.floor(
      (endDate.getTime() - startDate.getTime()) / 1000
    );
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return { seconds, minutes, hours, days };
  }

  return { seconds: null, minutes: null, hours: null, days: null };
};
