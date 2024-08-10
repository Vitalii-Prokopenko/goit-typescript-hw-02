import css from "./errormessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={css.errorMessage}>
      Ooops! Something went wrong! Try again, please
    </p>
  );
};

export default ErrorMessage;
