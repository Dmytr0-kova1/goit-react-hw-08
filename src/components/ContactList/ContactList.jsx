import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filters = useSelector(selectFilter);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <>
      <ul className={s.list}>
        {filteredData.map((item) => (
          <li className={s.item} key={item.id}>
            <Contact name={item.name} number={item.number} id={item.id} />
          </li>
        ))}
      </ul>
      {isError && <h2>Something went wrong!</h2>}
      {isLoading && <h2>Loading...</h2>}
    </>
  );
};

export default ContactList;
