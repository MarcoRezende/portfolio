import { useCallback, useState, useEffect } from 'react';

interface BreakpointProps {
  breakpoints: Breakpoints[];
  onBreakpoint(width?: number, height?: number): any | void;
}

interface Breakpoints {
  prop: 'height' | 'width';
  value: number;
  comparingMethod: '<' | '>';
}

interface ScreenProps {
  width: number;
  height: number;
}

const Breakpoints: React.FC<BreakpointProps> = ({
  children,
  breakpoints,
  onBreakpoint,
}) => {
  const [screen, setScreen] = useState<ScreenProps>({} as ScreenProps);

  let sizes = {
    width: 0,
    height: 0,
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    handleWindowResize();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const handleWindowResize = useCallback(() => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    breakpoints.forEach(breakpoint => {
      console.log('width', sizes.width, breakpoint.value);
      if (
        breakpointComparing[breakpoint.comparingMethod](
          sizes[breakpoint.prop],
          breakpoint.value,
          breakpoint.prop,
        )
      ) {
        setScreen(prevState => ({
          ...prevState,
          [breakpoint.prop]: sizes.width,
        }));
        onBreakpoint(sizes.width, sizes.height);
      }
    });
  }, []);

  const breakpointComparing = {
    '>': useCallback((a, b, prop) => {
      return a > b && a < screen[prop];
    }, []),
    '<': useCallback((a, b) => {
      return a > b;
    }, []),
  };

  return <>{children}</>;
};

export default Breakpoints;
