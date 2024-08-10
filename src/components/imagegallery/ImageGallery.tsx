import ImageCard from "../imagecard/ImageCard";
import PropTypes from "prop-types";
import css from "./imagegallery.module.css";
import { Images } from "../../types";

type ImageGalleryProps = {
  imagesToShow: Images;
  onClickImage: React.MouseEventHandler<HTMLImageElement>;
};

const ImageGallery = ({ imagesToShow, onClickImage }: ImageGalleryProps) => {
  return (
    <ul className={css.gallery}>
      {imagesToShow.map((image) => {
        return (
          <li className={css.galleryItem} key={image.id}>
            <ImageCard image={image} onClick={onClickImage} />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesToShow: PropTypes.array.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
