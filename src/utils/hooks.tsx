import React, { useEffect } from "react";

export const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement | undefined>,
  handler: (event: Event) => void
): void => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current?.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
