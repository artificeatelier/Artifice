import sizes from "../Assets/imageSizes";

// <img> with lazy loading and intrinsic width/height (when known) so the browser reserves space.
const Img = ({ src, alt = "", ...rest }) => {
  const [width, height] = sizes[src] || [];
  return <img loading="lazy" decoding="async" src={src} alt={alt} width={width} height={height} {...rest} />;
};

export default Img;
