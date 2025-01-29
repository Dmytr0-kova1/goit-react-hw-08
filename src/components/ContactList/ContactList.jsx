import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <>
      <ul className={s.list}>
        {contacts.map((item) => (
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
