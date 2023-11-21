'use client';

import { useEffect, useState } from 'react';

export const useMediaQuery = (minWidth: number): boolean => {
  const [state, setState] = useState({
    windowWidth: 0,
    isDesiredWidth: false,
  });

  useEffect(() => {
    if (window === undefined) return;
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < minWidth;
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [state.windowWidth, minWidth]);

  return state.isDesiredWidth;
};
