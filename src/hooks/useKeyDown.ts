import { useEffect } from "react";

interface IUseKeydown {
  key: "Escape" | "Enter";
  action: () => void;
}

export const useKeydown = ({ key, action }: IUseKeydown) => {
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === key) action();
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return null;
};
