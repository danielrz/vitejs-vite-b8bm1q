import { useRef } from 'react';

export const useDebounce = <
  T extends (...args: Parameters<T>) => ReturnType<T>,
>(
  fn: T,
  time: number,
) => {
  const timeout = useRef<NodeJS.Timeout>();
  // const [timeout, updateTimeout] = useState<NodeJS.Timeout>();
  // if i use useState then i need to use useCallback

  return function(...args: Parameters<T>) {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      fn(...args);
    }, time);
  }

  // return useCallback(
  //   (...args: Parameters<T>) => {
  //     if (timeout) {
  //       clearTimeout(timeout);
  //     }
  //     updateTimeout(setTimeout(() => {
  //       fn(...args);
  //     }, time));
  //   },
  //   [fn, time, timeout],
  // );

  // this works but better use useCallback to cache the function
  // return function (...args: Parameters<T>) {
  //   if (timeout) {
  //     clearTimeout(timeout);
  //   }
  //   updateTimeout(setTimeout(fn, time, args));
  // }

};
