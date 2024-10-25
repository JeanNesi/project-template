import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export function capitalizeWords(sentence: string) {
  const words = sentence.split(" ");
  const capitalizedWords = words.map((word) => capitalizeFirstLetter(word));
  return capitalizedWords.join(" ");
}
