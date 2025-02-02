import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";

import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <Formik>
        <label className={s.label}>
          <span>Find contacts by name</span>
          <Field className={s.input} onChange={handleChange} type="text" />
        </label>
      </Formik>
    </div>
  );
};

export default SearchBox;
