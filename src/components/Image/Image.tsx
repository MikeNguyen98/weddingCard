

const Image = ({
  src = '',
  width,
  height,
  className = '',
}: {
  src: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}) => {
  const nameFile = src
    .replace('.png', '')
    .replace('.PNG', '')
    .replace('.jpg', '')
    .replace('.JPG', '')
    .replace('/', '');
  return (
    <picture>
      <source
        srcSet={`/avif/${nameFile}.avif`}
        type="image/avif"
        width={width}
        height={height}
        className={className}
      />
      <source
        srcSet={`/webp/${nameFile}.webp`}
        type="image/webp"
        width={width}
        height={height}
        className={className}
      />
      <img
        src={src}
        alt={nameFile}
        loading="lazy"
        width={width}
        height={height}
        className={className}
      />
    </picture>
  );
};

export default Image;
