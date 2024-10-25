export const timeFormatter = (date: string | Date) => {
  if (!date) return "";

  return new Date(date).toLocaleTimeString("pt-BR");
};
