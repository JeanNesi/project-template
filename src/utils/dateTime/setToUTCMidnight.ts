export const setToUTCMidnight = (date: string) =>
  new Date(new Date(date).setUTCHours(3, 0, 0, 0));
