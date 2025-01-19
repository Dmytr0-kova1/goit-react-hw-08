import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilter);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredData.map((item) => (
        <li className={s.item} key={item.id}>
          <Contact name={item.name} number={item.number} id={item.id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
