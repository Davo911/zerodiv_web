const path = "/img/"
const ImageIcon = ({ src, width, height }) => (
    <img src={`${path}${src}`} alt={src} with={width} height={height} />
  );
  
export default ImageIcon;
  