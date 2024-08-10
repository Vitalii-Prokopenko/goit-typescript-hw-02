import { Formik, Form, Field } from "formik";
import { ImSearch } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import css from "./searchbar.module.css";

type SearchBarProps = {
  onSearch: (newTag: string) => void;
};

type Values = {
  tag: string;
};

type Actions = {
  resetForm: () => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (values: Values, actions: Actions) => {    
    if (values.tag === "") {
      toast.error("Type something to search!");
      return;
    }
    onSearch(values.tag);
    actions.resetForm();
  };
  return (
    <header className={css.searchBar}>
      <Formik
        initialValues={{
          tag: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.searchForm}>
          <button type="submit" className={css.searchBtn}>
            <ImSearch />
          </button>
          <Field
            className={css.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="tag"
          />
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </header>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
