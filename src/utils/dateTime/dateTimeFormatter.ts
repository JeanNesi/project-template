export const dateTimeFormatter = (date: string | Date) => {
  if (!date) return "";

  return new Date(date).toLocaleString("pt-BR", {
    timeStyle: "short",
    dateStyle: "short",
  });
};
