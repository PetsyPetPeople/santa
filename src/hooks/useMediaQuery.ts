import { useEffect, useState } from 'react';

export const useMediaQuery = (minWidth: number): boolean => {
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: false,
  });

  useEffect(() => {
    const resizeHandler = () => {
      if (typeof window !== 'undefined') {
        const currentWindowWidth = window.innerWidth;
        const isDesiredWidth = currentWindowWidth < minWidth;
        setState({ windowWidth: currentWindowWidth, isDesiredWidth });
      }
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [state.windowWidth, minWidth]);

  return state.isDesiredWidth;
};
