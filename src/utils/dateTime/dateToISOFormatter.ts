export const dateToISOFormatter = (date: string | Date) => {
  if (!date) return "";
  return new Date(date).toISOString().substring(0, 10);
};
