import ReactModal from "react-modal";
import PropTypes from "prop-types";
import css from "./imagemodal.module.css";
import {Image} from '../../types'

ReactModal.setAppElement("#root");

type ImageModalProps = {
  modalIsOpen: boolean;
  handleRequestClose: () => void;
  clickedImage: Image;
  handleOverlayClick: (event: React.MouseEvent<HTMLImageElement>) => void;
};

const ImageModal = ({
  modalIsOpen,
  handleRequestClose,
  clickedImage,
  handleOverlayClick,
}: ImageModalProps) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={handleRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div onClick={handleOverlayClick} className={css.overlay}>
        <div className={css.modal}>
          <img className={css.modalImg} src={clickedImage.urls.regular} />
        </div>
      </div>
    </ReactModal>
  );
};

ImageModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  handleRequestClose: PropTypes.func.isRequired,
  clickedImage: PropTypes.object.isRequired,
  handleOverlayClick: PropTypes.func.isRequired,
};

export default ImageModal;
