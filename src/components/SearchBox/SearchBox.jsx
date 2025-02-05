import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";

import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === " ") return;
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <Formik>
        <label className={s.label}>
          <span className={s.span}>Find contacts by name or number</span>
          <Field
            className="input input-primary"
            placeholder="Search"
            onChange={handleChange}
            type="text"
          />
        </label>
      </Formik>
    </div>
  );
};

export default SearchBox;
