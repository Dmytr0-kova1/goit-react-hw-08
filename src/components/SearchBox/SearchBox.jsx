import { Field, Formik } from "formik";
import s from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <Formik>
        <label className={s.label}>
          <span>Find contacts by name</span>
          <Field
            className={s.input}
            value={filter}
            onChange={handleChange}
            type="text"
          />
        </label>
      </Formik>
    </div>
  );
};

export default SearchBox;
