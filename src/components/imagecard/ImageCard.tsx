import PropTypes from "prop-types";
import css from "./imagecard.module.css";
import { Image } from "../../types";

type ImageCardProps = {
  image: Image;
  onClick: React.MouseEventHandler<HTMLImageElement>;
};

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <div className={css.imageWrap}>
      <img
        className={css.image}
        src={image.urls.small}
        id={image.id}
        onClick={onClick}
      />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
