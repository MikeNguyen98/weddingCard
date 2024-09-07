import React from 'react';
import { Parallax } from 'react-parallax';
const parseImgPath = (img: HTMLImageElement) => {
  const srcSet = img?.src.split('/');
  const length = srcSet?.length;
  const name = srcSet[length - 1]?.split('.')?.[0];

  return name ? name : '';
};

const IMAGE_LAST_NAME = 'image4';

const Page: React.FC<{
  page: { img?: string; content: JSX.Element | React.ReactNode; id: string };
  index: number;
  setLoading: Function;
}> = ({ page, index, setLoading }) => {
  return (
    <Parallax
      strength={200}
      bgImage={page.img}
      onLoad={(e: Event) => {
        const img = e.target as HTMLImageElement;

        if (parseImgPath(img) === IMAGE_LAST_NAME) {
          setLoading(false);
        }
      }}
    >
      <div className="w-full h-full" id={page.id}>
        {page.content}
      </div>
    </Parallax>
  );
};

export default Page;
