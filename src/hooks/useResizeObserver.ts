import { useEffect, useRef, useState } from "react";

export const useResizeObserver = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const observerHeight = entries[0].contentRect.height;
        setHeight(observerHeight);
      });

      resizeObserver.observe(ref.current);

      return () => {
        resizeObserver.disconnect();
      };
    }

    return () => {};
  }, []);

  return { height, ref };
};
