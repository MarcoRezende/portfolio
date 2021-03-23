import { memo } from 'react';

interface ImagesSet {
  images: ImgSourceProps[];
}

interface ImgSourceProps {
  sources: {
    small: string;
    medium: string;
    high: string;
  }
}

export const Images: React.FC<ImagesSet> = memo(({images}) => {
  return (
    <div>
      {images.map(image => {
        <Img sources={image.sources} />;
      })}
    </div>
  );
});

const Img: React.FC<ImgSourceProps> = memo(
  ({sources: { small, medium, high }}) => {
    return <img src={small} srcSet={medium + ' 2x, ' + high + ' 3x'} />;
  },
);
