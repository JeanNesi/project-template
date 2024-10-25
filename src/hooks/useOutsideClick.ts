import { useEffect, useRef } from "react";

interface IUseOutsideClick {
  action: () => void;
}

export const useOutsideClick = ({ action }: IUseOutsideClick) => {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleOutsideClick(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as Node)) action();
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return { ref };
};
