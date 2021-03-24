import { memo } from 'react';

interface ImgSourceProps {
  className?: string;

  sources: {
    low: string;
    medium: string;
    high: string;
  };
}

const Img: React.FC<ImgSourceProps> = memo(
  ({ sources: { low, medium, high }, className = '' }) => {
    return (
      <img
        className={className}
        src={low}
        srcSet={medium + ' 2x, ' + high + ' 3x'}
      />
    );
  },
);

export default Img;
