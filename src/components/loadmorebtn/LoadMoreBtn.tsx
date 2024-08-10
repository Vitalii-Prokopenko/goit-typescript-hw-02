import PropTypes from "prop-types";
import css from "./loadmorebtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn = ({onClick}:LoadMoreBtnProps) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
