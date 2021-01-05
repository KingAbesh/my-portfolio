export function isInViewport(
  el: React.MutableRefObject<HTMLDivElement | undefined>
) {
  //   const rect = el.current?.getBoundingClientRect();
  //   const elemTop = rect?.top;
  //   const elemBottom = rect?.bottom;

  // Only completely visible elements return true:
  //   const isVisible =
  //     elemTop && elemTop >= 0 && elemBottom && elemBottom <= window.innerHeight;
  // Partially visible elements return true:
  //   const isVisible =
  //     elemTop && elemTop < window.innerHeight && elemBottom && elemBottom >= 0;
  //   return isVisible;
  //   return (
  //     rect &&
  //     rect.top >= 0 &&
  // 	  rect.left >= 0
  // 	  && rect.bottom <=
  //       (window.innerHeight || document.documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );

  const half = window.innerHeight / 2;

  return (
    window.scrollY + half > (el.current as any)?.offsetTop &&
    window.scrollY + half <
      (el.current as any)?.offsetTop + (el.current as any)?.scrollHeight
  );
}
