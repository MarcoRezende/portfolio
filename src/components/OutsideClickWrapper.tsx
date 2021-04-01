import { useEffect, useRef } from 'react';
import { motion, MotionProps } from 'framer-motion';

export interface WrapperProps {
  className?: string;

  as?: string;
  motionAnimation?: boolean;

  onClickInside?(): any | void;
  onClickOutside?(): any | void;
}

const OutsideClickWrapper: React.FC<WrapperProps & MotionProps> = ({
  className,
  children,
  as: tagName,
  motionAnimation,
  onClickInside,
  onClickOutside,
  ...rest
}) => {
  // const Wrapper = tagName as keyof JSX.IntrinsicElements;
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (e: MouseEvent) => {
    return wrapperRef.current.contains(e.target as Node)
      ? onClickInside()
      : onClickOutside();
  };

  return (
    <>
      {motionAnimation ? (
        <motion.div ref={wrapperRef} className={className} {...rest}>
          {children}
        </motion.div>
      ) : (
        <div ref={wrapperRef} className={className}>
          {children}
        </div>
      )}
    </>
  );
};

OutsideClickWrapper.defaultProps = {
  className: '',

  as: 'div',
  motionAnimation: false,

  onClickInside: () => {
    return;
  },
  onClickOutside: () => {
    return;
  },
};

export default OutsideClickWrapper;
